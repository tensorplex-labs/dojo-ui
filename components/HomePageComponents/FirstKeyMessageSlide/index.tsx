import { KEY_MESSAGE_SCROLL_HEIGHT } from '@/pages';
import { FontSpaceMono } from '@/utils/typography';
import { useWindowSize } from '@uidotdev/usehooks';
import { easeOut, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ConversationBubble from '../ConversationBubble';
import StepMarker from '../StepMarker';
import styles from './styles.module.css';

interface Props {}

const conversations = [
  {
    text: 'Decentralized AI can democratize access and enhance privacy. Thoughts?',
    actor: 'J',
    isRightAligned: false,
    gradientClass: styles.actorGradient1,
  },
  {
    text: 'Yea! It also reduces the risk of data breaches by eliminating single points of control.',
    actor: 'D',
    isRightAligned: true,
    gradientClass: styles.actorGradient2,
  },
  {
    text: 'Open collaboration in decentralized AI can drive faster innovation.',
    actor: 'J',
    isRightAligned: false,
    gradientClass: styles.actorGradient1,
  },
  {
    text: "Agreed. Let's integrate it into our projects for a competitive edge and ethical alignment.",
    actor: 'D',
    isRightAligned: true,
    gradientClass: styles.actorGradient2,
  },
];

const elemAnimParentVariant = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const elemAnimVariant = {
  hide: {
    y: '100%',
    opacity: 0,
  },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      ease: easeOut,
      duration: 0.4,
    },
  },
};

const kvAnimVariant = {
  hide: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

const staggeredFadeInParent = {
  hide: {},
  show: {
    transition: {
      delayChildren: 0.85,
      staggerChildren: 0.1,
    },
  },
};

export const staggeredFadeInChildren = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggeredFadeInMarkerParent = {
  hide: {},
  show: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

export const staggeredFadeInMarker = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const trackAnimVariant = {
  hide: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: {
      delay: 0.7,
      duration: 1,
    },
  },
};

export const buttonAnimVariant = {
  hide: {
    scale: 0.2,
    opacity: 0,
    y: 100,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 1,
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
};

type AnimStateType = 'hide' | 'show';
const FirstKeyMessageSlide = () => {
  const { scrollY } = useScroll();
  const { height: windowHeight } = useWindowSize();
  const [animState, setAnimState] = useState<AnimStateType>('hide');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!windowHeight) return;

    const lowerBound = windowHeight - 200;
    // const lowerBound = windowHeight;
    const upperBound = windowHeight + KEY_MESSAGE_SCROLL_HEIGHT * 2;
    if (latest > lowerBound && latest < upperBound) setAnimState('show');
    else setAnimState('hide');
  });

  return (
    <section className="sticky top-0 flex h-[200vh] w-full justify-center overflow-hidden border-t-4 border-solid border-black">
      <Image src="/grid.svg" alt="Example Icon" width={100} height={200} className="absolute w-full opacity-[0.03]" />
      <motion.div
        variants={elemAnimParentVariant}
        initial="hide"
        animate={animState}
        className="flex h-screen w-full max-w-4xl flex-col items-center justify-evenly p-4"
      >
        <div className="text-center">
          <div className="overflow-hidden">
            <motion.h2
              variants={elemAnimVariant}
              className={`${FontSpaceMono.className} text-4xl font-bold uppercase leading-tight md:text-5xl`}
            >
              Work anytime from anywhere
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p variants={elemAnimVariant} className="mt-4 text-lg leading-snug text-gray-500 md:text-xl">
              Enjoy the freedom to work on tasks at your convenience from any location
            </motion.p>
          </div>
        </div>
        {/* key visual graphic */}
        <div className="flex w-full justify-center p-5">
          <motion.div variants={kvAnimVariant} className="relative w-[400px] rounded-2xl shadow-brut-sm">
            {/* Floating button element */}
            <div className="absolute -bottom-[30px] right-1/2 z-10 translate-x-1/2 md:-right-[50px] md:bottom-1/4 md:translate-x-0">
              <motion.button
                variants={buttonAnimVariant}
                initial="hide"
                animate={animState}
                className={`h-[50px] w-[240px] rounded-xl border-2 border-solid border-black bg-primary text-lg font-semibold uppercase text-white ring-[12px] ring-[#00B8A8] ring-opacity-20 md:w-[120px] ${FontSpaceMono.className}`}
              >
                Proceed
              </motion.button>
            </div>

            <motion.div
              variants={staggeredFadeInParent}
              initial="hide"
              animate={animState}
              className={`flex max-h-[300px] w-full flex-col gap-5 overflow-hidden rounded-t-2xl border-2 border-solid border-black p-4 ${styles.cardBgGradient}`}
            >
              {conversations.map((conversation, index) => (
                <ConversationBubble
                  key={index}
                  text={conversation.text}
                  actor={conversation.actor}
                  isRightAligned={conversation.isRightAligned}
                  gradientClass={conversation.gradientClass}
                />
              ))}
            </motion.div>
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
              {/* Linear Scale Control */}
              <div className="mt-4">
                <div className="relative h-[5px]">
                  {/* Track */}
                  <motion.div
                    variants={trackAnimVariant}
                    initial="hide"
                    animate={animState}
                    className="size-full origin-left bg-gray-300 "
                  ></motion.div>
                  {/* Steps */}
                  <StepMarker positionClass="left-0" stepNumber={1} />
                  <StepMarker positionClass="left-1/4" stepNumber={2} />
                  <StepMarker positionClass="left-1/2" stepNumber={3} />
                  <StepMarker positionClass="left-3/4" stepNumber={4} />
                  <StepMarker positionClass="left-full" stepNumber={5} topPosition />

                  {/* Knobs */}
                  <div className="absolute left-[-4px] top-1/2 size-[14px] -translate-y-1/2 cursor-pointer rounded-full border border-solid border-black bg-primary"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default FirstKeyMessageSlide;