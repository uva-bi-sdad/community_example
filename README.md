# Community Example

This site was generated with these commands:
```R
# remotes::install_github("uva-bi-sdad/community")
library(community)

# run from where you want the site files, or set `dir`
init_site('Demographics and Health Access demo', with_data = TRUE)

# move refered to data files into the docs/data directory, then run
data_add(
  c(
    district = "va_hd_acs5_2019_health_access.csv",
    county = "va_ct_acs5_2019_health_access.csv",
    tract = "va_tr_acs5_2019_health_access.csv"
  ),
  rep(list(list(
    source = list(
      name = 'U.S. Census Bureau',
      url = 'https://www2.census.gov/programs-surveys/acs',
      description = 'For population counts.'
    ),
    ids = list(
      variable = 'ID',
      map = 'https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json'
    ),
    time = 'year'
  )), 3),
  dir = 'docs/data',
  refresh = TRUE
)

# edit site.R, and add some styling to docs/style.css, then run
# (add `bundle_data = TRUE` or run `npm start` from a console to run locally)
site_build()
```

