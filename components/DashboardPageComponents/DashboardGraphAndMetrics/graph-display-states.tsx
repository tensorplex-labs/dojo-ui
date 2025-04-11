export const GraphErrorState = ({ id }: { id: string }) => {
  return <div className="flex h-[400px] w-full items-center justify-center">Error loading {id} graph data</div>;
};

export const GraphLoadingState = ({ id }: { id: string }) => {
  return <div className="flex h-[400px] w-full items-center justify-center">Loading {id} graph data...</div>;
};
