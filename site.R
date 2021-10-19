library(community)

# use `page_` functions to add parts of a page

## `page_head` adds to the page's meta data, and can be a place to import script and style sheets
page_head(
  title = "Virginia Department of Health Dashboard",
  icon = "https://www.vdh.virginia.gov/content/themes/vdh-shared/assets/images/icon.png"
)

## `page_header` adds to the top bar (navbar) of the page
page_navbar(
  "Virginia Department of Health",
  "https://www.developer.virginia.gov/media/developer/resources/brand/banner/latest/cardinal.svg"
)

# use `input_` functions to add input elements that affect outputs
page_menu(
  input_select(
    "Select a Health District", options = "levels",
    variable = "ID", dataset = "district", dataview = "primary_view",
    id = "selected_district", reset_button = TRUE
  ),
  input_select(
    "Select a County", options = "levels",
    variable = "ID", dataset = "county", dataview = "primary_view",
    id = "selected_county", reset_button = TRUE
  ),
  input_checkbox("Select a Region Type", options = c("rural", "mixed", "urban"), id = "region_type"),
  input_slider("Select a Year", variable = "year", id = "selected_year"),
  input_select(
    "Select a Variable",
    options = "variables", id = "selected_variable",
    default = "health_score", depends = "shapes"
  ),
  position = "top",
  default_open = TRUE,
  conditions = c("", "selected_district", "", "", "")
)

## `input_variable` can be used to set up logical controls
input_variable("shapes", list(
  "selected_district && !selected_county" = "county",
  "selected_county" = "tract"
), "district")

input_variable("region_select", list(
  "shapes == county" = "selected_county"
), "selected_district")

input_variable("selected_region", list(
  "selected_county" = "selected_county"
), "selected_district")

## `input_dataview` can collect multiple inputs as filters for a shared data view
input_dataview(
  dataset = "shapes",
  ids = "selected_region",
  features = c(type = "region_type"),
  id = "primary_view"
)

## `input_rule` can be used to specify if-then conditions for inputs
# input_rule("scale == 'county' & shapes == 'district'", list(shapes = "county"))

# use `page_section` to build the page's layout
page_section(
  type = "col",
  page_section(
    type = "row",
    wraps = "col",
    sizes = c(8, 4),
    
    # use `output_` functions to add data displays
    {
      ## add a map
      shape_names <- c("district", "county", "tract")
      shapes <- structure(paste0(
        "https://raw.githubusercontent.com/uva-bi-sdad/VDH/main/src/dashboard/app/assets/",
        shape_names,
        ".geojson"
      ), names = shape_names)
      output_map(
        shapes,
        color = "selected_variable",
        color_time = "selected_year",
        dataview = "primary_view",
        click = "region_select",
        subto = "plot0",
        options = list(
          attributionControl = FALSE,
          scrollWheelZoom = FALSE,
          center = c(38, -79.5),
          zoom = 7
        ),
        tiles = list(url = "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"),
      )
    },
    
    ## add an pane to display information about selected and hovered over data
    output_info("Virginia", "Hover over or select a region for more information.", "primary_view", c("map0", "plot0"))
  ),
  page_section(
    type = "row",
    {
      ## make plots with plotly
      library(plotly)
      
      ### make a template plot
      template <- plot_ly(
        hoverinfo = "text",
        type = "scatter",
        mode = "lines+markers",
        showlegend = FALSE
      ) |>
        add_trace(
          name = "Box Plot",
          inherit = FALSE,
          type = "box",
          fillcolor = "transparent",
          line = list(color = "#d6d6d6")
        ) |>
        layout(
          xaxis = list(fixedrange = TRUE),
          yaxis = list(fixedrange = TRUE)
        ) |>
        config(
          responsive = TRUE,
          displayModeBar = FALSE,
          showTips = FALSE
        )
      
      ### then specify dynamic variables, and use the template plot for configuration
      output_plot(
        x = "year",
        y = "selected_variable",
        color = "selected_variable",
        color_time = "selected_year",
        dataview = "primary_view",
        click = "region_select",
        subto = "map0",
        options = plotly_json(template, FALSE, FALSE)
      )
    }
  ),
  page_section(
    type = "row",
    output_table(dataview = "primary_view")
  )
)

# render the site
site_build("../demo_site", bundle_data = TRUE)
