import { ErrorModal } from '@/components/QuestionPageComponents';
import useFeature from '@/hooks/useFeature';
import useGetNextInProgressTask, { NextTaskResponse } from '@/hooks/useGetNextTask';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import { useSubmit } from '@/providers/submitContext';
import { Task } from '@/types/QuestionPageTypes';
import { wait } from '@/utils/general_helpers';
import { tasklistFull } from '@/utils/states';
import { cn } from '@/utils/tw';
import { useRouter } from 'next/router';
import { HTMLAttributes, useCallback, useState } from 'react';
import { Button } from '../Button';

interface Props extends HTMLAttributes<HTMLDivElement> {
  task: Task;
}

const Footer = ({ task, className, ...props }: Props) => {
  const router = useRouter();
  const taskId = task.taskId;
  const { handleSubmit, handleSubmitNew, resetSubmissionError, submissionErr, getCriterionForResponse } = useSubmit();
  const { fetchNextInProgressTask } = useGetNextInProgressTask();
  const { exp } = useFeature({ kw: 'demo' });
  const [feError, setFeError] = useState<string | null>(null);
  const { saveScrollPosition, restoreScrollPosition } = useScrollRestoration();

  const handleDemoTasklistRotation = useCallback(
    (taskId: string, backward: boolean = false) => {
      const currTask = tasklistFull.find((t) => t.taskId === taskId);
      if (!currTask) return;
      const currIdx = tasklistFull.indexOf(currTask);
      let nextIdx = currIdx + 1 >= tasklistFull.length ? 0 : currIdx + 1;
      if (backward) {
        nextIdx = currIdx - 1 < 0 ? tasklistFull.length - 1 : currIdx - 1;
      }
      saveScrollPosition();
      const obj = tasklistFull[nextIdx];
      let newQuestionUrl = `/Questions?taskId=${obj.taskId}&exp=demo`;
      if (obj.taskData.responses.length === 1) {
        newQuestionUrl = `/Questions?taskId=${obj.taskId}&exp=demo`;
      }
      router.push(newQuestionUrl).then(async () => {
        await wait(100);
        restoreScrollPosition();
      });
    },
    [router]
  );

  const handleSkip = async () => {
    if (!router.isReady) return;
    let nextTaskResponse: NextTaskResponse | null;

    if (!taskId || typeof taskId !== 'string') return;

    nextTaskResponse = await fetchNextInProgressTask(taskId);

    if (!nextTaskResponse) {
      router.push('/task-list');
      return;
    }
    router.replace(`/Questions?taskId=${nextTaskResponse.nextInProgressTaskId}`);
  };

  const resetFeError = useCallback(() => {
    setFeError(null);
  }, []);

  const setFeErrorAndScroll = useCallback((error: string) => {
    setFeError(error);
  }, []);

  //TODO: Continue populating this function when more criterion types are added
  const feValidationBeforeSubmit = useCallback(() => {
    const criterionResponses = getCriterionForResponse();
    let tmpFlag = true;
    task.taskData.criteria.forEach((criteria) => {
      switch (criteria.type) {
        case 'multi-score':
          // Just check if there's same number of responses as prompt output in the response.value object
          const respondedCriteria = criterionResponses.find((c) => c.text === criteria.text);
          if (
            respondedCriteria?.responses &&
            Object.entries(respondedCriteria.responses).length == task.taskData.responses.length
          ) {
            //means ok
            break;
          } else {
            setFeErrorAndScroll('Ensure that you attempted to rate all response(s).');
            tmpFlag = false;
            break;
          }
        case 'multi-select':
        case 'single-select':
        case 'score':
        case 'ranking':
        case 'rich-human-feedback':
        default:
          tmpFlag = false;
          break;
      }
    });
    return tmpFlag;
  }, [task, getCriterionForResponse]);

  return (
    <div className=" w-full border-t-2 border-t-black p-4">
      <ErrorModal
        showButton={false}
        open={!!submissionErr || !!feError}
        onClose={() => {
          resetSubmissionError();
          resetFeError();
        }}
        errorMessage={submissionErr || feError}
      />
      {/* <div className="mb-2">
        <h1 className={`uppercase ${FontSpaceMono.className} text-xl font-bold mb-1.5`}>
            Rewards
        </h1>
        <p className={`text-sm font-semibold ${FontManrope.className} opacity-60`}>
            A brief explanation on how this works, and what the slider does, and
            how this thing would behave so the user is aware on how to use it.
        </p>
        </div> */}
      <div className="mx-auto flex max-w-[1075px] justify-end">
        {/* Stake Amount */}
        {/* <div className=" flex"> */}
        {/* <div className="w-[290px]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className={`uppercase ${FontSpaceMono.className} text-base font-bold`}>
                            Stake Amount
                        </h1>
                        <YieldInput
                            value={""}
                            onChange={(value: string) => {
                            }}
                        />
                    </div>
                    <Slider
                        min={1}
                        max={100}
                        step={10}
                        initialValue={0}
                        onChange={(value: number) => {
                        }}
                        minLabel="Low Confidence"
                        maxLabel="High Confidence"
                        className="w-full mt-4"
                    />
                </div>
            <   div className="w-px bg-gray-300 mx-4 my-2"></div>  */}
        {/* Risk & Rewards */}
        {/* <div className="flex w-[250px] flex-col"> */}
        {/* <h1 className={`uppercase ${FontSpaceMono.className} text-base font-bold mb-4`}> Risk & Rewards </h1>
                    <div className="flex justify-between gap-5">
                    <div className="flex flex-col">
                        <h2 className={`${FontManrope.className} text-[13px] font-semibold opacity-50`}>Potential Gains</h2>
                        <h2 className="text-[#11A365] text-sm font-semibold">
                        + 0.14 stTAO
                        </h2>
                    </div>
                    <div className="flex flex-col">
                        <h2 className={`${FontManrope.className} text-[13px] font-semibold opacity-50`}>Potential Loss</h2>
                        <p className="text-[#E2442F] text-sm font-semibold">
                        - 0.28 stTAO
                        </p>
                    </div>
                </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="flex w-full items-center justify-end space-x-[11px]">
          <Button
            buttonText={'SKIP'}
            className={cn('!bg-muted px-[37px] py-[15px] text-black hover:shadow-brut-sm', 'w-1/2 sm:w-auto')}
            onClick={async () => {
              if (!exp) handleSkip();
              else {
                handleDemoTasklistRotation(taskId as string, true);
              }
            }}
          />
          <Button
            buttonText={'PROCEED'}
            className={cn('bg-primary px-[37px] py-[15px] text-white hover:shadow-brut-sm', 'w-1/2 sm:w-auto')}
            onClick={() => {
              if (!exp) {
                feValidationBeforeSubmit() && handleSubmit();
              } else {
                handleDemoTasklistRotation(taskId as string);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
