import { DropdownButtonProps } from '@/types/CommonTypes';
import { FontSpaceMono } from '@/utils/typography';
import React from 'react';

export const DropDownButton: React.FC<DropdownButtonProps> = ({ buttonText, imgSrc, onClick, count }) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-[51px] w-[285px] justify-between bg-secondary px-2 py-3 ${FontSpaceMono.className} inline-flex items-center justify-center gap-[6px] border-2 border-black text-base font-bold uppercase text-black hover:shadow-brut-sm`}
    >
      <p>{buttonText}</p>
      <img src={imgSrc} className="inline-block size-6" />
      {count && <div className="bg-primary pl-0.5 pr-1 text-white">{count}</div>}
    </button>
  );
};
