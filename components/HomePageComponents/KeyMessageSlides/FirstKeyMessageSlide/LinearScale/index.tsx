import { staggeredFadeInChildren, staggeredFadeInMarkerParent, trackAnimVariant } from '@/constants';
import { LinearScaleProps } from '@/types/HomePageTypes';
import { FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';
import React from 'react';
import StepMarker from '../../../StepMarker';

const LinearScale: React.FC<LinearScaleProps> = ({ animState }) => (
  <motion.div
    variants={staggeredFadeInMarkerParent}
    initial="hide"
    animate={animState}
    className="w-full rounded-b-2xl border-2 border-t-0 border-solid border-black bg-gray-100 p-4 pb-12"
  >
    <div className="text-left">
      <motion.label variants={staggeredFadeInChildren} className={`${FontSpaceMono.className} font-bold`}>
        LINEAR SCALE <sup className="text-red-500">*</sup>
      </motion.label>
      <motion.small variants={staggeredFadeInChildren} className="block text-gray-500">
        Rate Bob’s sentiment from 1 (negative) to 5 (positive)
      </motion.small>
    </div>
    <div className="mt-4">
      <div className="relative h-[5px]">
        <motion.div
          variants={trackAnimVariant}
          initial="hide"
          animate={animState}
          className="size-full origin-left bg-gray-300 "
        ></motion.div>
        <StepMarker positionClass="left-0" stepNumber={1} />
        <StepMarker positionClass="left-1/4" stepNumber={2} />
        <StepMarker positionClass="left-1/2" stepNumber={3} />
        <StepMarker positionClass="left-3/4" stepNumber={4} />
        <StepMarker positionClass="left-full" stepNumber={5} topPosition />
        <div className="absolute left-[-4px] top-1/2 size-[14px] -translate-y-1/2 cursor-pointer rounded-full border border-solid border-black bg-primary"></div>
      </div>
    </div>
  </motion.div>
);

export default LinearScale;
