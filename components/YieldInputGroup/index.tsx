import React from 'react';
import YieldInput from '../YieldInput';
import { FontManrope, FontSpaceMono } from "@/utils/typography";

interface YieldInputGroupProps {
  label: string;
  values: string[];
  otherValues?: string[];
  onClear: () => void;
  onChange: (index: number, value: string) => void;
}

const YieldInputGroup: React.FC<YieldInputGroupProps> = ({ label, values, otherValues, onClear, onChange }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className={`text-black text-opacity-75 ${FontManrope.className} text-base font-bold`}>
          {label}
        </p>
        <a
          className={`text-[#00B6A6] ${FontSpaceMono.className} text-base uppercase underline font-bold cursor-pointer`}
          onClick={onClear}
        >
          CLEAR
        </a>
      </div>
      <div className="flex justify-between mt-6 mb-[14px]">
        {values.map((value, index) => (
          <YieldInput
            key={index}
            value={value}
            onChange={(newValue) => onChange(index, newValue)}
          />
        ))}
      </div>
    </div>
  );
};

export default YieldInputGroup;