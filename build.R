library(community)

data_add(
  c(
    district = "health_district.csv.xz",
    county = "county.csv.xz",
    tract = "tract.csv.xz"
  ),
  list(
    ids = list(
      variable = "ID",
      map = "https://uva-bi-sdad.github.io/community/dist/shapes/VA/entity_info.json"
    ),
    time = "time",
    variables = "measure_info.json"
  ),
  dir = "../community_example/docs/data",
  clean = TRUE
)

site_build(
  "../community_example", version = "dev", serve = TRUE,
  endpoint = "https://vdh-data-commons.netlify.app/api"
)
