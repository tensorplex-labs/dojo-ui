import HeadingTitle from '@/components/Common/HeadingTitle';
import Slider from '@/components/QuestionPageComponents/Slider';
import { SliderQuestionProps } from '@/types/QuestionPageTypes';
import React from 'react';

const SliderQuestion: React.FC<SliderQuestionProps> = ({ isMultiScore, handleSliderChange }) => {
  return (
    <div className="mx-auto my-4 flex max-w-[1200px] flex-col justify-center">
      <HeadingTitle title={`Question ${isMultiScore ? '2' : '1'}`} subTitle="Rate the output" />
      <div className="mt-4 w-[541px]">
        <div className="row-start-2 rounded-br-lg">
          {/* <p className={`${FontManrope.className} mb-[16px] text-base font-bold opacity-60`}>Rate from 1 (negative) to 10 (positive)</p> */}
          <Slider min={1} max={10} step={1} initialValue={1} onChange={handleSliderChange} showSections />
        </div>
      </div>
    </div>
  );
};

export default SliderQuestion;