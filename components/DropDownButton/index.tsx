import React from 'react';
import { FontSpaceMono } from "@/utils/typography"; // Assuming this is the correct import path

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
      className={`bg-[#DBF5E9] py-3 px-2 ${FontSpaceMono.className} text-base font-bold inline-flex justify-center gap-[6px] hover:shadow-brut-sm text-black border-2 border-black items-center uppercase`}
    >
      <p>{buttonText}</p>
      <img src={imgSrc} className="inline-block" />
      {count && <div className='bg-[#00B6A6] text-white pr-1 pl-0.5'>{count}</div>}
    </button>
  );
};