import HeadingTitle from '@/components/Common/HeadingTitle';
import MultiSelect from '@/components/Common/MultileSelect';
import { MultiSelectQuestionProps } from '@/types/QuestionPageTypes';
import React from 'react';

const MultiSelectQuestion: React.FC<MultiSelectQuestionProps> = ({
  isMultiScore,
  isSlider,
  multiSelectQuestionData,
  selectedMultiSelectValues,
  handleSelectionChange,
}) => {
  return (
    <div className="mx-auto my-4 flex max-w-[1075px] flex-col justify-center">
      <HeadingTitle
        title={`Question ${isMultiScore && isSlider ? '3' : isSlider || isMultiScore ? '2' : '1'}`}
        subTitle="Please choose the most appropriate option"
      />
      <div className="flex w-[610px] flex-col items-center justify-center rounded-b-xl">
        <MultiSelect
          options={multiSelectQuestionData}
          selectedValues={selectedMultiSelectValues}
          onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default MultiSelectQuestion;
