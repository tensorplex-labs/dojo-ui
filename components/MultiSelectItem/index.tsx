import { IconCheck } from '@tabler/icons-react';
import React from 'react';

interface MultiSelectItemProps {
    option: string;
    isSelected: boolean;
    onSelectionChange: (value: string) => void;
  }

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({ option, isSelected, onSelectionChange }) => {
    const selectedStyles = isSelected
      ? 'border-2 border-[#00B6A6] bg-opacity-15 bg-[#00B6A6] opacity-[14]'
      : 'border-2 border-gray-300 bg-[#F6F6E6] opacity-[14]';
  
    return (
      <div className="w-full my-2.5 ">
          <label className={`flex items-center space-x-2 cursor-pointer w-full ${selectedStyles} p-[9px]`}>
              <span className="relative">
                  <input
                  type="checkbox"
                  value={option}
                  checked={isSelected}
                  onChange={() => onSelectionChange(option)}
                  className="sr-only" // Hide the default checkbox
                  />
                   <span className={`block w-4 h-4 bg-white ${selectedStyles}`}></span>
                  {isSelected && (
                  <span
                      className="absolute top-1/2 left-1/2 block rounded-full"
                      style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <IconCheck className="w-3 h-3 text-white bg-[#00B6A6] text-lg" />
                  </span>
                  )}
              </span>
              <span className="select-none">{option}</span>
          </label>
      </div>
    );
  };
  
  
  export default MultiSelectItem;