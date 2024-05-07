import React from 'react';
import { FontManrope } from "@/utils/typography";

interface YieldInputProps {
  value: string;
  onChange: (value: string) => void;
}

const YieldInput: React.FC<YieldInputProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue === '' || /^[0-9]{0,4}$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="inline-flex items-center text-black border-black border-2 w-[35%]">
      <input
        className="text-black disabled:text-opacity-50 w-full font-bold text-center focus:outline-none px-1 disabled:bg-gray-100  disabled:cursor-not-allowed"
        type="text"
        inputMode="numeric"
        pattern="^[0-9]{0,4}$"
        value={value}
        onChange={handleInputChange}
        disabled={true}
      />
      <div className="flex items-center justify-center h-full bg-[#E4E4E4] px-2">
        <p
          className={`text-black text-opacity-40 text-center text-[11px] font-extrabold ${FontManrope.className}`}
        >
          stTAO
        </p>
      </div>
    </div>
  );
};

export default YieldInput;