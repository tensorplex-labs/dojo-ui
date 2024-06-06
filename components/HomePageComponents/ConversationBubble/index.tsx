// ConversationBubble.js
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { staggeredFadeInChildren } from '../FirstKeyMessageSlide';

interface Props {
  text?: string;
  actor?: string;
  isRightAligned?: boolean;
  gradientClass?: string;
}
const ConversationBubble = ({ text = '', actor = '', isRightAligned = false, gradientClass = '' }: Props) => {
  return (
    <motion.div variants={staggeredFadeInChildren} className={`flex ${isRightAligned ? 'flex-row-reverse' : ''} gap-3`}>
      <div
        className={`size-[36px] min-h-[36px] min-w-[36px] rounded-full ${gradientClass} flex items-center justify-center border border-solid border-black`}
      >
        <span
          className={`text-lg font-semibold ${isRightAligned ? 'text-white text-opacity-80' : 'text-black text-opacity-80'}`}
        >
          {actor}
        </span>
      </div>
      <div
        className={`rounded-xl border border-solid border-black p-3 py-2 ${isRightAligned ? 'bg-gray-100 text-right' : 'bg-white'}`}
      >
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

ConversationBubble.propTypes = {
  text: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  isRightAligned: PropTypes.bool,
  gradientClass: PropTypes.string.isRequired,
};

ConversationBubble.defaultProps = {
  isRightAligned: false,
};

export default ConversationBubble;
