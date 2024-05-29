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
      className="absolute left-[50px] z-10 flex h-auto w-[208px] flex-col rounded-lg border-2 border-black bg-[#FFFFFF] shadow-brut-sm  hover:z-40"
      style={transformStyle}
    >
      <div className="mt-2 h-[150px] w-[190px] self-center rounded-[6px] border-2 border-black bg-[#D9D9D9]"></div>
      <div className="flex flex-grow flex-col justify-center gap-1 p-[12px] ">
        <div className="h-[9px] w-[62px] animate-pulse delay-75 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
        <div className="h-[9px] w-[94px] animate-pulse delay-75 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200 cursor-pointer hover:bg-[#00B6A6] hover:bg-opacity-15"></div>
        <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200 cursor-pointer hover:bg-[#00B6A6] hover:bg-opacity-15"></div>
        <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200 cursor-pointer hover:bg-[#00B6A6] hover:bg-opacity-15"></div>
        <div className="h-[35px] w-[90px] rounded-[6px] border-2 border-black bg-gray-200 cursor-pointer hover:bg-[#00B6A6] hover:bg-opacity-15"></div>
      </div>
    </div>
  );
};

export default MultiSelectCardFrame;