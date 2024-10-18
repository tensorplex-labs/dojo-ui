import { FontManrope, FontSpaceMono } from '@/utils/typography';
import LeaderboardTwo from './Leaderboard';

interface MinerData {
  hotkey: string;
  rank: number;
  emission: number;
  stakedAmt: number;
  minerWeight: number;
  performanceData: number[];
  historicalEmissions?: {
    blockNumber: number;
    blockTime: number;
    emission: number;
  }[];
}

interface LeaderboardSectionProps {
  miners: MinerData[];
  loading: boolean;
  error?: string | null;
}

const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({ miners, loading, error }) => {
  if (error) {
    return <div>Error loading leaderboard: {error}</div>;
  }

  return (
    <>
      <div className="my-5">
        <h2 className={`${FontSpaceMono.className} text-4xl font-bold`}>LEADERBOARDS</h2>
        <p className={`${FontManrope.className} text-base font-semibold text-gray-600`}>
          Showing {miners?.length ?? 0} out of {miners?.length ?? 0} items
        </p>
      </div>
      <LeaderboardTwo miners={miners} isLoading={loading} />
    </>
  );
};

export default LeaderboardSection;
