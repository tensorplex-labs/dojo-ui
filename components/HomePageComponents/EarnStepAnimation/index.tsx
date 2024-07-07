// ConversationBubble.js
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {}
const EarnStepAnimation = ({}: Props) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  return (
    <div className="aspect-[2]  pl-5" style={{ backgroundImage: `url("magic-grid.png")`, backgroundSize: 800 }}>
      <div ref={backgroundRef} className="size-full overflow-hidden">
        <div className="relative size-full">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            className="relative z-10 h-full"
            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          >
            <div className="absolute z-10 flex size-full items-center">
              <Image
                src={'/wallet-back.png'}
                alt="Wallet Back"
                width={210}
                height={224}
                className="relative top-[-22px] h-2/5 w-auto"
              />
            </div>
            <div className="absolute z-20 flex size-full items-center">
              <Image src={'/wallet-front.png'} alt="Wallet Front" width={253} height={179} className=" h-2/5 w-auto" />
            </div>
          </motion.div>

          {/* Coin One */}
          <div className="absolute left-0 top-0 flex size-full items-center justify-end">
            <motion.div
              animate={{ x: [300, -800] }}
              transition={{ duration: 1.1, repeat: Infinity, repeatType: 'loop', ease: easeIn }}
              initial={{ x: 300 }}
              className="relative"
            >
              {/* Beam Wrapper */}
              <div className="absolute right-[20px] top-0 z-0 flex h-full w-[200px] translate-x-full items-center">
                <div className="h-[30px] w-full bg-gradient-to-r from-[#98f8cd] to-transparent"></div>
              </div>
              <Image
                src={'/bittensor-coin.png'}
                alt="Wallet Front"
                width={50}
                height={50}
                className="relative h-[50px] w-auto"
              />
            </motion.div>
          </div>

          {/* Coin Two */}
          <div className="absolute left-0 top-0 flex size-full items-center justify-end">
            <motion.div
              animate={{ x: [300, -800] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'loop', delay: 0.6, ease: easeIn }}
              initial={{ x: 300 }}
              className="relative top-[-20px]"
            >
              {/* Beam Wrapper */}
              <div className="absolute right-[20px] top-0 z-0 flex h-full w-[200px] translate-x-full items-center">
                <div className="h-[30px] w-full bg-gradient-to-r from-[#98f8cd] to-transparent"></div>
              </div>
              <Image
                src={'/bittensor-coin.png'}
                alt="Wallet Front"
                width={50}
                height={50}
                className="relative h-[50px] w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnStepAnimation;
