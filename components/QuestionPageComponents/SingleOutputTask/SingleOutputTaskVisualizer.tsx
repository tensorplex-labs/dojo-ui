import CodegenViewer from '@/components/CodegenViewer';
import CopyBtn from '@/components/Common/CopyButton/CopyBtn';
import { BrutCard } from '@/components/Common/CustomComponents/brut-card';
import MultiSelectV2 from '@/components/Common/MultileSelect/MultiSelectV2';
import GaussianSplatViewer from '@/components/GaussianSplatViewer';
import { Criterion, CriterionWithResponses, Task } from '@/types/QuestionPageTypes';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { IconCheck, IconProgress, IconSparkles } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { generateNonce } from 'siwe';
import Slider from '../Slider';

interface Props extends React.HTMLProps<HTMLDivElement> {
  task: Task;
  containerClassName?: string;
  visualizerClassName?: string;
  labelsClassName?: string;
}
interface VisualizerContentBoxProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  key?: string;
}
const VisualizerContentBox: React.FC<VisualizerContentBoxProps> = ({
  children,
  className,
  ...props
}: VisualizerContentBoxProps) => (
  <div
    className={cn(
      'flex w-full flex-wrap items-start gap-[5px] rounded-md border-0 border-font-primary/10 bg-background p-3',
      className
    )}
  >
    {children}
  </div>
);

const CriterionContentBox: React.FC<VisualizerContentBoxProps> = ({
  children,
  className,
  ...props
}: VisualizerContentBoxProps) => (
  <div
    className={cn(
      'flex w-full flex-wrap items-start gap-[5px] rounded-md border-0 border-font-primary/10 bg-background p-3',
      className
    )}
  >
    {children}
  </div>
);

const renderVisualizer = (task: Task) => {
  let ttiUrl = '';
  const taskResponse = task.taskData.responses[0];
  switch (task.type) {
    case 'CODE_GENERATION':
      return <CodegenViewer encodedHtml={taskResponse.completion.combined_html} />;
    case '3D_MODEL':
      if (taskResponse.completion.url === undefined) return;
      return (
        <GaussianSplatViewer
          className={cn('max-h-[700px] h-full w-auto max-w-full aspect-square')}
          url={taskResponse.completion.url}
        ></GaussianSplatViewer>
      );
    case 'TEXT_TO_IMAGE':
      if (taskResponse.completion.url === undefined) return;
      ttiUrl = (taskResponse.completion.url as string).startsWith('http')
        ? taskResponse.completion.url
        : `https://${taskResponse.completion.url}`;
      return <Image alt="image" width={300} height={300} src={ttiUrl} className="w-full" />;
    default:
      return;
  }
};

/**
 * This single out visualizer only can visualize scores and multi select, single-select for now.
 * We should add RHF into here after it's done.
 */
const SingleOutputTaskVisualizer = ({ task, className, ...props }: Props) => {
  const [criterionForResponse, setCriterionForResponse] = useState<CriterionWithResponses[]>([]);
  const idRef = useRef<string>(generateNonce());
  //Renderers
  const renderLabelQuestion = useCallback(
    (crit: Criterion, onchangeHandler: (idx: string, value: string) => void): React.ReactNode => {
      switch (crit.type) {
        case 'multi-score':
          let min = crit.min ?? 1;
          let max = crit.max ?? 10;
          let initialVal = Math.floor((max - min) / 2);
          return (
            <Slider
              className="w-full"
              showSections={true}
              min={min}
              max={max}
              step={1}
              initialValue={initialVal}
              onChange={(e) => onchangeHandler(crit.label ?? '', e.toString())}
            />
          );

        case 'single-select':
          return (
            <MultiSelectV2
              singleSelect={true}
              options={crit.options ?? []}
              selectedValues={criterionForResponse?.find((c) => c.label === crit.label)?.responses ?? []}
              onSelectionChange={(e) => {
                onchangeHandler(crit.label ?? '', e);
              }}
            />
          );
        case 'multi-select':
          return (
            <MultiSelectV2
              options={crit.options ?? []}
              selectedValues={criterionForResponse?.find((c) => c.label === crit.label)?.responses ?? []}
              onSelectionChange={(e) => {
                onchangeHandler(crit.label ?? '', e);
              }}
            />
          );
        default:
          return '';
      }
    },
    [criterionForResponse]
  );

  // Change handlers
  // Current impl: index is just the criterion label since each label has to be unique.
  const handleChange = useCallback((index: string, value: string) => {
    setCriterionForResponse((prev) => {
      const updated = prev.map((c) => {
        if (c.label !== index) return c;

        // For multi select, we need check if the value was selected before
        if (c.type === 'multi-select') {
          if (c.responses.includes(value)) {
            return { ...c, responses: c.responses.filter((r) => r !== value) };
          }
          return { ...c, responses: [...c.responses, value] };
        } else {
          // Scoring wise we only nede 1 value
          return { ...c, responses: [value] };
        }
      });
      return updated;
    });
  }, []);
  useEffect(() => {
    if (task) setCriterionForResponse([...task.taskData.criteria.map((c) => ({ ...c, responses: [] }))]);
  }, [task]);
  return (
    <div className={cn('flex w-full flex-col gap-[20px] md:flex-row', props.containerClassName)}>
      <div className="flex h-fit w-full flex-col items-center justify-start gap-[10px] rounded-lg border border-font-primary/10 bg-background-accent p-3 md:w-1/2">
        <div className="flex w-full justify-between text-xs">
          <div className="flex flex-col lowercase">
            <div className={cn('flex items-center gap-[5px]', FontSpaceMono.className)}>
              <span className="w-fit max-w-[150px] truncate">
                id: {idRef.current}_{task.taskId}
              </span>
              <CopyBtn copyString={task.taskId} className="size-[14px]" />
            </div>
            type: {task.type.replaceAll('_', ' ')}
          </div>
          <span>
            {!task.isCompletedByWorker ? (
              <div className="flex gap-[3px]">
                In Progress
                <IconProgress size={16} />
              </div>
            ) : (
              <div className="flex gap-[3px]">
                Completed
                <IconCheck
                  size={16}
                  className="rounded-full border border-black/10 bg-green-300 p-[2px] text-font-primary"
                />
              </div>
            )}
          </span>
        </div>

        <VisualizerContentBox>
          <div className="flex gap-[5px]">
            <IconSparkles className="my-[2px] size-[20px] shrink-0 animate-pulse"></IconSparkles>
            <div className="">{task.taskData.prompt}</div>
          </div>
        </VisualizerContentBox>
        <VisualizerContentBox className="flex flex-col items-stretch gap-[10px]">
          <>
            <div className="w-full">Response:</div>
            <BrutCard className={cn('p-0 flex size-fit rounded-md', props.visualizerClassName)}>
              {renderVisualizer(task)}
            </BrutCard>
          </>
        </VisualizerContentBox>
      </div>
      <div className={cn('flex flex-col items-stretch w-full md:w-1/2', props.labelsClassName)}>
        {task.taskData.criteria.map((criterion, index) => (
          <CriterionContentBox key={`sotv_visualizer_${index}`} className={cn('flex w-full flex-col')}>
            <span className={cn(FontSpaceMono.className, 'font-bold')}>
              {index + 1}. {criterion.label}
            </span>
            {renderLabelQuestion(criterion, (idx: string, value: string) => {
              handleChange(idx, value);
            })}
          </CriterionContentBox>
        ))}
      </div>
    </div>
  );
};

export default SingleOutputTaskVisualizer;
