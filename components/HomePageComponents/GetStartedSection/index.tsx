import StepCard, { StepCardProps } from '@/components/HomePageComponents/StepCard';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';
import React from 'react';

interface GetStartedSectionProps {
  steps: StepCardProps[];
  minerSteps: StepCardProps[];
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({ steps, minerSteps }) => {
  return (
    <section id="third" className="z-[10000] mb-20 bg-gradient-to-t from-[#FFFFF4] to-[#E1F5F4] ">
      <motion.div className="mx-auto max-w-[1075px] px-5 pt-32 md:px-0">
        <h1 className={`${FontSpaceMono.className} mb-3 text-center text-5xl font-bold uppercase md:text-left`}>
          How to get started?
        </h1>

        <p className={`${FontManrope.className} pt-0 text-2xl font-bold opacity-90`}>{'For Workers/Contributors'}</p>
        <div className="mb-3 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index}>
              <StepCard {...step} />
            </div>
          ))}
        </div>
        <p className={`${FontManrope.className} pt-10 text-2xl font-bold opacity-90`}>{'For Miners'}</p>
        <div className="mb-3 mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {minerSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="col-span-1 md:col-span-1">
              <StepCard {...step} />
            </div>
          ))}
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {minerSteps.slice(3).map((step, index) => (
                <div key={index} className="col-span-1">
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStartedSection;