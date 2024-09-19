import { FontManrope, FontSpaceMono } from '@/utils/typography';
import Leaderboard from './Leaderboard';

const LeaderboardSection = () => (
  <>
    <div className="my-5">
      <h2 className={`${FontSpaceMono.className} text-4xl font-bold`}>LEADERBOARDS</h2>
      <p className={`${FontManrope.className} text-base font-semibold text-gray-600`}>Showing 30 out of 200 items</p>
    </div>
    <Leaderboard />
  </>
);

export default LeaderboardSection;
