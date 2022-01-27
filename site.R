library(community)

# use `page_` functions to add parts of a page

## `page_head` adds to the page's meta data, and can be a place to import script and style sheets
page_head(
  title = "Virginia Department of Health Dashboard",
  description = "Example of a dashboard made with the community package.",
  icon = "icon.svg"
)

## `page_header` adds to the top bar (navbar) of the page
page_navbar(
  title = "Virginia Department of Health",
  logo = "icon.svg",
  input_button("Reset", "reset_selection", "reset.selection", class = "btn-link"),
  list(
    name = "Settings",
    backdrop = "false",
    items = list(
      input_switch("Dark Theme", id = "settings.theme_dark"),
      input_select("Color Palette", options = "palettes", id = "settings.palette", floating_label = FALSE),
      input_switch(
        "Color by Order", id = "settings.color_by_order",
        title = paste(
          "Switch from coloring by value to coloring by sorted index.",
          "This may help differentiate regions with similar values."
        )
      ),
      input_switch("Hide URL Settings", id = "settings.hide_url_parameters"),
      input_number("Digits", "settings.digits", default = 2, min = 0, max = 6, floating_label = FALSE),
      input_select(
        "Summary Level", options = c("dataset", "filtered", "all"), default = "dataset",
        display = c("All Regions", "Selected Region Types", "Selected Region"), id = "settings.summary_selection",
        floating_label = FALSE,
        title = paste(
          "Determins which regions are included in summaries for box-plots and color scaling;",
          "All-Regions are state-wide, Selected Region Types are filtered by the Region Types input, and",
          "Selected Region are filtered by region selection."
        )
      ),
      input_number("Variable Min", "variable_min", step = 1, floating_label = FALSE),
      input_number("Variable Max", "variable_max", step = 1, floating_label = FALSE),
      '<p class="section-heading">Map Options</p>',
      input_switch("Show Background Shapes", id = "settings.background_shapes"),
      '<p class="section-heading">Plot Options</p>',
      input_select("Plot Type", c("scatter", "bar"), "scatter", id = "plot_type", floating_label = FALSE),
      input_switch("Box Plots", default_on = TRUE, id = "settings.boxplots"),
      input_switch(
        "Use IQR Whiskers", default_on = TRUE, id = "settings.iqr_box",
        title = "Define the extreme fences of the box plots by 1.5 * interquartile range (true) or min and max (false)"
      ),
      input_button("Clear Settings", "reset_storage", "clear_storage", class = "btn-danger footer")
    )
  ),
  list(
    name = "About",
    items = list(
      page_text(c(
        paste0(
          "This site was made by the [Social and Decision Analytics Division]",
          "(https://biocomplexity.virginia.edu/institute/divisions/social-and-decision-analytics)",
          " of the [Biocomplexity Institute](https://biocomplexity.virginia.edu) for the ",
          "[Virginia Department of Health](https://www.vdh.virginia.gov)."
        ),
        "View its source on [GitHub](https://github.com/uva-bi-sdad/community_example).",
        "Credits",
        paste(
          "Built in [R](https://www.r-project.org) with the",
          "[community](https://uva-bi-sdad.github.io/community) package, using these resources:"
        )
      ), class = c("", "", "h5")),
      output_credits()
    )
  )
)

# use `input_` functions to add input elements that affect outputs
page_menu(
  page_section(
    type = "col",
    wraps = "row form-row",
    input_select(
      "Health District", options = "ids", dataset = "district", dataview = "primary_view",
      id = "selected_district", reset_button = TRUE
    ),
    input_select(
      "County", options = "ids", dataset = "county", dataview = "primary_view",
      id = "selected_county", reset_button = TRUE
    ),
    conditions = c("", "selected_district")
  ),
  input_checkbox("Region Types", options = c("rural", "mixed", "urban"), id = "region_type", as.switch = TRUE),
  page_section(
    type = "col",
    wraps = "row form-row",
    {
      vars <- jsonlite::read_json('../community_example/docs/data/measure_info.json')
      varcats <- Filter(nchar, unique(vapply(vars, function(v) if(is.null(v$category)) "" else v$category, "")))
      input_select("Variable Category", options = varcats, default = "Health", id = "variable_type")
    },
    input_select(
      "Variable", options = "variables",
      default = "no_health_insurance_19_to_64:no_hlth_ins_pct", depends = "shapes",
      id = "selected_variable", filters = list(category = "variable_type")
    )
  ),
  page_section(
    type = "col",
    page_section(
      type = "row",
      wraps = "col",
      input_number("First Year", "min_year", default = "min", max = "max_year", dataview = "primary_view"),
      input_number("Selected Year", min = "min_year", max = "max_year", default = "max", id = "selected_year"),
      input_number("Last Year", "max_year", default = "max", min = "min_year", dataview = "primary_view"),
      breakpoints = "md",
      sizes = c(3, NA, 3)
    )
  ),
  position = "top",
  default_open = TRUE,
  sizes = c(NA, 1, NA, 4)
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
  "primary_view",
  y = "selected_variable",
  x = "selected_year",
  dataset = "shapes",
  ids = "selected_region",
  features = c(type = "region_type"),
  variables = list(
    list(variable = "selected_variable", type = "<=", value = "variable_min"),
    list(variable = "selected_variable", type = ">=", value = "variable_max")
  ),
  time_agg = "selected_year",
  time_filters = list(
    list(
      variable = "time",
      type = ">=",
      value = "min_year"
    ),
    list(
      variable = "time",
      type = "<=",
      value = "max_year"
    )
  )
)

