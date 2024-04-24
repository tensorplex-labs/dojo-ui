// components/MultiSelectItem.tsx

import React from 'react';

interface MultiSelectItemProps {
  value: string;
  label: string;
  isSelected: boolean;
  onToggle: (value: string) => void;
}

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({ value, label, isSelected, onToggle }) => {
  return (
    <div className="multiselect-option" onClick={() => onToggle(value)}>
      <span className={`icon ${isSelected ? 'icon-selected' : ''}`}>◉</span>
      <span className="label">{label}</span>
    </div>
  );
};

export default MultiSelectItem;