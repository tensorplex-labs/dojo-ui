import { FontSpaceMono } from '@/utils/typography'; // Assuming this is the correct import path
import React from 'react';

type DropdownButtonProps = {
  buttonText: string;
  imgSrc: string;
  onClick: () => void;
  count?: string; // Optional count prop
};

export const DropDownButton: React.FC<DropdownButtonProps> = ({ buttonText, imgSrc, onClick, count }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#DBF5E9] flex justify-between w-[285px] h-[51px] px-2 py-3 ${FontSpaceMono.className} inline-flex items-center justify-center gap-[6px] border-2 border-black text-base font-bold uppercase text-black hover:shadow-brut-sm`}
    >
      <p>{buttonText}</p>
      <img src={imgSrc} className="inline-block size-6" />
      {count && <div className="bg-[#00B6A6] pl-0.5 pr-1 text-white">{count}</div>}
    </button>
  );
};
