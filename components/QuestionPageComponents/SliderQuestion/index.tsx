import Slider from '@/components/QuestionPageComponents/Slider';
import { SliderQuestionProps } from '@/types/QuestionPageTypes';
import React from 'react';

const SliderQuestion: React.FC<SliderQuestionProps> = ({ isMultiScore, handleSliderChange }) => {
  return (
    <div className="ml-[17.5px] w-[541px]">
      <div className="row-start-2 my-4 rounded-br-lg">
        <Slider min={1} max={10} step={1} initialValue={1} onChange={handleSliderChange} showSections />
      </div>
    </div>
  );
};

export default SliderQuestion;
