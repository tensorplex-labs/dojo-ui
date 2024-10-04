import { cn } from '@/utils/tw';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}
const TPLXFooterXLogo = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center group hover:cursor-pointer hover:bg-[#E3E3D2] rounded-lg',
        className
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 18 20"
        fill="none"
        className={cn('fill-[#838378] group-hover:fill-[#3A3A2B]')}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_210_56)">
          <path d="M10.7142 7.62262L17.4162 0H15.8286L10.0068 6.61726L5.3604 0H0L7.0278 10.0074L0 17.9999H1.5876L7.7316 11.0104L12.6396 17.9999H18M2.1606 1.17142H4.5996L15.8274 16.8861H13.3878" />
        </g>
        <defs>
          <clipPath id="clip0_210_56">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TPLXFooterXLogo;
