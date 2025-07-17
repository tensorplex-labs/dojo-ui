import MultiSelectV2 from '@/components/Common/MultileSelect/MultiSelectV2';
import Slider from '@/components/Common/Slider';
import GaussianSplatViewer from '@/components/GaussianSplatViewer';
import { useSubmit } from '@/providers/submitContext';
import { Criterion, Task } from '@/types/QuestionPageTypes';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import { useCallback, useState } from 'react';
interface Props {
  task: Task;
}
const New3DVisualizer = ({ task }: Props) => {
  //This is temporary
  const [qn1, setQn1] = useState<string>('');
  const [qn2, setQn2] = useState<string>('');
  const {
    getCriterionForResponse: criterionForResponse,
    addCriterionForResponse,
    resetCriterionForResponse,
  } = useSubmit();
  const handleChange = useCallback((modelId: string, criteria: Criterion, value: string) => {
    addCriterionForResponse(modelId, criteria, value);
  }, []);
  const renderLabelQuestion = useCallback(
    (model: string, crit: Criterion, onchangeHandler: (idx: string, value: string) => void): React.ReactNode => {
      switch (crit.type) {
        case 'score':
          let min = crit.min ?? 1;
          let max = crit.max ?? 10;
          let initialVal = Math.floor((max - min) / 2);
          return (
            <Slider
              className="w-full"
              showSections={true}
              min={1}
              max={10}
              step={1}
              initialValue={initialVal}
              onChange={(e) => {}}
            />
          );
        case 'text':
          return (
            <div className="flex flex-col gap-0.5">
              <div>{crit.query}</div>
              <div className={cn('overflow-hidden rounded-sm border-2 border-black w-full')}>
                <textarea
                  value={qn2}
                  maxLength={600}
                  className={cn(
                    `${FontManrope.className} h-[200px] block w-full resize-none overflow-hidden rounded-sm border-black bg-background px-3 py-2 text-sm font-semibold text-black placeholder:text-sm focus:bg-white focus:outline-none md:border-0`
                  )}
                  onChange={(e) => {
                    const value = e.target.value;
                    setQn2(value);
                  }}
                />
              </div>
            </div>
          );
        case 'single-select':
          return (
            <div className="flex flex-col gap-0.5">
              <div>{crit.query}</div>
              <MultiSelectV2
                singleSelect={true}
                options={crit.options ?? []}
                selectedValues={qn1}
                onSelectionChange={(e) => {
                  console.log('e', e);
                  setQn1(e);
                }}
              />
            </div>
          );
        case 'multi-select':
          return (
            <MultiSelectV2
              singleSelect={false}
              options={crit.options ?? []}
              selectedValues={
                criterionForResponse()
                  ?.find((c) => c.model === model)
                  ?.criteria.find((c) => c.query === crit.query)?.value ?? []
              }
              onSelectionChange={(e) => {
                onchangeHandler(crit.query ?? '', e);
              }}
            />
          );
        default:
          return '';
      }
    },
    [criterionForResponse, qn2, qn1]
  );
  return (
    <div className="mx-4 grid w-full max-w-[1075px] grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        {task.taskData.responses.map((response, index) => {
          return (
            <div className="flex flex-col gap-0.5" key={'new_3d_model_' + index}>
              <div className="">{response.model}</div>
              <div className="size-full rounded-sm border-2 border-black">
                <GaussianSplatViewer
                  className={cn('max-h-[400px] h-full w-full max-w-full aspect-square')}
                  url={response.completion.url}
                ></GaussianSplatViewer>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        {(task.taskData as any).criteria.map((crit: Criterion, _: any) =>
          renderLabelQuestion(task.taskId, crit, (idx, value) => {
            handleChange(task.taskId, crit, value);
          })
        )}
      </div>
    </div>
  );
};

export default New3DVisualizer;
