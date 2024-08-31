import useQueryFunc from '@/hooks/useQueryFuncs';
import { TaskPromptProps } from '@/types/QuestionPageTypes';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import React from 'react';

const TaskPrompt: React.FC<TaskPromptProps> = ({ title, taskType, formattedPrompt }) => {
  const { updateQueryString } = useQueryFunc();
  return (
    <div className="mx-auto flex w-full flex-col">
      <p
        onClick={() => {
          updateQueryString([
            { name: 'exp', value: 'demo' },
            { name: 'addParams', value: '3d' },
          ]);
        }}
        className={`text-start ${FontManrope.className} gap-2 text-2xl font-bold`}
      >
        {title}
        {`  `}
        <span
          className={`${FontSpaceMono.className}  rounded-[20px] border border-black bg-goldenYellow px-2.5 py-[5px] text-[13px] font-bold text-white`}
        >
          {taskType} PROMPT
        </span>
      </p>
      <div
        className={`${FontManrope.className}  my-5 flex self-start whitespace-pre-wrap rounded-xl border-2 border-black bg-ecru-white p-5 text-left text-base font-medium opacity-60`}
      >
        {formattedPrompt}
      </div>
    </div>
  );
};

export default TaskPrompt;
