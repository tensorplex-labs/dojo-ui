import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { ReactNode } from 'react';

const RoadmapItem = ({ version, title, children }: { version: string; title: string; children: ReactNode }) => (
  <div className="flex items-start">
    <div className="mr-8 flex flex-col items-center">
      <div className="flex size-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
        <p className={`${FontManrope.className} text-[32px] font-bold`}>{version}</p>
      </div>
      <div className="h-32 w-px border-l-[3px] border-dashed border-black/50"></div>
    </div>
    <div>
      <h3 className={`${FontSpaceMono.className} my-4 text-xl font-bold uppercase`}>{title}</h3>
      <ul className="">{children}</ul>
    </div>
  </div>
);

export default RoadmapItem;
