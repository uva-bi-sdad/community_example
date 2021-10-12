# population + doctor count data
pop_tract <- read.csv("va_tr_acs5_2019_popdocs.csv")
colnames(pop_tract)[1] <- "ID"
rownames(pop_tract) <- pop_tract$ID

# obesity and physician access data
obesity <- read.csv("va_tr_acs5_2019_obesity.csv")
docaccess <- read.csv("va_tr_acs5_2019_doctors.csv")

## reformat
obesity <- obesity[order(obesity$geoid_tr), ]
docaccess <- docaccess[order(docaccess$geoid_tr), ]

obesity_split <- split(obesity, obesity$year)
obesity_wide <- do.call(cbind, lapply(obesity_split, function(d) {
  rownames(d) <- d$geoid_tr
  d[, 3, drop = FALSE]
}))
colnames(obesity_wide) <- paste0(colnames(obesity_wide), "_", names(obesity_split))

docaccess_split <- split(docaccess, docaccess$year)
docaccess_wide <- do.call(cbind, lapply(docaccess_split, function(d) {
  rownames(d) <- d$geoid_tr
  d[, 3, drop = FALSE]
}))
colnames(docaccess_wide) <- paste0(colnames(docaccess_wide), "_", names(docaccess_split))

## add to pop

### check that all ids are present
stopifnot(all(rownames(obesity_wide) %in% rownames(pop_tract)))
stopifnot(all(rownames(docaccess_wide) %in% rownames(pop_tract)))

pop_tract[rownames(obesity_wide), colnames(obesity_wide)] <- obesity_wide
pop_tract[rownames(docaccess_wide), colnames(docaccess_wide)] <- docaccess_wide

# obesity and doctors variables are only for the last couple/few years, so roughly estimating previous years

## full demographics set for previous-year predictions
popdata <- read.csv("va_tr_acs5_2019_demodocs.csv")
colnames(popdata)[1] <- "ID"
vars <- grep(
  "(years|over)$",
  sub("_\\d{4}$", "", grep("2010", colnames(popdata), value = TRUE, fixed = TRUE)),
  value = TRUE
)
all_years <- sort(unique(sub("^.*_", "", colnames(popdata)[-(1:2)])))
time <- seq_along(all_years)
data <- do.call(rbind, lapply(all_years, function(y) {
  d <- popdata[, paste0(vars, "_", y)]
  v <- paste0("OBESITY_", y)
  d[, v] <- if (v %in% colnames(popdata)) popdata[, v] else NA
  v <- paste0("PHYSICIAN.ACCESS_", y)
  d[, v] <- if (v %in% colnames(popdata)) popdata[, v] else NA
  for (v in colnames(d)) {
    su <- !is.na(d[, v])
    d[su, v] <- scale(d[su, v])
    d[!su, v] <- 0
  }
  colnames(d) <- sub(paste0("_", y), "", colnames(d))
  d$year <- as.factor(y)
  d
}))

## obesity model
years <- sub("^.*_", "", colnames(obesity_wide))

### all demographics categories predicting obesity
mod <- as.formula(paste("OBESITY ~", paste(vars, collapse = " + ")))

### calculating weights for each category within each year
coefs <- as.data.frame(do.call(rbind, lapply(years, function(y) {
  lm(mod, data[data$year == y & data$OBESITY != 0, ])$coef
})))

### mean-imputing years with NA weights
for (v in colnames(coefs)) {
  if (anyNA(coefs[, v])) coefs[is.na(coefs[, v]), v] <- mean(coefs[, v], na.rm = TRUE)
}

### estimating previous year weights
predict_coefs <- function(co) {
  w <- structure(rep(mean(co), length(all_years)), names = all_years)
  w[years] <- co
  as.numeric(predict(lm(w ~ poly(time, 5))))
}

pcoefs <- vapply(coefs, predict_coefs, numeric(length(all_years)))
rownames(pcoefs) <- all_years
pcoefs[is.na(pcoefs)] <- 0

for (y in all_years[!all_years %in% years]) {
  d <- cbind(1, as.matrix(data[data$year == y, colnames(pcoefs)[-1]]))
  d[is.na(d)] <- 0
  pop_tract[, paste0("OBESITY_", y)] <- d %*% pcoefs[y, ]
}

## physician model (same process)
years <- sub("^.*_", "", colnames(docaccess_wide))

mod <- as.formula(paste("PHYSICIAN.ACCESS ~", paste(vars, collapse = " + ")))
coefs <- as.data.frame(do.call(rbind, lapply(years, function(y) {
  lm(mod, data[data$year == y & data$PHYSICIAN.ACCESS != 0, ])$coef
})))

pcoefs <- vapply(coefs, predict_coefs, numeric(length(all_years)))
rownames(pcoefs) <- all_years
pcoefs[is.na(pcoefs)] <- 0

