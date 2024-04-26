import React from 'react';
import MultiSelectItem from '../MultiSelectItem';

interface MultiSelectProps {
  options: { value: string; label: string }[];
  selectedValues: string[];
  onSelectionChange: (value: string) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedValues, onSelectionChange }) => {
  return (
    <>
      {options.map((option) => (
        <MultiSelectItem
          key={option.value}
          option={option}
          isSelected={selectedValues.includes(option.value)}
          onSelectionChange={onSelectionChange}
        />
      ))}
    </>
  );
};

export default MultiSelect;