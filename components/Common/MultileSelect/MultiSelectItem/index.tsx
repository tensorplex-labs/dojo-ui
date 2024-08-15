import { MultiSelectItemProps } from '@/types/CommonTypes';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({ option, isSelected, onSelectionChange }) => {
  const selectedStyles = isSelected
    ? 'border-2 border-primary bg-opacity-15 bg-primary opacity-[14]'
    : 'border-2 border-gray-300 bg-ecru-white opacity-[14]';

  return (
    <div className="my-2.5 w-full ">
      <label className={`flex w-full cursor-pointer items-center space-x-2 ${selectedStyles} p-[9px]`}>
        <span className="relative">
          <input
            type="checkbox"
            value={option}
            checked={isSelected}
            onChange={() => onSelectionChange(option)}
            className="sr-only" // Hide the default checkbox
          />
          <span className={`block size-4 bg-white ${selectedStyles}`}></span>
          {isSelected && (
            <span
              className="absolute left-1/2 top-1/2 block rounded-full"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <IconCheck className="size-3 bg-primary text-lg text-white" />
            </span>
          )}
        </span>
        <span className="select-none">{option}</span>
      </label>
    </div>
  );
};

export default MultiSelectItem;
