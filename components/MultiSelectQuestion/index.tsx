import React from 'react';
import LinkContentVisualizer from '../LinkContentVisualizer';
import DragnDrop from '../DragnDrop';
import { FontManrope, FontSpaceMono } from '@/utils/typography';

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
    <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
      <div className='flex justify-start items-center text-left self-start mt-[42px]'>
        <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rank Question</h1>
        <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>CODING GENERATION PROMPT</span>
      </div>
      <>
        <p className="text-center flex self-start font-semibold opacity-60 mb-4">Which animation best represent an animated solar system? The slider should speed up the animation.</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-14 w-full">
          {questionDataPY.map(plot => (
            <LinkContentVisualizer
              key={plot.id}
              title={''}
              showTitle={plot.showTitle}
              url={plot.src}
            />
          ))}
          <div className="w-full bg-[#FFFFF4] pl-[48px]">
            <p>Please rank the following output in accordance to the animation described as much as possible, considering any interactions included</p>
            <DragnDrop options={options} onOrderChange={handleOrderChange} />
          </div>
        </div>
      </>
    </div>
  );
};

export default MultiSelectQuestion;