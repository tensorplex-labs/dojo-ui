import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import Layout from '@/layout';
import HTMLContentVisualizer from '@/components/HTMLContentVisualizer';
import { multiSelectOptions, questionDataPY, questionMultiSelectData } from '@/data';
import DragnDrop from '@/components/DragnDrop';
import LinkContentVisualizer from '@/components/LinkContentVisualizer';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import MultiSelectRadio from '@/components/MultileSelect';
import MultiSelect from '@/components/MultileSelect';
import ChatComponent from '@/components/ChatComponent.tsx';
import Slider from '@/components/Slider';
import useRequestTaskByTaskID from '@/hooks/useRequestTaskByTaskID';
import { useSubmit } from '@/providers/submitContext';
import ImageComponent from '@/components/ImageComponent';

type QuestionPageProps = {
  children: ReactNode;
};

type RankOrder = { [key: string]: string };



const QuestionPage: React.FC<QuestionPageProps> = ({ children }) => {
  const { updateMultiSelect, updateRanking, updateScore } = useSubmit();
  const [rankAnswer, setRankAnswer] = useState<RankOrder>();
  const [isMultiSelectQuestion, setIsMultiSelectQuestion] = useState<boolean>(false);
  const [isRankQuestion, setIsRankQuestion] = useState<boolean>(false);
  const [isSlider, setisSlider] = useState<boolean>(false);
  // State for the selected values in the multi-select radio component
  const [selectedMultiSelectValues, setSelectedMultiSelectValues] = useState<string[]>([]);
  // Handler for changes in the draggable items order
  const handleOrderChange = (newOrder: string[]) => {
    const newRankAnswer: RankOrder = {};
    newOrder.forEach((value, index) => {
      newRankAnswer[index.toString()] = value;
    });
    setRankAnswer(newRankAnswer);
    updateRanking(newOrder);
  };
  const [taskId, setTaskId] = useState<string>(''); // [1
  const [multiSelectQuestionData, setMultiSelectQuestionData] = useState<string[]>([])
  const [rankQuestionData, setRankQuestionData] = useState<string[]>([])
  const [sliderValue, setSliderValue] = useState<number>(1); // Initial value set to 1, adjust as necessary

  const { task, loading, error } = useRequestTaskByTaskID(taskId);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const taskIdFromUrl = urlParams.get('taskId');
    if (taskIdFromUrl) {
      setTaskId(taskIdFromUrl);
    }
  }, []);

  useEffect(() => {
    task?.taskData.criteria.forEach((criterion) => {
      switch (criterion.type) {
        case 'multi-select':
          setIsMultiSelectQuestion(true);
          criterion.options && setMultiSelectQuestionData(criterion.options);
          break;
        case 'ranking':
          setIsRankQuestion(true);
          criterion.options && setRankQuestionData(criterion.options);
          break;
        case 'score':
          setisSlider(true);
          break;
        default:
          console.log(`Unhandled criterion type: ${criterion.type}`);
      }
    })
  }, [task]);
  // Handler for changes in the multi-select radio buttons
  const handleSelectionChange = (newValue: string) => {
    setSelectedMultiSelectValues(prevValues => {
      const newValues = prevValues.includes(newValue) ? prevValues.filter(value => value !== newValue) : [...prevValues, newValue];

      updateMultiSelect(newValues);  // Move this inside the setState callback
      return newValues;
    });
  };
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    updateScore(value);
  };
  const formattedPrompt = useMemo(() => {
    return task?.taskData?.prompt?.split('\\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }, [task]);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
      <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white self-start px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>{task?.type} PROMPT</span>
        <div className="text-left flex self-start font-semibold opacity-60 my-5 whitespace-pre-wrap">
          {formattedPrompt}
        </div>
        <div className=' w-full gap-3 grid grid-cols-2'>
          {task?.taskData?.responses.map((plot: { id: React.Key | null | undefined; htmlContent: string; title: string; showTitle: boolean; completion: { sandbox_url: string } }) => (
            <LinkContentVisualizer 
              title={''} 
              showTitle={true} 
              url={plot.completion.sandbox_url} 
              key={plot.id}
            />
          ))}
        </div>

        {/* <ChatComponent /> */}
        {/* <div className='grid grid-cols-2 gap-4'>
          <div className=' p-4'>
            <ImageComponent src={"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"}/>
          </div>
          <div className=' p-4'>
            <ImageComponent src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1200px-Cow_female_black_white.jpg"}/>
          </div>
        </div> */}
        {/* <div className=' flex justify-start items-center text-left self-start mt-[42px]'>
          <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Ranking Question </h1>
          <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>{task?.type} PROMPT</span>
        </div> */}
        {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">{task?.taskData?.prompt}</p> */}
        {isSlider && <>
          {/* <ChatComponent /> */}
          <div className=' flex justify-start items-center text-left self-start mt-[42px]'>
            <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rate Question</h1>
          </div>
          <div className="space-y-2 w-[541px] bg-[#F6F6E6] border-2 border-[#000] border-opacity-10 rounded-xl mt-4">
            <div className="row-start-2 h-[160px] px-[57px] py-[30px] rounded-br-lg">
              <h1 className={`${FontSpaceMono.className} text-base font-bold mb-[5px]`}>LINEAR SCALE<span className=' text-red-500'>*</span></h1>
              <p className={`${FontManrope.className} text-base font-bold opacity-60 mb-[16px]`}>Rate from 1 (negative) to 10 (positive)</p>
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
        </>}
      </div>
      {/* Multiselect Question */}
      {isMultiSelectQuestion &&
        <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
          <div className=' flex justify-start items-center text-left self-start mt-[42px]'>
            <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Multi-Select Question</h1>
          </div>
          {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">Please evaluate the coding question, and answer accordingly.</p> */}
          <div className="flex flex-col items-center justify-center mt-4 mb-4 mx-auto w-[610px] border-2 border-opacity-10 border-black rounded-b-xl">
            <div className="p-[34px] pt-[10px]">
              <MultiSelect
                options={multiSelectQuestionData}
                selectedValues={selectedMultiSelectValues}
                onSelectionChange={handleSelectionChange}
              />
            </div>
          </div>
        </div>
      }
      {/* Rank Question */}
      {isRankQuestion &&
        <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
          <div className='flex justify-start items-center text-left self-start mt-[42px]'>
            <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rank Question</h1>
            {/* <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>{task?.type} PROMPT</span> */}
          </div>
          <>
            {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">Which animation best represent an animated solar system? The slider should speed up the animation.</p> */}
            <div className="flex justify-center w-full mt-4">
              <div className="w-[780px] bg-[#FFFFF4] pl-[48px]">
                <p>Please rank the following output in accordance with the shown frames and the described prompt as much as possible, considering any interactions included</p>
                <DragnDrop options={rankQuestionData} onOrderChange={handleOrderChange} />
              </div>
            </div>
          </>
        </div>
      }

    </Layout>
  );
};

export default QuestionPage;


{/* {questionMultiSelectData.map(plot => (
            <HTMLContentVisualizer
              key={plot.id}
              htmlContent={plot.htmlContent}
              title={plot.title}
              showTitle={plot.showTitle}
            />
          ))} */}