import CodegenViewer from '@/components/CodegenViewer';
import GaussianSplatViewer from '@/components/GaussianSplatViewer';
import { useSubmit } from '@/providers/submitContext';
import { Criterion, Task, TaskResponses } from '@/types/QuestionPageTypes';
import { TaskType } from '@/utils/states';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { useCallback } from 'react';
import { TaskVisualizerProps } from '../SingleOutputTask/SingleOutputTaskVisualizer';
import Slider from '../Slider';
import TaskPrompt from '../TaskPrompt';

const MultiOutputVisualizer = ({ task, className, ...props }: TaskVisualizerProps) => {
  const { addCriterionForResponse, getCriterionForResponse } = useSubmit();
  const renderVisualizer = useCallback((taskT: TaskType, response: TaskResponses, index: number) => {
    let ttiUrl = '';
    switch (taskT) {
      case 'CODE_GENERATION':
        return <CodegenViewer encodedHtml={response.completion.combined_html} />;
      case '3D_MODEL':
      case 'TEXT_TO_THREE_D':
        if (response.completion.url === undefined) return;
        return (
          <GaussianSplatViewer
            className={cn('max-h-[700px] h-full w-auto max-w-full aspect-square')}
            url={response.completion.url}
          ></GaussianSplatViewer>
        );
      case 'TEXT_TO_IMAGE':
        if (response.completion.url === undefined) return;
        ttiUrl = (response.completion.url as string).startsWith('http')
          ? response.completion.url
          : `https://${response.completion.url}`;
        return <img alt="image" src={ttiUrl} />;
      default:
        return;
    }
  }, []);

  const renderCriteria = useCallback((task: Task, criteria: Criterion, index: number) => {
    switch (criteria.type) {
      case 'multi-score':
        return (
          <>
            <div className={cn('max-w-[1075px] w-full', FontSpaceMono.className, 'font-bold')}>
              {index + 1}.{' '}
              {criteria.text ?? 'Please score the below responses on the quality (10 - highest, 1 - lowest)'}
            </div>
            <div className="grid w-full max-w-full grid-cols-1 gap-x-5 gap-y-10 xl:grid-cols-2">
              {task.taskData.responses.map((response, index) => (
                <div key={`${task.type}_${index}`} className="flex w-full flex-col justify-center ">
                  <div
                    className={`flex h-fit w-full flex-col rounded-sm border-2 border-black bg-ecru-white shadow-brut-sm `}
                  >
                    {renderVisualizer(task.type, response, index)}
                    <>
                      <div
                        className={` w-full justify-between px-4 text-base ${FontSpaceMono.className} border-t-2 border-black py-2  font-bold uppercase`}
                      >
                        response quality
                      </div>
                      <div className={`px-4`}>
                        <Slider
                          min={1}
                          max={10}
                          step={1}
                          initialValue={1}
                          onChange={(rating) => {
                            addCriterionForResponse(`${criteria.text}::${response.model}`, rating.toString());
                          }}
                          showSections
                        />
                      </div>
                    </>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return <></>;
    }
  }, []);
  return (
    <div className={cn('flex w-full flex-col gap-[30px] items-stretch', props.containerClassName)}>
      {/* Headers */}
      <div className="flex w-full justify-center px-4">
        <div className="w-full max-w-[1075px]">
          {task && <TaskPrompt title={task?.title} taskType={task.type} formattedPrompt={task.taskData.prompt} />}
        </div>
      </div>
      <hr className="border-2 border-t-0 border-black"></hr>
      <div className="px-4">
        {/* {task.taskData.responses.map((output, index) => (
          <div key={`${task.type}_${index}`} className="flex w-full flex-col justify-center ">
            <div
              className={`flex h-fit w-full flex-col rounded-sm border-2 border-black bg-ecru-white shadow-brut-sm `}
            >
              {renderVisualizer(task.type, output, index)}
              {out && (
                <>
                  <div
                    className={` w-full justify-between px-4 text-base ${FontSpaceMono.className} border-t-2 border-black py-2  font-bold uppercase`}
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
        ))} */}

        {task.taskData.criteria.map((criteria, index) => {
          return (
            <div className="flex flex-col items-center gap-[10px]" key={`${task.type}_${criteria.type}_${index}`}>
              {renderCriteria(task, criteria, index)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiOutputVisualizer;
