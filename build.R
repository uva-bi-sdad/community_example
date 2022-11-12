library(community)

data_add(
  c(
    district = "health_district.csv.xz",
    county = "county.csv.xz",
    tract = "tract.csv.xz"
  ),
  rep(list(list(
    ids = list(
      variable = "ID",
      map = "https://uva-bi-sdad.github.io/community/dist/shapes/VA/entity_info.json"
    ),
    time = "time",
    variables = "measure_info.json"
  )), 3),
  dir = "../community_example/docs/data",
  clean = TRUE,
  refresh = TRUE
)

site_build(
  "../community_example", version = "local", serve = TRUE,
  endpoint = "https://vdh-data-commons.netlify.app/api"
)
