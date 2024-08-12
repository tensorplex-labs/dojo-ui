import { FontManrope, FontSpaceMono } from '@/utils/typography';
import React from 'react';

interface RoadmapItem {
  version: string;
  title: string;
  items: string[];
}

const roadmapData: RoadmapItem[] = [
  {
    version: 'v0',
    title: 'Testnet launch',
    items: ['Synthetic Task Generation', 'Worker API Model', 'Task Completion Interface'],
  },
  {
    version: 'v1',
    title: 'MAINNET launch',
    items: ['Cross-Subnet Integration', 'Scoring Refinement'],
  },
];

const RoadmapSection: React.FC = () => {
  return (
    <section
      id="fourth"
      className="z-10"
      style={{
        background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
      }}
    >
      <div className="mx-auto mt-16 flex max-w-[1075px] flex-col justify-between md:mt-36 md:flex-row">
        <div className="w-full md:h-full md:w-3/5">
          <h1 className={`${FontSpaceMono.className} text-center text-[46px] font-bold uppercase md:text-left`}>
            Dojo Roadmap
          </h1>
          <p className={`${FontManrope.className} text-center text-lg font-semibold opacity-50 md:text-left`}>
            Our journey to revolutionize AI development
          </p>
        </div>
        <div className="mt-12 flex w-full flex-col px-5 md:mt-0 md:h-full md:w-2/5 md:px-0">
          {roadmapData.map((item, index) => (
            <div key={item.version} className="flex items-start">
              <div className="mr-8 flex flex-col items-center">
                <div className="flex size-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>{item.version}</p>
                </div>
                {index < roadmapData.length - 1 && (
                  <div className="h-32 w-px border-l-[3px] border-dashed border-black/50"></div>
                )}
              </div>
              <div>
                <h3 className={`${FontSpaceMono.className} my-4 text-xl font-bold uppercase`}>{item.title}</h3>
                <ul className="">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
