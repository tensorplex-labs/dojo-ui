import useSubnetMetagraph from '@/hooks/useSubnetMetaGraph';
import { NonRootNeuronObj } from '@/types/DashboardTypes';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import MinerLeaderboard from './MinerLeaderboard';
import ValidatorLeaderboard from './ValidatorLeaderboard';

const LeaderboardSection = () => {
  const [showValidators, setShowValidators] = useState(false);
  const { data: subnetData, loading: subnetDataIsLoading, error: subnetDataError } = useSubnetMetagraph(52);

  const {
    data: delegates,
    isLoading: delegatesLoading,
    error: delegatesError,
  } = useQuery({
    queryKey: ['getDelegates'],
    queryFn: async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/opentensor/bittensor-delegates/refs/heads/main/public/delegates.json'
      );
      return res.json();
    },
  });

  const getValidatorsOrMiners = useCallback(
    (which: 'miner' | 'validator') => {
      if (subnetDataError || delegatesError || !delegates) return [];
      const tmpRetList: NonRootNeuronObj[] = [];
      const delegateKeys = Object.keys(delegates);
      subnetData?.nonRootNeurons.forEach((data) => {
        const totalEmission = data.historicalEmissions.reduce((sum, { emission }) => sum + emission, 0);
        const neuronWithEmission = { ...data, totalEmission };

        const matchedValidator = delegateKeys.find((key) => key === data.hotkey);
        if (matchedValidator && which === 'validator') {
          tmpRetList.push(neuronWithEmission);
        }
        if (!matchedValidator && which === 'miner') {
          tmpRetList.push(neuronWithEmission);
        }
      });

      return tmpRetList;
    },
    [subnetData, delegates, delegatesError, subnetDataError]
  );

  const toggleLeaderboard = () => {
    setShowValidators((prev) => !prev);
  };

  return (
    <div className="">
      <div className="my-5 flex flex-wrap items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <h2 className={`${FontSpaceMono.className} text-2xl font-bold uppercase sm:text-4xl`}>LEADERBOARD</h2>
        <label className="flex cursor-pointer items-center gap-3 text-sm sm:text-base">
          <span className={`${FontManrope.className} whitespace-nowrap font-semibold text-gray-700`}>
            Showing: {showValidators ? 'Validators' : 'Miners'}
          </span>
          <div className="relative">
            <input type="checkbox" checked={showValidators} onChange={toggleLeaderboard} className="sr-only" />
            <div className="block  h-6 w-10 rounded-full bg-gray-600"></div>
            <div
              className={`absolute left-1 top-1 size-4 rounded-full bg-white transition ${
                showValidators ? 'translate-x-full bg-[#00B6A6]' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>
      <div className="overflow-x-auto">
        {showValidators ? (
          <ValidatorLeaderboard
            validators={getValidatorsOrMiners('validator')}
            isLoading={subnetDataIsLoading || delegatesLoading}
          />
        ) : (
          <MinerLeaderboard
            miners={getValidatorsOrMiners('miner')}
            isLoading={subnetDataIsLoading || delegatesLoading}
          />
        )}
      </div>
    </div>
  );
};

export default LeaderboardSection;
