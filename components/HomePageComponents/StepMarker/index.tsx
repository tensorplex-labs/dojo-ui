// StepMarker.tsx
import { staggeredFadeInMarker } from '@/constants';
import { FontSpaceMono } from '@/utils/typography';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
interface Props {
  positionClass: string;
  stepNumber: number;
  topPosition: boolean;
}

const StepMarker = ({ positionClass, stepNumber, topPosition }: Props) => {
  return (
    <motion.div
      variants={staggeredFadeInMarker}
      className={`absolute ${positionClass} ${topPosition ? 'top-1/2 -translate-y-1/2' : 'top-0 -translate-y-1/4'} h-[10px] w-[5px] border border-solid border-black bg-gray-300`}
    >
      <div className="relative size-full">
        <span
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full text-sm font-bold text-gray-600 ${FontSpaceMono.className}`}
        >
          {stepNumber}
        </span>
      </div>
    </motion.div>
  );
};

StepMarker.propTypes = {
  positionClass: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
  topPosition: PropTypes.bool,
};

StepMarker.defaultProps = {
  topPosition: false,
};

export default StepMarker;
