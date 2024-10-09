import { DropdownContainerProps } from '@/types/CommonTypes';
import { cn } from '@/utils/tw';
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
      <DropDownButton
        className={cn(isOpen && 'bg-secondary border-primary')}
        buttonText={buttonText}
        imgSrc={imgSrc}
        onClick={onToggle}
        count={count}
      />
      {isOpen && children}
    </div>
  );
};