for (y in all_years[!all_years %in% years]) {
  d <- cbind(1, as.matrix(data[data$year == y, colnames(pcoefs)[-1]]))
  d[is.na(d)] <- 0
  pop_tract[, paste0("PHYSICIAN.ACCESS_", y)] <- d %*% pcoefs[y, ]
}

# reformat
pop_tract_tall <- do.call(rbind, lapply(all_years, function(y) {
  id <- paste0("_", y)
  d <- pop_tract[, c(TRUE, grepl(id, colnames(pop_tract)[-1], fixed = TRUE))]
  colnames(d) <- sub(id, "", colnames(d))
  d$year <- y
  d
}))

demo_levels <- lapply(as.data.frame(do.call(rbind, lapply(strsplit(
  grep(".", unique(sub("(_Total)?_\\d{4}$", "", colnames(pop_tract))), fixed = TRUE, value = TRUE),
  "_"
), function(l) {
  r <- character(3)
  r[seq_along(l)] <- l
  r
}))), function(l) {
  r <- unique(l[l != "" & l != "PHYSICIAN.ACCESS"])
  names(r) <- r
  r
})
names(demo_levels) <- c("race", "sex", "age")

s1 <- split(pop_tract_tall, pop_tract_tall$ID)
tree <- lapply(s1, function(d) {
  list(
    population = d$population,
    population_error = d$population_margin,
    doctors = round(as.numeric(d$doctors), 6),
    obesity = round(as.numeric(d$OBESITY), 6),
    physician_access = as.numeric(d$PHYSICIAN.ACCESS),
    sex = lapply(demo_levels$sex, function(s) {
      c(
        list(total = as.integer(rowSums(d[, grep(paste0(s, "$"), colnames(d))], na.rm = TRUE))),
        lapply(demo_levels$race, function(r) {
          c(
            list(total = as.integer(d[, grep(paste0("^", r, "_", s, "$"), colnames(d))])),
            lapply(demo_levels$age, function(a) {
              as.integer(d[, grep(paste0("^", r, "_", s, "_", a, "$"), colnames(d))], na.rm = TRUE)
            })
          )
        })
      )
    })
  )
})

# version that drops full demographics levels
tracts <- do.call(rbind, lapply(names(tree), function(n) {
  d <- tree[[n]]
  d$population[is.na(d$population) | d$population == 0] <- mean(d$population[d$population != 0], na.rm = TRUE)
  d$doctors <- d$doctors / d$population
  d$obesity[is.na(d$obesity)] <- mean(d$obesity, na.rm = TRUE)
  data.frame(
    ID = as.character(n),
    year = all_years,
    tree[[n]][-6],
    health_score = rowMeans(scale(as.data.frame(d[-c(1, 2, 6)])), na.rm = TRUE)
  )
}))
write.csv(tracts, "va_tr_acs5_2019_health_access.csv", row.names = FALSE)

county <- do.call(rbind, lapply(split(tracts, substr(tracts$ID, 0, 5)), function(d) {
  do.call(rbind, lapply(split(d, d$year), function(yd) {
    d$year <- as.numeric(d$year)
    r <- cbind(
      data.frame(ID = as.character(substr(yd[1, "ID"], 0, 5))),
      yd[1, -1]
    )
    r[, -(1:2)] <- colSums(matrix(as.numeric(as.matrix(yd[, -(1:2)])), nrow(yd)), na.rm = TRUE) /
      c(rep(1, 3), rep(nrow(yd), 3))
    r
  }))
}))
write.csv(county, "va_ct_acs5_2019_health_access.csv", row.names = FALSE)

# location information
va <- jsonlite::read_json(
  "https://raw.githubusercontent.com/uva-bi-sdad/VDH/main/src/dashboard/app/assets/virginia_2010.json"
)
va_tracts <- lapply(va$tract, function(tr) {
  tr$district <- va$district[[tr$district]]$name
  tr$county <- va$county[[substr(tr$id, 0, 5)]]$name
  tr
})

locations <- as.data.frame(do.call(rbind, va_tracts))
va_districts <- as.data.frame(do.call(rbind, va$district))
district_tracts <- split(rownames(locations), as.character(locations$district))
districts <- do.call(rbind, lapply(district_tracts, function(tr) {
  d <- tracts[tracts$ID %in% tr, ]
  do.call(rbind, lapply(split(d, d$year), function(yd) {
    d$year <- as.numeric(d$year)
    r <- cbind(
      data.frame(
        ID = as.character(va_districts[va_districts$name == va_tracts[[d[1, "ID"]]]$district, "id"])
      ),
      yd[1, -1]
    )
    r[, -(1:2)] <- colSums(matrix(as.numeric(as.matrix(yd[, -(1:2)])), nrow(yd)), na.rm = TRUE) /
      c(rep(1, 3), rep(nrow(yd), 3))
    r
  }))
}))
write.csv(districts, "va_hd_acs5_2019_health_access.csv", row.names = FALSE)
