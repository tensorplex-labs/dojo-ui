export const dropdownOptions = [
  { text: "Most Attempted" },
  { text: "Most Recent" },
  { text: "Highest Potential Yield" },
  { text: "Least Questions" },
];

// const categoryTypes = [
//   { label: "Object Detection", isActive: false },
//   { label: "Content Classification", isActive: false },
//   { label: "Semantic Segmentation", isActive: false },
//   { label: "Named Entity Recognition", isActive: false },
//   { label: "Object & Event Detection", isActive: false },
// ];
// export const mockData = new Array(50).fill(null).map((_, index) => {
//   // Generate a random number for the time remaining
//   const randomNumber = Math.floor(Math.random() * 60); // Random number between 0 and 59
//   let expiry;

//   if (randomNumber === 0) {
//     expiry = "Expired"; // Changed from "<1m left" to "Expired"
//   } else {
//     expiry = `${randomNumber}m`; // Minutes
//   }

//   // Generate slots filled and total slots
//   const slotsFilled = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
//   const totalSlots = Math.floor(Math.random() * (15 - slotsFilled)) + slotsFilled; // Random number between slotsFilled and 15

//   return {
//     name: `Item ${index + 1}`,
//     type: categoryTypes[index % categoryTypes.length].label, // Cycle through category types
//     yield: `${index + 1} stTAO`,
//     expiry: expiry,
//     slotsFilled: `${slotsFilled}/${totalSlots}`, // Updated to show filled slots out of total slots
//     operations: "Operation Data",
//   };
// });