# use `page_section` to build the page's layout
page_section(
  type = "col",
  # use `output_` functions to add state and data displays
  output_text(c(
    "State: Virginia[r selected_district]",
    "? > Health District: {selected_district}[r selected_county]",
    "? > {selected_county}"
  )),
  output_text(list(
    "default" = "Virginia Health Districts",
    "selected_district" = "{selected_district} Counties",
    "selected_county" = "{selected_county} Census Tracts"
  ), tag = "h1", class = "text-center"),
  page_section(
    type = "row",
    wraps = "col",
    sizes = c(NA, 4),
    output_map(
      lapply(c("district", "county", "tract"), function(s) list(
        name = s,
        url = paste0("https://uva-bi-sdad.github.io/community/dist/shapes/VA/", s, ".geojson"),
        id_property = "id"
      )),
      dataview = "primary_view",
      click = "region_select",
      id = "main_map",
      subto = "main_plot",
      options = list(
        attributionControl = FALSE,
        scrollWheelZoom = FALSE,
        center = c(38, -79.5),
        zoom = 7,
        height = "430px"
      ),
      background_shapes = "county",
      tiles = list(
        light = list(url = "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"),
        dark = list(url = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png")
      ),
      attribution = list(
        list(
          name = "Stamen toner-light",
          url = "https://stamen.com",
          description = "Light-theme map tiles by Stamen Design"
        ),
        list(
          name = "CARTO Dark Matter",
          url = "https://carto.com/attributions",
          description = "Dark-theme map tiles by CARTO"
        ),
        list(
          name = "OpenStreetMap",
          url = "https://www.openstreetmap.org/copyright"
        )
      )
    ),
    page_section(
      type = "d-flex flex-column col align-items-end compact",
      ## use `output_info` to display information about selected and hovered-over entities
      output_info(
        title = "variables.short_name",
        body = c(Year = "data.time", "variables.source"),
        dataview = "primary_view",
        id = "variable_info_pane",
      ),
      page_section(
        wraps = "row",
        output_info(
          title = "features.name",
          default = c(title = "Virginia", body = "Hover over or select a region for more information."),
          dataview = "primary_view",
          subto = c("main_map", "main_plot")
        ),
        output_info(
          body = c(
            "Region Type" = "features.type",
            "variables.long_name" = "selected_variable",
            "variables.statement"
          ),
          row_style = c("table", "stack"),
          dataview = "primary_view",
          subto = c("main_map", "main_plot"),
          variable_info = FALSE
        )
      ),
      output_legend("settings.palette", "Below", "Region Median", "Above"),
      wraps = c("row", "row mb-auto", "row")
    )
  ),
  page_section(
    type = "row",
    wraps = "col",
    sizes = c(7, 5),
    page_tabgroup(
      list(
        name = "Plot",
        output_plot(
          x = "time", y = "selected_variable", dataview = "primary_view",
          click = "region_select", subto = "main_map", id = "main_plot",
          options = list(
            layout = list(
              showlegend = FALSE,
              xaxis = list(title = FALSE, fixedrange = TRUE),
              yaxis = list(fixedrange = TRUE, zeroline = FALSE)
            ),
            data = data.frame(
              type = c("plot_type", "box"), fillcolor = c(NA, "transparent"),
              hoverinfo = c("text", NA), mode = "lines+markers", showlegend = FALSE,
              name = c(NA, "Summary"), marker.line.color = "#767676", marker.line.width = 1
            ),
            config = list(modeBarButtonsToRemove = c("select2d", "lasso2d", "sendDataToCloud"))
          )
        )
      ),
      list(
        name = "Data",
        output_table(
          dataview = "primary_view", wide = FALSE, filters = list(category = "variable_type"),
          features = c(ID = "id", Name = "name", Type = "type"),
          options = list(
            scrollY = 400,
            rowGroup = list(dataSrc = "features.name"),
            columnDefs = list(list(targets = "features.name", visible = FALSE)),
            buttons = c('copy', 'csv', 'excel', 'print'),
            dom = "<'row't><'row'<'col-sm'B><'col'f>>"
          )
        )
      )
    ),
    output_table("selected_variable", dataview = "primary_view", options = list(
      info = FALSE,
      searching = FALSE
    ))
  )
)

# render the site
vars <- jsonlite::read_json('../community_example/docs/data/measure_info.json')
site_build('../community_example', variables = names(vars))
