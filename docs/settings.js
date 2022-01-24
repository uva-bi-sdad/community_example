const site = {
  "digits": 2,
  "summary_selection": "all",
  "metadata": {
    "package": "data/datapackage.json",
    "datasets": ["district", "county", "tract"],
    "variables": ["2year_colleges_access_scores:norm_2sefca", "drive_times_nearest_2year_colleges:median_drive_time_top5", "3rd_grade_median_read_score:median_read_pass_rate", "daycare_services_access_scores:daycare_norm_3sfca", "daycare_services_access_scores:daycare_cnt", "drive_times_nearest_daycares:median_drive_time_top5", "dei_index:norm_dei", "dentist_access_scores:dent_e2sfca", "dentist_access_scores:dent_cnt", "download_speeds:download", "ems_access_scores:ems_3sfca", "ems_access_scores:ems_cnt", "ems_access_scores:ems_10near_median", "trade_schools_access_scores:norm_2sefca", "drive_times_nearest_trade_schools:median_drive_time_top5", "have_computer:perc_have_computer", "have_internet:perc_have_internet_access", "health_literacy_estimates:health_literacy_estimate", "hospital_access_scores:hos_3sfca", "hospital_access_scores:hos_cnt", "hospital_access_scores:hos_10near_median", "no_health_insurance_19_to_64:no_hlth_ins_pct", "mental_access_scores:mental_3sfca", "mental_access_scores:mental_cnt", "mental_access_scores:mental_10near_median", "obgyn_access_scores:obgyn_e2sfca", "obgyn_access_scores:obgyn_cnt", "pct_pop_broadband:perc_w_broadband", "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL", "pediatrics_access_scores:ped_e2sfca", "pediatrics_access_scores:ped_cnt", "post_hs_education:perc_post_hs_edu", "preventable_hospitalizations:prevent_hosp_rate", "primary_care_access_scores:prim_e2sfca", "primary_care_access_scores:prim_cnt", "substance_access_scores:subs_3sfca", "substance_access_scores:subs_cnt", "substance_access_scores:subs_10near_median", "community_college_computer_sciences_fca:3sfca_capacity", "community_college_engineering_fca:3sfca_capacity", "community_college_engineering_related_fca:3sfca_capacity", "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over", "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over", "perc_income_on_internet:perc_income_min_price_100", "perc_income_on_internet:perc_income_min_price_25", "perc_income_on_internet:perc_income_avg_nat_package", "time"],
    "info": {
      "tract": {
        "bytes": 8511824,
        "encoding": "ISO-8859-1",
        "md5": "45fa3836d6ed8a99ab6f161a8fa794a4",
        "sha512": "811ae0a73fba41a64f9588446622909ca11fcae5fe050b9e37a774f09c29644d192692178b684b7aab91e830f78dc90342cbc63db35a52af77d63b1820d2ad87",
        "format": "csv",
        "name": "tract",
        "filename": "tract.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2022-01-12 17:40:13",
        "last_modified": "2021-11-29 21:36:30",
        "rowcount": 13349,
        "schema": {
          "fields": [
            {
              "name": "2year_colleges_access_scores:norm_2sefca",
              "duplicates": 13348,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores",
                "full_name": "2year_colleges_access_scores:norm_2sefca",
                "measure": "norm_2sefca",
                "type": "index",
                "short_name": "2-year college access score",
                "long_name": "2 year college access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of 2-year college accessibility based on supply and demand of providers",
                "long_description": "2-year college access score based on 2-step enhanced floating catchment areas. This method is an aggregation of college capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for 2-year college (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (graduate and undergraduate).",
                "statement": "The 2-year college accessibility score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 13349
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 12586,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "2-year college access (drive time)",
                "long_name": "2-year college access by median drive time to the five closest colleges in minutes",
                "short_description": "Median drive time (minutes) to the five closest 2-year colleges from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest 2-year colleges from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest 2-year colleges to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 40.1988,
              "sd": 26.679,
              "min": 4.2,
              "max": 177.8
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 13348,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "measure": "median_pass_rate",
                "type": "rate",
                "short_name": "3rd grade population passing reading",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "Median percent of 3rd grade population passing reading test for schools in the region",
                "long_description": "Median percent of 3rd grade population passing reading test. The median is calculated across schools in the region.",
                "statement": "The median percent of 3rd graders with passing reading scores in {features.name} is {value} percent",
                "source": [
                  {
                    "name": "Virginia Department of Education",
                    "date_accessed": 2021,
                    "url": "https://www.doe.virginia.gov/statistics_reports/sol-pass-rates/index.shtml"
                  }
                ]
              },
              "type": "unknown",
              "missing": 13349
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 11449,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "measure": "daycare_norm_3sefca",
                "type": "index",
                "short_name": "Day care access score",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. The demand for day care services is the population 0-12 years old and the supply is the capacity of day cares (number of seats).",
                "statement": "The daycare accessibility score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "float",
              "missing": 11449,
              "mean": 52.4187,
              "sd": 17.5006,
              "min": 0,
              "max": 100
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 12781,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "measure": "daycare_cnt",
                "type": "count",
                "short_name": "Day care access (count)",
                "long_name": "Access to day care by count",
                "short_description": "Count of day care capacity (seats) based on provider locations",
                "long_description": "Count of day care capacity (seats) based on provider locations. Address and capacity data was collected from Virginia Department of Social Services day care search tool.",
                "statement": "There are {value} daycares in {features.name}",
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "integer",
              "missing": 11442,
              "mean": 195.5448,
              "sd": 235.0988,
              "min": 0,
              "max": 2273
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 12974,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "Day care access (drive time)",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "Median drive time (minutes) to the five closest day cares from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest day cares from centroid of selected region. Address data was collected from the Virginia Department of Social Services Child Day Care Facility search (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest day cares to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 7.83,
              "sd": 8.0243,
              "min": 0.5,
              "max": 71.7
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 7748,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index",
                "full_name": "dei_index:norm_dei",
                "measure": "norm_dei",
                "type": "index",
                "short_name": "Digital Equity Index",
                "long_name": "Digitial Equity Index",
                "short_description": "Digital Equity Index captures the relative equity of digital access, with 0 being a score of relative equity and 100 being relative inequity.",
                "long_description": "The Digital Equity Index (DEI) is a composite variable indicating the degree of broadband equity as it relates to adoption, accessibility, and infrastructure. It ranges from 0 to 100, where 100 indicates the most equitable broadband access. The DEI is constructed at the Census tract level and is composed of the following variables: percent of the population under 65 years of age, percent of the population with at least a high school education, percent of the population with income below the poverty level, percent of the population without a disability, the ratio between the share of homes making $75,000 or more per year with internet and the share of homes making less than $35,000 per year without internet, percent of the population with at least one computer, percent of the population with internet access, percent of the population that is low income (less than 30% of HUD Area Median Family Income) and have a housing cost burden over 30%, and average download speeds, upload speeds, and latency from Ookla speed tests.",
                "statement": "The digital equity index for {features.name} is {value}",
                "citations": [
                  "gallardo20"
                ],
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ]
              },
              "type": "float",
              "missing": 7745,
              "mean": 70.9817,
              "sd": 16.8324,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 11579,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "measure": "dent_e2sfca",
                "type": "index",
                "short_name": "Dental care access score",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0.0004,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0011
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 13316,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "full_name": "dentist_access_scores:dent_cnt",
                "measure": "dent_cnt",
                "type": "count",
                "short_name": "Dental care access (count)",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} dentists in {features.name}",
                "source": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ]
              },
              "type": "integer",
              "missing": 12384,
              "mean": 4.457,
              "sd": 4.9641,
              "min": 1,
              "max": 39
            },
            {
              "name": "download_speeds:download",
              "duplicates": 7675,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds",
                "full_name": "download_speeds:download",
                "measure": "download",
                "type": "float",
                "short_name": "Average download speed",
                "long_name": "Average download speed (MB/s)",
                "short_description": "Average download speed for internet connection in MB/s",
                "long_description": "The average download speed for internet users' connections who performed a speed check using Ookla. Speeds are reported in MB/s. A speed of 100 MB/s is considered adequate for school work, video calling etc.",
                "statement": "The average download speed for internet connections in {features.name} is {value} MB/s",
                "source": [
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ]
              },
              "type": "float",
              "missing": 7676,
              "mean": 137.4078,
              "sd": 49.3387,
              "min": 5.4356,
              "max": 347.9637
            },
            {
              "name": "ems_access_scores:ems_3sfca",
              "duplicates": 11456,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_3sfca",
                "measure": "ems_3sfca",
                "type": "index",
                "short_name": "Emergency medical services access score",
                "long_name": "Emergency medical services access score (3-step floating catchment areas)",
                "short_description": "Index of emergency medical services accessibility based on supply and demand of facilities",
                "long_description": "Emergency medical services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The emergency medical services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0.0001,
              "sd": 0.0001,
              "min": 0,
              "max": 0.0014
            },
            {
              "name": "ems_access_scores:ems_cnt",
              "duplicates": 13342,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_cnt",
                "measure": "ems_cnt",
                "type": "count",
                "short_name": "Emergency medical services access (count)",
                "long_name": "Access to emergency medical services by count",
                "short_description": "Count of emergency medical services facilities based on facility locations",
                "long_description": "Count of emergency medical services facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} emergency medical services facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 12580,
              "mean": 1.4538,
              "sd": 0.7927,
              "min": 1,
              "max": 6
            },
            {
              "name": "ems_access_scores:ems_10near_median",
              "duplicates": 12812,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_10near_median",
                "measure": "ems_10near_median",
                "type": "float",
                "short_name": "Emergency medical services access (drive time)",
                "long_name": "Emergency medical services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest emergency medical services facilities",
                "long_description": "Median drive time in minutes to the ten closest emergency medical services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest emergency medical service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11451,
              "mean": 14.8955,
              "sd": 8.248,
              "min": 3.7,
              "max": 60.75
            },
            {
              "name": "trade_schools_access_scores:norm_2sefca",
              "duplicates": 13348,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores",
                "full_name": "trade_schools_access_scores:norm_2sefca",
                "measure": "norm_2sefca",
                "type": "index",
                "short_name": "Trade school access score",
                "long_name": "Trade school access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Trade school  access score based on 2-step enhanced floating catchment areas. This method is an aggregation of trade school capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for trade schools (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (undergraduate).",
                "statement": "The trade school accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 13349
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 12399,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "Trade school access (drive time)",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "Mean drive time (minutes) to the five closest trade schools from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest trade schools from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest trade schools to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 61.2898,
              "sd": 61.2115,
              "min": 4.8,
              "max": 343.6
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 11574,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer",
                "full_name": "have_computer:perc_have_computer",
                "measure": "perc_have_computer",
                "type": "percent",
                "short_name": "Population with a computer",
                "long_name": "Percent of population with a computer",
                "short_description": "Percent of the population self-reported to have a computer at home",
                "long_description": "Percent of the population self-reported to have a computer at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have a computer",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 11458,
              "mean": 90.6652,
              "sd": 8.3038,
              "min": 0,
              "max": 100
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 11543,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet",
                "full_name": "have_internet:perc_have_internet_access",
                "measure": "perc_have_internet_access",
                "type": "percent",
                "short_name": "Population with internet access",
                "long_name": "Percent of population with internet access",
                "short_description": "Percent of the population self-reported to have internet access at home",
                "long_description": "Percent of the population self-reported to have internet access at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have internet access",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 11458,
              "mean": 86.5308,
              "sd": 10.8146,
              "min": 38.5576,
              "max": 100
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 13335,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "measure": "health_literacy_estimate",
                "type": "index",
                "short_name": "Health literacy estimate",
                "long_name": "Health literacy estimate",
                "short_description": "Health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions",
                "long_description": "The health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions. Health literacy estimate is based on variables of demographic characteristics, health status, and health care use.",
                "statement": "The health literacy estimate for {features.name} is {value}",
                "citations": [
                  "stavitz20, liang17"
                ],
                "source": [
                  {
                    "name": "Medical Expenditure Panel Survey",
                    "date_accessed": 2021,
                    "url": "https://www.meps.ahrq.gov/mepsweb/"
                  },
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 11442,
              "mean": 0.4329,
              "sd": 0.8731,
              "min": -2.995,
              "max": 3.005
            },
            {
              "name": "hospital_access_scores:hos_3sfca",
              "duplicates": 12143,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_3sfca",
                "measure": "hospital_3sfca",
                "type": "index",
                "short_name": "Hospital access score",
                "long_name": "Hospital access score (3-step floating catchment areas)",
                "short_description": "Index of hospital accessibility based on supply and demand of facilities",
                "long_description": "Hospital access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The hospital accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "hospital_access_scores:hos_cnt",
              "duplicates": 13345,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_cnt",
                "measure": "hospital_cnt",
                "type": "count",
                "short_name": "Hospital access (count)",
                "long_name": "Access to hospitals by count",
                "short_description": "Count of hospitals based on facility locations",
                "long_description": "Count of hospitals based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} hospitals in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 13251,
              "mean": 1.1429,
              "sd": 0.4308,
              "min": 1,
              "max": 3
            },
            {
              "name": "hospital_access_scores:hos_10near_median",
              "duplicates": 12284,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_10near_median",
                "measure": "hospital_10near_median",
                "type": "float",
                "short_name": "Hospital access (drive time)",
                "long_name": "Hospital access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest hospital s",
                "long_description": "Median drive time in minutes to the ten closest hospitals. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest hospitals to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11451,
              "mean": 41.3264,
              "sd": 24.0153,
              "min": 8.05,
              "max": 184.65
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 11872,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "measure": "no_hlth_ins_pct",
                "type": "percent",
                "short_name": "Uninsured population",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population (ages 16-64) self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. Based on American Community Survey Tables B18135 and C27001I in ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population has no health insurance in  {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 3979,
              "mean": 2.7716,
              "sd": 5.3258,
              "min": 0,
              "max": 66.75
            },
            {
              "name": "mental_access_scores:mental_3sfca",
              "duplicates": 11704,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_3sfca",
                "measure": "mental_3sfca",
                "type": "index",
                "short_name": "Mental health services access score",
                "long_name": "Mental health services access score (3-step  floating catchment areas)",
                "short_description": "Index of mental health services accessibility based on supply and demand of facilities",
                "long_description": "Mental health services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The mental health services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0003
            },
            {
              "name": "mental_access_scores:mental_cnt",
              "duplicates": 13344,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_cnt",
                "measure": "mental_cnt",
                "type": "count",
                "short_name": "Mental health services access (count)",
                "long_name": "Access to mental health services by count",
                "short_description": "Count of mental health facilities based on facility locations",
                "long_description": "Count of mental health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} mental health facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 13150,
              "mean": 1.1859,
              "sd": 0.493,
              "min": 1,
              "max": 4
            },
            {
              "name": "mental_access_scores:mental_10near_median",
              "duplicates": 12474,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_10near_median",
                "measure": "mental_10near_median",
                "type": "float",
                "short_name": "Mental health services access (drive time)",
                "long_name": "Mental health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest mental health services facilities",
                "long_description": "Median drive time in minutes to the ten closest mental health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest mental health service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11451,
              "mean": 26.5859,
              "sd": 18.8488,
              "min": 2.8,
              "max": 179.75
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 11795,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "measure": "obgyn_e2sfca",
                "type": "index",
                "short_name": "OBGYN care access score",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0.0007,
              "sd": 0.0005,
              "min": 0,
              "max": 0.0022
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 13305,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "measure": "obgyn_cnt",
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "long_name": "OBGYN care access by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} OBGYNs in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 12876,
              "mean": 6.5116,
              "sd": 13.4527,
              "min": 1,
              "max": 137
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 7841,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "measure": "perc_w_broadband",
                "type": "percent",
                "short_name": "Population with broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "Percent of population self-reported to have a broadband internet connection (any type of internet other than a dial-up)",
                "long_description": "Percent of population self-reported to have a broadband internet connection. Broadband internet is defined as any type of internet other than a dial-up. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} has a broadband connection",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 7729,
              "mean": 0.8124,
              "sd": 0.134,
              "min": 0,
              "max": 1
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 7817,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "measure": "perc_w_cable_fiber_DSL",
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "Percent of population self-reported to have a high speed internet service (cable, fiber optic, or DSL)",
                "long_description": "Percent of population self-reported to have a high speed internet service. A high speed internet service is defined as a cable, fiber optic, or DSL internet connection. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} has a cable fiber or DSL internet connection",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 7729,
              "mean": 0.6813,
              "sd": 0.2062,
              "min": 0,
              "max": 1
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 11643,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "measure": "ped_e2sfca",
                "type": "index",
                "short_name": "Pediatric care access score",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "Pediatric care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of pediatricians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for pediatricians (population under 16). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The pediatric care accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0.0022,
              "sd": 0.0018,
              "min": 0,
              "max": 0.013
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 13307,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "measure": "ped_cnt",
                "type": "count",
                "short_name": "Pediatric care access (count)",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "Count of pediatricians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} pediatricians in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 12755,
              "mean": 6.6532,
              "sd": 14.8042,
              "min": 1,
              "max": 189
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 11473,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "measure": "perc_post_hs_edu",
                "type": "percent",
                "short_name": "Population with post-high school education",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "Percent of the population self-reported to have post-high school level degree",
                "long_description": "Percent of the population self-reported to have post-high school level degree. Based on American Community Survey Table B15003 in ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have a post-high school education",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/data/developers/data-sets/acs-5year.html"
                  }
                ]
              },
              "type": "float",
              "missing": 11470,
              "mean": 0.6479,
              "sd": 0.1734,
              "min": 0.1559,
              "max": 1
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 13348,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "measure": "prevent_hosp_rate",
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{value} percent of the hospitalizations in {features.name}  were preventable (due to conditions usually treated in outpatient settings)",
                "source": [
                  {
                    "name": "County Health Rankings",
                    "date_accessed": 2021,
                    "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description"
                  }
                ]
              },
              "type": "unknown",
              "missing": 13349
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 11477,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "measure": "prim_e2sfca",
                "type": "index",
                "short_name": "Primary care access score",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {features.name}  is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0.0024,
              "sd": 0.0015,
              "min": 0,
              "max": 0.0094
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 13244,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "full_name": "primary_care_access_scores:prim_cnt",
                "measure": "prim_cnt",
                "type": "count",
                "short_name": "Primary care access (count)",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} primary care physicians in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 12058,
              "mean": 15.1944,
              "sd": 41.2479,
              "min": 1,
              "max": 847
            },
            {
              "name": "substance_access_scores:subs_3sfca",
              "duplicates": 11759,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_3sfca",
                "measure": "substance_3sfca",
                "type": "index",
                "short_name": "Substance use/behavioral health services access score",
                "long_name": "Substance use/behavioral health services access score (3-step floating catchment areas)",
                "short_description": "Index of substance use/behavioral health services accessibility based on supply and demand of facilities",
                "long_description": "Substance use/behavioral health services access score based on 3-step  floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The substance use/behavioral health services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "substance_access_scores:subs_cnt",
              "duplicates": 13345,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_cnt",
                "measure": "substance_cnt",
                "type": "count",
                "short_name": "Substance use/behavioral health  access (count)",
                "long_name": "Access to substance use/behavioral health  by count",
                "short_description": "Count of substance use/behavioral health facilities based on facility locations",
                "long_description": "Count of substance use/behavioral health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} substance use facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 13172,
              "mean": 1.1412,
              "sd": 0.3804,
              "min": 1,
              "max": 3
            },
            {
              "name": "substance_access_scores:subs_10near_median",
              "duplicates": 12460,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_10near_median",
                "measure": "substance_10near_median",
                "type": "float",
                "short_name": "Substance use/behavioral health services access (drive time)",
                "long_name": "Substance use/behavioral health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest substance use/behavioral health services facilities",
                "long_description": "Median drive time in minutes to the ten closest substance use/behavioral health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest substance use/behavioral health service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11451,
              "mean": 29.1517,
              "sd": 21.9092,
              "min": 3.85,
              "max": 179.3
            },
            {
              "name": "community_college_computer_sciences_fca:3sfca_capacity",
              "duplicates": 13057,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_computer_sciences_fca",
                "full_name": "community_college_computer_sciences_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college computer science program access score",
                "long_name": "Community college computer science program access score (3-step floating catchment areas)",
                "short_description": "Index of community college computer science program accessibility based on supply and demand of programs",
                "long_description": "Community college computer science program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college computer science program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 11451,
              "mean": 1.0627,
              "sd": 1.3608,
              "min": 0,
              "max": 6.0917
            },
            {
              "name": "community_college_engineering_fca:3sfca_capacity",
              "duplicates": 13257,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_fca",
                "full_name": "community_college_engineering_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college engineering program access score",
                "long_name": "Community college engineering program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 11454,
              "mean": 1.041,
              "sd": 1.0838,
              "min": 0,
              "max": 8.9778
            },
            {
              "name": "community_college_engineering_related_fca:3sfca_capacity",
              "duplicates": 13149,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_related_fca",
                "full_name": "community_college_engineering_related_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college engineering-related program access score",
                "long_name": "Community college engineering-related program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering-related program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering-related program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering-related program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 11450,
              "mean": 1.1057,
              "sd": 1.7114,
              "min": 0,
              "max": 14.4108
            },
            {
              "name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
              "duplicates": 3981,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_phys_hlth_days_14_and_over",
                "full_name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
                "measure": "perc_poor_phys_hlth_days_14_and_over",
                "type": "percent",
                "short_name": "Poor physical health population",
                "long_name": "Percent of the population with poor physical health",
                "short_description": "Percent of the population self-reporting poor physical health",
                "long_description": "Percent of the population self-reporting poor physical health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} percent of the population in {features.name} report poor physical health",
                "source": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ]
              },
              "type": "float",
              "missing": 3982,
              "mean": 11.6625,
              "sd": 3.9075,
              "min": 2.185,
              "max": 39.2897
            },
            {
              "name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
              "duplicates": 3982,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_ment_hlth_days_14_and_over",
                "full_name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
                "measure": "perc_poor_ment_hlth_days_14_and_over",
                "type": "percent",
                "short_name": "Poor mental health population",
                "long_name": "Percent of the population with poor mental health",
                "short_description": "Percent of the population self-reporting poor mental health",
                "long_description": "Percent of the population self-reporting poor mental health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} percent of the population in {features.name} report poor mental health",
                "source": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ]
              },
              "type": "float",
              "missing": 3982,
              "mean": 11.0718,
              "sd": 2.9202,
              "min": 4.2515,
              "max": 30.9632
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_100",
              "duplicates": 11597,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_100",
                "measure": "perc_income_min_price_100",
                "type": "percent",
                "short_name": "Percent of income for fast internet",
                "long_name": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income.",
                "statement": "Fast internet costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11580,
              "mean": 1.1163,
              "sd": 0.9766,
              "min": 0.1685,
              "max": 11.1153
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_25",
              "duplicates": 11607,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_25",
                "measure": "perc_income_min_price_25",
                "type": "percent",
                "short_name": "Percent of income for good internet",
                "long_name": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income.",
                "statement": "Good internet costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11580,
              "mean": 0.6097,
              "sd": 0.361,
              "min": 0.144,
              "max": 3.3527
            },
            {
              "name": "perc_income_on_internet:perc_income_avg_nat_package",
              "duplicates": 11531,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_avg_nat_package",
                "measure": "perc_income_avg_nat_package",
                "type": "percent",
                "short_name": "Percent of income for internet (average)",
                "long_name": "The national average price for internet as a percent of average income",
                "short_description": "The national average price for internet ($64) as a percent of average income",
                "long_description": "The national average price for internet ($64) as a percent of average income.",
                "statement": "The national average internet package costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 11485,
              "mean": 1.229,
              "sd": 0.9108,
              "min": 0.3072,
              "max": 27.9883
            },
            {
              "name": "time",
              "duplicates": 13342,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time"
              },
              "type": "integer",
              "missing": 0,
              "mean": 2018,
              "sd": 2.0001,
              "min": 2015,
              "max": 2021
            }
          ]
        },
        "_references": {
          "lou04": {
            "id": "lou04",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              }
            ],
            "year": 2004,
            "title": "Using a gis-based floating catchment method to assess areas with shortage of physicians",
            "journal": "Health & Place",
            "volume": "10",
            "number": 1,
            "page": "1-11",
            "doi": "10.1016/S1353-8292(02)00067-9"
          },
          "lou09": {
            "id": "lou09",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Yi",
                "family": "Qi"
              }
            ],
            "year": 2009,
            "title": "An enhanced two-step floating catchment area (e2sfca) method for measuring spatial accessibility to primary care physicians",
            "journal": "Health & Place",
            "volume": "15",
            "number": 4,
            "page": "1100-1107",
            "doi": "10.1016/j.healthplace.2009.06.002"
          },
          "lou03": {
            "id": "lou03",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Fahui",
                "family": "Wang"
              }
            ],
            "year": 2003,
            "title": "Measures of spatial accessibility to health care in a gis environment: synthesis and a case study in the Chicago region",
            "journal": "Environment and Planning B: Planning and Design",
            "volume": "30",
            "number": 6,
            "page": "865-884",
            "doi": "10.1068/b29120"
          },
          "saxon20": {
            "id": "saxon20",
            "author": [
              {
                "given": "James",
                "family": "Saxon"
              },
              {
                "given": "Julia",
                "family": "Koschinsky"
              },
              {
                "given": "Karina",
                "family": "Acosta"
              },
              {
                "given": "Vidal",
                "family": "Anguiano"
              },
              {
                "given": "Luc",
                "family": "Anselin"
              },
              {
                "given": "Sergio",
                "family": "Rey"
              }
            ],
            "year": 2020,
            "title": "An Open Software Environment to Make Spatial Access Metrics More Accessible",
            "journal": "University of Chicago: Center for Spatial Data Science",
            "volume": "Preprint",
            "doi": "10.13140/RG.2.2.12396.28807"
          },
          "gallardo20": {
            "id": "gallardo20",
            "author": [
              {
                "given": "Robert",
                "family": "Gallardo"
              }
            ],
            "year": 2020,
            "title": "Digital Divide Index",
            "journal": "Purdue Center for Regional Development",
            "url": "http://pcrd.purdue.edu/ddi"
          },
          "liang17": {
            "id": "liang17",
            "author": [
              {
                "given": "Lan",
                "family": "Liang"
              },
              {
                "given": "Cindy",
                "family": "Branch"
              }
            ],
            "year": 2017,
            "title": "Health Literacy Universal Precautions Are Still a Distant Dream: Analysis of U.S. Data on Health Literate Practices",
            "journal": "Health Literacy Research and Practice",
            "volume": "1",
            "number": 4,
            "page": "e216-e230",
            "doi": "10.3928/24748307-20170929-01"
          },
          "savitz20": {
            "id": "savitz20",
            "author": [
              {
                "given": "Samuel",
                "family": "Savitz"
              },
              {
                "given": "Stacy",
                "family": "Bailey"
              },
              {
                "given": "Stacie",
                "family": "Dusetzina"
              },
              {
                "given": "W.",
                "family": "Schuyler Jones"
              },
              {
                "given": "Justin",
                "family": "Trogdon"
              },
              {
                "given": "Sally",
                "family": "Stearns"
              }
            ],
            "year": 2020,
            "title": "Treatment selection and medication adherence for stable angina: The role of area-based health literacy",
            "journal": "Journal of Evaluation in Clinical Practice",
            "volume": "26",
            "number": 6,
            "page": "1711-1721",
            "doi": "10.1111/jep.13341"
          }
        },
        "site_file": "tract.json"
      },
      "county": {
        "bytes": 619447,
        "encoding": "ISO-8859-1",
        "md5": "333b8d8d6a871251e5ef71cfd4f5944c",
        "sha512": "86db271e4a1aedb1acf9bc807b58d4745580573544ce3f7b2cd8fb2e313ff61f29c96669f788c5b5b1d253c25a1d40e461c32839bd822ed3e0047baa784a5429",
        "format": "csv",
        "name": "county",
        "filename": "county.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2022-01-12 17:40:12",
        "last_modified": "2021-11-29 21:36:30",
        "rowcount": 938,
        "schema": {
          "fields": [
            {
              "name": "2year_colleges_access_scores:norm_2sefca",
              "duplicates": 937,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores",
                "full_name": "2year_colleges_access_scores:norm_2sefca",
                "measure": "norm_2sefca",
                "type": "index",
                "short_name": "2-year college access score",
                "long_name": "2 year college access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of 2-year college accessibility based on supply and demand of providers",
                "long_description": "2-year college access score based on 2-step enhanced floating catchment areas. This method is an aggregation of college capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for 2-year college (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (graduate and undergraduate).",
                "statement": "The 2-year college accessibility score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 938
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 811,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "2-year college access (drive time)",
                "long_name": "2-year college access by median drive time to the five closest colleges in minutes",
                "short_description": "Median drive time (minutes) to the five closest 2-year colleges from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest 2-year colleges from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest 2-year colleges to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 58.7816,
              "sd": 25.1372,
              "min": 9,
              "max": 128.6
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 880,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "measure": "median_pass_rate",
                "type": "rate",
                "short_name": "3rd grade population passing reading",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "Median percent of 3rd grade population passing reading test for schools in the region",
                "long_description": "Median percent of 3rd grade population passing reading test. The median is calculated across schools in the region.",
                "statement": "The median percent of 3rd graders with passing reading scores in {features.name} is {value} percent",
                "source": [
                  {
                    "name": "Virginia Department of Education",
                    "date_accessed": 2021,
                    "url": "https://www.doe.virginia.gov/statistics_reports/sol-pass-rates/index.shtml"
                  }
                ]
              },
              "type": "float",
              "missing": 684,
              "mean": 11.5177,
              "sd": 7.4558,
              "min": 0,
              "max": 57
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 804,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "measure": "daycare_norm_3sefca",
                "type": "index",
                "short_name": "Day care access score",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. The demand for day care services is the population 0-12 years old and the supply is the capacity of day cares (number of seats).",
                "statement": "The daycare accessibility score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 38.6391,
              "sd": 21.6239,
              "min": 0,
              "max": 100
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 807,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "measure": "daycare_cnt",
                "type": "count",
                "short_name": "Day care access (count)",
                "long_name": "Access to day care by count",
                "short_description": "Count of day care capacity (seats) based on provider locations",
                "long_description": "Count of day care capacity (seats) based on provider locations. Address and capacity data was collected from Virginia Department of Social Services day care search tool.",
                "statement": "There are {value} daycares in {features.name}",
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 2803.7895,
              "sd": 7034.2298,
              "min": 19,
              "max": 64562
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 834,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "Day care access (drive time)",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "Median drive time (minutes) to the five closest day cares from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest day cares from centroid of selected region. Address data was collected from the Virginia Department of Social Services Child Day Care Facility search (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest day cares to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 10.4207,
              "sd": 9.4238,
              "min": 0.9,
              "max": 49.6
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 542,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index",
                "full_name": "dei_index:norm_dei",
                "measure": "norm_dei",
                "type": "index",
                "short_name": "Digital Equity Index",
                "long_name": "Digitial Equity Index",
                "short_description": "Digital Equity Index captures the relative equity of digital access, with 0 being a score of relative equity and 100 being relative inequity.",
                "long_description": "The Digital Equity Index (DEI) is a composite variable indicating the degree of broadband equity as it relates to adoption, accessibility, and infrastructure. It ranges from 0 to 100, where 100 indicates the most equitable broadband access. The DEI is constructed at the Census tract level and is composed of the following variables: percent of the population under 65 years of age, percent of the population with at least a high school education, percent of the population with income below the poverty level, percent of the population without a disability, the ratio between the share of homes making $75,000 or more per year with internet and the share of homes making less than $35,000 per year without internet, percent of the population with at least one computer, percent of the population with internet access, percent of the population that is low income (less than 30% of HUD Area Median Family Income) and have a housing cost burden over 30%, and average download speeds, upload speeds, and latency from Ookla speed tests.",
                "statement": "The digital equity index for {features.name} is {value}",
                "citations": [
                  "gallardo20"
                ],
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ]
              },
              "type": "float",
              "missing": 539,
              "mean": 46.8091,
              "sd": 23.3058,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 810,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "measure": "dent_e2sfca",
                "type": "index",
                "short_name": "Dental care access score",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0003,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0011
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 887,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "full_name": "dentist_access_scores:dent_cnt",
                "measure": "dent_cnt",
                "type": "count",
                "short_name": "Dental care access (count)",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} dentists in {features.name}",
                "source": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 32.3383,
              "sd": 89.6895,
              "min": 0,
              "max": 894
            },
            {
              "name": "download_speeds:download",
              "duplicates": 538,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds",
                "full_name": "download_speeds:download",
                "measure": "download",
                "type": "float",
                "short_name": "Average download speed",
                "long_name": "Average download speed (MB/s)",
                "short_description": "Average download speed for internet connection in MB/s",
                "long_description": "The average download speed for internet users' connections who performed a speed check using Ookla. Speeds are reported in MB/s. A speed of 100 MB/s is considered adequate for school work, video calling etc.",
                "statement": "The average download speed for internet connections in {features.name} is {value} MB/s",
                "source": [
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ]
              },
              "type": "float",
              "missing": 539,
              "mean": 111.8176,
              "sd": 49.3439,
              "min": 8.1556,
              "max": 234.4607
            },
            {
              "name": "ems_access_scores:ems_3sfca",
              "duplicates": 804,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_3sfca",
                "measure": "ems_3sfca",
                "type": "index",
                "short_name": "Emergency medical services access score",
                "long_name": "Emergency medical services access score (3-step floating catchment areas)",
                "short_description": "Index of emergency medical services accessibility based on supply and demand of facilities",
                "long_description": "Emergency medical services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The emergency medical services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0003,
              "sd": 0.0002,
              "min": 0,
              "max": 0.0012
            },
            {
              "name": "ems_access_scores:ems_cnt",
              "duplicates": 911,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_cnt",
                "measure": "ems_cnt",
                "type": "count",
                "short_name": "Emergency medical services access (count)",
                "long_name": "Access to emergency medical services by count",
                "short_description": "Count of emergency medical services facilities based on facility locations",
                "long_description": "Count of emergency medical services facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} emergency medical services facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 8.406,
              "sd": 6.7622,
              "min": 0,
              "max": 42
            },
            {
              "name": "ems_access_scores:ems_10near_median",
              "duplicates": 937,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_10near_median",
                "measure": "ems_10near_median",
                "type": "float",
                "short_name": "Emergency medical services access (drive time)",
                "long_name": "Emergency medical services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest emergency medical services facilities",
                "long_description": "Median drive time in minutes to the ten closest emergency medical services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest emergency medical service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 938
            },
            {
              "name": "trade_schools_access_scores:norm_2sefca",
              "duplicates": 937,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores",
                "full_name": "trade_schools_access_scores:norm_2sefca",
                "measure": "norm_2sefca",
                "type": "index",
                "short_name": "Trade school access score",
                "long_name": "Trade school access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Trade school  access score based on 2-step enhanced floating catchment areas. This method is an aggregation of trade school capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for trade schools (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (undergraduate).",
                "statement": "The trade school accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 938
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 806,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "Trade school access (drive time)",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "Mean drive time (minutes) to the five closest trade schools from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest trade schools from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest trade schools to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 99.0586,
              "sd": 66.2404,
              "min": 10.1,
              "max": 322.7
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 804,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer",
                "full_name": "have_computer:perc_have_computer",
                "measure": "perc_have_computer",
                "type": "percent",
                "short_name": "Population with a computer",
                "long_name": "Percent of population with a computer",
                "short_description": "Percent of the population self-reported to have a computer at home",
                "long_description": "Percent of the population self-reported to have a computer at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have a computer",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 85.8138,
              "sd": 6.83,
              "min": 66.6667,
              "max": 98.2511
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 804,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet",
                "full_name": "have_internet:perc_have_internet_access",
                "measure": "perc_have_internet_access",
                "type": "percent",
                "short_name": "Population with internet access",
                "long_name": "Percent of population with internet access",
                "short_description": "Percent of the population self-reported to have internet access at home",
                "long_description": "Percent of the population self-reported to have internet access at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have internet access",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 79.9714,
              "sd": 8.6137,
              "min": 61.2392,
              "max": 97.3068
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 932,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "measure": "health_literacy_estimate",
                "type": "index",
                "short_name": "Health literacy estimate",
                "long_name": "Health literacy estimate",
                "short_description": "Health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions",
                "long_description": "The health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions. Health literacy estimate is based on variables of demographic characteristics, health status, and health care use.",
                "statement": "The health literacy estimate for {features.name} is {value}",
                "citations": [
                  "stavitz20, liang17"
                ],
                "source": [
                  {
                    "name": "Medical Expenditure Panel Survey",
                    "date_accessed": 2021,
                    "url": "https://www.meps.ahrq.gov/mepsweb/"
                  },
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.3165,
              "sd": 0.6769,
              "min": -0.995,
              "max": 3.005
            },
            {
              "name": "hospital_access_scores:hos_3sfca",
              "duplicates": 804,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_3sfca",
                "measure": "hospital_3sfca",
                "type": "index",
                "short_name": "Hospital access score",
                "long_name": "Hospital access score (3-step floating catchment areas)",
                "short_description": "Index of hospital accessibility based on supply and demand of facilities",
                "long_description": "Hospital access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The hospital accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "hospital_access_scores:hos_cnt",
              "duplicates": 929,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_cnt",
                "measure": "hospital_cnt",
                "type": "count",
                "short_name": "Hospital access (count)",
                "long_name": "Access to hospitals by count",
                "short_description": "Count of hospitals based on facility locations",
                "long_description": "Count of hospitals based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} hospitals in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 0.8421,
              "sd": 1.2238,
              "min": 0,
              "max": 7
            },
            {
              "name": "hospital_access_scores:hos_10near_median",
              "duplicates": 937,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_10near_median",
                "measure": "hospital_10near_median",
                "type": "float",
                "short_name": "Hospital access (drive time)",
                "long_name": "Hospital access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest hospital s",
                "long_description": "Median drive time in minutes to the ten closest hospitals. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest hospitals to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 938
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 612,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "measure": "no_hlth_ins_pct",
                "type": "percent",
                "short_name": "Uninsured population",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population (ages 16-64) self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. Based on American Community Survey Tables B18135 and C27001I in ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population has no health insurance in  {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 273,
              "mean": 1.8443,
              "sd": 2.5411,
              "min": 0,
              "max": 21.15
            },
            {
              "name": "mental_access_scores:mental_3sfca",
              "duplicates": 804,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_3sfca",
                "measure": "mental_3sfca",
                "type": "index",
                "short_name": "Mental health services access score",
                "long_name": "Mental health services access score (3-step  floating catchment areas)",
                "short_description": "Index of mental health services accessibility based on supply and demand of facilities",
                "long_description": "Mental health services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The mental health services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0002
            },
            {
              "name": "mental_access_scores:mental_cnt",
              "duplicates": 926,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_cnt",
                "measure": "mental_cnt",
                "type": "count",
                "short_name": "Mental health services access (count)",
                "long_name": "Access to mental health services by count",
                "short_description": "Count of mental health facilities based on facility locations",
                "long_description": "Count of mental health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} mental health facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 1.7744,
              "sd": 2.4576,
              "min": 0,
              "max": 21
            },
            {
              "name": "mental_access_scores:mental_10near_median",
              "duplicates": 937,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_10near_median",
                "measure": "mental_10near_median",
                "type": "float",
                "short_name": "Mental health services access (drive time)",
                "long_name": "Mental health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest mental health services facilities",
                "long_description": "Median drive time in minutes to the ten closest mental health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest mental health service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 938
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 826,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "measure": "obgyn_e2sfca",
                "type": "index",
                "short_name": "OBGYN care access score",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0004,
              "sd": 0.0004,
              "min": 0,
              "max": 0.0022
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 890,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "measure": "obgyn_cnt",
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "long_name": "OBGYN care access by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} OBGYNs in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 23.1579,
              "sd": 60.3872,
              "min": 0,
              "max": 562
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 538,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "measure": "perc_w_broadband",
                "type": "percent",
                "short_name": "Population with broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "Percent of population self-reported to have a broadband internet connection (any type of internet other than a dial-up)",
                "long_description": "Percent of population self-reported to have a broadband internet connection. Broadband internet is defined as any type of internet other than a dial-up. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} has a broadband connection",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 539,
              "mean": 0.7311,
              "sd": 0.1038,
              "min": 0.4825,
              "max": 0.9542
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 538,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "measure": "perc_w_cable_fiber_DSL",
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "Percent of population self-reported to have a high speed internet service (cable, fiber optic, or DSL)",
                "long_description": "Percent of population self-reported to have a high speed internet service. A high speed internet service is defined as a cable, fiber optic, or DSL internet connection. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} has a cable fiber or DSL internet connection",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 539,
              "mean": 0.5431,
              "sd": 0.1717,
              "min": 0.1007,
              "max": 0.8975
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 809,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "measure": "ped_e2sfca",
                "type": "index",
                "short_name": "Pediatric care access score",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "Pediatric care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of pediatricians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for pediatricians (population under 16). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The pediatric care accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.0014,
              "sd": 0.0015,
              "min": 0,
              "max": 0.0126
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 891,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "measure": "ped_cnt",
                "type": "count",
                "short_name": "Pediatric care access (count)",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "Count of pediatricians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} pediatricians in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 29.7143,
              "sd": 82.4288,
              "min": 0,
              "max": 753
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 804,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "measure": "perc_post_hs_edu",
                "type": "percent",
                "short_name": "Population with post-high school education",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "Percent of the population self-reported to have post-high school level degree",
                "long_description": "Percent of the population self-reported to have post-high school level degree. Based on American Community Survey Table B15003 in ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have a post-high school education",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/data/developers/data-sets/acs-5year.html"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.5561,
              "sd": 0.1148,
              "min": 0.3501,
              "max": 0.9162
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 113,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "measure": "prevent_hosp_rate",
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{value} percent of the hospitalizations in {features.name}  were preventable (due to conditions usually treated in outpatient settings)",
                "source": [
                  {
                    "name": "County Health Rankings",
                    "date_accessed": 2021,
                    "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description"
                  }
                ]
              },
              "type": "integer",
              "missing": 35,
              "mean": 5161.0676,
              "sd": 1879.0309,
              "min": 2091,
              "max": 18247
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 804,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "measure": "prim_e2sfca",
                "type": "index",
                "short_name": "Primary care access score",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {features.name}  is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.002,
              "sd": 0.0014,
              "min": 0.0001,
              "max": 0.0091
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 844,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "full_name": "primary_care_access_scores:prim_cnt",
                "measure": "prim_cnt",
                "type": "count",
                "short_name": "Primary care access (count)",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} primary care physicians in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 147.4887,
              "sd": 341.3477,
              "min": 1,
              "max": 3152
            },
            {
              "name": "substance_access_scores:subs_3sfca",
              "duplicates": 804,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_3sfca",
                "measure": "substance_3sfca",
                "type": "index",
                "short_name": "Substance use/behavioral health services access score",
                "long_name": "Substance use/behavioral health services access score (3-step floating catchment areas)",
                "short_description": "Index of substance use/behavioral health services accessibility based on supply and demand of facilities",
                "long_description": "Substance use/behavioral health services access score based on 3-step  floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The substance use/behavioral health services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0001
            },
            {
              "name": "substance_access_scores:subs_cnt",
              "duplicates": 927,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_cnt",
                "measure": "substance_cnt",
                "type": "count",
                "short_name": "Substance use/behavioral health  access (count)",
                "long_name": "Access to substance use/behavioral health  by count",
                "short_description": "Count of substance use/behavioral health facilities based on facility locations",
                "long_description": "Count of substance use/behavioral health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} substance use facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 805,
              "mean": 1.5188,
              "sd": 2.3179,
              "min": 0,
              "max": 19
            },
            {
              "name": "substance_access_scores:subs_10near_median",
              "duplicates": 937,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_10near_median",
                "measure": "substance_10near_median",
                "type": "float",
                "short_name": "Substance use/behavioral health services access (drive time)",
                "long_name": "Substance use/behavioral health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest substance use/behavioral health services facilities",
                "long_description": "Median drive time in minutes to the ten closest substance use/behavioral health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest substance use/behavioral health service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 938
            },
            {
              "name": "community_college_computer_sciences_fca:3sfca_capacity",
              "duplicates": 854,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_computer_sciences_fca",
                "full_name": "community_college_computer_sciences_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college computer science program access score",
                "long_name": "Community college computer science program access score (3-step floating catchment areas)",
                "short_description": "Index of community college computer science program accessibility based on supply and demand of programs",
                "long_description": "Community college computer science program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college computer science program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.4113,
              "sd": 0.7636,
              "min": 0,
              "max": 4.6862
            },
            {
              "name": "community_college_engineering_fca:3sfca_capacity",
              "duplicates": 892,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_fca",
                "full_name": "community_college_engineering_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college engineering program access score",
                "long_name": "Community college engineering program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.4818,
              "sd": 0.9926,
              "min": 0,
              "max": 6.7681
            },
            {
              "name": "community_college_engineering_related_fca:3sfca_capacity",
              "duplicates": 852,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_related_fca",
                "full_name": "community_college_engineering_related_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college engineering-related program access score",
                "long_name": "Community college engineering-related program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering-related program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering-related program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering-related program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 0.9322,
              "sd": 1.6849,
              "min": 0,
              "max": 11.7183
            },
            {
              "name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
              "duplicates": 272,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_phys_hlth_days_14_and_over",
                "full_name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
                "measure": "perc_poor_phys_hlth_days_14_and_over",
                "type": "percent",
                "short_name": "Poor physical health population",
                "long_name": "Percent of the population with poor physical health",
                "short_description": "Percent of the population self-reporting poor physical health",
                "long_description": "Percent of the population self-reporting poor physical health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} percent of the population in {features.name} report poor physical health",
                "source": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ]
              },
              "type": "float",
              "missing": 273,
              "mean": 12.1872,
              "sd": 2.8533,
              "min": 5.1487,
              "max": 28.9455
            },
            {
              "name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
              "duplicates": 272,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_ment_hlth_days_14_and_over",
                "full_name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
                "measure": "perc_poor_ment_hlth_days_14_and_over",
                "type": "percent",
                "short_name": "Poor mental health population",
                "long_name": "Percent of the population with poor mental health",
                "short_description": "Percent of the population self-reporting poor mental health",
                "long_description": "Percent of the population self-reporting poor mental health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} percent of the population in {features.name} report poor mental health",
                "source": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ]
              },
              "type": "float",
              "missing": 273,
              "mean": 10.9624,
              "sd": 2.1822,
              "min": 5.8043,
              "max": 25.0482
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_100",
              "duplicates": 807,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_100",
                "measure": "perc_income_min_price_100",
                "type": "percent",
                "short_name": "Percent of income for fast internet",
                "long_name": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income.",
                "statement": "Fast internet costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 808,
              "mean": 1.3831,
              "sd": 0.8034,
              "min": 0.2601,
              "max": 5.0806
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_25",
              "duplicates": 807,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_25",
                "measure": "perc_income_min_price_25",
                "type": "percent",
                "short_name": "Percent of income for good internet",
                "long_name": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income.",
                "statement": "Good internet costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 808,
              "mean": 0.7812,
              "sd": 0.2915,
              "min": 0.2095,
              "max": 1.4816
            },
            {
              "name": "perc_income_on_internet:perc_income_avg_nat_package",
              "duplicates": 804,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_avg_nat_package",
                "measure": "perc_income_avg_nat_package",
                "type": "percent",
                "short_name": "Percent of income for internet (average)",
                "long_name": "The national average price for internet as a percent of average income",
                "short_description": "The national average price for internet ($64) as a percent of average income",
                "long_description": "The national average price for internet ($64) as a percent of average income.",
                "statement": "The national average internet package costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 805,
              "mean": 1.4486,
              "sd": 0.47,
              "min": 0.5629,
              "max": 2.8556
            },
            {
              "name": "time",
              "duplicates": 931,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time"
              },
              "type": "integer",
              "missing": 0,
              "mean": 2018,
              "sd": 2.0011,
              "min": 2015,
              "max": 2021
            }
          ]
        },
        "_references": {
          "lou04": {
            "id": "lou04",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              }
            ],
            "year": 2004,
            "title": "Using a gis-based floating catchment method to assess areas with shortage of physicians",
            "journal": "Health & Place",
            "volume": "10",
            "number": 1,
            "page": "1-11",
            "doi": "10.1016/S1353-8292(02)00067-9"
          },
          "lou09": {
            "id": "lou09",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Yi",
                "family": "Qi"
              }
            ],
            "year": 2009,
            "title": "An enhanced two-step floating catchment area (e2sfca) method for measuring spatial accessibility to primary care physicians",
            "journal": "Health & Place",
            "volume": "15",
            "number": 4,
            "page": "1100-1107",
            "doi": "10.1016/j.healthplace.2009.06.002"
          },
          "lou03": {
            "id": "lou03",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Fahui",
                "family": "Wang"
              }
            ],
            "year": 2003,
            "title": "Measures of spatial accessibility to health care in a gis environment: synthesis and a case study in the Chicago region",
            "journal": "Environment and Planning B: Planning and Design",
            "volume": "30",
            "number": 6,
            "page": "865-884",
            "doi": "10.1068/b29120"
          },
          "saxon20": {
            "id": "saxon20",
            "author": [
              {
                "given": "James",
                "family": "Saxon"
              },
              {
                "given": "Julia",
                "family": "Koschinsky"
              },
              {
                "given": "Karina",
                "family": "Acosta"
              },
              {
                "given": "Vidal",
                "family": "Anguiano"
              },
              {
                "given": "Luc",
                "family": "Anselin"
              },
              {
                "given": "Sergio",
                "family": "Rey"
              }
            ],
            "year": 2020,
            "title": "An Open Software Environment to Make Spatial Access Metrics More Accessible",
            "journal": "University of Chicago: Center for Spatial Data Science",
            "volume": "Preprint",
            "doi": "10.13140/RG.2.2.12396.28807"
          },
          "gallardo20": {
            "id": "gallardo20",
            "author": [
              {
                "given": "Robert",
                "family": "Gallardo"
              }
            ],
            "year": 2020,
            "title": "Digital Divide Index",
            "journal": "Purdue Center for Regional Development",
            "url": "http://pcrd.purdue.edu/ddi"
          },
          "liang17": {
            "id": "liang17",
            "author": [
              {
                "given": "Lan",
                "family": "Liang"
              },
              {
                "given": "Cindy",
                "family": "Branch"
              }
            ],
            "year": 2017,
            "title": "Health Literacy Universal Precautions Are Still a Distant Dream: Analysis of U.S. Data on Health Literate Practices",
            "journal": "Health Literacy Research and Practice",
            "volume": "1",
            "number": 4,
            "page": "e216-e230",
            "doi": "10.3928/24748307-20170929-01"
          },
          "savitz20": {
            "id": "savitz20",
            "author": [
              {
                "given": "Samuel",
                "family": "Savitz"
              },
              {
                "given": "Stacy",
                "family": "Bailey"
              },
              {
                "given": "Stacie",
                "family": "Dusetzina"
              },
              {
                "given": "W.",
                "family": "Schuyler Jones"
              },
              {
                "given": "Justin",
                "family": "Trogdon"
              },
              {
                "given": "Sally",
                "family": "Stearns"
              }
            ],
            "year": 2020,
            "title": "Treatment selection and medication adherence for stable angina: The role of area-based health literacy",
            "journal": "Journal of Evaluation in Clinical Practice",
            "volume": "26",
            "number": 6,
            "page": "1711-1721",
            "doi": "10.1111/jep.13341"
          }
        },
        "site_file": "county.json"
      },
      "district": {
        "bytes": 166541,
        "encoding": "ISO-8859-1",
        "md5": "3c47edf080561beeee7ed7eb8d01d1fb",
        "sha512": "fd28a4a349d5f09d47cf0e314a8194494b3d37cbf15bf4a5c61ed3abf76ae6382ae608fc6e60d8e67cf683de2ea29c1c8b06fce397322c91f983ea6ac64d1bc4",
        "format": "csv",
        "name": "district",
        "filename": "health_district.csv",
        "source": [],
        "ids": [
          {
            "variable": "ID",
            "map": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/virginia_2010.json"
          }
        ],
        "time": "time",
        "profile": "data-resource",
        "created": "2022-01-12 17:40:13",
        "last_modified": "2021-11-29 21:36:30",
        "rowcount": 245,
        "schema": {
          "fields": [
            {
              "name": "2year_colleges_access_scores:norm_2sefca",
              "duplicates": 220,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_2year_colleges_access_scores",
                "full_name": "2year_colleges_access_scores:norm_2sefca",
                "measure": "norm_2sefca",
                "type": "index",
                "short_name": "2-year college access score",
                "long_name": "2 year college access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of 2-year college accessibility based on supply and demand of providers",
                "long_description": "2-year college access score based on 2-step enhanced floating catchment areas. This method is an aggregation of college capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for 2-year college (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (graduate and undergraduate).",
                "statement": "The 2-year college accessibility score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 18.0222,
              "sd": 22.6205,
              "min": 0,
              "max": 100
            },
            {
              "name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
              "duplicates": 209,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_2year_colleges",
                "full_name": "drive_times_nearest_2year_colleges:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "2-year college access (drive time)",
                "long_name": "2-year college access by median drive time to the five closest colleges in minutes",
                "short_description": "Median drive time (minutes) to the five closest 2-year colleges from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest 2-year colleges from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest 2-year colleges to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 52.2886,
              "sd": 32.3618,
              "min": 9,
              "max": 122.8
            },
            {
              "name": "3rd_grade_median_read_score:median_read_pass_rate",
              "duplicates": 210,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdct_vdoe_2019_2021_3rd_grade_median_read_score",
                "full_name": "3rd_grade_median_read_score:median_read_pass_rate",
                "measure": "median_pass_rate",
                "type": "rate",
                "short_name": "3rd grade population passing reading",
                "long_name": "Median percent of 3rd grade population passing reading test",
                "short_description": "Median percent of 3rd grade population passing reading test for schools in the region",
                "long_description": "Median percent of 3rd grade population passing reading test. The median is calculated across schools in the region.",
                "statement": "The median percent of 3rd graders with passing reading scores in {features.name} is {value} percent",
                "source": [
                  {
                    "name": "Virginia Department of Education",
                    "date_accessed": 2021,
                    "url": "https://www.doe.virginia.gov/statistics_reports/sol-pass-rates/index.shtml"
                  }
                ]
              },
              "type": "float",
              "missing": 175,
              "mean": 11.1071,
              "sd": 5.3003,
              "min": 0,
              "max": 28
            },
            {
              "name": "daycare_services_access_scores:daycare_norm_3sfca",
              "duplicates": 209,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "full_name": "daycare_services_access_scores:daycare_norm_3sfca",
                "measure": "daycare_norm_3sefca",
                "type": "index",
                "short_name": "Day care access score",
                "long_name": "Day care access score (3-step floating catchment area)",
                "short_description": "Index of day care accessibility based on supply of and demand for providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of day care facilities per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Provider address data was collected from Virginia Department of Social Services day care search tool. The demand for day care services is the population 0-12 years old and the supply is the capacity of day cares (number of seats).",
                "statement": "The daycare accessibility score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 40.3427,
              "sd": 22.6432,
              "min": 0,
              "max": 100
            },
            {
              "name": "daycare_services_access_scores:daycare_cnt",
              "duplicates": 209,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2021_daycare_services_access_scores",
                "full_name": "daycare_services_access_scores:daycare_cnt",
                "measure": "daycare_cnt",
                "type": "count",
                "short_name": "Day care access (count)",
                "long_name": "Access to day care by count",
                "short_description": "Count of day care capacity (seats) based on provider locations",
                "long_description": "Count of day care capacity (seats) based on provider locations. Address and capacity data was collected from Virginia Department of Social Services day care search tool.",
                "statement": "There are {value} daycares in {features.name}",
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 10654.4,
              "sd": 12153.9074,
              "min": 1027,
              "max": 67563
            },
            {
              "name": "drive_times_nearest_daycares:median_drive_time_top5",
              "duplicates": 212,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_daycares",
                "full_name": "drive_times_nearest_daycares:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "Day care access (drive time)",
                "long_name": "Day care access by median drive time to the five closest day cares in minutes",
                "short_description": "Median drive time (minutes) to the five closest day cares from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest day cares from centroid of selected region. Address data was collected from the Virginia Department of Social Services Child Day Care Facility search (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest day cares to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Virginia Department of Social Services",
                    "date_accessed": 2021,
                    "url": "https://www.dss.virginia.gov/facility/search/cc.cgi"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 13.28,
              "sd": 12.5682,
              "min": 1.8,
              "max": 62.1
            },
            {
              "name": "dei_index:norm_dei",
              "duplicates": 143,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2019_2021_dei_index",
                "full_name": "dei_index:norm_dei",
                "measure": "norm_dei",
                "type": "index",
                "short_name": "Digital Equity Index",
                "long_name": "Digitial Equity Index",
                "short_description": "Digital Equity Index captures the relative equity of digital access, with 0 being a score of relative equity and 100 being relative inequity.",
                "long_description": "The Digital Equity Index (DEI) is a composite variable indicating the degree of broadband equity as it relates to adoption, accessibility, and infrastructure. It ranges from 0 to 100, where 100 indicates the most equitable broadband access. The DEI is constructed at the Census tract level and is composed of the following variables: percent of the population under 65 years of age, percent of the population with at least a high school education, percent of the population with income below the poverty level, percent of the population without a disability, the ratio between the share of homes making $75,000 or more per year with internet and the share of homes making less than $35,000 per year without internet, percent of the population with at least one computer, percent of the population with internet access, percent of the population that is low income (less than 30% of HUD Area Median Family Income) and have a housing cost burden over 30%, and average download speeds, upload speeds, and latency from Ookla speed tests.",
                "statement": "The digital equity index for {features.name} is {value}",
                "citations": [
                  "gallardo20"
                ],
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ]
              },
              "type": "float",
              "missing": 140,
              "mean": 51.4114,
              "sd": 27.409,
              "min": 0,
              "max": 100
            },
            {
              "name": "dentist_access_scores:dent_e2sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "full_name": "dentist_access_scores:dent_e2sfca",
                "measure": "dent_e2sfca",
                "type": "index",
                "short_name": "Dental care access score",
                "long_name": "Dental care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of dental care accessibility based on supply and demand of providers",
                "long_description": "Dental care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of dentists per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for dentists (population served by dentists). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The dental care access score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0003,
              "sd": 0.0001,
              "min": 0.0001,
              "max": 0.0007
            },
            {
              "name": "dentist_access_scores:dent_cnt",
              "duplicates": 211,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_dentist_access_scores",
                "full_name": "dentist_access_scores:dent_cnt",
                "measure": "dent_cnt",
                "type": "count",
                "short_name": "Dental care access (count)",
                "long_name": "Dental care access by count",
                "short_description": "Count of dentists based on provider locations",
                "long_description": "Count of dentists based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} dentists in {features.name}",
                "source": [
                  {
                    "name": "SafeGraph Core",
                    "date_accessed": 2021,
                    "url": "https://www.safegraph.com/products/core"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 122.8857,
              "sd": 170.4947,
              "min": 15,
              "max": 1000
            },
            {
              "name": "download_speeds:download",
              "duplicates": 139,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_ookla_2019_2021_download_speeds",
                "full_name": "download_speeds:download",
                "measure": "download",
                "type": "float",
                "short_name": "Average download speed",
                "long_name": "Average download speed (MB/s)",
                "short_description": "Average download speed for internet connection in MB/s",
                "long_description": "The average download speed for internet users' connections who performed a speed check using Ookla. Speeds are reported in MB/s. A speed of 100 MB/s is considered adequate for school work, video calling etc.",
                "statement": "The average download speed for internet connections in {features.name} is {value} MB/s",
                "source": [
                  {
                    "name": "Ookla",
                    "date_accessed": 2021,
                    "url": "https://www.ookla.com/ookla-for-good/open-data"
                  }
                ]
              },
              "type": "float",
              "missing": 140,
              "mean": 126.4226,
              "sd": 38.9209,
              "min": 27.5995,
              "max": 208.2953
            },
            {
              "name": "ems_access_scores:ems_3sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_3sfca",
                "measure": "ems_3sfca",
                "type": "index",
                "short_name": "Emergency medical services access score",
                "long_name": "Emergency medical services access score (3-step floating catchment areas)",
                "short_description": "Index of emergency medical services accessibility based on supply and demand of facilities",
                "long_description": "Emergency medical services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The emergency medical services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0002,
              "sd": 0.0001,
              "min": 0,
              "max": 0.0005
            },
            {
              "name": "ems_access_scores:ems_cnt",
              "duplicates": 219,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_cnt",
                "measure": "ems_cnt",
                "type": "count",
                "short_name": "Emergency medical services access (count)",
                "long_name": "Access to emergency medical services by count",
                "short_description": "Count of emergency medical services facilities based on facility locations",
                "long_description": "Count of emergency medical services facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} emergency medical services facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 31.9429,
              "sd": 13.584,
              "min": 8,
              "max": 58
            },
            {
              "name": "ems_access_scores:ems_10near_median",
              "duplicates": 244,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_ems_access_scores",
                "full_name": "ems_access_scores:ems_10near_median",
                "measure": "ems_10near_median",
                "type": "float",
                "short_name": "Emergency medical services access (drive time)",
                "long_name": "Emergency medical services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest emergency medical services facilities",
                "long_description": "Median drive time in minutes to the ten closest emergency medical services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest emergency medical service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "trade_schools_access_scores:norm_2sefca",
              "duplicates": 227,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_trade_schools_access_scores",
                "full_name": "trade_schools_access_scores:norm_2sefca",
                "measure": "norm_2sefca",
                "type": "index",
                "short_name": "Trade school access score",
                "long_name": "Trade school access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of trade school accessibility based on supply and demand of providers",
                "long_description": "Trade school  access score based on 2-step enhanced floating catchment areas. This method is an aggregation of trade school capacity per population ratios weighted by distance or travel time in each catchment area (area within which an institution is accessible). Weights are defined for the demand for trade schools (whole population in an area served by the institution) and supply is the total number of students enrolled in a year (undergraduate).",
                "statement": "The trade school accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 19.6666,
              "sd": 28.2957,
              "min": 0,
              "max": 100
            },
            {
              "name": "drive_times_nearest_trade_schools:median_drive_time_top5",
              "duplicates": 209,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_osrm_2021_drive_times_nearest_trade_schools",
                "full_name": "drive_times_nearest_trade_schools:median_drive_time_top5",
                "measure": "median_drive_time_top5",
                "type": "float",
                "short_name": "Trade school access (drive time)",
                "long_name": "Trade school access by median drive time to the five closest schools in minutes",
                "short_description": "Mean drive time (minutes) to the five closest trade schools from centroid of selected region",
                "long_description": "Median drive time in minutes to the five closest trade schools from centroid of selected region. Address data was collected from the National Center for Education Statistics (Dataset for year 2019). Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the five closest trade schools to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 83.0486,
              "sd": 70.8312,
              "min": 14,
              "max": 300.9
            },
            {
              "name": "have_computer:perc_have_computer",
              "duplicates": 209,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_computer",
                "full_name": "have_computer:perc_have_computer",
                "measure": "perc_have_computer",
                "type": "percent",
                "short_name": "Population with a computer",
                "long_name": "Percent of population with a computer",
                "short_description": "Percent of the population self-reported to have a computer at home",
                "long_description": "Percent of the population self-reported to have a computer at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have a computer",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 88.3058,
              "sd": 6.6137,
              "min": 71.9306,
              "max": 97.4945
            },
            {
              "name": "have_internet:perc_have_internet_access",
              "duplicates": 209,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs5_2019_have_internet",
                "full_name": "have_internet:perc_have_internet_access",
                "measure": "perc_have_internet_access",
                "type": "percent",
                "short_name": "Population with internet access",
                "long_name": "Percent of population with internet access",
                "short_description": "Percent of the population self-reported to have internet access at home",
                "long_description": "Percent of the population self-reported to have internet access at home. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have internet access",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 83.4686,
              "sd": 8.2578,
              "min": 65.2433,
              "max": 96.4738
            },
            {
              "name": "health_literacy_estimates:health_literacy_estimate",
              "duplicates": 240,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_sdad_2019_health_literacy_estimates",
                "full_name": "health_literacy_estimates:health_literacy_estimate",
                "measure": "health_literacy_estimate",
                "type": "index",
                "short_name": "Health literacy estimate",
                "long_name": "Health literacy estimate",
                "short_description": "Health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions",
                "long_description": "The health literacy estimate captures the adult population's ability to obtain, process, and understand basic health services to make appropriate health decisions. Health literacy estimate is based on variables of demographic characteristics, health status, and health care use.",
                "statement": "The health literacy estimate for {features.name} is {value}",
                "citations": [
                  "stavitz20, liang17"
                ],
                "source": [
                  {
                    "name": "Medical Expenditure Panel Survey",
                    "date_accessed": 2021,
                    "url": "https://www.meps.ahrq.gov/mepsweb/"
                  },
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.1767,
              "sd": 0.207,
              "min": -0.995,
              "max": 0.2193
            },
            {
              "name": "hospital_access_scores:hos_3sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_3sfca",
                "measure": "hospital_3sfca",
                "type": "index",
                "short_name": "Hospital access score",
                "long_name": "Hospital access score (3-step floating catchment areas)",
                "short_description": "Index of hospital accessibility based on supply and demand of facilities",
                "long_description": "Hospital access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The hospital accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0,
              "sd": 9e-06,
              "min": 4e-06,
              "max": 0
            },
            {
              "name": "hospital_access_scores:hos_cnt",
              "duplicates": 237,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_cnt",
                "measure": "hospital_cnt",
                "type": "count",
                "short_name": "Hospital access (count)",
                "long_name": "Access to hospitals by count",
                "short_description": "Count of hospitals based on facility locations",
                "long_description": "Count of hospitals based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} hospitals in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 3.2,
              "sd": 1.6943,
              "min": 1,
              "max": 7
            },
            {
              "name": "hospital_access_scores:hos_10near_median",
              "duplicates": 244,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_hospital_access_scores",
                "full_name": "hospital_access_scores:hos_10near_median",
                "measure": "hospital_10near_median",
                "type": "float",
                "short_name": "Hospital access (drive time)",
                "long_name": "Hospital access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest hospital s",
                "long_description": "Median drive time in minutes to the ten closest hospitals. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest hospitals to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
              "duplicates": 77,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_acs5_2015_2019_no_health_insurance_19_to_64",
                "full_name": "no_health_insurance_19_to_64:no_hlth_ins_pct",
                "measure": "no_hlth_ins_pct",
                "type": "percent",
                "short_name": "Uninsured population",
                "long_name": "Percent of population without health insurance",
                "short_description": "Percent of the population (ages 16-64) self-reported to not be currently covered by any type of health insurance or health coverage plan",
                "long_description": "Percent of the population self-reported to not be currently covered by any type of health insurance or health coverage plan. Based on American Community Survey Tables B18135 and C27001I in ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population has no health insurance in  {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 70,
              "mean": 2.3091,
              "sd": 2.4521,
              "min": 0.2,
              "max": 15.4533
            },
            {
              "name": "mental_access_scores:mental_3sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_3sfca",
                "measure": "mental_3sfca",
                "type": "index",
                "short_name": "Mental health services access score",
                "long_name": "Mental health services access score (3-step  floating catchment areas)",
                "short_description": "Index of mental health services accessibility based on supply and demand of facilities",
                "long_description": "Mental health services access score based on 3-step floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The mental health services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0,
              "sd": 0,
              "min": 0,
              "max": 0.0001
            },
            {
              "name": "mental_access_scores:mental_cnt",
              "duplicates": 230,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_cnt",
                "measure": "mental_cnt",
                "type": "count",
                "short_name": "Mental health services access (count)",
                "long_name": "Access to mental health services by count",
                "short_description": "Count of mental health facilities based on facility locations",
                "long_description": "Count of mental health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} mental health facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 6.7429,
              "sd": 4.2795,
              "min": 0,
              "max": 22
            },
            {
              "name": "mental_access_scores:mental_10near_median",
              "duplicates": 244,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_mental_access_scores",
                "full_name": "mental_access_scores:mental_10near_median",
                "measure": "mental_10near_median",
                "type": "float",
                "short_name": "Mental health services access (drive time)",
                "long_name": "Mental health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest mental health services facilities",
                "long_description": "Median drive time in minutes to the ten closest mental health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest mental health service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "obgyn_access_scores:obgyn_e2sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "full_name": "obgyn_access_scores:obgyn_e2sfca",
                "measure": "obgyn_e2sfca",
                "type": "index",
                "short_name": "OBGYN care access score",
                "long_name": "OBGYN care access score (2 step-enhanced floating catchment areas)",
                "short_description": "Index of OBGYN care accessibility based on supply and demand of providers",
                "long_description": "OBGYN care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of OBGYNs per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for OBGYNs (population served by OBGYNs). Provider address data was collected from WebMD's online physician directory.",
                "statement": "The OBGYN access score for {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0006,
              "sd": 0.0004,
              "min": 0,
              "max": 0.0018
            },
            {
              "name": "obgyn_access_scores:obgyn_cnt",
              "duplicates": 213,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_obgyn_access_scores",
                "full_name": "obgyn_access_scores:obgyn_cnt",
                "measure": "obgyn_cnt",
                "type": "count",
                "short_name": "OBGYN care access (count)",
                "long_name": "OBGYN care access by count",
                "short_description": "Count of OBGYNs based on provider locations",
                "long_description": "Count of OBGYN care providers based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} OBGYNs in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 88,
              "sd": 106.409,
              "min": 7,
              "max": 611
            },
            {
              "name": "pct_pop_broadband:perc_w_broadband",
              "duplicates": 139,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_broadband",
                "full_name": "pct_pop_broadband:perc_w_broadband",
                "measure": "perc_w_broadband",
                "type": "percent",
                "short_name": "Population with broadband",
                "long_name": "Percent of population with broadband",
                "short_description": "Percent of population self-reported to have a broadband internet connection (any type of internet other than a dial-up)",
                "long_description": "Percent of population self-reported to have a broadband internet connection. Broadband internet is defined as any type of internet other than a dial-up. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} has a broadband connection",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 140,
              "mean": 0.7744,
              "sd": 0.1013,
              "min": 0.5415,
              "max": 0.9462
            },
            {
              "name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
              "duplicates": 139,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_acs_2017_2019_pct_pop_cable_fiber_dsl",
                "full_name": "pct_pop_cable_fiber_dsl:perc_w_cable_fiber_DSL",
                "measure": "perc_w_cable_fiber_DSL",
                "type": "percent",
                "short_name": "Population with cable, fiber optic, or DSL",
                "long_name": "Percent of population with a high speed internet service (cable, fiber optic, or DSL)",
                "short_description": "Percent of population self-reported to have a high speed internet service (cable, fiber optic, or DSL)",
                "long_description": "Percent of population self-reported to have a high speed internet service. A high speed internet service is defined as a cable, fiber optic, or DSL internet connection. Based on American Community Survey ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} has a cable fiber or DSL internet connection",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  }
                ]
              },
              "type": "float",
              "missing": 140,
              "mean": 0.621,
              "sd": 0.1498,
              "min": 0.3044,
              "max": 0.8797
            },
            {
              "name": "pediatrics_access_scores:ped_e2sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "full_name": "pediatrics_access_scores:ped_e2sfca",
                "measure": "ped_e2sfca",
                "type": "index",
                "short_name": "Pediatric care access score",
                "long_name": "Pediatric care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of pediatric care physician accessibility based on supply and demand of providers",
                "long_description": "Pediatric care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of pediatricians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for pediatricians (population under 16). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The pediatric care accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0019,
              "sd": 0.0013,
              "min": 0.0005,
              "max": 0.0055
            },
            {
              "name": "pediatrics_access_scores:ped_cnt",
              "duplicates": 211,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_pediatrics_access_scores",
                "full_name": "pediatrics_access_scores:ped_cnt",
                "measure": "ped_cnt",
                "type": "count",
                "short_name": "Pediatric care access (count)",
                "long_name": "Pediatric care access by count",
                "short_description": "Count of pediatricians based on provider locations",
                "long_description": "Count of pediatricians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} pediatricians in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 112.9143,
              "sd": 146.6692,
              "min": 9,
              "max": 798
            },
            {
              "name": "post_hs_education:perc_post_hs_edu",
              "duplicates": 209,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_hdcttr_acs_2015_2019_post_hs_education",
                "full_name": "post_hs_education:perc_post_hs_edu",
                "measure": "perc_post_hs_edu",
                "type": "percent",
                "short_name": "Population with post-high school education",
                "long_name": "Percent  of population with post-high school education",
                "short_description": "Percent of the population self-reported to have post-high school level degree",
                "long_description": "Percent of the population self-reported to have post-high school level degree. Based on American Community Survey Table B15003 in ACS 2015/2019 5-year estimates.",
                "statement": "{value} percent of the population in {features.name} have a post-high school education",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/data/developers/data-sets/acs-5year.html"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.605,
              "sd": 0.1175,
              "min": 0.4143,
              "max": 0.8654
            },
            {
              "name": "preventable_hospitalizations:prevent_hosp_rate",
              "duplicates": 2,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdct_chr_2015_2021_preventable_hospitalizations",
                "full_name": "preventable_hospitalizations:prevent_hosp_rate",
                "measure": "prevent_hosp_rate",
                "type": "rate",
                "short_name": "Preventable hospitalizations per 100,000",
                "long_name": "Preventable hospital stays per 100,000 Medicare enrollees",
                "short_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees",
                "long_description": "Rate of hospital stays for ambulatory-care sensitive conditions per 100,000 Medicare enrollees. Ambulatory care refers to diagnoses that are usually treatable in outpatient settings. This data is based on Medicare claims and comes from County Health Rankings.",
                "statement": "{value} percent of the hospitalizations in {features.name}  were preventable (due to conditions usually treated in outpatient settings)",
                "source": [
                  {
                    "name": "County Health Rankings",
                    "date_accessed": 2021,
                    "url": "https://www.countyhealthrankings.org/app/virginia/2021/measure/factors/5/description"
                  }
                ]
              },
              "type": "float",
              "missing": 0,
              "mean": 4915.6413,
              "sd": 1551.2408,
              "min": 2106,
              "max": 15047.25
            },
            {
              "name": "primary_care_access_scores:prim_e2sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "full_name": "primary_care_access_scores:prim_e2sfca",
                "measure": "prim_e2sfca",
                "type": "index",
                "short_name": "Primary care access score",
                "long_name": "Primary care access score (2-step enhanced floating catchment areas)",
                "short_description": "Index of primary care physician accessibility based on supply and demand of providers",
                "long_description": "Primary care access score based on 2-step enhanced floating catchment areas. This method is an aggregation of physicians per population ratios weighted by distance or travel time in each catchment area (area within which a provider is accessible). Weights are defined for the demand for physicians (population served by physicians). Provider address data was collected from WebMD's online Physician Directory.",
                "statement": "The primary care accessibility score for {features.name}  is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.0023,
              "sd": 0.0011,
              "min": 0.0011,
              "max": 0.0058
            },
            {
              "name": "primary_care_access_scores:prim_cnt",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_primary_care_access_scores",
                "full_name": "primary_care_access_scores:prim_cnt",
                "measure": "prim_cnt",
                "type": "count",
                "short_name": "Primary care access (count)",
                "long_name": "Primary care access by count",
                "short_description": "Count of primary care physicians based on provider locations",
                "long_description": "Count of primary care physicians based on provider locations. Address data was collected from WebMD's online Physician Directory.",
                "statement": "There are {value} primary care physicians in {features.name}",
                "source": [
                  {
                    "name": "WebMD Physician Directory",
                    "date_accessed": 2021,
                    "url": "https://doctor.webmd.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 560.4571,
              "sd": 581.3071,
              "min": 74,
              "max": 3360
            },
            {
              "name": "substance_access_scores:subs_3sfca",
              "duplicates": 209,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_3sfca",
                "measure": "substance_3sfca",
                "type": "index",
                "short_name": "Substance use/behavioral health services access score",
                "long_name": "Substance use/behavioral health services access score (3-step floating catchment areas)",
                "short_description": "Index of substance use/behavioral health services accessibility based on supply and demand of facilities",
                "long_description": "Substance use/behavioral health services access score based on 3-step  floating catchment areas. This method is an aggregation of facilities per population ratios weighted by distance or travel time in each catchment area (area within which a facility is accessible). Weights are defined for the demand for facilities (adult population).",
                "statement": "The substance use/behavioral health services accessibility score for {features.name} is  {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0,
              "sd": 0,
              "min": 4e-06,
              "max": 0.0001
            },
            {
              "name": "substance_access_scores:subs_cnt",
              "duplicates": 232,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_cnt",
                "measure": "substance_cnt",
                "type": "count",
                "short_name": "Substance use/behavioral health  access (count)",
                "long_name": "Access to substance use/behavioral health  by count",
                "short_description": "Count of substance use/behavioral health facilities based on facility locations",
                "long_description": "Count of substance use/behavioral health facilities based on facility locations. Location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository.",
                "statement": "There are {value} substance use facilities in {features.name}",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "integer",
              "missing": 210,
              "mean": 5.7714,
              "sd": 3.3614,
              "min": 0,
              "max": 19
            },
            {
              "name": "substance_access_scores:subs_10near_median",
              "duplicates": 244,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2021_substance_access_scores",
                "full_name": "substance_access_scores:subs_10near_median",
                "measure": "substance_10near_median",
                "type": "float",
                "short_name": "Substance use/behavioral health services access (drive time)",
                "long_name": "Substance use/behavioral health services access by median drive time to the ten closest facilities in minutes",
                "short_description": "Median drive time (minutes) to the ten closest substance use/behavioral health services facilities",
                "long_description": "Median drive time in minutes to the ten closest substance use/behavioral health services facilities. Facility location data was collected from the Homeland Infrastructure Foundation-Level Data (HIFLD) repository. Drive times were computed using Open Source Routing Machine (Using roads for year 2021).",
                "statement": "The median drive time to the ten closest substance use/behavioral health service facilities to {features.name} is {value} minutes",
                "source": [
                  {
                    "name": "Homeland Infrastructure Foundation-Level Data (HIFLD)",
                    "date_accessed": 2021,
                    "url": "https://hifld-geoplatform.opendata.arcgis.com/"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "community_college_computer_sciences_fca:3sfca_capacity",
              "duplicates": 244,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_computer_sciences_fca",
                "full_name": "community_college_computer_sciences_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college computer science program access score",
                "long_name": "Community college computer science program access score (3-step floating catchment areas)",
                "short_description": "Index of community college computer science program accessibility based on supply and demand of programs",
                "long_description": "Community college computer science program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college computer science program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "community_college_engineering_fca:3sfca_capacity",
              "duplicates": 244,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_fca",
                "full_name": "community_college_engineering_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college engineering program access score",
                "long_name": "Community college engineering program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "community_college_engineering_related_fca:3sfca_capacity",
              "duplicates": 244,
              "info": {
                "category": "Education",
                "measure_table": "dc_education_training.va_cttr_nces_2020_community_college_engineering_related_fca",
                "full_name": "community_college_engineering_related_fca:3sfca_capacity",
                "measure": "3sfca_capacity",
                "type": "index",
                "short_name": "Community college engineering-related program access score",
                "long_name": "Community college engineering-related program access score (3-step floating catchment areas)",
                "short_description": "Index of community college engineering-related program accessibility based on supply and demand of programs",
                "long_description": "Community college engineering-related program access score based on 3-step floating catchment areas. This method is an aggregation of programs per population ratios weighted by distance or travel time in each catchment area (area within which a program is accessible). Weights are defined for the demand for programs (adult population) and the supply is the capacity of programs (number of seats).",
                "statement": "The community college engineering-related program accessibility score in {features.name} is {value}",
                "citations": [
                  "lou04",
                  "lou09",
                  "lou03",
                  "saxon20"
                ],
                "source": [
                  {
                    "name": "National Center for Education Statistics",
                    "date_accessed": 2021,
                    "url": "https://nces.ed.gov"
                  }
                ]
              },
              "type": "unknown",
              "missing": 245
            },
            {
              "name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
              "duplicates": 69,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_phys_hlth_days_14_and_over",
                "full_name": "percent_poor_phys_hlth_days_14_and_over:perc_poor_phys_hlth_days_14_and_over",
                "measure": "perc_poor_phys_hlth_days_14_and_over",
                "type": "percent",
                "short_name": "Poor physical health population",
                "long_name": "Percent of the population with poor physical health",
                "short_description": "Percent of the population self-reporting poor physical health",
                "long_description": "Percent of the population self-reporting poor physical health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} percent of the population in {features.name} report poor physical health",
                "source": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ]
              },
              "type": "float",
              "missing": 70,
              "mean": 11.8331,
              "sd": 1.6579,
              "min": 7.1868,
              "max": 16.7287
            },
            {
              "name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
              "duplicates": 69,
              "info": {
                "category": "Health",
                "measure_table": "dc_health_behavior_diet.va_hdcttr_sdad_2015_2019_percent_poor_ment_hlth_days_14_and_over",
                "full_name": "percent_poor_ment_hlth_days_14_and_over:perc_poor_ment_hlth_days_14_and_over",
                "measure": "perc_poor_ment_hlth_days_14_and_over",
                "type": "percent",
                "short_name": "Poor mental health population",
                "long_name": "Percent of the population with poor mental health",
                "short_description": "Percent of the population self-reporting poor mental health",
                "long_description": "Percent of the population self-reporting poor mental health in over 14 days of the previous month. Based on the Virginia Behavioral Risk Factor Surveillance Survey.",
                "statement": "{value} percent of the population in {features.name} report poor mental health",
                "source": [
                  {
                    "name": "Virginia Behavioral Risk Factor Surveillance System",
                    "date_accessed": 2021,
                    "url": "https://www.vdh.virginia.gov/brfss/"
                  }
                ]
              },
              "type": "float",
              "missing": 70,
              "mean": 11.0482,
              "sd": 1.1744,
              "min": 7.5212,
              "max": 14.8132
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_100",
              "duplicates": 209,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_100",
                "measure": "perc_income_min_price_100",
                "type": "percent",
                "short_name": "Percent of income for fast internet",
                "long_name": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for fast internet (100 MB/s upload) as a percent of average income.",
                "statement": "Fast internet costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 1.3685,
              "sd": 0.9447,
              "min": 0.3673,
              "max": 5.0806
            },
            {
              "name": "perc_income_on_internet:perc_income_min_price_25",
              "duplicates": 209,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_min_price_25",
                "measure": "perc_income_min_price_25",
                "type": "percent",
                "short_name": "Percent of income for good internet",
                "long_name": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "short_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income",
                "long_description": "The minimum price for good internet (25 MB/s upload) as a percent of average income.",
                "statement": "Good internet costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 0.6988,
              "sd": 0.2473,
              "min": 0.296,
              "max": 1.2042
            },
            {
              "name": "perc_income_on_internet:perc_income_avg_nat_package",
              "duplicates": 209,
              "info": {
                "category": "Broadband",
                "measure_table": "dc_digital_communications.va_hdcttr_sdad_2021_perc_income_on_internet",
                "full_name": "perc_income_on_internet:perc_income_avg_nat_package",
                "measure": "perc_income_avg_nat_package",
                "type": "percent",
                "short_name": "Percent of income for internet (average)",
                "long_name": "The national average price for internet as a percent of average income",
                "short_description": "The national average price for internet ($64) as a percent of average income",
                "long_description": "The national average price for internet ($64) as a percent of average income.",
                "statement": "The national average internet package costs {value} percent of the average income in {features.name}",
                "source": [
                  {
                    "name": "American Community Survey",
                    "date_accessed": 2021,
                    "url": "https://www.census.gov/programs-surveys/acs.html"
                  },
                  {
                    "name": "Broadband Now",
                    "date_accessed": 2021,
                    "url": "https://broadbandnow.com/"
                  }
                ]
              },
              "type": "float",
              "missing": 210,
              "mean": 1.3613,
              "sd": 0.4498,
              "min": 0.5629,
              "max": 2.1182
            },
            {
              "name": "time",
              "duplicates": 238,
              "info": {
                "type": "year",
                "short_name": "Year",
                "full_name": "time"
              },
              "type": "integer",
              "missing": 0,
              "mean": 2018,
              "sd": 2.0041,
              "min": 2015,
              "max": 2021
            }
          ]
        },
        "_references": {
          "lou04": {
            "id": "lou04",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              }
            ],
            "year": 2004,
            "title": "Using a gis-based floating catchment method to assess areas with shortage of physicians",
            "journal": "Health & Place",
            "volume": "10",
            "number": 1,
            "page": "1-11",
            "doi": "10.1016/S1353-8292(02)00067-9"
          },
          "lou09": {
            "id": "lou09",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Yi",
                "family": "Qi"
              }
            ],
            "year": 2009,
            "title": "An enhanced two-step floating catchment area (e2sfca) method for measuring spatial accessibility to primary care physicians",
            "journal": "Health & Place",
            "volume": "15",
            "number": 4,
            "page": "1100-1107",
            "doi": "10.1016/j.healthplace.2009.06.002"
          },
          "lou03": {
            "id": "lou03",
            "author": [
              {
                "given": "Wei",
                "family": "Lou"
              },
              {
                "given": "Fahui",
                "family": "Wang"
              }
            ],
            "year": 2003,
            "title": "Measures of spatial accessibility to health care in a gis environment: synthesis and a case study in the Chicago region",
            "journal": "Environment and Planning B: Planning and Design",
            "volume": "30",
            "number": 6,
            "page": "865-884",
            "doi": "10.1068/b29120"
          },
          "saxon20": {
            "id": "saxon20",
            "author": [
              {
                "given": "James",
                "family": "Saxon"
              },
              {
                "given": "Julia",
                "family": "Koschinsky"
              },
              {
                "given": "Karina",
                "family": "Acosta"
              },
              {
                "given": "Vidal",
                "family": "Anguiano"
              },
              {
                "given": "Luc",
                "family": "Anselin"
              },
              {
                "given": "Sergio",
                "family": "Rey"
              }
            ],
            "year": 2020,
            "title": "An Open Software Environment to Make Spatial Access Metrics More Accessible",
            "journal": "University of Chicago: Center for Spatial Data Science",
            "volume": "Preprint",
            "doi": "10.13140/RG.2.2.12396.28807"
          },
          "gallardo20": {
            "id": "gallardo20",
            "author": [
              {
                "given": "Robert",
                "family": "Gallardo"
              }
            ],
            "year": 2020,
            "title": "Digital Divide Index",
            "journal": "Purdue Center for Regional Development",
            "url": "http://pcrd.purdue.edu/ddi"
          },
          "liang17": {
            "id": "liang17",
            "author": [
              {
                "given": "Lan",
                "family": "Liang"
              },
              {
                "given": "Cindy",
                "family": "Branch"
              }
            ],
            "year": 2017,
            "title": "Health Literacy Universal Precautions Are Still a Distant Dream: Analysis of U.S. Data on Health Literate Practices",
            "journal": "Health Literacy Research and Practice",
            "volume": "1",
            "number": 4,
            "page": "e216-e230",
            "doi": "10.3928/24748307-20170929-01"
          },
          "savitz20": {
            "id": "savitz20",
            "author": [
              {
                "given": "Samuel",
                "family": "Savitz"
              },
              {
                "given": "Stacy",
                "family": "Bailey"
              },
              {
                "given": "Stacie",
                "family": "Dusetzina"
              },
              {
                "given": "W.",
                "family": "Schuyler Jones"
              },
              {
                "given": "Justin",
                "family": "Trogdon"
              },
              {
                "given": "Sally",
                "family": "Stearns"
              }
            ],
            "year": 2020,
            "title": "Treatment selection and medication adherence for stable angina: The role of area-based health literacy",
            "journal": "Journal of Evaluation in Clinical Practice",
            "volume": "26",
            "number": 6,
            "page": "1711-1721",
            "doi": "10.1111/jep.13341"
          }
        },
        "site_file": "district.json"
      }
    },
    "files": ["health_district.csv", "county.csv", "tract.csv"]
  },
  "rules": [
    {
      "condition": [
        {
          "id": "selected_district",
          "type": "",
          "value": ""
        }
      ],
      "effects": {
        "display": "sec32"
      }
    }
  ],
  "variables": [
    {
      "id": "shapes",
      "states": [
        {
          "condition": [
            {
              "id": "selected_district",
              "type": "",
              "value": ""
            },
            {
              "id": "selected_county",
              "type": "!",
              "value": ""
            }
          ],
          "value": "county"
        },
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": ""
            }
          ],
          "value": "tract"
        }
      ],
      "default": "district"
    },
    {
      "id": "region_select",
      "states": [
        {
          "condition": [
            {
              "id": "shapes",
              "type": "=",
              "value": "county"
            }
          ],
          "value": "selected_county"
        }
      ],
      "default": "selected_district"
    },
    {
      "id": "selected_region",
      "states": [
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": ""
            }
          ],
          "value": "selected_county"
        }
      ],
      "default": "selected_district"
    }
  ],
  "dataviews": {
    "primary_view": {
      "palette": "",
      "y": "selected_variable",
      "x": "selected_year",
      "time_agg": "selected_year",
      "time_filters": [
        {
          "variable": "time",
          "type": ">=",
          "value": "min_year"
        },
        {
          "variable": "time",
          "type": "<=",
          "value": "max_year"
        }
      ],
      "dataset": "shapes",
      "ids": "selected_region",
      "features": {
        "type": "region_type"
      },
      "variables": [
        {
          "variable": "selected_variable",
          "type": "<=",
          "value": "variable_min"
        },
        {
          "variable": "selected_variable",
          "type": ">=",
          "value": "variable_max"
        }
      ]
    }
  },
  "info": {
    "variable_info_pane": {
      "title": "variables.short_name",
      "body": [
        {
          "name": "Year",
          "value": "data.time",
          "style": "table"
        },
        {
          "name": "",
          "value": "variables.source",
          "style": "table"
        }
      ],
      "default": [],
      "floating": false,
      "dataview": "primary_view",
      "variable_info": false
    },
    "info11": {
      "title": "features.name",
      "body": [],
      "default": {
        "title": "Virginia",
        "body": "Hover over or select a region for more information."
      },
      "floating": false,
      "dataview": "primary_view",
      "subto": ["main_map", "main_plot"],
      "variable_info": false
    },
    "info12": {
      "title": "",
      "body": [
        {
          "name": "Region Type",
          "value": "features.type",
          "style": "table"
        },
        {
          "name": "variables.long_name",
          "value": "selected_variable",
          "style": "stack"
        },
        {
          "name": "",
          "value": "variables.statement",
          "style": "table"
        }
      ],
      "default": [],
      "floating": false,
      "dataview": "primary_view",
      "subto": ["main_map", "main_plot"],
      "variable_info": false
    }
  },
  "text": {
    "text7": {
      "text": [
        {
          "button": {
            "b1": {
              "text": [
                "Virginia"
              ],
              "type": "reset",
              "target": "selected_district"
            }
          },
          "text": ["State: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "selected_district",
              "type": "",
              "value": ""
            }
          ],
          "button": {
            "b1": {
              "text": [
                "",
                "selected_district"
              ],
              "type": "reset",
              "target": "selected_county"
            }
          },
          "text": [" > Health District: ", "b1"]
        },
        {
          "condition": [
            {
              "id": "selected_county",
              "type": "",
              "value": ""
            }
          ],
          "text": [" > ", "selected_county"]
        }
      ]
    },
    "text8": {
      "text": [
        [
          {
            "text": "Virginia Health Districts",
            "condition": [
              {
                "id": "default",
                "type": "",
                "value": ""
              }
            ]
          },
          {
            "text": ["selected_district", " Counties"],
            "condition": [
              {
                "id": "selected_district",
                "type": "",
                "value": ""
              }
            ]
          },
          {
            "text": ["selected_county", " Census Tracts"],
            "condition": [
              {
                "id": "selected_county",
                "type": "",
                "value": ""
              }
            ]
          }
        ]
      ]
    }
  },
  "select": {
    "selected_variable": {
      "category": "variable_type"
    }
  },
  "tables": {
    "table17": {
      "scrollY": 400,
      "rowGroup": {
        "dataSrc": "features.name"
      },
      "columnDefs": [
        {
          "targets": "features.name",
          "visible": false
        }
      ],
      "buttons": ["copy", "csv", "excel", "print"],
      "dom": "<'row't><'row'<'col-sm'B><'col'f>>",
      "features": [
        {
          "name": "id",
          "title": "ID"
        },
        {
          "name": "name",
          "title": "Name"
        },
        {
          "name": "type",
          "title": "Type"
        }
      ],
      "filters": {
        "category": "variable_type"
      },
      "single_variable": false,
      "wide": false,
      "paging": false,
      "scrollX": 500,
      "scrollCollapse": true
    },
    "table19": {
      "info": false,
      "searching": false,
      "variables": "selected_variable",
      "single_variable": true,
      "wide": true,
      "paging": false,
      "scrollY": 500,
      "scrollX": 500,
      "scrollCollapse": true
    }
  },
  "plots": {
    "main_plot": {
      "layout": {
        "showlegend": false,
        "xaxis": {
          "title": false,
          "fixedrange": true
        },
        "yaxis": {
          "fixedrange": true,
          "zeroline": false
        },
        "hovermode": "closest",
        "margin": {
          "t": 25,
          "r": 10,
          "b": 40,
          "l": 60
        }
      },
      "config": {
        "modeBarButtonsToRemove": ["select2d", "lasso2d", "sendDataToCloud"],
        "showSendToCloud": false,
        "responsive": true,
        "showTips": false,
        "displaylogo": false,
        "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"]
      },
      "data": [
        {
          "type": "plot_type",
          "hoverinfo": "text",
          "mode": "lines+markers",
          "showlegend": false
        },
        {
          "type": "box",
          "fillcolor": "transparent",
          "hoverinfo": "text",
          "mode": "lines+markers",
          "showlegend": false,
          "name": "Summary"
        }
      ],
      "subto": [
        "main_map"
      ]
    }
  },
  "maps": {
    "main_map": {
      "shapes": [
        {
          "name": "district",
          "url": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/district.geojson",
          "id_property": "id"
        },
        {
          "name": "county",
          "url": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/county.geojson",
          "id_property": "id"
        },
        {
          "name": "tract",
          "url": "https://uva-bi-sdad.github.io/community/dist/shapes/VA/tract.geojson",
          "id_property": "id"
        }
      ],
      "options": {
        "attributionControl": false,
        "scrollWheelZoom": false,
        "center": [38, -79.5],
        "zoom": 7,
        "height": "430px",
        "subto": [
          "main_plot"
        ],
        "background_shapes": "county"
      },
      "tiles": {
        "light": {
          "url": "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        },
        "dark": {
          "url": "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        }
      }
    },
    "_raw": []
  },
  "credits": {
    "bootstrap": {
      "name": "Bootstrap",
      "url": "https://getbootstrap.com",
      "version": "5.1.3"
    },
    "leaflet": {
      "name": "Leaflet",
      "url": "https://leafletjs.com",
      "version": "1.7.1",
      "description": "A JS library for interactive maps"
    },
    "Stamen toner-light": {
      "name": "Stamen toner-light",
      "url": "https://stamen.com",
      "description": "Light-theme map tiles by Stamen Design"
    },
    "CARTO Dark Matter": {
      "name": "CARTO Dark Matter",
      "url": "https://carto.com/attributions",
      "description": "Dark-theme map tiles by CARTO"
    },
    "OpenStreetMap": {
      "name": "OpenStreetMap",
      "url": "https://www.openstreetmap.org/copyright"
    },
    "plotly": {
      "name": "Plotly",
      "url": "https://plotly.com/javascript/getting-started",
      "version": "2.8.3"
    },
    "datatables": {
      "name": "DataTables",
      "url": "https://datatables.net",
      "version": "1.11.3"
    }
  },
  "color_by_order": false,
  "boxplots": true,
  "theme_dark": false,
  "partial_init": true,
  "settings": {
    "digits": 3,
    "summary_selection": "all",
    "color_by_order": false,
    "boxplots": true,
    "theme_dark": false,
    "partial_init": false,
    "palette": "rdylbu7",
    "hide_url_parameters": false,
    "background_shapes": true
  }
}
