import Slider from '@/components/QuestionPageComponents/Slider';
import React from 'react';

interface SliderCardFrameProps {
  mouseX: number;
  mouseY: number;
}

const SliderCardFrame: React.FC<SliderCardFrameProps> = ({ mouseX, mouseY }) => {
  const transformStyle = {
    transform: `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px) translateZ(${(mouseX + mouseY) * 0.5}px)`,
  };

  return (
    <div
      className="absolute right-[60px] z-50 flex h-auto w-[268px] flex-col rounded-lg border-2 border-black bg-white shadow-brut-sm"
      style={transformStyle}
    >
      <div className="mt-2 h-[105px] w-[250px] self-center rounded-md border-2 border-black bg-muted"></div>
      <div className="flex grow flex-col justify-center gap-1 p-[12px] ">
        <div className="h-[9px] w-[62px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
        <div className="h-[9px] w-[94px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
      </div>
      <div className="flex grow flex-col justify-center gap-1 p-[12px] ">
        <Slider min={1} max={100} step={1} initialValue={0} onChange={() => {}} />
      </div>
    </div>
  );
};

export default SliderCardFrame;
