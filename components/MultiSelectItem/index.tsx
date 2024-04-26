import React from 'react';

interface MultiSelectItemProps {
    option: { value: string; label: string };
    isSelected: boolean;
    onSelectionChange: (value: string) => void;
  }

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({ option, isSelected, onSelectionChange }) => {
    const selectedStyles = isSelected
      ? 'border-2 border-[#00B6A6] bg-opacity-15'
      : 'border-2 border-gray-300';
  
    return (
      <div className="w-full my-2.5 ">
          <label className={`flex items-center space-x-2 cursor-pointer w-full ${selectedStyles} p-[9px]`}>
              <span className="relative">
                  <input
                  type="checkbox"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => onSelectionChange(option.value)}
                  className="sr-only" // Hide the default checkbox
                  />
                  <span className={`block w-4 h-4 bg-white rounded-full ${selectedStyles}`}></span>
                  {isSelected && (
                  <span
                      className="absolute top-1/2 left-1/2 block w-2 h-2 bg-[#00B6A6] rounded-full"
                      style={{ transform: 'translate(-50%, -50%)' }}
                  ></span>
                  )}
              </span>
              <span className="select-none">{option.label}</span>
          </label>
      </div>
    );
  };
  
  export default MultiSelectItem;