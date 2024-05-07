import React from 'react';

type ImageComponentProps = {
  src: string; // Define the prop for src
};

const ImageComponent: React.FC<ImageComponentProps> = ({ src }) => {
  return (
    <div className=' shadow-brut-sm border-2 border-black'>
      <img src={src} alt="placeholder" />
    </div>
  );
};

export default ImageComponent;