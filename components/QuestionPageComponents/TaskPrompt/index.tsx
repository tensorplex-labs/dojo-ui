import useQueryFunc from '@/hooks/useQueryFuncs';
import { TaskPromptProps } from '@/types/QuestionPageTypes';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconSparkles } from '@tabler/icons-react';
import React from 'react';

const TaskPrompt: React.FC<TaskPromptProps> = ({ title, taskType, formattedPrompt }) => {
  const { updateQueryString } = useQueryFunc();
  return (
    <div className="flex max-w-[1200px] flex-col justify-center gap-[15px] md:px-4 md:py-2 lg:px-4 lg:py-2">
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
        className={`${FontSpaceMono.className} flex min-h-[48px] w-fit
         rounded-xl border-2 border-black font-bold tracking-wider`}
      >
        <div className="animate-pulse p-2">
          <IconSparkles className="size-7 shrink-0 rounded-full  p-[3px]" />
        </div>
        <div className="flex h-full min-h-[44px] items-center whitespace-pre-wrap  p-2 pl-0">{formattedPrompt}</div>
      </div>
    </div>
  );
};

export default TaskPrompt;
