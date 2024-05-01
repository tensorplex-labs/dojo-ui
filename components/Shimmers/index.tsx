import { cn } from '@/utils/tw';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TPLXShimmers = (props: Props) => {
  return (
    <div
      className={cn(
        'animate-pulse w-[20px] h-[20px] bg-muted border-[1px] border-slate-500',
        props.className,
      )}
    >
      {' '}
    </div>
  );
};

export default TPLXShimmers;
