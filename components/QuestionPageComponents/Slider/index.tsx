import { SliderProps } from '@/types/QuestionPageTypes';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import React, { useEffect, useState } from 'react';

const Slider: React.FC<SliderProps> = ({ min, max, step, initialValue, onChange, ...props }) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={cn('relative mb-6', props.className)}>
      <div className="relative h-1 w-full bg-gray-200">
        <div className="absolute h-full bg-primary" style={{ width: `${percentage}%` }}></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-2 border-black shadow-md flex items-center justify-center cursor-pointer"
          style={{ left: `${percentage}%`, transform: 'translate(-50%, -50%)' }}
        >
          <span className="text-xs font-bold text-white">{value}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="absolute top-0 h-1 w-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <span className={`${FontManrope.className} text-sm text-gray-600`}>{min}</span>
        <span className={`${FontManrope.className} text-sm text-gray-600`}>{max}</span>
      </div>
    </div>
  );
};

export default Slider;
