import { cn } from '@/utils/tw';
import React, { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  headerDecorator?: ReactNode;
  children: ReactNode;
}

const TPLXSection = (props: Props) => {
  return (
    <div className="mt-[40px] flex w-full flex-col gap-[12px]">
      <div className="mb-3 flex">
        <div className={cn('flex w-fit grow items-center justify-start text-[28px] font-bold')}>{props.title}</div>
        <div>{props.headerDecorator}</div>
      </div>
      <div className="flex flex-col">{props.children}</div>
    </div>
  );
};

export default TPLXSection;
