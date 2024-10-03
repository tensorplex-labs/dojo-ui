interface SubnetData {
  id: number;
  totalEmissions: number;
  minerCount: number;
  maxAllowedKeys: number;
  maxActiveValidators: number;
  maxActiveMiners: number;
  emissionPct: number;
  registerCost: number;
  owner: string;
  historicalSubnetEmissions: {
    blockNumber: number;
    blockTime: number;
    totalEmissions: number;
  }[];
  nonRootNeurons: {
    hotkey: string;
    coldkey: string;
    uid: number;
    emission: number;
    stakedAmt: number;
    rank: number;
    active: boolean;
    minerWeight: number; // Add this line
    historicalEmissions: {
      blockNumber: number;
      blockTime: number;
      emission: number;
    }[];
  }[];
  subnetValidatorWeightAssignments: {
    weight: number;
    owner: string;
    stakedAmt: number;
    hotkey: string;
  }[];
}
