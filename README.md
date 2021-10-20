# Community Example

This site was generated with these commands:
```R
# remotes::install_github("uva-bi-sdad/community")
library(community)

# run from where you want the site files, or set `dir`
init_site('Demographics and Health Access demo', with_data = TRUE)

# reformat original files, and output to the current working directory
# (in this case, the original files were moved to a subdirectory of the output directory first)
data_reformat_sdad("docs/data/original", out = "docs/data")

# then run
data_add(
  c(
    district = "health_district.csv",
    county = "county.csv",
    tract = "tract.csv"
  ),
  rep(list(list(
    ids = list(
      variable = 'ID',
      map = 'https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json'
    ),
    time = 'time'
  )), 3),
  dir = 'docs/data',
  refresh = TRUE
)

# specify variables if you want to only include a subset
vars <- c(
  'ID', 'time', 'primcare_e2sfca', 'primcare_cnt', 'obgyn_e2sfca', 'obgyn_cnt', 'dent_cnt',
  'dent_e2sfca', 'no_hlth_ins_pct', 'prevent_hosp_rate', 'daycare_cnt', 'daycare_norm_3sfca'
)

# edit site.R, and add some styling to docs/style.css, then run
# (add `bundle_data = TRUE` or run `npm start` from a console to run locally)
site_build(variables = vars)
```

