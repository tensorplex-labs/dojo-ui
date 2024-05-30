import { FontManrope } from '@/utils/typography';
import { motion } from 'framer-motion';

interface ScrollableCardProps {
  y: any;
  title: string;
  subtitle: string;
  scrollYPosition: number;
  style?: React.CSSProperties;
  opacity?: number;
}

const ScrollableCard: React.FC<ScrollableCardProps> = ({ y, title, subtitle, style, scrollYPosition, opacity }) => {
  const scale = scrollYPosition < 0.26 ? 1 + (scrollYPosition - 0.2) * (1 / 0.06) : 1;

  return (
    <motion.div
      style={{
        y: y,
        borderRadius: '20px',
        position: 'absolute',
        ...style,
        scale: scale,
      }}
      initial={{ opacity: 0, scale: 20, filter: 'blur(5px)' }}
      animate={{ opacity: 1, scale: scale, filter: 'blur(0px)', animation: 'ease-in' }}
      exit={{ opacity: 0, scale: 20, filter: 'blur(5px)' }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={`mx-auto flex -translate-y-20 transform flex-col items-center justify-center rounded-lg border-4 border-black text-center shadow-brut-sm`}
        style={{
          background: `linear-gradient(to bottom, rgba(215, 249, 246, ${opacity}), rgba(249, 255, 254, ${opacity}))`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1000px',
          border: '2px solid black',
          borderRadius: '20px',
          height: '190px',
          padding: '12px 24px',
        }}
      >
        <h2 className={`text-[46px] font-extrabold ${FontManrope.className}`}>{title}</h2>
        <p className={` text-2xl font-bold ${FontManrope.className}`}>{subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default ScrollableCard;