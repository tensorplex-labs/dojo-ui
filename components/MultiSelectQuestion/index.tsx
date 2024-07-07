import { FontManrope, FontSpaceMono } from '@/utils/typography';
import React from 'react';
import DragnDrop from '../DragnDrop';
import LinkContentVisualizer from '../LinkContentVisualizer';

interface MultiSelectQuestionProps {
  questionDataPY: Array<{
    id: string;
    showTitle: boolean;
    src: string;
  }>;
  options: Array<any>; // Define the correct type for your options
  handleOrderChange: (newOrder: Array<any>) => void; // Define the correct type for the newOrder
}

const MultiSelectQuestion: React.FC<MultiSelectQuestionProps> = ({ questionDataPY, options, handleOrderChange }) => {
  return (
    <div className="mx-auto my-4 flex max-w-[1200px] flex-col items-center justify-center">
      <div className="mt-[42px] flex items-center justify-start self-start text-left">
        <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rank Question</h1>
        <span
          className={`${FontSpaceMono.className} rounded-[20px] border border-black bg-[#D0A215] px-2.5 py-[5px] font-bold text-white`}
        >
          CODING GENERATION PROMPT
        </span>
      </div>
      <>
        <p className="mb-4 flex self-start text-center font-semibold opacity-60">
          Which animation best represent an animated solar system? The slider should speed up the animation.
        </p>
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-x-7 gap-y-14">
          {questionDataPY.map((plot) => (
            <LinkContentVisualizer key={plot.id} title={''} showTitle={plot.showTitle} url={plot.src} />
          ))}
          <div className="w-full bg-[#FFFFF4] pl-[48px]">
            <p>
              Please rank the following output in accordance to the animation described as much as possible, considering
              any interactions included
            </p>
            <DragnDrop options={options} onOrderChange={handleOrderChange} />
          </div>
        </div>
      </>
    </div>
  );
};

export default MultiSelectQuestion;
