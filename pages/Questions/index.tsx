/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { Button } from '@/components/Button';
import DragnDrop from '@/components/DragnDrop';
import LinkContentVisualizer from '@/components/LinkContentVisualizer';
import TPLXModalContainer from '@/components/ModalContainer';
import MultiSelect from '@/components/MultileSelect';
import TPLXShimmers from '@/components/Shimmers';
import Slider from '@/components/Slider';
import useRequestTaskByTaskID from '@/hooks/useRequestTaskByTaskID';
import useSubmitTask from '@/hooks/useSubmitTask';
import Layout from '@/layout';
import { useSubmit } from '@/providers/submitContext';
import { useTaskData } from '@/providers/taskContext';
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';

type QuestionPageProps = {
  children: ReactNode;
};

type RankOrder = { [key: string]: string };

export const taskCriteria = {
  multiSelect: 'multi-select',
  ranking: 'ranking',
  score: 'score',
} as const;

export type TaskCriteria = (typeof taskCriteria)[keyof typeof taskCriteria];

const QuestionPage: React.FC<QuestionPageProps> = ({ children }) => {
  const { updateMultiSelect, updateRanking, updateScore, submissionErr, setSubmissionErr } = useSubmit();
  const [rankAnswer, setRankAnswer] = useState<RankOrder>();
  const [isMultiSelectQuestion, setIsMultiSelectQuestion] = useState<boolean>(false);
  const [isRankQuestion, setIsRankQuestion] = useState<boolean>(false);
  const [isSlider, setisSlider] = useState<boolean>(false);
  const [minValSlider, setMinValSlider] = useState<number>(1); // [1]
  const [maxValSlider, setMaxValSlider] = useState<number>(10); // [1]
  // State for the selected values in the multi-select radio component
  const [selectedMultiSelectValues, setSelectedMultiSelectValues] = useState<string[]>([]);
  // Handler for changes in the draggable items order
  const handleOrderChange = (newOrder: string[]) => {
    const newRankAnswer: RankOrder = {};
    newOrder.forEach((value, index) => {
      newRankAnswer[value] = index.toString();
    });
    setRankAnswer(newRankAnswer);
    updateRanking(newOrder);
  };

  const [taskId, setTaskId] = useState<string>(''); // [1
  const [multiSelectQuestionData, setMultiSelectQuestionData] = useState<string[]>([]);
  const [rankQuestionData, setRankQuestionData] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState<number>(1); // Initial value set to 1, adjust as necessary
  const [open, setOpen] = useState(false);

  const { task, loading: isTaskLoading } = useRequestTaskByTaskID(taskId);
  const [percentage, setPercentage] = useState(0);
  const { error } = useSubmitTask();
  const { taskData } = useTaskData();
  const router = useRouter();

  useEffect(() => {
    const { taskId } = router.query;
    if (router.isReady && taskId && typeof taskId === 'string') {
      setTaskId(taskId);
    }
  }, [router]);

  useEffect(() => {
    task?.taskData.criteria.forEach(criterion => {
      switch (criterion.type) {
        case taskCriteria.multiSelect:
          setIsMultiSelectQuestion(true);
          criterion.options && setMultiSelectQuestionData(criterion.options);
          setSelectedMultiSelectValues([]);
          break;
        case taskCriteria.ranking:
          setIsRankQuestion(true);
          setRankQuestionData([])
          if (criterion.options) {
            setRankQuestionData(criterion.options);
            updateRanking(criterion.options);
          }
          break;
        case taskCriteria.score:
          setisSlider(true);
          handleSliderChange(1);
          criterion.max && setMinValSlider(criterion.max);
          criterion.min && setMaxValSlider(criterion.min);
          break;
        default:
          console.error(`Unhandled criterion type: ${criterion.type}`);
      }
    });
  }, [task]);
  // Handler for changes in the multi-select radio buttons
  const handleSelectionChange = (newValue: string) => {
    setSelectedMultiSelectValues(prevValues => {
      const newValues = prevValues.includes(newValue)
        ? prevValues.filter(value => value !== newValue)
        : [...prevValues, newValue];
      updateMultiSelect(newValues); // Move this inside the setState callback
      return newValues;
    });
  };
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    updateScore(value);
  };
  const handleSliderPercentage = (value: number) => {
    setPercentage(value);
  };
  const formattedPrompt = useMemo(() => {
    return task?.taskData?.prompt?.split('\\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }, [task]);
  const route = useRouter();

  const handleOnClose = () => {
    setSubmissionErr(null);
    setOpen(false);
    route.push('/');
  };

  useEffect(() => {
    if (submissionErr) {
      setOpen(true);
    }
  }, [submissionErr]);

  useEffect(() => {
    setSubmissionErr(null);
  }, []);

  return (
    <Layout>
      {!isTaskLoading ? (
        <>
          <div className="mx-auto my-4 flex max-w-[1200px] flex-col items-center justify-center">
            <span
              className={`${FontSpaceMono.className} self-start rounded-[20px] border border-black bg-[#D0A215] px-2.5 py-[5px] font-bold text-white`}
            >
              {task?.type} PROMPT
            </span>
            <div className="my-5 flex self-start whitespace-pre-wrap text-left font-semibold opacity-60">
              {formattedPrompt}
            </div>
            <div className=" grid w-full grid-cols-2 gap-3">
              {task?.taskData?.responses.map(
                (
                  plot: {
                    id: React.Key | null | undefined;
                    htmlContent: string;
                    title: string;
                    showTitle: boolean;
                    completion: { sandbox_url: string };
                  },
                  index
                ) => (
                  <LinkContentVisualizer
                    title={rankQuestionData[index]}
                    showTitle={true}
                    url={plot.completion.sandbox_url}
                    key={plot.id}
                  />
                )
              )}
            </div>

            {/* <ChatComponent /> */}
            {/* <div className='grid grid-cols-2 gap-4'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className='shadow-brut-sm border-2 border-black bg-[#F6F6E6]'>
              <ImageComponent src={"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"}/>
              <div className={` text-base inline-flex w-full justify-between px-4 ${FontSpaceMono.className} uppercase font-bold py-2`}><span>Prompt Similarities</span><span>{percentage}%</span></div>
              <div className=' p-2'>
              <Slider
                  min={1}
                  max={100}
                  step={1} // Changed step from 5 to 1 to allow values between 1 and 5
                  initialValue={1}
                  // onChange={handleSliderChange}
                  onChange={handleSliderPercentage}
                  // showSections
                />
                </div>
            </div>
          ))}
        </div> */}
            {/* <div className=' flex justify-start items-center text-left self-start mt-[42px]'>
          <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Ranking Question </h1>
          <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>{task?.type} PROMPT</span>
        </div> */}
            {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">{task?.taskData?.prompt}</p> */}
            {isSlider && (
              <>
                {/* <ChatComponent /> */}
                <div className=" mt-[42px] flex items-center justify-start self-start text-left">
                  <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rate Question</h1>
                </div>
                <div className="mt-4 w-[541px] space-y-2 rounded-xl border-2 border-black border-opacity-10 bg-[#F6F6E6]">
                  <div className="row-start-2 h-[160px] rounded-br-lg px-[57px] py-[30px]">
                    <h1 className={`${FontSpaceMono.className} mb-[5px] text-base font-bold`}>
                      LINEAR SCALE<span className=" text-red-500">*</span>
                    </h1>
                    <p className={`${FontManrope.className} mb-[16px] text-base font-bold opacity-60`}>
                      Rate from 1 (negative) to 10 (positive)
                    </p>
                    <Slider
                      min={1}
                      max={10}
                      step={1} // Changed step from 5 to 1 to allow values between 1 and 5
                      initialValue={1}
                      onChange={handleSliderChange}
                      showSections
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Multiselect Question */}
          {isMultiSelectQuestion && (
            <div className="mx-auto my-4 flex max-w-[1200px] flex-col items-center justify-center">
              <div className=" mt-[42px] flex items-center justify-start self-start text-left">
                <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Multi-Select Question</h1>
              </div>
              {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">Please evaluate the coding question, and answer accordingly.</p> */}
              <div className="mx-auto my-4 flex w-[610px] flex-col items-center justify-center rounded-b-xl border-2 border-black border-opacity-10">
                <div className="p-[34px] pt-[10px]">
                  <MultiSelect
                    options={multiSelectQuestionData}
                    selectedValues={selectedMultiSelectValues}
                    onSelectionChange={handleSelectionChange}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Rank Question */}
          {isRankQuestion && (
            <div className="mx-auto my-4 flex max-w-[1200px] flex-col items-center justify-center">
              <div className="mt-[42px] flex items-center justify-start self-start text-left">
                <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rank Question</h1>
                {/* <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>{task?.type} PROMPT</span> */}
              </div>
              <>
                {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">Which animation best represent an animated solar system? The slider should speed up the animation.</p> */}
                <div className="mt-4 flex w-full justify-center">
                  <div className="w-[780px] bg-[#FFFFF4] pl-[48px]">
                    <p>
                      Please rank the following output in accordance with the shown frames and the described prompt as
                      much as possible, considering any interactions included
                    </p>
                    <DragnDrop options={rankQuestionData} onOrderChange={handleOrderChange} />
                  </div>
                </div>
              </>
            </div>
          )}
          <TPLXModalContainer
            className={'h-[206px] w-[512px]'}
            headerClassName={'h-12 pl-4'}
            bodyClassName="p-0"
            header={'Error'}
            open={open}
            onClose={() => handleOnClose()}
            onSave={() => handleOnClose()}
          >
            <div
              className={cn(
                `${FontManrope.className} flex h-[88px] items-center border-b-2 border-black bg-accent px-6 py-4 text-[16px] leading-[120%] opacity-60`
              )}
            >
              <span>{submissionErr}</span>
            </div>
            <div className={'size-full p-1 text-right'}>
              <Button
                className={cn('mr-4 mt-2 h-[39px] w-[85px] text-[16px] text-white hover:shadow-brut-sm')}
                buttonText={'CLOSE'}
                onClick={() => handleOnClose()}
              />
            </div>
          </TPLXModalContainer>
        </>
      ) : (
        <>
          <TPLXShimmers className="mt-5 h-8 w-3/12 self-start px-2.5 py-[5px]"></TPLXShimmers>
          <TPLXShimmers className="mt-5 w-10/12 self-start"></TPLXShimmers>
          <TPLXShimmers className="mt-2 w-7/12 self-start"></TPLXShimmers>
          <TPLXShimmers className="mb-10 mt-2 w-7/12 self-start"></TPLXShimmers>
          <div className="grid w-full grid-cols-2 gap-3">
            <div>
              <TPLXShimmers className="mt-2 w-4/12 self-start"></TPLXShimmers>
              <TPLXShimmers className="mb-10 mt-2 h-[300px] w-10/12 self-start"></TPLXShimmers>
            </div>
            <div>
              <TPLXShimmers className="mt-2 w-4/12 self-start"></TPLXShimmers>
              <TPLXShimmers className="mb-10 mt-2 h-[300px] w-10/12 self-start"></TPLXShimmers>
            </div>
            <div>
              <TPLXShimmers className="mt-2 w-4/12 self-start"></TPLXShimmers>
              <TPLXShimmers className="mb-10 mt-2 h-[300px] w-10/12 self-start"></TPLXShimmers>
            </div>
            <div>
              <TPLXShimmers className="mt-2 w-4/12 self-start"></TPLXShimmers>
              <TPLXShimmers className="mb-10 mt-2 h-[300px] w-10/12 self-start"></TPLXShimmers>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default QuestionPage;

{
  /* {questionMultiSelectData.map(plot => (
            <HTMLContentVisualizer
              key={plot.id}
              htmlContent={plot.htmlContent}
              title={plot.title}
              showTitle={plot.showTitle}
            />
          ))} */
}
