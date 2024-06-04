import { CellContext } from "@tanstack/react-table";

interface HeaderItem {
  title: string;
  url: string;
}

export const headerItems: Array<HeaderItem> = [
  {
    title: 'FAQ',
    url: '/faq',
  },
  {
    title: 'Docs',
    url: 'https://tensorplex.gitbook.io/tensorplex-docs/',
  },
];
export const dropdownOptions = [
  { text: "Most Attempted" },
  { text: "Most Recent" },
  // { text: "Highest Potential Yield" },
  { text: "Least Questions" },
];
export interface FrequentlyAccessedProps {
  title: string;
  description: string;
  isLong: boolean;
  type: string;
  route: string;
  isRoutable?: boolean;
  onClickHandler?: (text: string) => void;
  delayBy?: number;
}
export const TensorplexProducts: FrequentlyAccessedProps[] = [
  {
    title: "Tensorplex Stake",
    description: "Deposit wTAO on Ethereum and receive stTAO which represents your share of TAO staked on the Bittensor Finney Network",
    isLong: true,
    isRoutable: true,
    type: "product",
    route: 'https://stake.tensorplex.ai/',
  },
  {
    title: "Tensorplex Stream",
    description: "Discover insights from key opinion leaders in Web3 with content curated from the Tensorplex Team",
    isLong: true,
    type: "product",
    isRoutable: true,
    route: 'https://stream.tensorplex.ai/',
  },
  {
    title: "Tensorplex Dojo",
    description: "Dojo is a decentralized platform that leverages the collective power of human insights to train AI models.",
    isLong: true,
    type: "product",
    isRoutable: true,
    route: '/',
  },
];

export const frequentlyAccessedData: FrequentlyAccessedProps[] = [
  {
    title: "Tensorplex AI Chatbot",
    description: "Ask anything and everything about Web3",
    isLong: false,
    type: "page",
    route: 'https://stream.tensorplex.ai/TensorplexAIChatbot',
  },
  {
    title: "Podcasts",
    description: "Access to our curated list of more than 1900 podcasts",
    isLong: false,
    type: "page",
    route: 'https://stream.tensorplex.ai',
  },
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
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info: CellContext<any, any>) => info.getValue().replace(/_/g, ' ')
  },
  // {
  //   accessorKey: "yield",
  //   header: "Yield",
  // },
  {
    accessorKey: "expireAt",
    header: "Expiry",
    accessorFn: (row: any) => {
      const expiryDate = new Date(row.expireAt);
      const now = new Date();
      const diffMs = expiryDate.getTime() - now.getTime();
      const diffMins = Math.round(diffMs / 60000); // minutes
      const diffHrs = Math.floor(diffMins / 60); // hours
      const diffDays = Math.floor(diffHrs / 24); // days
      let formattedExpiry;
      if (diffDays >= 1) {
        formattedExpiry = `${diffDays}d`;
      } else if (diffHrs >= 1) {
        formattedExpiry = `${diffHrs}h`;
      } else {
        formattedExpiry = `${diffMins}m`;
      }
      return formattedExpiry;
    },
},
  {
    accessorKey: "slotsFilled",
    header: "Slots Filled",
    accessorFn: (row: any) => `${row.numResults}/${row.maxResults}`,
  },
  {
    accessorKey: "operations",
    header: "Operations",
    cell: ({ }) => "Start", // Render JSX for the button
  },
];

export const faqList = [
  {
    id: '0',
    content:
      'To begin, you’ll need to set up a Bittensor Miner, ideally hosted on a server, to generate an API key. A small amount of TAO is required to enter the Dojo Subnet. Currently, this process requires some technical skills, but we are working towards simplifying it in the future.',
    title: 'What are the requirements for getting started?',
  },
  {
    id: '1',
    content: `
    <ol style="list-style-type: decimal" class="pl-5">
      <li style="margin-bottom: 10px"><strong>Set Up Your Miner</strong>: Visit <a href="https://github.com/tensorplex-labs/dojo-subnet" target="_blank" style="color: #2563eb; text-decoration: underline; hover:color: #1e40af; hover:text-decoration: none;">Dojo GitHub</a> to set up the Dojo Subnet Miner.</li>
      <li style="margin-bottom: 10px"><strong>Generate and Use Your API Key</strong>: After setting up your miner, generate an API key. Then, visit <a href="https://dojo.tensorplex.ai" target="_blank" style="color: #2563eb; text-decoration: underline; hover:color: #1e40af; hover:text-decoration: none;">dojo.tensorplex.ai</a> and enter your API key to start working.</li>
      <li><strong>Start Working</strong>: Once logged in, you can start completing tasks and earning rewards immediately.</li>
      </ol>
      `,
    title: 'How do I get started?',
  },
  {
    id: '2',
    content:
      'Dojo is a decentralized platform that leverages the collective power of human insights to train AI models. By contributing to data labeling across various domains, users earn TAO tokens, enhancing AI learning and earning rewards in the process.',
    title: 'What is Dojo?',
  },
  {
    id: '3',
    content:
    "Rewards are distributed from the emissions generated by the Bittensor network. These emissions are allocated to Subnet miners, like those in Dojo, who contribute to the enhancement of machine learning models through high-quality data provision.",
    title: 'Where do the rewards come from?',
  },
  {
    id: '4',
    content:
      'Assessment times can vary depending on the complexity of the task and the current network activity. Generally, assessments are completed within 24 to 48 hours after submission.',
    title: 'How long does it take for the assessment to be completed?',
  },
  {
    id: '5',
    content:
      'The data collected and labelled by our contributors will be open sourced and used to train and improve machine learning models. This data helps in making open-source AI smarter, more accurate, and capable of understanding and performing tasks in a wide range of real-world applications.',
    title: 'What is the use of the data?',
  },
  {
    id: '6',
    content:
      'Some tasks are designed to validate the quality and reliability of contributions and may not offer direct rewards. These tasks are crucial for maintaining the integrity of the data and ensuring that high standards are met across the platform.',
    title: 'Why do some tasks have no rewards?',
  },
  {
    id: '7',
    content:
      'If you are unsure or not confident in responding to some of these tasks, you can choose to skip it and move on to another task better suited to your skills and knowledge. Do note that if you skip too many tasks your miner will eventually be deregistered from the network.',
    title: 'What happens if I am not confident in answering some of the tasks?',
  },
  {
    id: '8',
    content:
      'Currently, Dojo does not have a mobile app, but we are actively developing one. Stay tuned for updates and get ready to contribute on-the-go!',
    title: 'Is there a mobile app?',
  },
];


export const categories = [
  { label: "All", isActive: true },
  { label: "Code Generation", isActive: false, taskType: "CODE_GENERATION"},
  { label: "Text To Image", isActive: false, taskType: "TEXT_TO_IMAGE"},
  { label: "Dialogue", isActive: false, taskType: "DIALOGUE"}
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