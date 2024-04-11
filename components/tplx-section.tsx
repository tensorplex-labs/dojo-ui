import { cn } from '@/utils/tw';
import React, { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  headerDecorator?: ReactNode;
  children: ReactNode;
}

const TPLXSection = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-[12px] mt-[40px]">
      <div className="flex mb-3">
        <div
          className={cn(
            'flex grow w-fit justify-start items-center text-[28px] font-bold',
          )}
        >
          {props.title}
        </div>
        <div>{props.headerDecorator}</div>
      </div>
      <div className="flex flex-col">{props.children}</div>
    </div>
  );
};

export default TPLXSection;
