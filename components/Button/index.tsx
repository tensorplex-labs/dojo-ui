import { FontSpaceMono } from '@/utils/typography';
import React from 'react';

type CustomButtonProps = {
  onClick?: () => void;
  className?: string;
  buttonText: string;
};

export const Button: React.FC<CustomButtonProps> = ({
  onClick,
  className = '',
  buttonText,
}) => {
  return (
    <button
      onClick={onClick}
      className={`hover:cursor-pointer hover:bg-opacity-75 inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none px-4 py-2 text-xs md:text-sm rounded-none border-2 border-black h-[40px] bg-[#00B6A6] ${FontSpaceMono.className} font-bold text-base uppercase ${className}`}
    >
      {buttonText}
    </button>
  );
};