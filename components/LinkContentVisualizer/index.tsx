import Slider from '@/components/Slider'; // Assuming Slider is a reusable component
import { FontSpaceMono } from '@/utils/typography';
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

const LinkContentVisualizer: React.FC<LinkContentVisualizerProps> = ({
  title,
  showTitle,
  url,
  showSlider,
  sliderSettings,
  onRatingChange,
  ratingData,
}) => {
  const handleRatingChange = useCallback(
    (rating: number) => {
      if (onRatingChange) {
        onRatingChange(rating);
      }
    },
    [onRatingChange]
  );

  const parseSandboxURL = (url: string) => {
    const urlObj = new URL(url);
    const sandboxId = urlObj.hostname.split('.')[0];
    return `https://codesandbox.io/embed/${sandboxId}?view=preview&hidedevtools=1&hidenavigation=1&previewwindow=browser`;
  };

  return (
    <div className="flex size-full flex-col justify-center ">
      {showTitle && <p className={`text-start font-bold ${FontSpaceMono.className}`}>{title}</p>}

      <div
        className={`h-auto w-full rounded-none ${showSlider && 'border-2 border-black bg-[#F6F6E6] shadow-brut-sm'} `}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '650px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={parseSandboxURL(url)}
            style={{
              position: 'absolute',
              left: '-16px',
              bottom: '0px',
              top: '0',
              width: 'calc(100% + 16px)',
              height: 'calc(100%)',
              border: 'none',
            }}
            className="aspect-[3/4] w-full"
            title="elastic-newton-69zqqk"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
        {showSlider && (
          <>
            <div
              className={` inline-flex w-full justify-between px-4 text-base ${FontSpaceMono.className} border-t-2 border-black py-2  font-bold uppercase`}
            >
              response quality
            </div>
            <div className={`px-4`}>
              {sliderSettings && onRatingChange && (
                <Slider
                  min={0}
                  max={sliderSettings.max}
                  step={sliderSettings.step}
                  initialValue={sliderSettings.initialValue}
                  onChange={handleRatingChange}
                  showSections
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LinkContentVisualizer;