export const mockData = [
  {
    "name": "Item 1",
    "type": "Object Detection",
    "yield": "1 stTAO",
    "expiry": "Expired",
    "slotsFilled": "5/10",
    "operations": "Operation Data"
  },
  {
    "name": "Item 2",
    "type": "Content Classification",
    "yield": "2 stTAO",
    "expiry": "14m",
    "slotsFilled": "5/14",
    "operations": "Operation Data"
  },
  {
    "name": "Item 3",
    "type": "Semantic Segmentation",
    "yield": "3 stTAO",
    "expiry": "8m",
    "slotsFilled": "2/9",
    "operations": "Operation Data"
  },
  {
    "name": "Item 4",
    "type": "Named Entity Recognition",
    "yield": "4 stTAO",
    "expiry": "5m",
    "slotsFilled": "4/8",
    "operations": "Operation Data"
  },
  {
    "name": "Item 5",
    "type": "Object & Event Detection",
    "yield": "5 stTAO",
    "expiry": "24m",
    "slotsFilled": "2/8",
    "operations": "Operation Data"
  },
  {
    "name": "Item 6",
    "type": "Object Detection",
    "yield": "6 stTAO",
    "expiry": "53m",
    "slotsFilled": "9/14",
    "operations": "Operation Data"
  },
  {
    "name": "Item 7",
    "type": "Content Classification",
    "yield": "7 stTAO",
    "expiry": "34m",
    "slotsFilled": "9/9",
    "operations": "Operation Data"
  },
  {
    "name": "Item 8",
    "type": "Semantic Segmentation",
    "yield": "8 stTAO",
    "expiry": "18m",
    "slotsFilled": "7/7",
    "operations": "Operation Data"
  },
  {
    "name": "Item 9",
    "type": "Named Entity Recognition",
    "yield": "9 stTAO",
    "expiry": "26m",
    "slotsFilled": "5/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 10",
    "type": "Object & Event Detection",
    "yield": "10 stTAO",
    "expiry": "20m",
    "slotsFilled": "8/9",
    "operations": "Operation Data"
  },
  {
    "name": "Item 11",
    "type": "Object Detection",
    "yield": "11 stTAO",
    "expiry": "47m",
    "slotsFilled": "4/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 12",
    "type": "Content Classification",
    "yield": "12 stTAO",
    "expiry": "53m",
    "slotsFilled": "1/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 13",
    "type": "Semantic Segmentation",
    "yield": "13 stTAO",
    "expiry": "55m",
    "slotsFilled": "4/12",
    "operations": "Operation Data"
  },
  {
    "name": "Item 14",
    "type": "Named Entity Recognition",
    "yield": "14 stTAO",
    "expiry": "58m",
    "slotsFilled": "10/14",
    "operations": "Operation Data"
  },
  {
    "name": "Item 15",
    "type": "Object & Event Detection",
    "yield": "15 stTAO",
    "expiry": "5m",
    "slotsFilled": "4/4",
    "operations": "Operation Data"
  },
  {
    "name": "Item 16",
    "type": "Object Detection",
    "yield": "16 stTAO",
    "expiry": "58m",
    "slotsFilled": "3/5",
    "operations": "Operation Data"
  },
  {
    "name": "Item 17",
    "type": "Content Classification",
    "yield": "17 stTAO",
    "expiry": "38m",
    "slotsFilled": "8/10",
    "operations": "Operation Data"
  },
  {
    "name": "Item 18",
    "type": "Semantic Segmentation",
    "yield": "18 stTAO",
    "expiry": "33m",
    "slotsFilled": "6/13",
    "operations": "Operation Data"
  },
  {
    "name": "Item 19",
    "type": "Named Entity Recognition",
    "yield": "19 stTAO",
    "expiry": "52m",
    "slotsFilled": "10/12",
    "operations": "Operation Data"
  },
  {
    "name": "Item 20",
    "type": "Object & Event Detection",
    "yield": "20 stTAO",
    "expiry": "25m",
    "slotsFilled": "3/4",
    "operations": "Operation Data"
  },
  {
    "name": "Item 21",
    "type": "Object Detection",
    "yield": "21 stTAO",
    "expiry": "10m",
    "slotsFilled": "5/9",
    "operations": "Operation Data"
  },
  {
    "name": "Item 22",
    "type": "Content Classification",
    "yield": "22 stTAO",
    "expiry": "29m",
    "slotsFilled": "9/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 23",
    "type": "Semantic Segmentation",
    "yield": "23 stTAO",
    "expiry": "58m",
    "slotsFilled": "1/4",
    "operations": "Operation Data"
  },
  {
    "name": "Item 24",
    "type": "Named Entity Recognition",
    "yield": "24 stTAO",
    "expiry": "48m",
    "slotsFilled": "2/3",
    "operations": "Operation Data"
  },
  {
    "name": "Item 25",
    "type": "Object & Event Detection",
    "yield": "25 stTAO",
    "expiry": "27m",
    "slotsFilled": "10/10",
    "operations": "Operation Data"
  },
  {
    "name": "Item 26",
    "type": "Object Detection",
    "yield": "26 stTAO",
    "expiry": "22m",
    "slotsFilled": "5/12",
    "operations": "Operation Data"
  },
  {
    "name": "Item 27",
    "type": "Content Classification",
    "yield": "27 stTAO",
    "expiry": "11m",
    "slotsFilled": "9/13",
    "operations": "Operation Data"
  },
  {
    "name": "Item 28",
    "type": "Semantic Segmentation",
    "yield": "28 stTAO",
    "expiry": "51m",
    "slotsFilled": "8/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 29",
    "type": "Named Entity Recognition",
    "yield": "29 stTAO",
    "expiry": "21m",
    "slotsFilled": "2/13",
    "operations": "Operation Data"
  },
  {
    "name": "Item 30",
    "type": "Object & Event Detection",
    "yield": "30 stTAO",
    "expiry": "26m",
    "slotsFilled": "7/8",
    "operations": "Operation Data"
  },
  {
    "name": "Item 31",
    "type": "Object Detection",
    "yield": "31 stTAO",
    "expiry": "20m",
    "slotsFilled": "8/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 32",
    "type": "Content Classification",
    "yield": "32 stTAO",
    "expiry": "16m",
    "slotsFilled": "4/14",
    "operations": "Operation Data"
  },
  {
    "name": "Item 33",
    "type": "Semantic Segmentation",
    "yield": "33 stTAO",
    "expiry": "33m",
    "slotsFilled": "9/13",
    "operations": "Operation Data"
  },
  {
    "name": "Item 34",
    "type": "Named Entity Recognition",
    "yield": "34 stTAO",
    "expiry": "53m",
    "slotsFilled": "10/10",
    "operations": "Operation Data"
  },
  {
    "name": "Item 35",
    "type": "Object & Event Detection",
    "yield": "35 stTAO",
    "expiry": "32m",
    "slotsFilled": "7/14",
    "operations": "Operation Data"
  },
  {
    "name": "Item 36",
    "type": "Object Detection",
    "yield": "36 stTAO",
    "expiry": "38m",
    "slotsFilled": "3/6",
    "operations": "Operation Data"
  },
  {
    "name": "Item 37",
    "type": "Content Classification",
    "yield": "37 stTAO",
    "expiry": "59m",
    "slotsFilled": "6/7",
    "operations": "Operation Data"
  },
  {
    "name": "Item 38",
    "type": "Semantic Segmentation",
    "yield": "38 stTAO",
    "expiry": "10m",
    "slotsFilled": "10/10",
    "operations": "Operation Data"
  },
  {
    "name": "Item 39",
    "type": "Named Entity Recognition",
    "yield": "39 stTAO",
    "expiry": "34m",
    "slotsFilled": "4/6",
    "operations": "Operation Data"
  },
  {
    "name": "Item 40",
    "type": "Object & Event Detection",
    "yield": "40 stTAO",
    "expiry": "47m",
    "slotsFilled": "6/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 41",
    "type": "Object Detection",
    "yield": "41 stTAO",
    "expiry": "5m",
    "slotsFilled": "9/12",
    "operations": "Operation Data"
  },
  {
    "name": "Item 42",
    "type": "Content Classification",
    "yield": "42 stTAO",
    "expiry": "33m",
    "slotsFilled": "1/4",
    "operations": "Operation Data"
  },
  {
    "name": "Item 43",
    "type": "Semantic Segmentation",
    "yield": "43 stTAO",
    "expiry": "36m",
    "slotsFilled": "10/10",
    "operations": "Operation Data"
  },
  {
    "name": "Item 44",
    "type": "Named Entity Recognition",
    "yield": "44 stTAO",
    "expiry": "17m",
    "slotsFilled": "3/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 45",
    "type": "Object & Event Detection",
    "yield": "45 stTAO",
    "expiry": "54m",
    "slotsFilled": "9/9",
    "operations": "Operation Data"
  },
  {
    "name": "Item 46",
    "type": "Object Detection",
    "yield": "46 stTAO",
    "expiry": "3m",
    "slotsFilled": "10/11",
    "operations": "Operation Data"
  },
  {
    "name": "Item 47",
    "type": "Content Classification",
    "yield": "47 stTAO",
    "expiry": "29m",
    "slotsFilled": "2/14",
    "operations": "Operation Data"
  },
  {
    "name": "Item 48",
    "type": "Semantic Segmentation",
    "yield": "48 stTAO",
    "expiry": "46m",
    "slotsFilled": "1/6",
    "operations": "Operation Data"
  },
  {
    "name": "Item 49",
    "type": "Named Entity Recognition",
    "yield": "49 stTAO",
    "expiry": "30m",
    "slotsFilled": "10/12",
    "operations": "Operation Data"
  },
  {
    "name": "Item 50",
    "type": "Object & Event Detection",
    "yield": "50 stTAO",
    "expiry": "45m",
    "slotsFilled": "6/14",
    "operations": "Operation Data"
  }
]
export const columnDef = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "yield",
    header: "Yield",
  },
  {
    accessorKey: "expiry",
    header: "Expiry",
  },
  {
    accessorKey: "slotsFilled",
    header: "Slots Filled",
  },
  {
    accessorKey: "operations",
    header: "Operations",
    cell: ({ }) => "Start", // Render JSX for the button
  },
];

