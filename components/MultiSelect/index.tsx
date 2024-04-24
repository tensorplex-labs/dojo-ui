// components/MultiSelect.tsx

import React, { useState } from 'react';
import MultiSelectItem from '@/components/MultiSelectItem';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedValues: string[]; // Add this line
  onSelectionChange: (selectedValues: string[]) => void; // Add this line
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedValues, onSelectionChange }) => {

  const toggleOption = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onSelectionChange(newSelectedValues); // Call the handler passed from the parent
  };

  return (
    <div className="MultiSelect">
      {options.map((option) => (
        <MultiSelectItem
          key={option.value}
          value={option.value}
          label={option.label}
          isSelected={selectedValues.includes(option.value)}
          onToggle={toggleOption}
        />
      ))}
    </div>
  );
};

export default MultiSelect;