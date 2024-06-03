import GetStartedButton from "@/components/Button/GetStarted"
import MultiSelectCardFrame from "@/components/HomePageCard/MultiSelectCardFrame"
import SliderCardFrame from "@/components/HomePageCard/SliderCardFrame"
import useAverageTaskCompletionTime from "@/hooks/useAverageTaskCompletionTime"
import useCompletedTasksCount from "@/hooks/useCompletedTasksCount"
import useDojoWorkerCount from "@/hooks/useDojoWorkerCount"
import { FontManrope, FontSpaceMono } from "@/utils/typography"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import CountUp from "react-countup"




const HeroCardSection = ( ) => {
  // const {scrollYProgress} = props;
  const { scrollYProgress } = useScroll();

  const { numDojoWorkers } = useDojoWorkerCount();
  const { numCompletedTasks } = useCompletedTasksCount();
  const { averageTaskCompletionTime } = useAverageTaskCompletionTime();
  
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);



  return  <motion.section
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
      Earn TAO through responding to AI-generated tasks across various domains. Join the crowd-sourced effort to
      build the world&apos;s most powerful multimodal AI models.
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
          { averageTaskCompletionTime && averageTaskCompletionTime > 60 && 
            <>
              <CountUp 
                start={0} 
                end={Math.floor(averageTaskCompletionTime / 60)} 
                duration={3} 
                startOnMount 
              />:
            </>
          }
          <CountUp 
            start={0} 
            end={averageTaskCompletionTime ? averageTaskCompletionTime % 60 : 30} 
            duration={3} 
            startOnMount 
          /><span className='lowercase'>{`${averageTaskCompletionTime && averageTaskCompletionTime >= 60 ? 'min':'sec'}`}</span>
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
}
export default HeroCardSection