import React, { useState } from 'react';

type ImageComponentProps = {
  src: string; // Define the prop for src
  fallbackSrc: string; // Define a prop for the fallback image source
};

const ImageComponent: React.FC<ImageComponentProps> = ({ src, fallbackSrc }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    setCurrentSrc(fallbackSrc);
  };

  return (
    <div className='border-2 border-black shadow-brut-sm'>
      <img src={currentSrc} alt="" onError={handleError} />
    </div>
  );
};

export default ImageComponent;