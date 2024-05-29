import Slider from '@/components/Slider'; // Assuming Slider is a reusable component
import { FontSpaceMono } from "@/utils/typography";
import React, { useCallback } from 'react';

interface LinkContentVisualizerProps {
  title: string;
  showTitle: boolean;
  url: string;
  showSlider?: boolean;
  sliderSettings?: {
    min: number;
    max: number;
    step: number;
    initialValue: number;
  };
  ratingData?: number;
  onRatingChange?: (rating: number) => void;
}

const LinkContentVisualizer: React.FC<LinkContentVisualizerProps> = ({ title, showTitle, url, showSlider, sliderSettings, onRatingChange, ratingData }) => {
  const handleRatingChange = useCallback((rating: number) => {
    if (onRatingChange) {
      onRatingChange(rating);
    }
  }, [onRatingChange]);
  return (
    <div className="flex size-full flex-col justify-center ">
      {showTitle && <p className={`text-start font-bold ${FontSpaceMono.className}`}>{title}</p>}
      <div className={`w-full h-auto rounded-none ${showSlider && 'shadow-brut-sm border-2 border-black bg-[#F6F6E6]'} `}>
        <iframe
          src={url}
          className="aspect-[3/4] w-full"
          title="elastic-newton-69zqqk"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
        {showSlider && <>
          <div className={` text-base inline-flex w-full justify-between px-4 ${FontSpaceMono.className} uppercase font-bold py-2`}>Prompt Similarities<span>{ratingData} %</span></div>
          <div className={`px-4`}>
            {sliderSettings && onRatingChange &&
              <Slider
                min={sliderSettings.min}
                max={sliderSettings.max}
                step={sliderSettings.step}
                initialValue={sliderSettings.initialValue}
                onChange={handleRatingChange}
              />
            }
          </div>
        </>}
      </div>
    </div>
  );
};

export default LinkContentVisualizer;