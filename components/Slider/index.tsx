// import React, { useState } from 'react';

// interface SliderProps {
//   min: number;
//   max: number;
//   step: number;
//   initialValue: number;
//   onChange: (value: number) => void;
//   minLabel?: string;
//   maxLabel?: string;
//   className?: string;
// }

// const Slider: React.FC<SliderProps> = ({
//   min,
//   max,
//   step,
//   initialValue,
//   onChange,
//   minLabel,
//   maxLabel,
//   className = '',
// }) => {
//   const [value, setValue] = useState(initialValue);

//   const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = parseInt(event.target.value, 10);
//     setValue(newValue);
//     onChange(newValue);
//   };

//   // Calculate the number of steps
//   const numberOfSteps = Math.floor((max - min) / step);

//   // Generate an array of steps
//   const stepsArray = Array.from({ length: numberOfSteps }, (_, i) => min + i * step);

//   return (
//     <div className={`relative mb-6 ${className} flex items-center`}>
//       <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
//       {stepsArray.map((stepValue, index) => (
//         <span
//           key={index}
//           className="ml-1 w-[5px] h-[11px] bg-[#00B6A6] border-black border text-gray-500 dark:text-gray-400 absolute z-10"
//           style={{ left: `calc(${((stepValue - min) / (max - min)) * 100}% - 0.5rem)` }}
//         >
         
//         </span>
//       ))}
//       <input
//         id="labels-range-input"
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         onChange={handleSliderChange}
//         className="w-full h-[6px] bg-[#00B6A6] rounded-lg appearance-none accent-[#D9D9D9] cursor-pointer border border-black"
//       />

//       {minLabel && (
//         <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
//           {minLabel}
//         </span>
//       )}
//       {maxLabel && (
//         <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
//           {maxLabel}
//         </span>
//       )}
//     </div>
//   );
// };

// export default Slider;

import { FontManrope } from '@/utils/typography';
import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  minLabel?: string;
  maxLabel?: string;
  initialValue: number;
  onChange: (value: number) => void;
  showSections?: boolean;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  initialValue,
  onChange,
    minLabel,
  maxLabel,
  showSections
}) => {
  const [value, setValue] = useState(initialValue);
  // const numberOfSteps = Math.floor((max - min) / step);

  // Generate an array of steps
  // const stepsArray = Array.from({ length: numberOfSteps }, (_, i) => min + i * step);

  const percentage = ((value - min) / (max - min)) * 100;
  const numberOfSteps = Math.floor((max - min) / step) + 1;

const stepsArray = Array.from({ length: numberOfSteps }, (_, i) => min + i * step);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  const sliderStyle = {
    background: `linear-gradient(to right, #00B6A6 0%, #00B6A6 ${percentage}%, #ccc ${percentage}%, #ccc 100%)`
  };

  return (
    <div className="relative mb-6">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className={`w-full h-1.5 bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none border border-black
        [&::-webkit-slider-thumb]:w-3
        [&::-webkit-slider-thumb]:h-3
        [&::-webkit-slider-thumb]:-mt-0.5
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,1)]
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-webkit-slider-thumb]:z-50
        [&::-webkit-slider-thumb]:ease-in-out
        [&::-webkit-slider-thumb]:bg-[#D9D9D9]
       `}
        style={sliderStyle}
      />
    {showSections && (
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none flex justify-between w-full">
      {stepsArray.map((stepValue, index) => (
        <div className={`ml-[10px] mt-[10px] `} key={index}>
          <span
            className={`bg-[#00B6A6] ${stepValue === value && "opacity-0 bg-transparent"} border-black border block h-[11px] w-[5px] dark:text-gray-400`}
          />
          <p className={`${FontManrope.className} font-semibold`}>{stepValue}</p>
        </div>
      ))}
      
  

      </div>
    )}
      {minLabel && (
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
          {minLabel}
        </span>
      )}
      {maxLabel && (
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
          {maxLabel}
        </span>
      )}
    </div>
  );
};

export default Slider;