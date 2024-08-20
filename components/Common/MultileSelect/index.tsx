import { MultiSelectProps } from '@/types/CommonTypes';
import React from 'react';
import MultiSelectItem from './MultiSelectItem';

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedValues, onSelectionChange }) => {
  return (
    <>
      {options.map((option) => (
        <MultiSelectItem
          key={option}
          option={option}
          isSelected={selectedValues.includes(option)}
          onSelectionChange={onSelectionChange}
        />
      ))}
    </>
  );
};

export default MultiSelect;
