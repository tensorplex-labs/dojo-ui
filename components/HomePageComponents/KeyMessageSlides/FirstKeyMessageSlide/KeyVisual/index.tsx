import { buttonAnimVariant, kvAnimVariant } from '@/constants';
import { KeyVisualProps } from '@/types/HomePageTypes';
import { FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';
import React from 'react';
import ConversationList from '../ConversationList';
import LinearScale from '../LinearScale';

const KeyVisual: React.FC<KeyVisualProps> = ({ animState }) => (
  <div className="flex w-full justify-center p-5">
    <motion.div variants={kvAnimVariant} className="relative w-[400px] rounded-2xl shadow-brut-sm">
      <div className="absolute -bottom-[30px] right-1/2 z-10 translate-x-1/2 md:-right-[50px] md:bottom-1/4 md:translate-x-0">
        <motion.button
          variants={buttonAnimVariant}
          initial="hide"
          animate={animState}
          className={`h-[50px] w-[240px] rounded-xl border-2 border-solid border-black bg-primary text-lg font-semibold uppercase text-white ring-[12px] ring-primary ring-opacity-20 md:w-[120px] ${FontSpaceMono.className}`}
        >
          Proceed
        </motion.button>
      </div>
      <ConversationList animState={animState} />
      <LinearScale animState={animState} />
    </motion.div>
  </div>
);

export default KeyVisual;
