import StepCard from '@/components/HomePageComponents/StepCard';
import { minerStepsData as minerSteps, minerStepsData, stepsData as steps, stepsData } from '@/data';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';

const HowToGetStartedSection = () => (
  <section id="third" className="z-[10000] mb-20 bg-gradient-to-t from-primaryBG-bg to-iceberg">
    <motion.div className="mx-auto max-w-[1075px] pt-32">
      <h1 className={`${FontSpaceMono.className} mb-5 text-5xl font-bold uppercase`}>How to get started?</h1>
      <p className={`${FontManrope.className} text-2xl font-bold opacity-90`}>{'For Workers/Contributors'}</p>
      <StepCardGrid steps={steps} />
      <p className={`${FontManrope.className} pt-10 text-2xl font-bold opacity-90`}>{'For Miners'}</p>
      <StepCardGrid steps={minerSteps} />
    </motion.div>
  </section>
);

const StepCardGrid = ({ steps }: { steps: typeof stepsData | typeof minerStepsData }) => (
  <>
    <div className="mb-3 mt-6 flex justify-between">
      <div className="w-[37%]">
        <StepCard {...steps[0]} />
      </div>
      <div className="w-3/5">
        <StepCard {...steps[1]} />
      </div>
    </div>
    <div className="mb-3 mt-6 flex justify-between">
      {steps.slice(2).map((step, index) => (
        <div key={index} className="w-[31.5%]">
          <StepCard {...step} />
        </div>
      ))}
    </div>
  </>
);

export default HowToGetStartedSection;
