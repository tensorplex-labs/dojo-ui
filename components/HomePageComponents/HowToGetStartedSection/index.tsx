import StepCard from '@/components/HomePageComponents/StepCard';
import { minerSteps, steps } from '@/data';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';

const HowToGetStartedSection = () => (
  <section id="third" className="z-[10000] mb-20 bg-gradient-to-t from-[#FFFFF4] to-[#E1F5F4] md:px-4 md:py-2">
    <motion.div className="mx-auto max-w-[1075px] px-5 pt-32 md:px-0">
      <h1 className={`${FontSpaceMono.className} mb-3 text-center text-5xl font-bold uppercase md:text-left`}>
        How to get started?
      </h1>
      <p className={`${FontManrope.className}  pt-0 text-2xl font-bold opacity-90`}>{'For Workers/Contributors'}</p>
      <div className="mb-3 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={index}>
            <StepCard {...step} />
          </div>
        ))}
      </div>
      <p className={`${FontManrope.className} pt-10 text-2xl font-bold opacity-90`}>{'For Miners'}</p>
      <div className="mb-3 mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <StepCard {...minerSteps[0]} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <StepCard {...minerSteps[1]} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <StepCard {...minerSteps[2]} />
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-1">
              <StepCard {...minerSteps[3]} />
            </div>
            <div className="col-span-1">
              <StepCard {...minerSteps[4]} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
export default HowToGetStartedSection;
