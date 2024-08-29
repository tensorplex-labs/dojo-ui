import CodegenVis from '@/components/CodegenVis';
import Slider from '@/components/QuestionPageComponents/Slider'; // Assuming Slider is a reusable component
import { LinkContentVisualizerProps } from '@/types/QuestionPageTypes';
import { FontSpaceMono } from '@/utils/typography';
import React, { useCallback } from 'react';

const LinkContentVisualizer: React.FC<LinkContentVisualizerProps> = ({
  title,
  showTitle,
  url,
  showSlider,
  sliderSettings,
  onRatingChange,
  ratingData,
  contentHtml,
  contentJs,
  contentCss,
  ...rest
}) => {
  const handleRatingChange = useCallback(
    (rating: number) => {
      if (onRatingChange) {
        onRatingChange(rating);
      }
    },
    [onRatingChange]
  );
  return (
    <div className="flex size-full flex-col justify-center ">
      {showTitle && <p className={`text-start font-bold ${FontSpaceMono.className}`}>{title}</p>}
      <div
        className={`h-fit w-full rounded-none ${showSlider && 'border-2 border-black bg-ecru-white shadow-brut-sm'} `}
      >
        <CodegenVis encodedCss={contentCss} encodedHtml={contentHtml ?? ''} encodedJs={contentJs ?? ''} />
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
