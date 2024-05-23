import NavigationBar from '@/components/NavigationBar';
// import useIntersectionObserver from '@/components/track';
import MainFooter from '@/components/Footer/MainFooter';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
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
      <section id="first" className="mx-auto grid h-screen w-fit max-w-[1075px] grid-cols-[50%_1fr] gap-8">
        <div className="pt-8">
          <h1 className={`${FontSpaceMono.className} text-[46px] font-bold uppercase text-black`}>
            Get paid to shape the future of AI
          </h1>
          <p className={`${FontManrope.className} pr-2 text-xl font-semibold text-black text-opacity-50`}>
            Earn TAO through responding to AI-generated tasks across various domains. Join the crowd-sourced effort to
            build the world's most powerful multimodal AI models.
          </p>
          <button
            className={`mb-5 border-0 bg-[#00B6A6] px-4 py-2 uppercase text-white hover:opacity-75 hover:shadow-brut-sm ${FontSpaceMono.className} mt-[13px] rounded-xl border text-lg font-bold`}
          >
            Get Started
          </button>
          <hr className={'border-black'} />
          <div className={`mt-[22px] flex flex-row gap-3`}>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                Rewards paid out (usd)
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>789K</h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                HUMAN TASKS COMPLETED
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>12M</h3>
            </div>
            <div>
              <h3 className={`uppercase ${FontSpaceMono.className} text-lg font-bold opacity-50`}>
                NO.OF HUMAN PARTICIPANTS
              </h3>
              <h3 className={`uppercase ${FontManrope.className} text-[32px] font-extrabold`}>123,456</h3>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex h-[350px] w-[260px] flex-col rounded-lg border-2 border-black bg-[#FFFFFF] shadow-brut-sm`}
          >
            <div className={`mt-1 h-[250px] w-[250px] self-center rounded-lg border-2 border-black bg-[#D9D9D9]`}></div>
            <label className={`p-2 uppercase ${FontSpaceMono.className} font-bold`}>
              caption<span className="text-red-600">*</span>
            </label>
            <p className="px-2 text-xs">Include instructions and guidelines here.</p>
          </div>
        </div>
      </section>
      <motion.section
        ref={scrollRef}
        id="second"
        className="relative flex h-screen w-full flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4) ',
        }}
      >
        <motion.div
          className="moving-background absolute left-0 top-0 flex h-full w-full items-center justify-center"
          style={{
            backgroundImage: `url("./${scrollYProgress.get() <= 0.33 ? 'world-1' : scrollYProgress.get() <= 0.5 ? 'currency-2' : 'posts-3'}.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.8s',
          }}
          initial={{ y: 0 }}
          animate={{ y: scrollYProgress.get() * -500 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{
              opacity: scrollYProgress.get() < 0.33 && 0.5 ? 1 : 0,
              scale: scrollYProgress.get() < 0.33 && 0.5 ? 1 : 0.1,
              filter: `blur(${blur}px)`,
              y: scrollYProgress.get() * -300,
            }}
            transition={{ duration: 0.8 }}
            className={`mx-auto mb-8 flex h-[167px] w-[1000px] -translate-y-20 -rotate-12 transform flex-col items-center justify-center gap-4 rounded-lg border-4 border-black shadow-brut-sm`}
            style={{
              background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
              filter: `blur(${blur}px)`,
            }}
          >
            {/* ... */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: scrollYProgress.get() >= 0.33 && scrollYProgress.get() < 0.5 ? 1 : 0,
              scale: scrollYProgress.get() >= 0.33 && scrollYProgress.get() < 0.5 ? 1 : 0.1,
              filter: `blur(${blur}px)`,
              y: scrollYProgress.get() * -600,
            }}
            transition={{ duration: 0.8 }}
            className={`mx-auto mb-8 flex h-[167px] w-[1000px] -translate-y-20 -rotate-12 transform flex-col items-center justify-center gap-4 rounded-lg border-4 border-black shadow-brut-sm`}
            style={{
              background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
              filter: `blur(${blur}px)`,
            }}
          >
            {/* ... */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: scrollYProgress.get() >= 0.5 && scrollYProgress.get() < 0.9 ? 1 : 0,
              scale: scrollYProgress.get() >= 0.5 && scrollYProgress.get() < 0.9 ? 1 : 0.1,
              filter: `blur(${blur}px)`,
              y: scrollYProgress.get() * -100,
            }}
            ></motion.div>
            </motion.div>
            </motion.section>
      <section id="third" className="mx-auto max-w-[1075px]">
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
                <h1 className={`text-center font-bold uppercase ${FontManrope.className} text-xl`}>Step 1</h1>
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
        </div>
      </section>
      <section id="fourth"
        style={{
          background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
        }}
      >
        <div className='mx-auto max-w-[1075px] h-[500px] flex flex-row'>
          <div className='mt-[170px] w-[50%]'>
            <h1 className={`${FontSpaceMono.className} text-[46px] font-bold uppercase`}>Dojo roadmap</h1>
            <p className={`${FontManrope.className} text-xl font-bold opacity-50`}>Our journey to revolutionize AI development</p>
          </div>
          <div className='w-[50%] mt-[100px]'>
            <div className="flex items-center mb-8 h-auto">
              <div>
                <div className=" border-2 border-black shadow-brut-sm rounded-full h-[67px] w-[67px] flex items-center justify-center mr-4">
                  {/* <div className="bg-white rounded-full h-[67px] w-[67px]"></div> */}
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v0</p>
                </div>
                <div className="h-[50px] w-[1px] border-l-[3px] mt-3 pb5 border-opacity-50 border-dashed border-black ml-[32px]"></div></div>
              <div>
                <h3 className={`${FontSpaceMono.className} text-xl font-bold mb-4 uppercase`}>Testnet launch</h3>
                <p className={`${FontManrope.className} text-lg opacity-70 font-bold`}>Synthetic Task Generation</p>
                <p className={`${FontManrope.className} text-lg opacity-70 font-bold`}>Worker API Model</p>
                <p className={`${FontManrope.className} text-lg opacity-70 font-bold`}>Task Completion Interface</p>
              </div>
            </div>
            <div className="flex items-center mb-8 h-auto">
              <div>
                <div className=" border-2 border-black shadow-brut-sm rounded-full h-[67px] w-[67px] flex items-center justify-center mr-4">
                  {/* <div className="bg-white rounded-full h-[67px] w-[67px]"></div> */}
                  <p className={`${FontManrope.className} text-[32px] font-bold`}>v0</p>
                </div>
                <div className="h-[50px] w-[1px] border-l-[3px] mt-3 pb5 border-opacity-50 border-dashed border-black ml-[32px]"></div></div>
              <div>
                <h3 className={`${FontSpaceMono.className} text-xl font-bold mb-4 uppercase`}>Testnet launch</h3>
                <p className={`${FontManrope.className} text-lg opacity-70 font-bold`}>Synthetic Task Generation</p>
                <p className={`${FontManrope.className} text-lg opacity-70 font-bold`}>Worker API Model</p>
                <p className={`${FontManrope.className} text-lg opacity-70 font-bold`}>Task Completion Interface</p>
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
      <NavigationBar openModal={() => { }} />
    </div>
    <main className="mx-auto">{children}</main>
    <MainFooter />
  </div>
);

export default Index;
