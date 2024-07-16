import { ImageComponentProps } from '@/types/QuestionPageTypes';
import React, { useState } from 'react';

const ImageComponent: React.FC<ImageComponentProps> = ({ src, fallbackSrc }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    setCurrentSrc(fallbackSrc);
  };

  return (
    <div className="border-2 border-black shadow-brut-sm">
      <img src={currentSrc} alt="" onError={handleError} />
    </div>
  );
};

export default ImageComponent;