export const categories = [
  { label: "All", isActive: true },
  { label: "Object Detection", isActive: false },
  { label: "Content Classification", isActive: false },
  { label: "Semantic Segmentation", isActive: false },
  { label: "Named Entity Recognition", isActive: false },
  { label: "Object & Event Detection", isActive: false },
];

export const questionMultiSelectData = [
  {
    id: 1,
    htmlContent: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Static HTML file</title>
          <style>
            html, body {
              box-sizing: border-box;
              display: flow-root;
              height: 100%;
              margin: 0;
              padding: 0;
            }
          </style>
          <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-3.4.1.min.js"></script>
          <script type="text/javascript">
              Bokeh.set_log_level("info");
          </script>
        </head>
        <body>
          <div id="b6a91bc0-10db-4e1a-a996-e08596853fce" data-root-id="p1001" style="display: contents;"></div>
        
          <script type="application/json" id="b8c9ab1f-d406-438e-9d5f-32ed50e804a9">
            {"a27876f0-ca97-4031-b871-4addcdc76156":{"version":"3.4.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1001","attributes":{"height":250,"max_width":500,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p1002"},"y_range":{"type":"object","name":"DataRange1d","id":"p1003"},"x_scale":{"type":"object","name":"LinearScale","id":"p1010"},"y_scale":{"type":"object","name":"LinearScale","id":"p1011"},"title":{"type":"object","name":"Title","id":"p1008"},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1039","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1033","attributes":{"selected":{"type":"object","name":"Selection","id":"p1034","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1035"},"data":{"type":"map","entries":[["x",[1,2,3,4,5]],["y",[4,5,5,7,2]]]}}},"view":{"type":"object","name":"CDSView","id":"p1040","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1041"}}},"glyph":{"type":"object","name":"Scatter","id":"p1036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"red"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1038","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1009","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1022"},{"type":"object","name":"WheelZoomTool","id":"p1023","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1024","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1025","attributes":{"syncable":false,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"SaveTool","id":"p1030"},{"type":"object","name":"ResetTool","id":"p1031"},{"type":"object","name":"HelpTool","id":"p1032"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1017","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1018","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1019"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1020"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1012","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1013","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1014"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1015"}}}],"center":[{"type":"object","name":"Grid","id":"p1016","attributes":{"axis":{"id":"p1012"}}},{"type":"object","name":"Grid","id":"p1021","attributes":{"dimension":1,"axis":{"id":"p1017"}}}]}}]}}
          </script>
          <script type="text/javascript">
            (function() {
              const fn = function() {
                Bokeh.safely(function() {
                  (function(root) {
                    function embed_document(root) {
                    const docs_json = document.getElementById('b8c9ab1f-d406-438e-9d5f-32ed50e804a9').textContent;
                    const render_items = [{"docid":"a27876f0-ca97-4031-b871-4addcdc76156","roots":{"p1001":"b6a91bc0-10db-4e1a-a996-e08596853fce"},"root_ids":["p1001"]}];
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                    }
                    if (root.Bokeh !== undefined) {
                      embed_document(root);
                    } else {
                      let attempts = 0;
                      const timer = setInterval(function(root) {
                        if (root.Bokeh !== undefined) {
                          clearInterval(timer);
                          embed_document(root);
                        } else {
                          attempts++;
                          if (attempts > 100) {
                            clearInterval(timer);
                            console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                          }
                        }
                      }, 10, root)
                    }
                  })(window);
                });
              };
              if (document.readyState != "loading") fn();
              else document.addEventListener("DOMContentLoaded", fn);
            })();
          </script>
        </body>
      </html>`,
    title: 'Caption for Bokeh Plot 1',
    showTitle: true,
  },
  {
    id: 2,
    htmlContent: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Static HTML file</title>
          <style>
            html, body {
              box-sizing: border-box;
              display: flow-root;
              height: 100%;
              margin: 0;
              padding: 0;
            }
          </style>
          <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-3.4.1.min.js"></script>
          <script type="text/javascript">
              Bokeh.set_log_level("info");
          </script>
        </head>
        <body>
          <div id="b6a91bc0-10db-4e1a-a996-e08596853fce" data-root-id="p1001" style="display: contents;"></div>
        
          <script type="application/json" id="b8c9ab1f-d406-438e-9d5f-32ed50e804a9">
            {"a27876f0-ca97-4031-b871-4addcdc76156":{"version":"3.4.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1001","attributes":{"height":250,"max_width":500,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p1002"},"y_range":{"type":"object","name":"DataRange1d","id":"p1003"},"x_scale":{"type":"object","name":"LinearScale","id":"p1010"},"y_scale":{"type":"object","name":"LinearScale","id":"p1011"},"title":{"type":"object","name":"Title","id":"p1008"},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1039","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1033","attributes":{"selected":{"type":"object","name":"Selection","id":"p1034","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1035"},"data":{"type":"map","entries":[["x",[1,2,3,4,5]],["y",[4,5,5,7,2]]]}}},"view":{"type":"object","name":"CDSView","id":"p1040","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1041"}}},"glyph":{"type":"object","name":"Scatter","id":"p1036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"red"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1038","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1009","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1022"},{"type":"object","name":"WheelZoomTool","id":"p1023","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1024","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1025","attributes":{"syncable":false,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"SaveTool","id":"p1030"},{"type":"object","name":"ResetTool","id":"p1031"},{"type":"object","name":"HelpTool","id":"p1032"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1017","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1018","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1019"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1020"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1012","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1013","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1014"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1015"}}}],"center":[{"type":"object","name":"Grid","id":"p1016","attributes":{"axis":{"id":"p1012"}}},{"type":"object","name":"Grid","id":"p1021","attributes":{"dimension":1,"axis":{"id":"p1017"}}}]}}]}}
          </script>
          <script type="text/javascript">
            (function() {
              const fn = function() {
                Bokeh.safely(function() {
                  (function(root) {
                    function embed_document(root) {
                    const docs_json = document.getElementById('b8c9ab1f-d406-438e-9d5f-32ed50e804a9').textContent;
                    const render_items = [{"docid":"a27876f0-ca97-4031-b871-4addcdc76156","roots":{"p1001":"b6a91bc0-10db-4e1a-a996-e08596853fce"},"root_ids":["p1001"]}];
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                    }
                    if (root.Bokeh !== undefined) {
                      embed_document(root);
                    } else {
                      let attempts = 0;
                      const timer = setInterval(function(root) {
                        if (root.Bokeh !== undefined) {
                          clearInterval(timer);
                          embed_document(root);
                        } else {
                          attempts++;
                          if (attempts > 100) {
                            clearInterval(timer);
                            console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                          }
                        }
                      }, 10, root)
                    }
                  })(window);
                });
              };
              if (document.readyState != "loading") fn();
              else document.addEventListener("DOMContentLoaded", fn);
            })();
          </script>
        </body>
      </html>`,
    title: 'Caption for Bokeh Plot 2',
    showTitle: true,
  },
  {
    id: 3,
    htmlContent: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Static HTML file</title>
          <style>
            html, body {
              box-sizing: border-box;
              display: flow-root;
              height: 100%;
              margin: 0;
              padding: 0;
            }
          </style>
          <script type="text/javascript" src="https://cdn.bokeh.org/bokeh/release/bokeh-3.4.1.min.js"></script>
          <script type="text/javascript">
              Bokeh.set_log_level("info");
          </script>
        </head>
        <body>
          <div id="b6a91bc0-10db-4e1a-a996-e08596853fce" data-root-id="p1001" style="display: contents;"></div>
        
          <script type="application/json" id="b8c9ab1f-d406-438e-9d5f-32ed50e804a9">
            {"a27876f0-ca97-4031-b871-4addcdc76156":{"version":"3.4.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1001","attributes":{"height":250,"max_width":500,"sizing_mode":"stretch_width","x_range":{"type":"object","name":"DataRange1d","id":"p1002"},"y_range":{"type":"object","name":"DataRange1d","id":"p1003"},"x_scale":{"type":"object","name":"LinearScale","id":"p1010"},"y_scale":{"type":"object","name":"LinearScale","id":"p1011"},"title":{"type":"object","name":"Title","id":"p1008"},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1039","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1033","attributes":{"selected":{"type":"object","name":"Selection","id":"p1034","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1035"},"data":{"type":"map","entries":[["x",[1,2,3,4,5]],["y",[4,5,5,7,2]]]}}},"view":{"type":"object","name":"CDSView","id":"p1040","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1041"}}},"glyph":{"type":"object","name":"Scatter","id":"p1036","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"red"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1037","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1038","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":15},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"red"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1009","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1022"},{"type":"object","name":"WheelZoomTool","id":"p1023","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1024","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1025","attributes":{"syncable":false,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"SaveTool","id":"p1030"},{"type":"object","name":"ResetTool","id":"p1031"},{"type":"object","name":"HelpTool","id":"p1032"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1017","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1018","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1019"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1020"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1012","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1013","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1014"},"major_label_policy":{"type":"object","name":"AllLabels","id":"p1015"}}}],"center":[{"type":"object","name":"Grid","id":"p1016","attributes":{"axis":{"id":"p1012"}}},{"type":"object","name":"Grid","id":"p1021","attributes":{"dimension":1,"axis":{"id":"p1017"}}}]}}]}}
          </script>
          <script type="text/javascript">
            (function() {
              const fn = function() {
                Bokeh.safely(function() {
                  (function(root) {
                    function embed_document(root) {
                    const docs_json = document.getElementById('b8c9ab1f-d406-438e-9d5f-32ed50e804a9').textContent;
                    const render_items = [{"docid":"a27876f0-ca97-4031-b871-4addcdc76156","roots":{"p1001":"b6a91bc0-10db-4e1a-a996-e08596853fce"},"root_ids":["p1001"]}];
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                    }
                    if (root.Bokeh !== undefined) {
                      embed_document(root);
                    } else {
                      let attempts = 0;
                      const timer = setInterval(function(root) {
                        if (root.Bokeh !== undefined) {
                          clearInterval(timer);
                          embed_document(root);
                        } else {
                          attempts++;
                          if (attempts > 100) {
                            clearInterval(timer);
                            console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                          }
                        }
                      }, 10, root)
                    }
                  })(window);
                });
              };
              if (document.readyState != "loading") fn();
              else document.addEventListener("DOMContentLoaded", fn);
            })();
          </script>
        </body>
      </html>`,
    title: 'Caption for Bokeh Plot 3',
    showTitle: true,
  },
  // ... more plots
];

export const questionDataPY = [
  {
    id: 1,
    src: 'https://45wrtk-8050.csb.app/',
    title: '1 (hidden: gpt-4-turbo)',
    showTitle: true,
  },
  {
    id: 2,
    src: 'https://45wrtk-8050.csb.app/',
    title: '2 (hidden: dolphin-mixtral-8x7b)',
    showTitle: true,
  },
  {
    id: 3,
    src: 'https://45wrtk-8050.csb.app/',
    title: '3 (hidden: phind-codellama-34b)',
    showTitle: true,
  },
]

export const multiSelectOptions = [
  { value: 'opt1', label: 'There are 8 rings' },
  { value: 'output2', label: 'All the rings are moving' },
  { value: 'output3', label: 'Earth is the first planet in the solarsystem' },
  { value: 'output4', label: 'The function returns a list where even numbers are incremented by 2 and odd numbers are decremented by 2.' },
  { value: 'output5', label: 'The output will be [-1, 4, 1, 6, 3, 8]' }  // Corrected 'output#' to 'output3'
];

export const dialogue = [
  {
    "dialogue": [
      {
        "role": "user",
        "message": "Hello! What is your name?"
      },
      {
        "role": "ai",
        "message": "Hello, nice to meet you! My name is Llama 3."
      },
    ],
    "task": "DIALOGUE",
    "criteria": [
      {
        "type": "ranking",
        "options": [
          "Image 1",
          "Image 2"
        ]
      },
      {
        "type": "multi-select",
        "options": [
          "The image is Safe For Work (SFW).",
          "The code does not have any malicious intent."
        ]
      },
      {
        "type": "score",
        "min": 1.0,
        "max": 10.0
      }
    ]
  },
  {
    "dialogue": [],
    "task": "xxx",
    "criteria": []
  }
]