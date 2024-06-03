import React from 'react';
import PropTypes from 'prop-types';
import { FontSpaceMono } from '../../../../../../utils/typography';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

 const staggeredFadeInChildren = {
  hide : {
    opacity : 0
  },
  show : {
    opacity : 1,
    transition: {
      duration : 1
    }
  }
}

interface Props {
  taskName : string,
  status : string,
  date : string, 
  amount : number
}

const PayoutRecord = ({ taskName, status, date, amount } : Props) => {
  return (
    <div className="flex gap-4 md:items-center w-full md:w-auto">
      <motion.div 
        variants={staggeredFadeInChildren}
      className="px-4 md:px-6 py-2 md:py-4 bg-white border-2 border-solid border-black rounded-xl flex relative shadow-brut-sm flex-col w-full gap-1 md:flex-row md:items-center md:gap-4 md:w-auto">
        <div className='flex gap-2 items-center'>
        <div className="md:w-[180px]">
          <span className="font-semibold text-gray-800">{taskName}</span>
        </div>
        <div className="md:w-[80px]">
          <span className="font-semibold">
            <div className={`${FontSpaceMono.className} bg-[#00B8A8] bg-opacity-20 rounded-full flex items-center justify-center w-min px-3 py-1 text-sm text-[#00B8A8]`}>
              {status}
            </div>
          </span>
        </div>
        </div>
        {/* Visible in Laptop */}
        <div className="hidden md:block w-[140px]">
          <span className="font-medium text-gray-500">{date}</span>
        </div>
        <div className="block md:hidden w-[140px]">
          <span className="text-md text-[#00B8A8] font-semibold">
            <CountUp start={0} end={amount} duration={2}  decimals={2} decimal="." prefix='+' suffix=' stTAO' enableScrollSpy />
          </span>
        </div>
      </motion.div>
      <motion.div
      variants={staggeredFadeInChildren}
      className="hidden h-min md:h-full py-2 md:py-4  w-[140px] bg-[#00B8A8] bg-opacity-[0.15] rounded-xl border-2 border-solid border-black md:flex justify-center shadow-brut-sm">
        <span className="block text-lg text-[#00B8A8] font-semibold">
          <CountUp start={0} end={amount} duration={2}  decimals={2} decimal="." prefix='+' suffix=' stTAO' enableScrollSpy />
        </span>
      </motion.div>
    </div>
  );
};

PayoutRecord.propTypes = {
  taskName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  FontSpaceMono: PropTypes.object.isRequired,
};

export default PayoutRecord;
