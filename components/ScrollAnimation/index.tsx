import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import ScrollableCard from '../ScrollableCard';

const ScrollAnimation = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [hidden, setHidden] = useState(true);
  const { scrollY, scrollYProgress } = useScroll();
  //   const y = useTransform(scrollY, [0, 300, 600, 900], [0, -100, -200, -300]);
  const y = useTransform(scrollY, [0], [0]);

  const [backgroundImage, setBackgroundImage] = useState('url("../public/world-1.png")');

  useEffect(() => {
    scrollYProgress.onChange(value => {
      setScrollYPosition(value);
      console.log('Scroll position:', value);
      // Change background image based on scroll position
      if (value > 0.17) {
        setHidden(false);
        if (value > 0.2 && value < 0.35) {
          setBackgroundImage('url("./world-1.png")');
        } else if (value > 0.35 && value < 0.5) {
          setBackgroundImage('url("./currency-2.png")');
        } else if (value > 0.5 && value < 0.65) {
          setBackgroundImage('url("./posts-3.png")');
        } else if (value > 0.65) {
          setBackgroundImage('');
          setHidden(true);
        }
      } else {
        setHidden(true)
        setBackgroundImage('');

      }
    });

    const unsubscribe = scrollYProgress.onChange(value => {
      console.log('Scroll position:', value);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  // const texts = [
  //   'Text 1: Get Paid to Contribute to Open Source AI',
  //   'Text 2: Work anytime from anywhere',
  //   'Text 3: Get Paid Quickly',
  // ]; /* Rectangle 1171 */

  const texts = [
    {
      title: 'Get Paid to Contribute to Open Source AI',
      subtitle:
        'Your responses will  be used to train open-source models and improve outputs on other Bittensor Subnets',
    },
    {
      title: 'Work anytime from anywhere',
      subtitle: 'Enjoy the freedom to work on tasks at your convenience from any location',
    },
    {
      title: 'Get Paid Quickly',
      subtitle:
        'Rewards are streamed consistently to the miner, as long as sufficient tasks are completed and accepted by the Subnet',
    },
  ];

  useEffect(() => {
    setScrollYPosition(scrollY.get());
  }, [scrollY]);
  const calculateOpacity = (position: number, start: number, end: number) => {
    if (position < start) return 0;
    if (position > end) return 0;
    return (position - start) / (end - start);
  };
  return (
    <div
      style={{
        height: '180vh',
        transition: 'ease 0.4s',
        background: 'linear-gradient(180deg, #FFFFF4 0%, #E1F5F4 100%)',
      }}
    >
      <AnimatePresence>
        {!hidden ? (
          <motion.div
            style={{
              backgroundImage: `${backgroundImage}`,
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'center top',
              position: 'fixed',
              top: 0,
              left: 0,
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              paddingTop: '10vh',
              width: hidden ? 'auto' : '100vw',  // Conditionally set width
              height: hidden ? '0vh' : '100vh', // Conditionally set height`
              background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${backgroundImage})`,
              // zIndex: 1000 // Ensure it's above other content
            }}
            animate={{ backgroundPosition: 'center -100vh' }}
            exit={{ opacity: 0, backgroundPosition: 'center -200vh', transition: { duration: 0.5 } }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <AnimatePresence>
              {scrollYPosition > 0.2 && !hidden && (
                <ScrollableCard
                  y={y}
                  title={texts[0].title}
                  subtitle={texts[0].subtitle}
                  scrollYPosition={scrollYPosition}
                  opacity={calculateOpacity(scrollYPosition, 0.2, 0.35)}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {scrollYPosition >= 0.35 && !hidden && (
                <ScrollableCard
                  y={y}
                  title={texts[1].title}
                  subtitle={texts[1].subtitle}
                  scrollYPosition={scrollYPosition}
                  opacity={1}
                  style={{ rotate: '3deg' }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {scrollYPosition >= 0.5 && !hidden && (
                <ScrollableCard
                  y={y}
                  title={texts[2].title}
                  subtitle={texts[2].subtitle}
                  scrollYPosition={scrollYPosition}
                  opacity={1}
                  style={{ rotate: '-3deg' }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollAnimation;