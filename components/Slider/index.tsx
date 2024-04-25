import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  initialValue: number;
  onChange: (value: number) => void;
  minLabel?: string;
  maxLabel?: string;
  className?: string; // Add a className prop
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  initialValue,
  onChange,
  minLabel,
  maxLabel,
  className = '', // Default to an empty string if not provided
}) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}> {/* Apply the className prop */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="slider w-full"
      />
      <div className="flex justify-between w-full">
        {minLabel && <span className="text-xs">{minLabel}</span>}
        {maxLabel && <span className="text-xs">{maxLabel}</span>}
      </div>
    </div>
  );
};

export default Slider;