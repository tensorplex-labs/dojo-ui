import React, { ReactNode } from 'react';
import { DropDownButton } from '../DropDownButton';

interface DropdownContainerProps {
  buttonText: string;
  imgSrc: string;
  children?: ReactNode;
  className?: string;
  count?: string;
  isOpen: boolean;
  onToggle: () => void;
}

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
