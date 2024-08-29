import LinkContentVisualizer from '@/components/QuestionPageComponents/LinkContentVisualizer';
import { ResponseVisualizerProps } from '@/types/QuestionPageTypes';
import React from 'react';

const ResponseVisualizer: React.FC<ResponseVisualizerProps> = ({
  task,
  minValSlider,
  maxValSlider,
  ratings,
  multiScoreOptions,
  isMultiScore,
  handleRatingChange,
}) => {
  return (
    <div className="grid w-full max-w-[1200px] grid-cols-2 gap-x-5 gap-y-10 md:px-4 md:py-2 lg:px-4 lg:py-2">
      {task?.taskData?.responses?.map((plot, index) => {
        return (
          <LinkContentVisualizer
            contentHtml={(plot.completion as any).combined_html}
            key={`vis-${index}`}
            title={plot.model}
            showTitle={true}
            url={plot.completion.sandbox_url}
            sliderSettings={{
              min: minValSlider,
              max: maxValSlider,
              step: 1,
              initialValue: ratings[multiScoreOptions[index]],
            }}
            onRatingChange={(rating) => handleRatingChange(multiScoreOptions[index], rating)}
            showSlider={isMultiScore}
            ratingData={ratings[multiScoreOptions[index]]}
          />
        );
      })}
    </div>
  );
};

export default ResponseVisualizer;
