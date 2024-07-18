import NavigationBar from '@/components/Common/NavigationBar';
// import useIntersectionObserver from '@/components/track';
import MainFooter from '@/components/Common/Footer/MainFooter';
import { HeroCardSection, StepCard } from '@/components/HomePageComponents';
import FirstKeyMessageSlide from '@/components/HomePageComponents/KeyMessageSlides/FirstKeyMessageSlide';
import SecondKeyMessageSlide from '@/components/HomePageComponents/KeyMessageSlides/SecondKeyMessageSlide';
import ThirdKeyMessageSlide from '@/components/HomePageComponents/KeyMessageSlides/ThirdKeyMessageSlide';
import { StepCardProps } from '@/components/HomePageComponents/StepCard';
import useAverageTaskCompletionTime from '@/hooks/useAverageTaskCompletionTime';
import useCompletedTasksCount from '@/hooks/useCompletedTasksCount';
import useDojoWorkerCount from '@/hooks/useDojoWorkerCount';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
import CreateTaskAnimation from '../components/HomePageComponents/CreateTaskAnimation';
import DistributeSubscriptionKeyAnimation from '../components/HomePageComponents/DistributeSubscriptionKeyAnimation';
import EarnStepAnimation from '../components/HomePageComponents/EarnStepAnimation';

// import './index.css';
const steps: StepCardProps[] = [
  {
    stepNumber: 1,
    title: 'Creating an account',
    description: 'Connect metamask wallet',
    imageComponent: (
      <div className=" relative -right-2  aspect-[2] overflow-hidden border-black pl-4">
        <Image
          src={'/wallet-step-v2.png'}
          alt="Image of Tensorplex Dojo Wallet Connection user interface"
          width={1520}
          height={620}
          className="rounded-tl-xl border-2 border-solid border-black shadow-brut-sm"
        />
      </div>
    ),
  },
  {
    stepNumber: 2,
    title: 'Input subscription keys',
    description: 'Obtain subscription key from miners and save it',
    imageComponent: (
      <div className=" relative -right-2  aspect-[2] overflow-hidden border-black pl-4">
        <Image
          src={'/subscription_key_step.png'}
          alt="Image of Tensorplex Dojo Wallet Connection user interface"
          width={1520}
          height={620}
          className="rounded-tl-xl border-2 border-solid border-black shadow-brut-sm"
        />
      </div>
    ),
  },
  {
    stepNumber: 3,
    title: 'Start contributing',
    description: 'Start working on available tasks',
    imageComponent: (
      <div className=" relative -right-2  aspect-[2] overflow-hidden border-black pl-4">
        <Image
          src={'/contribute-task.png'}
          alt="Image of Tensorplex Dojo Wallet Connection user interface"
          width={1520}
          height={620}
        />
      </div>
    ),
  },
  {
    stepNumber: 4,
    title: 'Get rewarded',
    description: 'Get paid for your contribution to open source AI',
    imageComponent: <EarnStepAnimation />,
  },
];

const minerSteps = [
  {
    stepNumber: 1,
    height: 150,
    title: 'Set up your miner',
    description:
      'Visit <a href="https://github.com/tensorplex-labs/dojo" target="_blank" style="text-decoration: underline; hover:color: #1e40af; hover:text-decoration: none; font-weight: 700;" className="">Dojo GitHub</a> to set up the Dojo Subnet Miner',
    imageComponent: (
      <div className=" relative -right-2  aspect-[2] overflow-hidden border-black pl-4">
        <Image
          src={'/miner-step-1.png'}
          alt="Image of Tensorplex Dojo Wallet Connection user interface"
          width={1520}
          height={620}
          className="rounded-tl-xl border-2 border-solid border-black shadow-brut-sm"
        />
      </div>
    ),
  },
  {
    stepNumber: 2,
    height: 150,
    title: 'Wallet authentication',
    description: 'After setting up your miner, authenticate using CLI',
    imageComponent: (
      <div className=" relative -right-2  aspect-[2] overflow-hidden border-black pl-4">
        <Image
          src={'/miner-step-2.png'}
          alt="Image of Tensorplex Dojo Wallet Connection user interface"
          width={1520}
          height={620}
          className="rounded-tl-xl border-2 border-solid border-black shadow-brut-sm"
        />
      </div>
    ),
  },
  {
    stepNumber: 3,
    height: 150,
    title: 'Generate keys',
    description: 'Generate API and subscription keys using CLI',
    imageComponent: (
      <div className=" relative -right-2  aspect-[2] overflow-hidden border-black pl-4">
        <Image
          src={'/miner-step-3.png'}
          alt="Image of Tensorplex Dojo Wallet Connection user interface"
          width={1520}
          height={620}
          className="rounded-tl-xl border-2 border-solid border-black shadow-brut-sm"
        />
      </div>
    ),
  },
  {
    stepNumber: 4,
    title: 'Start the miner and create new tasks',
    description:
      'Start the miner through the instructions <a href="https://github.com/tensorplex-labs/dojo?tab=readme-ov-file#mining" target="_blank" style="text-decoration: underline; hover:color: #1e40af; hover:text-decoration: none; font-weight: 700;" className="">here</a>',
    imageComponent: <CreateTaskAnimation />,
  },
  {
    stepNumber: 5,
    title: 'Distribute subscription keys',
    description: 'Issue out subscription keys to participants for contribution!',
    imageComponent: <DistributeSubscriptionKeyAnimation />,
  },
];

