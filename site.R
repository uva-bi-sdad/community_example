library(community)

# use `page_` functions to add parts of a page

## `page_head` adds to the page's meta data, and can be a place to import script and style sheets
page_head(
  title = "Virginia Department of Health Data Commons",
  description = "Virginia Department of Health Data Commons.",
  icon = "icon.svg"
)

## `page_header` adds to the top bar (navbar) of the page
page_navbar(
  title = "Virginia Department of Health Data Commons",
  logo = "icon.svg",
  input_button("Reset", "reset_selection", "reset.selection", class = "btn-link", note = "Reset the menu inputs to their defaults."),
  input_button("Filter", "filter", "open.filter", class = "btn-link"),
  list(
    name = "Settings",
    backdrop = "false",
    class = "menu-compact",
    items = list(
      input_switch("Dark Theme", id = "settings.theme_dark"),
      input_select("Color Palette", options = "palettes", id = "settings.palette", floating_label = FALSE),
      input_switch(
        "Color by Rank", id = "settings.color_by_order",
        note = paste(
          "Switch from coloring by value to coloring by sorted index.",
          "This may help differentiate regions with similar values."
        )
      ),
      input_switch("Hide URL Settings", id = "settings.hide_url_parameters"),
      input_switch("Hide Tooltips", id = "settings.hide_tooltips"),
      input_number("Digits", "settings.digits", default = 2, min = 0, max = 6, floating_label = FALSE),
      input_select(
        "Color Scale Center", options = c("none", "median", "mean"), default = "none",
        display = c("None", "Median", "Mean"), id = "settings.color_scale_center",
        floating_label = FALSE,
        note = "Determines whether and on what the color scale should be centered."
      ),
      input_select(
        "Summary Level", options = c("dataset", "filtered", "children", "all"), default = "dataset",
        display = c("All Regions", "Selected Region Types", "Selected Super-Region", "Showing Regions"), id = "settings.summary_selection",
        floating_label = FALSE,
        note = paste(
          "Determines which regions are included in summaries for box-plots and color scaling;",
          "All-Regions are state-wide, Selected Region Types are filtered by the Region Types input, and",
          "Selected Region are filtered by region selection."
        )
      ),
      '<p class="section-heading">Map Options</p>',
      input_switch("Show Overlay", default_on = TRUE, id = "settings.map_overlay"),
      input_switch("Show Background Shapes", default_on = TRUE, id = "settings.background_shapes"),
      input_select(
        "Animations", c("fly", "zoom", "none"), "fly",
        note = "Fly animates the whole move to different regions; Zoom only animates changes in zoom level.",
        id = "settings.map_animations", floating_label = FALSE
      ),
      input_number(
        "Outline Weight", "settings.polygon_outline", default = 1.5, step = .5, floating_label = FALSE,
        note = "Thickness of the outline around region shapes."
      ),
      input_number(
        "Overlay Circle Size", "settings.circle_radius", default = 5, step = 1, floating_label = FALSE,
        note = "Radius of the circles that are parts of overlays."
      ),
      input_select(
        "Overlay Circle Property", "overlay_properties", id = "settings.circle_property", floating_label = FALSE,
        note = "Property to adjust circle size by."
      ),
      '<p class="section-heading">Plot Options</p>',
      input_select("Plot Type", c("scatter", "scattergl", "bar"), "scatter", id = "plot_type", floating_label = FALSE),
      input_switch("Box Plots", default_on = TRUE, id = "settings.boxplots"),
      input_switch(
        "Use IQR Whiskers", default_on = TRUE, id = "settings.iqr_box",
        note = "Define the extreme fences of the box plots by 1.5 * interquartile range (true) or min and max (false)."
      ),
      input_number(
        "Trace Limit", "settings.trace_limit", default = 20, floating_label = FALSE,
        note = "Limit the number of plot traces that can be drawn, split between extremes of the variable."
      ),
      '<p class="section-heading">Table Options</p>',
      input_switch("Auto-Sort", default_on = TRUE, id = "settings.table_autosort"),
      input_switch("Auto-Scroll", default_on = TRUE, id = "settings.table_autoscroll"),
      input_select(
        "Scroll Behavior", c("instant", "smooth", "auto"), "auto",
        id = "settings.table_scroll_behavior", floating_label = FALSE
      )
    ),
    foot = list(
      input_button("Clear Settings", "reset_storage", "clear_storage", class = "btn-danger")
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
        input_button("Download All Data", "export", query = list(
          features = list(geoid = "id", name = "name", region_type = "type")
        ), class = "btn-full"),
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
  input_checkbox(
    "Starting Layer", c("district", "county", "tract"), 1, c("Districts", "Counties", "Census Tracts"),
    id = "starting_shapes", multi = FALSE, note = "Which geographies to show at the state level."
  ),
  page_section(
    type = "col",
    wraps = "row form-row",
    input_combobox(
      "Health District", options = "ids", dataset = "district", dataview = "primary_view",
      id = "selected_district", clearable = TRUE, note = paste(
        "Health districts are sets of counties defined by the Virginia Department of Health."
      )
    ),
    input_combobox(
      "County", options = "ids", dataset = "county", dataview = "primary_view",
      id = "selected_county", selection_subset = "county_subset", clearable = TRUE
    ),
    conditions = c("lock: !selected_county", "starting_shapes != district || selected_district")
  ),
  input_checkbox(
    "Region Types", options = c("rural", "mixed", "urban"), id = "region_type", as.switch = TRUE,
    note = paste(
      "Which region types to include. Types are defined at the county level, so only health districts",
      "have mixed types, and all tracts are of the same type as their county."
    )
  ),
  page_section(
    type = "col",
    wraps = "row form-row",
    input_combobox(
      "Variable", options = "variables", group_feature = "category",
      default = "no_health_insurance_19_to_64:hlth_ins_pct", depends = "shapes",
      id = "selected_variable", note = paste(
        "Determines which variable is shown on the plot's y-axis, in the rank table,",
        "and info fields, and used to color map polygons and plot elements."
      )
    )
  ),
  position = "top",
  default_open = TRUE,
  sizes = c(1, NA, 1, NA)
)

## `input_variable` can be used to set up logical controls
input_variable("shapes", list(
  "starting_shapes == district && !selected_district" = "district",
  "starting_shapes == tract || selected_county" = "tract"
), "county")

input_variable("region_select", list(
  "shapes == county" = "selected_county"
), "selected_district")

input_variable("selected_region", list(
  "selected_county" = "selected_county"
), "selected_district")

input_variable("county_subset", list(
  "selected_district" = "siblings"
), "full_filter")

## `input_dataview` can collect multiple inputs as filters for a shared data view
input_dataview(
  "primary_view",
  y = "selected_variable",
  x = "selected_year",
  dataset = "shapes",
  ids = "selected_region",
  features = c(type = "region_type"),
  time_agg = "selected_year",
)

# use `page_section` to build the page's layout
page_section(
  type = "col",
  # use `output_` functions to add state and data displays
  output_text(c(
    "State: Virginia[r selected_county,selected_district]",
    "? > Health District: {selected_district}[r selected_county]",
    "? > {selected_county}"
  ), class = "compact"),
  output_text(list(
    "default" = "Virginia Counties",
    "starting_shapes == tract" = "Virginia Census Tracts",
    "starting_shapes == district" = "Virginia (Health Districts)[note: Sets of counties defined by the Virginia Department of Health.]",
    "selected_district" = "{selected_district} Counties",
    "selected_county" = "{selected_county} Census Tracts"
  ), tag = "h1", class = "text-center"),
  page_section(
    type = "container-xsm",
    input_number(
      "Selected Year", min = "filter.time_min", max = "filter.time_max", default = "max",
      id = "selected_year", buttons = TRUE, show_range = TRUE, note = paste(
        "Year of the selected variable to color the map shapes and plot elements by, and to show on hover."
      )
    )
  ),
  page_section(
    type = "row",
    wraps = "col",
    sizes = c(NA, 5),
    output_map(
      list(
        list(
          name = "tract",
          time = 2010,
          url = paste0(
            "https://raw.githubusercontent.com/uva-bi-sdad/sdc.geographies/main/VA/Census%20Geographies/",
            "Tract/2010/data/distribution/va_geo_census_cb_2010_census_tracts.geojson"
          )
        ),
        list(
          name = "county",
          time = 2010,
          url = paste0(
            "https://raw.githubusercontent.com/uva-bi-sdad/sdc.geographies/main/VA/Census%20Geographies/",
            "County/2010/data/distribution/va_geo_census_cb_2010_counties.geojson"
          )
        ),
        list(
          name = "tract",
          time = 2020,
          url = paste0(
            "https://raw.githubusercontent.com/uva-bi-sdad/sdc.geographies/main/VA/Census%20Geographies/",
            "Tract/2020/data/distribution/va_geo_census_cb_2020_census_tracts.geojson"
          )
        ),
        list(
          name = "county",
          time = 2020,
          url = paste0(
            "https://raw.githubusercontent.com/uva-bi-sdad/sdc.geographies/main/VA/Census%20Geographies/",
            "County/2020/data/distribution/va_geo_census_cb_2020_counties.geojson"
          )
        ),
        list(
          name = "district",
          url = paste0(
            "https://raw.githubusercontent.com/uva-bi-sdad/sdc.geographies/main/VA/State%20Geographies/Health%20Districts/",
            "2020/data/distribution/va_geo_vhd_2020_health_districts.geojson"
          )
        )
      ),
      overlays = {
        layers <- lapply(2013:2020, function(year) list(
          url = paste0("https://raw.githubusercontent.com/uva-bi-sdad/dc.education/main/docs/points_", year, ".geojson"),
          time = year
        ))
        hospital_layer <- list(list(
          url = "https://raw.githubusercontent.com/uva-bi-sdad/dc.hifld.hosp/master/docs/points_2020.geojson",
          time = 2020
        ))
        c(
          list(
            list(
              variable = "hhs:hospitals_per_100k",
              source = hospital_layer
            ),
            list(
              variable = "hhs:hospitals_min_drivetime",
              source = hospital_layer
            ),
            list(
              variable = "hhs:intensive_care_per_100k",
              source = hospital_layer,
              filter = list(feature = "total_icu_beds_7_day_avg", operator = "!=", value = 0)
            ),
            list(
              variable = "hhs:intensive_care_min_drivetime",
              source = hospital_layer,
              filter = list(feature = "total_icu_beds_7_day_avg", operator = "!=", value = 0)
            ),
            list(
              variable = "hhs:childrens_hospitals_per_100k",
              source = hospital_layer,
              filter = list(feature = "hospital_subtype", operator = "=", value = "Childrens Hospitals")
            ),
            list(
              variable = "hhs:childrens_hospitals_min_drivetime",
              source = hospital_layer,
              filter = list(feature = "hospital_subtype", operator = "=", value = "Childrens Hospitals")
            ),
            list(
              variable = "nces:schools_2year_per_100k",
              source = layers,
              filter = list(feature = "ICLEVEL", operator = "=", value = 2)
            ),
            list(
              variable = "nces:schools_under2year_per_100k",
              source = layers,
              filter = list(feature = "ICLEVEL", operator = "=", value = 3)
            ),
            list(
              variable = "nces:schools_2year_min_drivetime",
              source = layers,
              filter = list(feature = "ICLEVEL", operator = "=", value = 2)
            ),
            list(
              variable = "nces:schools_under2year_min_drivetime",
              source = layers,
              filter = list(feature = "ICLEVEL", operator = "=", value = 3)
            )
          ),
          lapply(c("biomedical", "computer", "engineering", "physical", "science"), function(p) list(
            variable = paste0("nces:schools_2year_with_", p, "_program_per_100k"),
            source = layers,
            filter = list(
              list(feature = "ICLEVEL", operator = "=", value = 2),
              list(feature = p, operator = "=", value = 1)
            )
          ))
        )
      },
      dataview = "primary_view",
      click = "region_select",
      id = "main_map",
      subto = c("main_plot", "rank_table", "main_legend"),
      options = list(
        attributionControl = FALSE,
        scrollWheelZoom = FALSE,
        center = c(38, -79.5),
        zoom = 7,
        height = "430px",
        zoomAnimation = "settings.map_zoom_animation"
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
      type = "flex-column col",
      ## use `output_info` to display information about selected and hovered-over entities
      output_info(
        title = "variables.short_name",
        dataview = "primary_view",
        id = "variable_info_pane",
      ),
      page_popup(
        "Export",
        page_section(
          wraps = "col",
          input_select("Table Format", c("tall", "mixed", "wide"), "mixed", id = "export_table_format"),
          input_select("File Format", c("csv", "tsv"), "csv", c("CSV", "TSV"), id = "export_file_format")
        ),
        input_button(
          "Download", "export", dataview = "primary_view", query = list(
            include = "selected_variable",
            features = list(geoid = "id", name = "name"),
            table_format = "export_table_format", file_format = "export_file_format"
          ), class = "btn-full"
        ),
        input_button(
          "Copy API link", "copy", dataview = "primary_view", query = list(
            include = "selected_variable", dataset = "shapes",
            features = list(geoid = "id", name = "name"),
            table_format = "export_table_format", file_format = "export_file_format"
          ), class = "btn-full"
        )
      ),
      output_info(body = "summary", dataview = "primary_view"),
      output_info("Filters", "filter", dataview = "primary_view"),
      page_section(
        output_info(
          title = "features.name",
          default = c(title = "Virginia", body = "Hover over or select a region for more information."),
          dataview = "primary_view",
          subto = c("main_map", "main_plot", "rank_table", "main_legend")
        ),
        output_info(
          body = c(
            "Region Type" = "features.type",
            "variables.long_name" = "selected_variable",
            "variables.statement"
          ),
          row_style = c("table", "stack"),
          dataview = "primary_view",
          subto = c("main_map", "main_plot", "rank_table", "main_legend"),
          variable_info = FALSE
        )
      )
    )
  ),
  page_section(
    type = "row",
    wraps = "col",
    sizes = c(5, 7),
    page_section(
      output_legend(
        "settings.palette", dataview = "primary_view", click = "region_select",
        subto = c("main_map", "main_plot", "rank_table"), id = "main_legend"
      ),
      output_table("selected_variable", dataview = "primary_view", options = list(
        info = FALSE,
        searching = FALSE,
        scrollY = 300,
        dom = "<'row't>"
      ), id = "rank_table", click = "region_select", subto = c("main_map", "main_plot", "main_legend"))
    ),
    output_plot(
      x = "time", y = "selected_variable", dataview = "primary_view",
      click = "region_select", subto = c("main_map", "rank_table", "main_legend"), id = "main_plot",
      options = list(
        layout = list(
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
  )
)