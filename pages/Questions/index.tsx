import React, { ReactNode, useState } from 'react';
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

type QuestionPageProps = {
  children: ReactNode;
};

const QuestionPage: React.FC<QuestionPageProps> = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  // State for the selected values in the multi-select radio component
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const options = [
    { value: 'output1', label: 'Output 1' },
    { value: 'output2', label: 'Output 2' },
    { value: 'output3', label: 'Output 3' },
    // ... more options
  ];
  // Options for the multi-select radio buttons
  // const options = [
  //   { value: 'output1', label: 'Output 1' },
  //   { value: 'output2', label: 'Output 2' },
  //   { value: 'output3', label: 'Output 3' }, // Corrected 'output#' to 'output3'
  //   // ... more options
  // ];

  // Handler for changes in the draggable items order
  const handleOrderChange = (newOrder: string[]) => {
    console.log('New order received:', newOrder); // Debug log
    setSelectedOptions(newOrder);
  };

  // Handler for changes in the multi-select radio buttons
  const handleSelectionChange = (newValue: string) => {
    setSelectedValues(prevValues => {
      if (prevValues.includes(newValue)) {
        return prevValues.filter(value => value !== newValue);
      } else {
        return [...prevValues, newValue];
      }
    });
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
        <div className=' flex justify-start items-center text-left self-start mt-[42px]'>
          <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Question 1 of 25</h1>
          <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>IMAGE RECOGNITION PROMPT</span>
        </div>
        <p className="text-center flex self-start font-semibold opacity-60 mb-4">Classify different attributes about your data</p>
          <ChatComponent />

        </div>
      {/* Multiselect Question */}
      {/* <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
        <div className=' flex justify-start items-center text-left self-start mt-[42px]'>
          <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Multi-Select Question</h1>
          <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>IMAGE GENERATION PROMPT</span>
        </div>
         <p className="text-center flex self-start font-semibold opacity-60 mb-4">Please evaluate the coding question, and answer accordingly.</p>
           <div className="flex flex-col items-center justify-center mt-4 mb-4 mx-auto w-[610px] border-2 border-opacity-10 border-black rounded-b-xl">
             <div className="section-1">
             <HTMLContentVisualizer
                htmlContent={questionMultiSelectData[0].htmlContent}
                title={questionMultiSelectData[0].title}
                showTitle={false} />
            </div>
            <div className="section-2 p-[34px] pt-[10px]">
              <MultiSelect
                options={multiSelectOptions}
                selectedValues={selectedValues}
                onSelectionChange={handleSelectionChange}
              />
            </div>
          </div>
      </div> */}
            {/* Rank Question */}
          {/* <div className="flex flex-col items-center justify-center mt-4 mb-4 max-w-[1200px] mx-auto">
      <div className='flex justify-start items-center text-left self-start mt-[42px]'>
        <h1 className={`text-2xl font-bold ${FontManrope.className} mr-[17px]`}>Rank Question</h1>
        <span className={`${FontSpaceMono.className} bg-[#D0A215] text-white px-2.5 py-[5px] rounded-[20px] border border-black font-bold`}>CODING GENERATION PROMPT</span>
      </div>
      <>
        <p className="text-center flex self-start font-semibold opacity-60 mb-4">Which animation best represent an animated solar system? The slider should speed up the animation.</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-14 w-full">
          {questionDataPY.map(plot => (
            <LinkContentVisualizer
              key={plot.id}
              title={`Output ${plot.id}`}
              showTitle={plot.showTitle}
              url={plot.src}
            />
          ))}
          <div className="w-[780px] bg-[#FFFFF4] pl-[48px]">
            <p>Please rank the following output in accordance to the animation described as much as possible, considering any interactions included</p>
            <DragnDrop options={options} onOrderChange={handleOrderChange} />
          </div>
        </div>
      </>
    </div> */}
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



