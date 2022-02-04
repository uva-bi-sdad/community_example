library(community)

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
site_build("../community_example", variables = names(meta))
