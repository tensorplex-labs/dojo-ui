import { FontManrope, FontSpaceMono } from '@/utils/typography';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

interface LeaderboardEntry {
  position: number;
  miner: string;
  score: number;
  performance: number[];
}

const leaderboardData: LeaderboardEntry[] = [
  { position: 1, miner: '0x213...134', score: 0.012345, performance: [10, 20, 5, 18, 10] },
  { position: 2, miner: '0x213...134', score: 0.012345, performance: [15, 2, 19, 7, 13] },
  { position: 3, miner: '0x213...134', score: 0.012345, performance: [8, 16, 4, 12, 20] },
  { position: 4, miner: '0x213...134', score: 0.012345, performance: [3, 18, 9, 14, 6] },
  { position: 5, miner: '0x213...134', score: 0.012345, performance: [11, 5, 17, 2, 15] },
];
const PerformanceChart: React.FC<{ data: number[] }> = ({ data }) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'area',
      height: 30,
      width: 80,
      backgroundColor: 'transparent',
      margin: [2, 0, 2, 0],
      spacing: [0, 0, 0, 0],
    },
    title: { text: undefined },
    xAxis: { visible: false },
    yAxis: { visible: false },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: { enabled: false },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          states: {
            hover: { enabled: false },
          },
        },
        lineWidth: 2,
        states: {
          hover: { enabled: false },
        },
        lineColor: '#00B6A6',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(0, 255, 255, 0.3)'],
            [1, 'rgba(0, 255, 255, 0)'],
          ],
        },
      },
    },
    series: [
      {
        data: data,
        type: 'area',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const Leaderboard: React.FC = () => {
  return (
    <>
      <div className="mx-auto mb-6 max-w-4xl rounded-sm border-2 border-black bg-white p-4 shadow-brut-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className={`${FontSpaceMono.className} border-b-2 border-gray-200`}>
                <th className="pb-2 pr-4 text-left">POSITION</th>
                <th className="pb-2 pr-4 text-left">MINER</th>
                <th className="pb-2 pr-4 text-left">SCORE</th>
                <th className="pb-2 text-left">PERFORMANCE</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry) => (
                <tr
                  key={entry.position}
                  className={`${FontManrope.className} h-11 border-b border-gray-100 text-lg  font-bold`}
                >
                  <td className="w-10">#{entry.position}</td>
                  <td className="w-10">{entry.miner}</td>
                  <td className="w-10 opacity-60 ">{entry.score.toFixed(6)}</td>
                  <td className="w-10">
                    <PerformanceChart data={entry.performance} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
