import { FontManrope, FontSpaceMono } from '@/utils/typography';
import RoadmapItem from './RoadmapItem';

const RoadMapSection = () => (
  <section
    id="fourth"
    className="z-10"
    style={{
      background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
    }}
  >
    <div className="mx-auto flex max-w-[1075px] justify-between pt-36">
      <div className="h-full w-3/5">
        <h1 className={`${FontSpaceMono.className} text-[46px] font-bold uppercase`}>Dojo roadmap</h1>
        <p className={`${FontManrope.className} text-xl font-bold opacity-50`}>
          Our journey to revolutionize AI development
        </p>
      </div>
      <div className="flex h-full w-2/5 flex-col">
        <RoadmapItem version="v0" title="Testnet launch">
          <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Synthetic Task Generation</li>
          <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Worker API Model</li>
          <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Task Completion Interface</li>
        </RoadmapItem>
        <RoadmapItem version="v1" title="MAINNET launch">
          <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Cross-Subnet Integration</li>
          <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Scoring Refinement</li>
        </RoadmapItem>
      </div>
    </div>
  </section>
);

export default RoadMapSection;
