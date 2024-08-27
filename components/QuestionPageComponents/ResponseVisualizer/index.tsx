import LinkContentVisualizer from '@/components/QuestionPageComponents/LinkContentVisualizer';
import { ResponseVisualizerProps } from '@/types/QuestionPageTypes';
import { getFileContentFromTask } from '@/utils/general_helpers';
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
            contentHtml={getFileContentFromTask('html', plot.completion.files)}
            contentJs={getFileContentFromTask('js', plot.completion.files)}
            contentCss={getFileContentFromTask('css', plot.completion.files)}
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
