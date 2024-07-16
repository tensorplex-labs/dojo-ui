import { KEY_MESSAGE_SCROLL_HEIGHT } from '@/constants';
import { FontSpaceMono } from '@/utils/typography';
import { useWindowSize } from '@uidotdev/usehooks';
import { easeOut, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import PayoutRecord from './components/PayoutRecord';
interface Props {
  // scrollY: MotionValue<number>
}

const payoutRecords = [
  {
    taskName: 'Code Generation Task',
    status: 'PAID',
    date: '4 Aug 2024, 12:03',
    amount: 0.69,
  },
  {
    taskName: 'Text to Image Task',
    status: 'PAID',
    date: '3 Aug 2024, 14:28',
    amount: 0.58,
  },
  {
    taskName: 'Dialogue Task',
    status: 'PAID',
    date: '3 Aug 2024, 13:57',
    amount: 0.43,
  },
  {
    taskName: 'Another Task',
    status: 'PAID',
    date: '2 Aug 2024, 20:14',
    amount: 0.51,
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
      duration: 0.5,
    },
  },
};

const staggeredFadeInParent = {
  hide: {},
  show: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.06,
    },
  },
};

type AnimStateType = 'hide' | 'show';
const SecondKeyMessageSlide = (props: Props) => {
  // const { scrollY } = props;
  const { height: windowHeight } = useWindowSize();

  const [animState, setAnimState] = useState<AnimStateType>('hide');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!windowHeight) return;
    const lowerBound = (windowHeight ?? 0) * 3;
    // const lowerBound = (windowHeight ?? 0) * 2;
    const upperBound = (windowHeight ?? 0) * 2 + KEY_MESSAGE_SCROLL_HEIGHT * 6.3;
    if (latest > lowerBound && latest < upperBound) setAnimState('show');
    else setAnimState('hide');
  });

  return (
    <motion.section className="sticky left-0 top-0 z-[100] flex h-[200vh] w-full justify-center overflow-hidden border-t-4 border-solid border-black bg-gray-100">
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
              GET PAID QUICKLY
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p variants={elemAnimVariant} className="mt-4 text-lg leading-snug text-gray-500 md:text-xl">
              Rewards are streamed consistently to the miner, as long as sufficient tasks are completed and accepted by
              the Subnet.
            </motion.p>
          </div>
        </div>
        {/* key visual graphic */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex w-full flex-col items-center justify-center gap-4 pb-1 pr-1 md:w-auto"
            variants={staggeredFadeInParent}
            initial="hide"
            animate={animState}
          >
            {payoutRecords.map((record, index) => (
              <PayoutRecord
                key={index}
                taskName={record.taskName}
                status={record.status}
                date={record.date}
                amount={record.amount}
                FontSpaceMono={FontSpaceMono}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default SecondKeyMessageSlide;
