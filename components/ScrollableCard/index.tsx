import { FontManrope } from '@/utils/typography';
import { motion } from 'framer-motion';

interface ScrollableCardProps {
  y: any;
  title: string;
  subtitle: string;
  scrollYPosition: number;
  style?: React.CSSProperties;
}

const ScrollableCard: React.FC<ScrollableCardProps> = ({ y, title, subtitle, style, scrollYPosition }) => {
  return (
    <motion.div
      style={{
        y: y,
        borderRadius: '20px',
        position: 'absolute',
        ...style,
      }}
      initial={{ opacity: 0.2, scale: 20, filter: 'blur(5px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 20, filter: 'blur(5px)' }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`mx-auto mb-8 flex -translate-y-20 transform flex-col items-center justify-center rounded-lg border-4 border-black text-center shadow-brut-sm`}
        style={{
          background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1000px',
          border: '2px solid black',
          borderRadius: '20px',
          height: '190px',
        }}
      >
        <h2 className={`text-[46px] font-extrabold ${FontManrope.className}`}>{title}</h2>
        <p className={` text-2xl font-bold ${FontManrope.className}`}>{subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default ScrollableCard;
