import NavigationBar from '@/components/NavigationBar';
// import useIntersectionObserver from '@/components/track';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {};

const Index = (props: Props) => {
  const [clientHeight, setClientHeight] = useState(0);

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
            className={`border-0 bg-[#00B6A6] px-4 py-2 uppercase text-white hover:opacity-75 hover:shadow-brut-sm ${FontSpaceMono.className} mt-[13px] rounded-xl border text-lg font-bold`}
          >
            Let's Start
          </button>
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
          background: 'linear-gradient(to bottom, #FFFFF4, #E1F5F4)',
        }}
      >
        <div
          className="moving-background absolute left-0 top-0 h-full w-full"
          style={{
            backgroundImage: 'url("./world-1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <motion.div
            initial={{ scale: 0.1, y: 200 }}
            transition={{ duration: 0.8 }}
            exit={{ scale: 0.1, y: 200 }}
            className={`mx-auto mb-8 flex h-[167px] w-[1000px] -translate-y-20 -rotate-12 transform flex-col items-center justify-center gap-4 rounded-lg border-4 border-black shadow-brut-sm`}
            style={{
              background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
              opacity,
              scale,
              y,
              filter: `blur(${blur}px)`,
            }}
          >
            <h1 className={`text-center text-3xl font-bold ${FontManrope.className}`}>Work anytime from anywhere</h1>
            <p className={`${FontManrope.className} text-lg font-bold`}>
              Enjoy the freedom to work on tasks at your convenience from any location
            </p>
          </motion.div>
          {/* <motion.div
            initial={{ scale: 0.1, y: 200 }}
            transition={{ duration: 0.8 }}
            className={`mx-auto mb-8 flex h-[167px] w-[1000px] -translate-y-20 -rotate-12 transform flex-col items-center justify-center gap-4 rounded-lg border-4 border-black shadow-brut-sm`}
            style={{
              background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
              opacity,
              scale,
              y,
              filter: `blur(${blur}px)`,
            }}
          >
            <h1 className={`text-center text-3xl font-bold ${FontManrope.className}`}>Work anytime from anywhere</h1>
            <p className={`${FontManrope.className} text-lg font-bold`}>
              Enjoy the freedom to work on tasks at your convenience from any location
            </p>
          </motion.div> */}
        </div>
      </motion.section>
      <section id="third" className="mx-auto max-w-[1075px]">
        <h1 className={`${FontSpaceMono.className} text-5xl font-bold uppercase`}>How does it work?</h1>
        <p className={`${FontManrope.className} text-2xl font-bold opacity-60`}>
          Five simple steps to get you started!
        </p>
        <div className="flex gap-2">
          <div className="mr-[49px] rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm">
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
    </LandingPageLayout>
  );
};

const LandingPageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-[#FFFFF4] text-black">
    <div className="border-b-2 border-black bg-[#F6F6E6] text-white">
      <NavigationBar openModal={() => {}} />
    </div>
    <main className="mx-auto">{children}</main>
  </div>
);

export default Index;
