import { FontManrope } from '@/utils/typography';
import React from 'react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  backgroundGradient: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description, imageUrl, backgroundGradient }) => {
  return (
    <div className="size-full rounded-2xl border-2 border-black bg-white p-2 shadow-brut-sm ease-in">
      <div className="relative">
        <div
          className="absolute left-0 top-[-9px] flex h-[54px] w-[95px] rounded-tl-2xl pl-[8px] pt-[5px]"
          style={{
            backgroundImage: "url('./steps-bg.svg')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className={` font-bold uppercase ${FontManrope.className} text-xl`}>Step {stepNumber}</h1>
        </div>
        <div
          className="rounded-2xl px-3 pb-4 pt-[54px]"
          style={{
            background: backgroundGradient,
          }}
        >
          <img src={imageUrl} className="h-[230px] w-full object-cover object-left-top" />
        </div>
        <div
          className="absolute bottom-0 left-0 flex h-[145px] w-full flex-col justify-end rounded-2xl px-3 py-4"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
          }}
        >
          <h1 className={`font-bold ${FontManrope.className} text-md mb-2 text-white`}><span dangerouslySetInnerHTML={{ __html: title}}></span></h1>
          <span className={`font-thin ${FontManrope.className} text-sm text-white`}>
          <span dangerouslySetInnerHTML={{ __html: description}}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepCard;