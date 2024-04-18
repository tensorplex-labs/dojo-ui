import { cn } from '@/utils/tw';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TPLXShimmers = (props: Props) => {
  return (
    <div className={cn('h-[20px] w-[20px] animate-pulse border-[1px] border-slate-500 bg-muted', props.className)}>
      {' '}
    </div>
  );
};

export default TPLXShimmers;
