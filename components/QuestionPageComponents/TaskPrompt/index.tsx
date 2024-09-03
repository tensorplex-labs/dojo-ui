import useQueryFunc from '@/hooks/useQueryFuncs';
import { TaskPromptProps } from '@/types/QuestionPageTypes';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import React from 'react';

const TaskPrompt: React.FC<TaskPromptProps> = ({ title, taskType, formattedPrompt }) => {
  const { updateQueryString } = useQueryFunc();
  return (
    <div className="flex max-w-[1200px] flex-col justify-center md:px-4 md:py-2 lg:px-4 lg:py-2">
      <div className={`flex items-center text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>
        {title}
        {`  `}
        <div
          className={`${FontSpaceMono.className} h-fit rounded-[20px] border border-black bg-goldenYellow px-2.5 text-[13px] font-bold text-white`}
        >
          {taskType} PROMPT
        </div>
      </div>
      <div
        className={`${FontManrope.className}  my-5 flex self-start whitespace-pre-wrap rounded-xl border-2 border-black bg-ecru-white p-5 text-left text-base font-medium opacity-60`}
      >
        {formattedPrompt}
      </div>
    </div>
  );
};

export default TaskPrompt;