export const KEY_MESSAGE_SCROLL_HEIGHT = 1200;

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

  const { scrollY } = useScroll({
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
      {/* Hero Card Section */}
      <HeroCardSection />
      <div className="w-full bg-gray-100">
        <FirstKeyMessageSlide />
        {/* Spacer */}
        <div className={`w-full`} style={{ height: KEY_MESSAGE_SCROLL_HEIGHT }}></div>
        <SecondKeyMessageSlide />
        <div className={`w-full`} style={{ height: KEY_MESSAGE_SCROLL_HEIGHT }}></div>
        <ThirdKeyMessageSlide />
        <div className={`w-full`} style={{ height: KEY_MESSAGE_SCROLL_HEIGHT }}></div>
      </div>
      <section id="third" className="z-[10000] mb-20 bg-gradient-to-t from-[#FFFFF4] to-[#E1F5F4] ">
        <motion.div className="mx-auto max-w-[1075px] px-5 pt-32 md:px-0">
          <h1 className={`${FontSpaceMono.className} mb-3 text-center text-5xl font-bold uppercase md:text-left`}>
            How to get started?
          </h1>

          {/* <p className={`${FontManrope.className} text-2xl font-bold opacity-60`}>
            Five simple steps to get you started!
          </p> */}
          <p className={`${FontManrope.className}  pt-0 text-2xl font-bold opacity-90`}>{'For Workers/Contributors'}</p>
          <div className="mb-3 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <StepCard {...steps[0]} />
            </div>
            <div>
              <StepCard {...steps[1]} />
            </div>
            <div>
              <StepCard {...steps[2]} />
            </div>
            <div>
              <StepCard {...steps[3]} />
            </div>
          </div>
          <p className={`${FontManrope.className} pt-10 text-2xl font-bold opacity-90`}>{'For Miners'}</p>
          <div className="mb-3 mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-1 md:col-span-1">
              <StepCard {...minerSteps[0]} />
            </div>
            <div className="col-span-1 md:col-span-1">
              <StepCard {...minerSteps[1]} />
            </div>
            <div className="col-span-1 md:col-span-1">
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
      <section
        id="fourth"
        className="z-10"
        style={{
          background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
        }}
      >
        <div className="mx-auto mt-16 flex max-w-[1075px] flex-col justify-between  md:mt-36 md:flex-row">
          <div className="w-full md:h-full md:w-3/5">
            <h1 className={`${FontSpaceMono.className} text-center text-[46px] font-bold uppercase md:text-left`}>
              Dojo Roadmap
            </h1>
            <p className={`${FontManrope.className} text-center text-lg font-semibold opacity-50 md:text-left`}>
              Our journey to revolutionize AI development
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col px-5 md:mt-0 md:h-full md:w-2/5 md:px-0">
            <div className="flex items-start">
              <div className="mr-8 flex flex-col items-center">
                <div className="flex size-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v0</p>
                </div>
                <div className="h-32 w-px border-l-[3px] border-dashed border-black/50"></div>
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
                <div className="h-32 w-px border-l-[3px] border-dashed border-black/50"></div>
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
