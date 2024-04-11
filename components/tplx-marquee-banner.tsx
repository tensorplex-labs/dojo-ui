import { cn } from '@/utils/tw';
import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
  bannerMessage: string;
}
const TPLXMarqueeBanner = (props: Props) => {
  return (
    <div
      className={cn(
        'w-[full] bg-primary border-y-[2px] border-black overflow-x-hidden',
        props.className,
      )}
    >
      <div className="animate-marquee whitespace-nowrap text-font-secondary font-bold min-w-full w-fit">
        {props.bannerMessage}
      </div>
    </div>
  );
};

export default TPLXMarqueeBanner;
