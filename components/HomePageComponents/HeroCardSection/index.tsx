import GetStartedButton from '@/components/Common/Button/GetStarted';
import useAverageTaskCompletionTime from '@/hooks/useAverageTaskCompletionTime';
import useCompletedTasksCount from '@/hooks/useCompletedTasksCount';
import useDojoWorkerCount from '@/hooks/useDojoWorkerCount';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import CountUp from 'react-countup';

const HeroCardSection = () => {
  const { scrollYProgress } = useScroll();

  const { numDojoWorkers } = useDojoWorkerCount();
  const { numCompletedTasks } = useCompletedTasksCount();
  const { averageTaskCompletionTime } = useAverageTaskCompletionTime();
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const formatTime = useCallback((value: number) => {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    if (hours > 0) {
      const formattedHours = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} hrs`;
      return formattedHours;
    } else if (minutes > 0) {
      const formattedMinutes = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} mins`;
      return formattedMinutes;
    } else {
      const formattedSeconds = `${seconds.toString().padStart(2, '0')} secs`;
      return formattedSeconds;
    }
  }, []);
  return (
    <section id="first" className="flex h-auto w-full justify-center overflow-hidden px-5 md:h-[calc(100vh-112px)]">
      <div className="flex max-w-[1075px] flex-col gap-6 md:flex-row md:gap-20">
        <div className="mt-10 flex flex-1 flex-col justify-center p-0 md:mt-0">
          <h1 className={`${FontSpaceMono.className} text-4xl font-bold uppercase text-black md:text-6xl lg:text-7xl`}>
            Get paid to shape the future of AI
          </h1>
          <p
            className={`${FontManrope.className} mt-[13px] pr-2 text-lg font-medium text-gray-500 sm:text-lg lg:text-xl`}
          >
            Earn TAO through responding to AI-generated tasks across various domains. Join the crowd-sourced effort to
            build the world&apos;s most powerful multimodal AI models.
          </p>
          <div className={`mb-5 mt-[13px]`}>
            <GetStartedButton />
          </div>
          <hr className={'border-black'} />
          <div className={`mt-[22px] flex flex-col gap-3 md:flex-row`}>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold text-gray-500`}>
                {/* Rewards paid out (usd) */}
                Average Task Completion Time
              </h3>
              <h3 className={` ${FontManrope.className} text-[32px] font-extrabold`} key={averageTaskCompletionTime}>
                <CountUp
                  start={0}
                  end={averageTaskCompletionTime || 0}
                  duration={3}
                  startOnMount
                  formattingFn={formatTime}
                />
              </h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold text-gray-500`}>
                HUMAN TASKS COMPLETED
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>
                <CountUp start={0} end={numCompletedTasks ? numCompletedTasks : 12} duration={3} startOnMount />
              </h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold text-gray-500`}>
                NO.OF HUMAN PARTICIPANTS
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>
                <CountUp start={0} end={numDojoWorkers ? numDojoWorkers : 123512} duration={3} startOnMount />
              </h3>
            </div>
          </div>
        </div>
        <div className="relative mb-10 flex flex-1 items-center justify-center md:mb-0">
          <div className="static left-0 top-0 flex size-full items-center  p-0 md:absolute md:w-[80vw] lg:w-[42vw] lg:min-w-[800px] lg:max-w-[1200px]">
            <Image
              alt="Tensorplex Dojo user interface example"
              src="/hero-kv.png"
              width={1742}
              height={1236}
              className="w-full rounded-xl border-2 border-solid border-black  shadow-brut-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroCardSection;
