import { MultiSelectProps } from '@/types/CommonTypes';
import { cn } from '@/utils/tw';
import React from 'react';
import MultiSelectItemV2 from './MultiSelectItemV2';

const MultiSelectV2: React.FC<MultiSelectProps> = ({ options, selectedValues, onSelectionChange, singleSelect }) => {
  const ss = singleSelect ?? false;
  return (
    <div className={cn('gap-[10px] flex w-full flex-col items-stretch', !ss && 'flex-row flex-wrap ')}>
      {options.map((option) => (
        <MultiSelectItemV2
          singleSelect={singleSelect ?? false}
          key={option}
          option={option}
          isSelected={selectedValues.includes(option)}
          onSelectionChange={onSelectionChange}
        />
      ))}
    </div>
  );
};

export default MultiSelectV2;
