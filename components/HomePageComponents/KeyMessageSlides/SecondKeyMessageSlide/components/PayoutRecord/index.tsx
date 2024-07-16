import { FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
const staggeredFadeInChildren = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

interface Props {
  taskName: string;
  status: string;
  date: string;
  amount: number;
}

const PayoutRecord = ({ taskName, status, date, amount }: Props) => {
  return (
    <div className="flex w-full gap-4 md:w-auto md:items-center">
      <motion.div
        variants={staggeredFadeInChildren}
        className="relative flex w-full flex-col gap-1 rounded-xl border-2 border-solid border-black bg-white px-4 py-2 shadow-brut-sm md:w-auto md:flex-row md:items-center md:gap-4 md:px-6 md:py-4"
      >
        <div className="flex items-center gap-2">
          <div className="md:w-[180px]">
            <span className="font-semibold text-gray-800">{taskName}</span>
          </div>
          <div className="md:w-[80px]">
            <span className="font-semibold">
              <div
                className={`${FontSpaceMono.className} flex w-min items-center justify-center rounded-full bg-primary/20 px-3 py-1 text-sm text-primary`}
              >
                {status}
              </div>
            </span>
          </div>
        </div>
        {/* Visible in Laptop */}
        <div className="hidden w-[140px] md:block">
          <span className="font-medium text-gray-500">{date}</span>
        </div>
        <div className="block w-[140px] md:hidden">
          <span className=" font-semibold text-primary">
            <CountUp
              start={0}
              end={amount}
              duration={2}
              decimals={2}
              decimal="."
              prefix="+"
              suffix=" stTAO"
              enableScrollSpy
            />
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={staggeredFadeInChildren}
        className="hidden h-min w-[140px] justify-center rounded-xl  border-2 border-solid border-black bg-primary/15 py-2 shadow-brut-sm md:flex md:h-full md:py-4"
      >
        <span className="block text-lg font-semibold text-primary">
          <CountUp
            start={0}
            end={amount}
            duration={2}
            decimals={2}
            decimal="."
            prefix="+"
            suffix=" stTAO"
            enableScrollSpy
          />
        </span>
      </motion.div>
    </div>
  );
};

PayoutRecord.propTypes = {
  taskName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  FontSpaceMono: PropTypes.object.isRequired,
};

export default PayoutRecord;
