import NavigationBar from '@/components/NavigationBar';
// import useIntersectionObserver from '@/components/track';
import GetStartedButton from '@/components/Button/GetStarted';
import MainFooter from '@/components/Footer/MainFooter';
import ScrollEffect from '@/components/ScrollAnimation';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
// import './index.css';

type Props = {};

const Index = (props: Props) => {
  const [clientHeight, setClientHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    setClientHeight(window.innerHeight); // Use window.innerHeight for correct height
  }, []);

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [2, 1, 1, 2]);
  const y = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [200, 0, 0, -200]);
  const blur = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [10, 0, 0, 10]);
  const [scrollRange, setScrollRange] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setClientHeight(window.innerHeight);
    setScrollRange(window.innerHeight * 4); // Set the scroll range to 4 times the viewport height
  }, []);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setCurrentSection(value * scrollRange);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);
  return (
    <LandingPageLayout>
      <section id="first" className="mx-auto mb-40 grid h-[calc(100vh-134px)]
        w-fit max-w-[1075px] grid-cols-[50%_1fr] gap-8">
        <div className="flex flex-col justify-center">
          <h1 className={`${FontSpaceMono.className} text-5xl font-bold uppercase text-black`}>
            Get paid to shape the future of AI
          </h1>
          <p className={`${FontManrope.className} pr-2 mt-[13px] text-2xl font-semibold text-black text-opacity-50`}>
            Earn TAO through responding to AI-generated tasks across various domains. Join the crowd-sourced effort to
            build the world's most powerful multimodal AI models.
          </p>
          <div className={`mb-5 mt-[13px]`}>
            <GetStartedButton />
          </div>
          <hr className={'border-black'} />
          <div className={`mt-[22px] flex flex-row gap-3`}>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                Rewards paid out (usd)
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}><CountUp start={0} end={789} duration={3} startOnMount/>k </h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                HUMAN TASKS COMPLETED
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}><CountUp start={0} end={12} duration={3} startOnMount/>M</h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                NO.OF HUMAN PARTICIPANTS
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}><CountUp start={0} end={123456} duration={3} startOnMount/></h3>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className={`absolute left-[50px] z-10 flex h-auto w-[208px] flex-col rounded-lg border-2 border-black bg-[#FFFFFF] shadow-brut-sm`}
          >
            <div className="mt-2 h-[100px] w-[190px] self-center rounded-[6px] border-2 border-black bg-[#D9D9D9]"></div>
            <div className="flex flex-grow flex-col justify-center gap-1 p-[12px] ">
              <div className="h-[9px] w-[62px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
              <div className="h-[9px] w-[94px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200"></div>
              <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200"></div>
              <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200"></div>
              <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200"></div>
            </div>
          </div>
          <div
            className={`absolute right-[60px] flex h-auto w-[208px] flex-col rounded-lg border-2 border-black bg-[#FFFFFF] shadow-brut-sm`}
          >
            <div className="mt-2 h-[135px] w-[190px] self-center rounded-[6px] border-2 border-black bg-[#D9D9D9]"></div>
            <div className="flex flex-grow flex-col justify-center gap-1 p-[12px] ">
              <div className="h-[9px] w-[62px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
              <div className="h-[9px] w-[94px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="second" className="overflow-hidden">
        <ScrollEffect />
      </section>
      <section id="third" className="z-[10000] bg-gradient-to-t from-[#FFFFF4] to-[#E1F5F4]">
        <div className="mx-auto max-w-[1075px]">
          <h1 className={`${FontSpaceMono.className} text-5xl font-bold uppercase`}>How does it work?</h1>
          <p className={`${FontManrope.className} text-2xl font-bold opacity-60`}>
            Five simple steps to get you started!
          </p>

          <div className="mb-3 mt-6 flex justify-between pt-6 ">
            <div className=" w-[36%] rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm">
              <div className="relative">
                <div
                  className="absolute left-0 top-0 flex h-[54px] w-[95px] rounded-tl-2xl pl-[8px] pt-[6px]"
                  style={{
                    backgroundImage: "url('./steps-bg.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1 className={`text-center font-bold uppercase ${FontManrope.className} text-xl`}>Step 1</h1>
                </div>
                <div
                  className="rounded-2xl px-3 pb-4 pt-[54px]"
                  style={{
                    background: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
                  }}
                >
                  <img src="./step1.png" className="w-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 flex h-[145px] w-full flex-col justify-end rounded-2xl px-3 py-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                  }}
                >
                  <h1 className={`font-bold ${FontManrope.className} text-md mb-2 text-white`}>
                    Sign up for a Dojo Subnet Miner
                  </h1>
                  <span className={`font-thin ${FontManrope.className} text-sm text-white`}>
                    Click here to open the link to{' '}
                    <a href="#" className="font-bold underline">
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-[58%] rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm">
              <div className="relative">
                <div
                  className="absolute left-0 top-0 flex h-[54px] w-[95px] rounded-tl-2xl pl-[8px] pt-[6px]"
                  style={{
                    backgroundImage: "url('./steps-bg.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1 className={`text-center font-bold uppercase ${FontManrope.className} text-xl`}>Step 2</h1>
                </div>
                <div
                  className="rounded-2xl px-3 pb-4 pt-[54px]"
                  style={{
                    background: 'linear-gradient(to bottom, #00B6A6, #005049)',
                  }}
                >
                  <img src="./step2.png" className="w-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 flex h-[145px] w-full flex-col justify-end rounded-2xl px-3 py-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                  }}
                >
                  <h1 className={`font-bold ${FontManrope.className} text-md mb-2 text-white`}>
                    Sign up for a Dojo Subnet Miner
                  </h1>
                  <span className={`font-thin ${FontManrope.className} text-sm text-white`}>
                    Click here to open the link to{' '}
                    <a href="#" className="font-bold underline">
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 mt-6 flex justify-between ">
            <div className=" w-[31.5%] rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm">
              <div className="relative">
                <div
                  className="absolute left-0 top-0 flex h-[54px] w-[95px] rounded-tl-2xl pl-[8px] pt-[6px]"
                  style={{
                    backgroundImage: "url('./steps-bg.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1 className={`text-center font-bold uppercase ${FontManrope.className} text-xl`}>Step 3</h1>
                </div>
                <div
                  className="rounded-2xl px-3 pb-4 pt-[54px]"
                  style={{
                    background: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
                  }}
                >
                  <img src="./step1.png" className="w-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 flex h-[145px] w-full flex-col justify-end rounded-2xl px-3 py-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                  }}
                >
                  <h1 className={`font-bold ${FontManrope.className} text-md mb-2 text-white`}>
                    Sign up for a Dojo Subnet Miner
                  </h1>
                  <span className={`font-thin ${FontManrope.className} text-sm text-white`}>
                    Click here to open the link to{' '}
                    <a href="#" className="font-bold underline">
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[31.5%] rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm">
              <div className="relative">
                <div
                  className="absolute left-0 top-0 flex h-[54px] w-[95px] rounded-tl-2xl pl-[8px] pt-[6px]"
                  style={{
                    backgroundImage: "url('./steps-bg.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1 className={`text-center font-bold uppercase ${FontManrope.className} text-xl`}>Step 4</h1>
                </div>
                <div
                  className="rounded-2xl px-3 pb-4 pt-[54px]"
                  style={{
                    background: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
                  }}
                >
                  <img src="./step1.png" className="w-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 flex h-[145px] w-full flex-col justify-end rounded-2xl px-3 py-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                  }}
                >
                  <h1 className={`font-bold ${FontManrope.className} text-md mb-2 text-white`}>
                    Sign up for a Dojo Subnet Miner
                  </h1>
                  <span className={`font-thin ${FontManrope.className} text-sm text-white`}>
                    Click here to open the link to{' '}
                    <a href="#" className="font-bold underline">
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[31.5%] rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm">
              <div className="relative">
                <div
                  className="absolute left-0 top-0 flex h-[54px] w-[95px] rounded-tl-2xl pl-[8px] pt-[6px]"
                  style={{
                    backgroundImage: "url('./steps-bg.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1 className={`text-center font-bold uppercase ${FontManrope.className} text-xl`}>Step 5</h1>
                </div>
                <div
                  className="rounded-2xl px-3 pb-4 pt-[54px]"
                  style={{
                    background: 'linear-gradient(to bottom, #DBE5E4, #7ADCD3)',
                  }}
                >
                  <img src="./step1.png" className="w-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 flex h-[145px] w-full flex-col justify-end rounded-2xl px-3 py-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                  }}
                >
                  <h1 className={`font-bold ${FontManrope.className} text-md mb-2 text-white`}>
                    Sign up for a Dojo Subnet Miner
                  </h1>
                  <span className={`font-thin ${FontManrope.className} text-sm text-white`}>
                    Click here to open the link to{' '}
                    <a href="#" className="font-bold underline">
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="fourth"
        className="z-10"
        style={{
          background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
        }}
      >
        <div className="mx-auto flex h-[500px] max-w-[1075px] flex-row">
          <div className="mt-[170px] w-[50%]">
            <h1 className={`${FontSpaceMono.className} text-[46px] font-bold uppercase`}>Dojo roadmap</h1>
            <p className={`${FontManrope.className} text-xl font-bold opacity-50`}>
              Our journey to revolutionize AI development
            </p>
          </div>
          <div className="mt-[100px] w-[50%]">
            <div className="mb-1 flex h-auto items-center">
              <div className=' pb-5'>
                <div className=" mr-4 flex h-[67px] w-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
                  {/* <div className="bg-white rounded-full h-[67px] w-[67px]"></div> */}
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v0</p>
                </div>
                <div className="pb5 ml-[32px] mt-3 h-[110px] w-[1px] border-l-[3px] border-dashed border-black border-opacity-50"></div>
              </div>
              <div className='flex flex-col justify-items-start'>
                <h3 className={`${FontSpaceMono.className} mb-4 text-xl font-bold uppercase`}>Testnet launch</h3>
                <p className={`${FontManrope.className} text-lg font-bold opacity-70`}>Synthetic Task Generation</p>
                <p className={`${FontManrope.className} text-lg font-bold opacity-70`}>Worker API Model</p>
                <p className={`${FontManrope.className} text-lg font-bold opacity-70`}>Task Completion Interface</p>
              </div>
            </div>
            <div className="mb-8 -top-14 flex h-auto items-center">
              <div>
                <div className=" mr-4 flex h-[67px] w-[67px] items-center justify-center rounded-full border-2 border-black shadow-brut-sm">
                  {/* <div className="bg-white rounded-full h-[67px] w-[67px]"></div> */}
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v1</p>
                </div>
                <div 
                  className="pb5 ml-[32px] mt-3 h-[110px] w-[1px] border-l-[3px] border-dashed border-black border-opacity-50" 
                  style={{
                    background: "linear-gradient(180deg, #FFFFF4 0%, #E1F5F4 53.5%, #FEFFF5 100%)"
                  }}
                >

                </div>
              </div>
              <div>
                <h3 className={`${FontSpaceMono.className} mb-4 text-xl font-bold uppercase`}>MAINNET launch</h3>
                <p className={`${FontManrope.className} text-lg font-bold opacity-70`}>Cross-Subnet Integration</p>
                <p className={`${FontManrope.className} text-lg font-bold opacity-70`}>Scoring Refinement</p>
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
