import { SubnetData } from '@/types/DashboardTypes';
import { useQuery } from '@tanstack/react-query';

const fetchSubnetMetagraph = async (subnetId: number): Promise<SubnetData> => {
  // Hardcoding this at code level because this is the only cross service endpoint
  const response = await fetch(`https://backprop.finance/api/subnets/${subnetId}/info`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  if (!result.body) {
    throw new Error('API response did not contain expected body');
  }
  return result.body as SubnetData;
};

const useSubnetMetagraph = (subnetId: number) => {
  const { data, isLoading, isError, error } = useQuery<SubnetData, Error>({
    queryKey: ['subnetMetagraph', subnetId],
    queryFn: () => fetchSubnetMetagraph(subnetId),
    enabled: !!subnetId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return {
    data: data ?? null,
    loading: isLoading,
    error: isError ? error.message : null,
  };
};

export default useSubnetMetagraph;
