library(community)

# use `page_` functions to add parts of a page

## `page_head` adds to the page's meta data, and can be a place to import script and style sheets
page_head(
  title = "Virginia Department of Health Dashboard",
  description = "Example of a dashboard made with the community package.",
  icon = "https://www.vdh.virginia.gov/content/themes/vdh-shared/assets/images/icon.png"
)

## `page_header` adds to the top bar (navbar) of the page
page_navbar(
  "Virginia Department of Health",
  "https://www.developer.virginia.gov/media/developer/resources/brand/banner/latest/cardinal.svg",
  input_button("Reset", "reset_selection", "reset.selection", class = "btn-link"),
  list(
    name = "Settings",
    backdrop = "false",
    items = list(
      input_switch("Dark Theme", default_on = FALSE, id = "settings.theme_dark"),
      input_select(
        "Color Palette", options = "palettes", default = "rdylbu7", id = "selected_palette",
        floating_label = FALSE
      ),
      input_switch(
        "Color by Order", default_on = FALSE, id = "settings.color_by_order",
        title = paste(
          "Switch from coloring by value to coloring by sorted index.",
          "This may help differentiate regions with similar values."
        )
      ),
      input_number("Digits", "settings.digits", min = 0, max = 6, floating_label = FALSE),
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
      '<p class="section-heading">Plot Options</p>',
      input_switch("Box Plots", id = "settings.boxplots"),
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
      "Health District", options = "levels",
      variable = "ID", dataset = "district", dataview = "primary_view",
      id = "selected_district", reset_button = TRUE
    ),
    input_select(
      "County", options = "levels",
      variable = "ID", dataset = "county", dataview = "primary_view",
      id = "selected_county", reset_button = TRUE
    ),
    conditions = c("", "selected_district")
  ),
  input_checkbox("Region Types", options = c("rural", "mixed", "urban"), id = "region_type", as.switch = TRUE),
  page_section(
    type = "col",
    wraps = "row form-row",
    {
      vars <- jsonlite::read_json('docs/data/measure_info.json')
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
  ),
  palette = "selected_palette"
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
    {
      ## add a map
      shape_names <- c("district", "county", "tract")
      shapes <- structure(paste0(
        "https://uva-bi-sdad.github.io/community/dist/shapes/VA/",
        shape_names,
        ".geojson"
      ), names = shape_names)
      output_map(
        shapes,
        dataview = "primary_view",
        click = "region_select",
        subto = "plot0",
        options = list(
          attributionControl = FALSE,
          scrollWheelZoom = FALSE,
          center = c(38, -79.5),
          zoom = 7,
          height = "430px"
        ),
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
      )
    },
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
          subto = c("map0", "plot0")
        ),
        output_info(
          body = c(
            "Region Type" = "features.type",
            "variables.long_name" = "selected_variable",
            "variables.statement"
          ),
          row_style = c("table", "stack"),
          dataview = "primary_view",
          subto = c("map0", "plot0"),
          variable_info = FALSE
        )
      ),
      output_legend("selected_palette", "Below", "Region Median", "Above"),
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
              xaxis = list(title = FALSE, fixedrange = TRUE),
              yaxis = list(fixedrange = TRUE, zeroline = FALSE)
            ) |>
            config(
              responsive = TRUE,
              showTips = FALSE,
              displaylogo = FALSE,
              modeBarButtonsToRemove = c("select2d", "lasso2d", "sendDataToCloud")
            )
          
          ### then specify dynamic variables, and use the template plot for configuration
          output_plot(
            x = "time",
            y = "selected_variable",
            dataview = "primary_view",
            click = "region_select",
            subto = "map0",
            options = plotly_json(template, FALSE, FALSE)
          )
        }
      ),
      list(
        name = "Data",
        output_table(dataview = "primary_view", filters = list(category = "variable_type"), options = list(
          paging = FALSE,
          scrollY = 400,
          scrollX = 500,
          scrollCollapse = TRUE,
          rowGroup = list(dataSrc = "features.name"),
          columnDefs = list(list(targets = "features.name", visible = FALSE)),
          buttons = c('copy', 'csv', 'excel', 'print'),
          dom = "<'row't><'row'<'col'B><'col'f>>"
        ))
      )
    ),
    output_table("selected_variable", dataview = "primary_view", wide = TRUE, options = list(
      info = FALSE,
      paging = FALSE,
      searching = FALSE,
      scrollY = 500,
      scrollX = 500,
      scrollCollapse = TRUE
    ))
  )
)

# render the site
site_build(variables = c('ID', names(vars)))
