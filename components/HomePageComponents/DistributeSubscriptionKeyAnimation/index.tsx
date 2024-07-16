import { AnimationSequence, animate, easeIn, easeOut, motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';

const DistributeSubscriptionKeyAnimation = ({}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative  aspect-[2] overflow-hidden border-t-2 border-black bg-gradient-to-b from-gray-200 to-white px-5">
      <div className="mt-4 flex flex-col gap-4">
        <SubscriptionCardAnimItem subscriptionKey={'SK-DE275B753726CB6D1DEB625FAD1CB'} startDelay={0} />
        <SubscriptionCardAnimItem subscriptionKey={'SK-11A86AA4C1ACEBDCA233EA5ECC931'} startDelay={0.2} />
      </div>
    </div>
  );
};

export default DistributeSubscriptionKeyAnimation;
interface Props {
  subscriptionKey: string;
  startDelay: number;
}
const SubscriptionCardAnimItem = (props: Props) => {
  const { subscriptionKey, startDelay } = props;
  const charCountMv = useMotionValue(0);
  const barScaleMv = useMotionValue(0);
  const cardScaleMv = useMotionValue(0);
  const checkBgScaleMv = useMotionValue(0);
  const bgOverlayScaleMv = useMotionValue(0);
  const bgOverlayBgColorMv = useMotionValue(0);
  const cardExitTranslateXMv = useMotionValue(0);
  const endAnimMv = useMotionValue(0);

  <motion.div variants={cursorVariants} animate="blinking" className="inline-block h-4 w-[2px] bg-gray-600" />;
  // Make sure that charCountMv value is a discrete whole number
  const rounded = useTransform(charCountMv, (latest) => Math.round(latest));
  const bgColor = useTransform(bgOverlayBgColorMv, [0, 1], ['#e6fffd', '#ffffff']);
  // Slice the text
  const displayText = useTransform(rounded, (latest) => subscriptionKey.slice(0, latest));

  const animationSequence: AnimationSequence = useMemo(
    () => [
      [
        cardScaleMv,
        1,
        {
          type: 'spring',
          bounce: 0.3,
          duration: 0.5,
        },
      ],
      [
        charCountMv,
        subscriptionKey.length,
        {
          type: 'tween',
          duration: 0.6,
          ease: 'easeInOut',
          delay: 0.5,
        },
      ],
      [
        barScaleMv,
        1,
        {
          ease: easeOut,
          duration: 1.2,
        },
      ],
      [
        checkBgScaleMv,
        1,
        {
          ease: easeOut,
          duration: 0.1,
          delay: 0.2,
        },
      ],
      [
        bgOverlayScaleMv,
        1,
        {
          ease: easeOut,
          duration: 0.3,
          delay: 0.2,
          at: '<',
        },
      ],
      [
        bgOverlayBgColorMv,
        1,
        {
          ease: easeOut,
          duration: 1.5,
          at: '<',
          delay: 0.4,
        },
      ],
      [
        cardExitTranslateXMv,
        [0, -30, 800],
        {
          ease: easeIn,
          duration: 0.3,
        },
      ],
      [
        endAnimMv,
        1,
        {
          duration: 0.4,
        },
      ],
    ],
    []
  );

  useEffect(() => {
    const controls = animate(animationSequence, { repeat: Infinity, repeatType: 'loop', delay: startDelay });
    controls.play();
  }, [animationSequence, startDelay]);

  return (
    <>
      <motion.div
        style={{ scale: cardScaleMv, x: cardExitTranslateXMv }}
        className="relative flex w-full items-center gap-2 overflow-hidden rounded-xl border-2 border-black bg-white p-5 shadow-brut-sm"
      >
        {/* Absolute Progress Bar */}
        <div className="absolute left-0 top-0 z-10 h-[5px] w-full bg-gray-200">
          <motion.div style={{ scaleX: barScaleMv }} className="size-full origin-left bg-[#00B6A6]"></motion.div>
        </div>
        <div className="z-10 min-w-0 flex-1">
          <label className="text-sm font-semibold text-gray-400">SUBSCRIPTION KEY</label>
          <div className="flex items-center gap-1 overflow-hidden">
            <motion.span className="block h-6 truncate text-gray-700">{displayText}</motion.span>
            <CursorBlinker />
          </div>
        </div>

        <article className="relative size-[40px]">
          {/* Checkmark */}
          <div className="relative z-10 size-[40px] rounded-full border-2 border-black bg-gray-100">
            <motion.div
              style={{ scale: checkBgScaleMv }}
              className="flex size-full items-center justify-center rounded-full bg-[#00B6A6]"
            >
              <Image src="/check.svg" alt="Image of a check mark" width={22} height={22} />
            </motion.div>
          </div>
          {/* Background Overlay */}
          <div
            style={{ zIndex: 0 }}
            className="absolute flex size-[900px] -translate-x-1/2  -translate-y-1/2 items-center justify-center"
          >
            <motion.div
              style={{ scale: bgOverlayScaleMv, background: bgColor }}
              className="size-full rounded-full border-2 border-[#00B6A6] bg-[#e6fffd]"
            ></motion.div>
          </div>
        </article>
      </motion.div>
    </>
  );
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlinker = ({}) => {
  return (
    <div className="h-6">
      <motion.div variants={cursorVariants} animate="blinking" className="inline-block h-4 w-[2px] bg-gray-600" />
    </div>
  );
};
