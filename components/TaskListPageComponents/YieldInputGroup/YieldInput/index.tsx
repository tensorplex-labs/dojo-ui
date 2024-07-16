import { YieldInputProps } from '@/types/TaskListTypes';
import { FontManrope } from '@/utils/typography';
import React from 'react';

const YieldInput: React.FC<YieldInputProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue === '' || /^[0-9]{0,4}$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="inline-flex w-[35%] items-center border-2 border-black text-black">
      <input
        className="w-full px-1 text-center font-bold text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100  disabled:text-opacity-50"
        type="text"
        inputMode="numeric"
        pattern="^[0-9]{0,4}$"
        value={value}
        onChange={handleInputChange}
        disabled={true}
      />
      <div className="flex h-full items-center justify-center bg-muted px-2">
        <p className={`text-center text-[11px] font-extrabold text-black text-opacity-40 ${FontManrope.className}`}>
          stTAO
        </p>
      </div>
    </div>
  );
};

export default YieldInput;
