import React from 'react';

interface MultiSelectCardFrameProps {
  mouseX: number;
  mouseY: number;
}

const MultiSelectCardFrame: React.FC<MultiSelectCardFrameProps> = ({ mouseX, mouseY }) => {
  const transformStyle = {
    transform: `translate(${mouseX * 0.06}px, ${mouseY * 0.06}px) translateZ(${(mouseX + mouseY) * 0.6}px)`,
  };

  return (
    <div
      className="absolute left-[50px] z-10 flex h-auto w-[208px] flex-col rounded-lg border-2 border-black bg-white shadow-brut-sm  hover:z-40"
      style={transformStyle}
    >
      <div className="mt-2 h-[150px] w-[190px] self-center rounded-md border-2 border-black bg-muted"></div>
      <div className="flex grow flex-col justify-center gap-1 p-[12px] ">
        <div className="h-[9px] w-[62px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 delay-75"></div>
        <div className="h-[9px] w-[94px] animate-pulse bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 delay-75"></div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="h-[35px] w-[90px] cursor-pointer rounded-md border-2 border-black bg-gray-200 hover:bg-primary/15"></div>
        <div className="h-[35px] w-[90px] cursor-pointer rounded-md border-2 border-black bg-gray-200 hover:bg-primary/15"></div>
        <div className="h-[35px] w-[90px] cursor-pointer rounded-md border-2 border-black bg-gray-200 hover:bg-primary/15"></div>
        <div className="h-[35px] w-[90px] cursor-pointer rounded-md border-2 border-black bg-gray-200 hover:bg-primary/15"></div>
      </div>
    </div>
  );
};

export default MultiSelectCardFrame;
