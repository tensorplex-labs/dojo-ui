const LoadingSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <tr key={i}>
          <td className="px-4 py-2">
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-300"></div>
          </td>
          <td className="px-4 py-2">
            <div className="h-4 animate-pulse rounded bg-gray-300"></div>
          </td>
          <td className="px-4 py-2">
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-300"></div>
          </td>
          <td className="px-4 py-2">
            <div className="h-4 w-1/4 animate-pulse rounded bg-gray-300"></div>
          </td>
          <td className="px-4 py-2">
            <div className="relative right-0 flex">
              <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
              <div className="justify-right absolute inset-0 flex items-center"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default LoadingSkeleton;
