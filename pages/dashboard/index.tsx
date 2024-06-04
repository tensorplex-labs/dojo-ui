import NavigationBar from '@/components/NavigationBar';
// import useIntersectionObserver from '@/components/track';
import GetStartedButton from '@/components/Button/GetStarted';
import MainFooter from '@/components/Footer/MainFooter';
import MultiSelectCardFrame from '@/components/HomePageCard/MultiSelectCardFrame';
import SliderCardFrame from '@/components/HomePageCard/SliderCardFrame';
import ScrollEffect from '@/components/ScrollAnimation';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

import StepCard from '@/components/HomePageCard/StepCard';
import useAverageTaskCompletionTime from '@/hooks/useAverageTaskCompletionTime';
import useCompletedTasksCount from '@/hooks/useCompletedTasksCount';
import useDojoWorkerCount from '@/hooks/useDojoWorkerCount';
import CountUp from 'react-countup';
// import './index.css';
const steps = [
  {
    stepNumber: 1,
    title: 'Set up your miner',
    description:
      'Visit <a href="https://github.com/tensorplex-labs/dojo-subnet" target="_blank" style="text-decoration: underline; hover:color: #1e40af; hover:text-decoration: none; font-weight: 700;" className="">Dojo GitHub</a> to set up the Dojo Subnet Miner',
    imageUrl: './step1.png',
    backgroundGradient: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
  },
  {
    stepNumber: 2,
    title: 'Creating an account',
    description:
      'Connect metamask wallet to  <a href="https://dojo.tensorplex.ai/" target="_blank" style="text-decoration: underline; hover:color: #1e40af; hover:text-decoration: none; font-weight: 700;" className="">dojo.tensorplex.ai</a>',
    imageUrl: './step2.png',
    backgroundGradient: 'linear-gradient(to bottom, #00B6A6, #005049)',
  },
  {
    stepNumber: 3,
    title: 'Distribute subscription keys',
    description: 'Provide subscription key to workers to start contributing',
    imageUrl: './step3.png',
    backgroundGradient: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
  },
  {
    stepNumber: 4,
    title: 'Start contributing',
    description: 'Start working on available tasks',
    imageUrl: './step4.png',
    backgroundGradient: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
  },
  {
    stepNumber: 5,
    title: 'Get rewarded',
    description: 'Get paid for your contribution to open source AI',
    imageUrl: './step5.png',
    backgroundGradient: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
  },
];
type Props = {};
const Index = (props: Props) => {
  const [clientHeight, setClientHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const { numDojoWorkers } = useDojoWorkerCount();
  const { numCompletedTasks } = useCompletedTasksCount();
  const { averageTaskCompletionTime } = useAverageTaskCompletionTime();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    setClientHeight(window.innerHeight); // Use window.innerHeight for correct height
  }, []);

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [2, 1, 1, 2]);
  const y = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [200, 0, 0, -200]);
  const blur = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [10, 0, 0, 10]);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    setClientHeight(window.innerHeight);
    setScrollRange(window.innerHeight * 4); // Set the scroll range to 4 times the viewport height
  }, []);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setCurrentSection(value * scrollRange);
      setScrollYPosition(value);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  const getOpacity = (position: number = 0) => {
    const minpoint = 0.32;
    const maxpoint = 0.6;

    if (position < minpoint || position > maxpoint) {
      return 1;
    } else if (position > minpoint && position < maxpoint) {
      return 0;
    } else {
      return 1;
    }
  };
  const isSectionVisible = (threshold: number) => {
    return scrollYPosition >= threshold && scrollYPosition < threshold + 0.2;
  };

  return (
    <LandingPageLayout>
      <motion.section
        id="first"
        className="mx-auto mb-40 grid h-[calc(100vh-134px)] w-fit max-w-[1075px] grid-cols-[50%_1fr] gap-8"
        initial={{ y: '100vh' }}
        animate={scrollYPosition >= 0 ? { y: 0 } : { y: '100vh' }}
        transition={{ type: 'spring', stiffness: 100 }}
        exit={{ y: '100vh' }}
        style={{ opacity }}
      >
        <div className="flex flex-col justify-center">
          <h1 className={`${FontSpaceMono.className} text-5xl font-bold uppercase text-black`}>
            Get paid to shape the future of AI
          </h1>
          <p className={`${FontManrope.className} mt-[13px] pr-2 text-2xl font-semibold text-black text-opacity-50`}>
            {`Earn TAO through responding to AI-generated tasks across various domains. Join the crowd-sourced effort to
            build the world's most powerful multimodal AI models.`}
          </p>
          <div className={`mb-5 mt-[13px]`}>
            <GetStartedButton />
          </div>
          <hr className={'border-black'} />
          <div className={`mt-[22px] flex flex-row gap-3`}>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                {/* Rewards paid out (usd) */}
                Average Task Completion Time
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>
                {averageTaskCompletionTime && averageTaskCompletionTime > 60 && (
                  <>
                    <CountUp start={0} end={Math.floor(averageTaskCompletionTime / 60)} duration={3} startOnMount />:
                  </>
                )}
                <CountUp
                  start={0}
                  end={averageTaskCompletionTime ? averageTaskCompletionTime % 60 : 30}
                  duration={3}
                  startOnMount
                />
                <span className="lowercase">{`${
                  averageTaskCompletionTime && averageTaskCompletionTime >= 60 ? 'min' : 'sec'
                }`}</span>
              </h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                HUMAN TASKS COMPLETED
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>
                <CountUp start={0} end={numCompletedTasks ? numCompletedTasks : 12} duration={3} startOnMount />
              </h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                NO.OF HUMAN PARTICIPANTS
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>
                <CountUp start={0} end={numDojoWorkers ? numDojoWorkers : 123512} duration={3} startOnMount />
              </h3>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <MultiSelectCardFrame mouseX={mouseX} mouseY={mouseY} />
          <SliderCardFrame mouseX={mouseX} mouseY={mouseY} />
        </div>
      </motion.section>
      <section id="second" className="overflow-hidden">
        <ScrollEffect />
      </section>
      <section id="third" className="z-[10000] bg-gradient-to-t from-[#FFFFF4] to-[#E1F5F4]">
        <motion.div
          className="mx-auto max-w-[1075px]"
          initial={{ y: '0' }} // Start off-screen at the bottom
          animate={scrollYPosition > 0.58 ? { y: 0 } : { y: '100vh', opacity: 1 }} // Slide up to the original position
          transition={{ type: 'spring', stiffness: 100 }} // Smooth slide-in effect
          exit={{ y: 0 }} // Slide back down off-screen
        >
          <h1 className={`${FontSpaceMono.className} text-5xl font-bold uppercase`}>How does it work?</h1>
          <p className={`${FontManrope.className} text-2xl font-bold opacity-60`}>
            Five simple steps to get you started!
          </p>

          <div className="mb-3 mt-6 flex justify-between pt-6">
            <div className="w-[37%]">
              <StepCard {...steps[0]} />
            </div>
            <div className="w-3/5">
              <StepCard {...steps[1]} />
            </div>
          </div>

          <div className="mb-3 mt-6 flex justify-between">
            <div className="w-[31.5%]">
              <StepCard {...steps[2]} />
            </div>
            <div className="w-[31.5%]">
              <StepCard {...steps[3]} />
            </div>
            <div className="w-[31.5%]">
              <StepCard {...steps[4]} />
            </div>
          </div>
        </motion.div>
      </section>
      <section
        id="fourth"
        className="z-10"
        style={{
          background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
        }}
      >
        <div className="mx-auto flex max-w-[1075px] justify-between py-20">
          <div className="mb-12 mt-[57px]">
            <h1 className={`${FontSpaceMono.className} text-[46px] font-bold uppercase`}>Dojo roadmap</h1>
            <p className={`${FontManrope.className} text-xl font-bold opacity-50`}>
              Our journey to revolutionize AI development
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-start">
              <div className="mr-8 flex flex-col items-center">
                <div className="flex size-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v0</p>
                </div>
                <div className="h-32 w-px border-l-[3px] border-dashed border-black border-opacity-50"></div>
              </div>
              <div>
                <h3 className={`${FontSpaceMono.className} my-4 text-xl font-bold uppercase`}>Testnet launch</h3>
                <ul className="">
                  <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>
                    Synthetic Task Generation
                  </li>
                  <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Worker API Model</li>
                  <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>
                    Task Completion Interface
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-8 flex flex-col items-center">
                <div className="flex size-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v1</p>
                </div>
                <div className="h-32 w-px border-l-[3px] border-dashed border-black border-opacity-50"></div>
              </div>
              <div>
                <h3 className={`${FontSpaceMono.className} my-4 text-xl font-bold uppercase`}>MAINNET launch</h3>
                <ul className="">
                  <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>
                    Cross-Subnet Integration
                  </li>
                  <li className={`${FontManrope.className} mb-2 text-lg font-bold opacity-70`}>Scoring Refinement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

const LandingPageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-[#FFFFF4] text-black">
    <div className="border-b-2 border-black bg-[#F6F6E6] text-white">
      <NavigationBar openModal={() => {}} isHomePage />
    </div>
    <main className="mx-auto">{children}</main>
    <MainFooter />
  </div>
);

export default Index;
