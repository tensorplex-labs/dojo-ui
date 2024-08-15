import { DropdownContainerProps } from '@/types/CommonTypes';
import React from 'react';
import { DropDownButton } from './DropDownButton';

export const DropdownContainer: React.FC<DropdownContainerProps> = ({
  buttonText,
  imgSrc,
  children,
  className,
  count,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="relative">
      <DropDownButton buttonText={buttonText} imgSrc={imgSrc} onClick={onToggle} count={count} />
      {isOpen && (
        <div
          className={`DropDownButton-content absolute z-10 mt-[10px] border-2 border-black bg-white shadow-brut-sm ${className}`}
        >
          {children && children}
        </div>
      )}
    </div>
  );
};
