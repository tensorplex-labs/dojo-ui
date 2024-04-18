import { cn } from '@/utils/tw';
import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
  bannerMessage: string;
}
const TPLXMarqueeBanner = (props: Props) => {
  return (
    <div className={cn('w-[full] overflow-x-hidden border-y-[2px] border-black bg-primary', props.className)}>
      <div className="w-fit min-w-full animate-marquee whitespace-nowrap font-bold text-font-secondary">
        {props.bannerMessage}
      </div>
    </div>
  );
};

export default TPLXMarqueeBanner;
