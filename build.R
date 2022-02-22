library(community)

ids <- unlist(lapply(c("tract", "county", "district"), function(s) list(
  vapply(jsonlite::read_json(paste0(
    "https://uva-bi-sdad.github.io/community/dist/shapes/VA/", s, ".geojson"
  ))$features, function(d) d$properties$id, "")
)), use.names = FALSE)

## trim and save files
for (f in list.files("../community_example/docs/data/original", full.names = TRUE)) {
  d <- read.csv(f)
  cids <- trimws(format(d$geoid, scientific = FALSE))
  nd <- d[cids %in% ids, colnames(d) != 'X']
  if (!identical(d, nd)) write.csv(nd, f, row.names = FALSE)
}

data_reformat_sdad("../community_example/docs/data/original", out = "../community_example/docs/data")

data_add(
  c(
    district = "health_district.csv",
    county = "county.csv",
    tract = "tract.csv"
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

meta <- jsonlite::read_json("../community_example/docs/data/measure_info.json")
site_build("../community_example", variables = names(meta), version = "dev")
