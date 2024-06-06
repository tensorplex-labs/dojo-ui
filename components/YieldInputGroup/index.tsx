import { FontManrope, FontSpaceMono } from '@/utils/typography';
import React from 'react';
import YieldInput from '../YieldInput';

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
        <p className={`text-black text-opacity-75 ${FontManrope.className} text-base font-bold`}>{label}</p>
        <a
          className={`text-[#00B6A6] ${FontSpaceMono.className} cursor-not-allowed text-base font-bold uppercase underline`}
          onClick={onClear}
        >
          CLEAR
        </a>
      </div>
      <div className="mb-[14px] mt-6 flex justify-between">
        {values.map((value, index) => (
          <YieldInput key={index} value={value} onChange={(newValue) => onChange(index, newValue)} />
        ))}
      </div>
    </div>
  );
};

export default YieldInputGroup;
