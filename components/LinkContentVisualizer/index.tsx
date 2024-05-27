import Slider from '@/components/Slider'; // Assuming Slider is a reusable component
import { FontSpaceMono } from "@/utils/typography";
import React, { useState } from 'react';

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
  onRatingChange?: (rating: number) => void;
}

const LinkContentVisualizer: React.FC<LinkContentVisualizerProps> = ({ title, showTitle, url, showSlider, sliderSettings, onRatingChange }) => {
  const [zoom, setZoom] = useState(100); // Default zoom level at 100%


  return (
    <div className="flex size-full flex-col justify-center items-center border-2 border-black">
      {showTitle && <p className={`text-start font-bold ${FontSpaceMono.className}`}>{title}</p>}
      <iframe
        src={url}
        style={{ transform: `scale(${zoom / 100})` }} // Adjust scale based on zoom
        className="aspect-[3/4] w-full px-[10px]"
        title="elastic-newton-69zqqk"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <div className={` text-base inline-flex w-full justify-between px-4 ${FontSpaceMono.className} uppercase font-bold py-2`}>Prompt Similarities</div>
      {showSlider && sliderSettings && onRatingChange &&
        <Slider
          min={sliderSettings.min}
          max={sliderSettings.max}
          step={sliderSettings.step}
          initialValue={sliderSettings.initialValue}
          onChange={onRatingChange}
        />
      }
    </div>
  );
};

export default LinkContentVisualizer;