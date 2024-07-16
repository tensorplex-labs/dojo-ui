import React from 'react';

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageComponent?: JSX.Element;
  height?: number;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description, height, imageComponent }) => {
  return (
    <div className="size-full overflow-hidden rounded-[15px] border-2 border-black bg-white transition-all ease-in hover:shadow-brut-sm md:hover:shadow-brut-md">
      <div className="relative h-full">
        {/* Text Content Section */}

        <div className="p-6" style={{ height }}>
          <div className="mb-2 w-fit rounded-full border-2 border-black bg-[#00B8A8] px-3 py-1 text-sm font-bold text-white">
            STEP {stepNumber}
          </div>
          <h3 className="text-[1.4em] font-semibold">{title}</h3>
          <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        {imageComponent && imageComponent}
      </div>
    </div>
  );
};

export default StepCard;
