import { TASKTYPE_COLOR_MAP } from '@/utils/states';
import { cn } from '@/utils/tw';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  tasktype: string;
  content: string;
}

const TasktypePill = ({ tasktype, content, className, ...props }: Props) => {
  const pillColor = TASKTYPE_COLOR_MAP[tasktype.toUpperCase().replaceAll(' ', '_')];
  return (
    <div
      className={cn(
        'w-fit flex items-center gap-[6px] rounded-full px-2 py-1 border border-black/30 text-xs font-bold  text-black/80',
        className
      )}
    >
      <div className={cn('size-[10px] rounded-full', pillColor)}></div>
      {content}
    </div>
  );
};

export default TasktypePill;
