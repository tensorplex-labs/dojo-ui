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
      <div className={`h-auto w-full rounded-none ${showSlider && 'border-2 border-black bg-[#F6F6E6] shadow-brut-sm'} `}>
        <iframe
          src={url}
          className="aspect-[3/4] w-full"
          title="elastic-newton-69zqqk"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
        {showSlider && <>
          <div className={` inline-flex w-full justify-between px-4 text-base ${FontSpaceMono.className} border-t-2 border-black py-2  font-bold uppercase`}>response quality</div>
          <div className={`px-4`}>
            {sliderSettings && onRatingChange &&
              <Slider
                min={0}
                max={sliderSettings.max}
                step={sliderSettings.step}
                initialValue={sliderSettings.initialValue}
                onChange={handleRatingChange}
                showSections
              />
            }
          </div>
        </>}
      </div>
    </div>
  );
};

export default LinkContentVisualizer;