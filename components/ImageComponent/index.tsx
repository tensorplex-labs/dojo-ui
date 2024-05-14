import React from 'react';

type ImageComponentProps = {
  src: string; // Define the prop for src
};
// shadow-brut-sm border-2 border-black
const ImageComponent: React.FC<ImageComponentProps> = ({ src }) => {
  return (
    <div className=' '>
      <img src={src} alt="placeholder" />
    </div>
  );
};

export default ImageComponent;