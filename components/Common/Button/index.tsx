import { CustomButtonProps } from '@/types/CommonTypes';
import { FontSpaceMono } from '@/utils/typography';
import React from 'react';

export const Button: React.FC<CustomButtonProps> = ({
  onClick,
  className = '',
  buttonText,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`focus-visible:ring-ring inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-sm border-2 border-black bg-primary px-4 py-2 text-xs ring-offset-background transition-colors hover:cursor-pointer hover:bg-opacity-75 hover:shadow-brut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none md:text-sm ${FontSpaceMono.className} text-base font-bold uppercase ${className}`}
    >
      {buttonText}
    </button>
  );
};
