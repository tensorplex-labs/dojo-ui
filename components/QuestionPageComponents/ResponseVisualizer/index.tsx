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
    <div className="grid w-full max-w-[1200px] grid-cols-2 gap-x-5 gap-y-10">
      {task?.taskData?.responses?.map((plot, index) => {
        return (
          <LinkContentVisualizer
            contentHtml={plot.completion.files['index.html'].content}
            contentJs={
              plot.completion.files['index.js']
                ? plot.completion.files['index.js'].content
                : plot.completion.files['script.js']?.content
            }
            key={plot.id}
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
