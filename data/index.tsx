export const dropdownOptions = [
    { text: "Most Attempted" },
    { text: "Most Recent" },
    { text: "Highest Potential Yield" },
    { text: "Least Questions" },
  ];
  
  export const mockData = new Array(50).fill(null).map((_, index) => ({
    name: `Item ${index + 1}`,
    type: "Object Detection",
    yield: `${index + 1} stTAO`,
    expiry: "21 Apr 2024, 10:37AM",
    operations: "Operation Data",
  }));
  
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
      accessorKey: "operations",
      header: "Operations",
      cell: ({}) => "Start", // Render JSX for the button
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