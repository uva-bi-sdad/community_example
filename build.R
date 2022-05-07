library(community)

ids <- unlist(lapply(
  jsonlite::read_json("https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json")[-1], names
), use.names = FALSE)

## trim and save files
for (f in list.files("../community_example/docs/data/original", full.names = TRUE)) {
  d <- read.csv(gzfile(f))
  su <- grep("^\\d+$", d$geoid)
  d[su, "geoid"] <- trimws(format(d[su, "geoid"], scientific = FALSE))
  nd <- d[d$geoid %in% ids, colnames(d) != 'X']
  uncompressed <- grepl("\\.csv$", f)
  if (!nrow(nd)) {
    unlink(f)
  } else if (uncompressed || !identical(d, nd)) {
    unlink(f)
    write.csv(nd, xzfile(sub("\\.csv(?:\\.[gbx]z2?)?$", ".csv.xz", f)), row.names = FALSE)
  }
}

meta <- jsonlite::read_json("../community_example/docs/data/measure_info.json")
data_reformat_sdad(
  "../community_example/docs/data/original",
  out = "../community_example/docs/data",
  variables = names(meta),
  ids = ids,
  entity_info = NULL
)

data_add(
  c(
    district = "health_district.csv.xz",
    county = "county.csv.xz",
    tract = "tract.csv.xz"
  ),
  rep(list(list(
    ids = list(
      variable = "ID",
      map = "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
    ),
    time = "time",
    variables = "measure_info.json"
  )), 3), 
  dir = "../community_example/docs/data",
  clean = TRUE,
  refresh = TRUE
)

site_build("../community_example", version = "dev", serve = TRUE)
