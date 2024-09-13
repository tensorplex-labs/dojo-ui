import useQueryFunc from '@/hooks/useQueryFuncs';
import { TaskPromptProps } from '@/types/QuestionPageTypes';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconSparkles } from '@tabler/icons-react';
import React from 'react';
import FormattedPrompt from '../FormattedPrompt';

const TaskPrompt: React.FC<TaskPromptProps> = ({ title, taskType, formattedPrompt }) => {
  const { updateQueryString } = useQueryFunc();
  return (
    <div className="flex max-w-[1075px] flex-col justify-center gap-[15px] md:py-2">
      <div className={`flex flex-wrap items-center text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>
        <span className="">{title}</span>
        {`  `}
        <div
          className={`${FontSpaceMono.className} h-fit  rounded-[20px] border border-black bg-goldenYellow px-2.5 text-[13px] font-bold text-white`}
        >
          {taskType} PROMPT
        </div>
      </div>
      <div
        className={`${FontManrope.className} flex min-h-[48px] w-fit overflow-hidden
           rounded-xl border-2 border-black`}
      >
        <div className="animate-pulse p-2">
          <IconSparkles className="size-7 shrink-0 rounded-full  p-[3px]" />
        </div>
        <FormattedPrompt
          autoHideHeightThreshold={100}
          bottomFadeDivClassName="h-[30px]"
          className="h-fit min-h-[44px]"
          collapsedClassName="h-[100px]"
          collapsableBtnClassName="size-6 top-[10px] right-[10px]"
        >
          {formattedPrompt}
        </FormattedPrompt>
      </div>
    </div>
  );
};

export default TaskPrompt;
