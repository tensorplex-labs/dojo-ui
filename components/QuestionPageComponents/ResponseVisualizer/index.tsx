import Slider from '@/components/Common/Slider';
import GaussianSplatViewer from '@/components/GaussianSplatViewer';
import { ResponseVisualizerProps, TaskResponses } from '@/types/QuestionPageTypes';
import { TaskType } from '@/utils/states';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
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
  const showTitle = true;

  const renderVisualizer = (taskT: TaskType, plot: TaskResponses, index: number) => {
    switch (taskT) {
      case 'CODE_GENERATION':
        return (
          <iframe
            src={plot.completion.url || plot.completion.sandbox_url}
            className="aspect-[3/4] w-full"
            title="elastic-newton-69zqqk"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        );
      case '3D_MODEL':
        return (
          <GaussianSplatViewer
            className={cn('max-h-[700px] h-full w-auto max-w-full aspect-square')}
            url={plot.completion.url}
          ></GaussianSplatViewer>
        );
      default:
        return;
    }
  };

  return (
    <div className="grid w-full max-w-[1200px] grid-cols-2 gap-x-5 gap-y-10">
      {task.taskData.responses.map((plot, index) => (
        <div key={`${task.type}_${index}`} className="flex w-full flex-col justify-center ">
          {showTitle && <p className={`text-start font-bold ${FontSpaceMono.className}`}>{plot.model}</p>}
          <div
            className={`h-auto w-full rounded-none ${isMultiScore && 'border-2 border-black bg-ecru-white shadow-brut-sm'} `}
          >
            {renderVisualizer(task.type, plot, index)}
            {isMultiScore && (
              <>
                <div
                  className={` inline-flex w-full justify-between px-4 text-base ${FontSpaceMono.className} border-t-2 border-black py-2  font-bold uppercase`}
                >
                  response quality
                </div>
                <div className={`px-4`}>
                  <Slider
                    min={minValSlider}
                    max={maxValSlider}
                    step={1}
                    initialValue={ratings[multiScoreOptions[index]]}
                    onChange={(rating) => {
                      handleRatingChange(multiScoreOptions[index], rating);
                    }}
                    showSections
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponseVisualizer;
