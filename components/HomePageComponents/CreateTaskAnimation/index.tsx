import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {}

const CreateTaskAnimation = ({}: Props) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative  aspect-[2] overflow-hidden border-t-2 border-black bg-gradient-to-b from-gray-200 to-white pl-5">
      <div ref={backgroundRef} className="relative flex size-full justify-center ">
        <div className="z-20 flex h-1/5 w-4/5 items-center justify-center rounded-b-xl border-x-2 border-b-2 border-black bg-gradient-to-r from-[#DBF5E9] to-[#FCFFFE] shadow-brut-sm">
          <Image width={200} height={20} src={'/tensorplex-api.png'} alt={'Tensorplex Api Picture'} />
        </div>
        {/* Pulsing Animation */}
        <div className="absolute right-0 top-0  flex h-1/5 w-full justify-center ">
          <motion.div
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            initial={{ boxShadow: '0px 0px 0px 4px rgba(0, 0, 255, 1)' }}
            animate={{
              boxShadow: [
                '0px 0px 0px 20px rgba(0, 182, 166, 0.03)', // Initial small border
                '0px 0px 0px 50px rgba(0, 182, 166, 0.1)', // Larger border
                '0px 0px 0px 20px rgba(0, 182, 166, 0.03)', // Back to initial small border
              ],
            }}
            className="h-full w-4/5 rounded-lg bg-gray-200"
          ></motion.div>
        </div>
        {/* Vertical lines */}
        <div className="absolute left-1/4 h-full w-px bg-black">
          <div className="relative size-full bg-gray-300">
            <motion.div
              animate={{ y: [300, -800] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: easeIn }}
              initial={{ y: 300, x: '50%' }}
              className="absolute bottom-0 right-0 flex flex-col items-center justify-center"
            >
              {/* Task Block */}
              <div className="z-10 flex h-[40px]  items-center rounded-lg border-2 border-black bg-white px-3 shadow-brut-sm">
                <span className="font-bold text-gray-800">TASK</span>
              </div>
              {/* Bottom Line */}
              <div className="relative h-[100px] w-[3px] bg-gradient-to-b from-[#4fce95] to-transparent"></div>
            </motion.div>
          </div>
        </div>

        {/* Vertical lines */}
        <div className="absolute left-1/2 h-full w-px bg-black">
          <div className="relative size-full bg-gray-300">
            <motion.div
              animate={{ y: [300, -800] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop', ease: easeIn, delay: 0.8 }}
              initial={{ y: 300, x: '50%' }}
              className="absolute bottom-0 right-0 flex flex-col items-center justify-center"
            >
              {/* Task Block */}
              <div className="z-10 flex h-[40px]  items-center rounded-lg border-2 border-black bg-white px-3 shadow-brut-sm">
                <span className="font-bold text-gray-800">TASK</span>
              </div>
              {/* Bottom Line */}
              <div className="relative h-[100px] w-[3px] bg-gradient-to-b from-[#4fce95] to-transparent"></div>
            </motion.div>
          </div>
        </div>
        {/* Vertical lines */}
        <div className="absolute left-3/4 h-full w-px bg-black">
          <div className="relative size-full bg-gray-300">
            <motion.div
              animate={{ y: [300, -800] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: easeIn, delay: 0.5 }}
              initial={{ y: 300, x: '50%' }}
              className="absolute bottom-0 right-0 flex flex-col items-center justify-center"
            >
              {/* Task Block */}
              <div className="z-10 flex h-[40px]  items-center rounded-lg border-2 border-black bg-white px-3 shadow-brut-sm">
                <span className="font-bold text-gray-800">TASK</span>
              </div>
              {/* Bottom Line */}
              <div className="relative h-[100px] w-[3px] bg-gradient-to-b from-[#4fce95] to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskAnimation;
