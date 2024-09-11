import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';

export interface Annotation {
  x: number;
  y: number;
  label: string;
}

type Props = {
  src: string;
  onAnnotationsChange: (annotations: Annotation[]) => void;
};

const ImageAnnotator: React.FC<Props> = ({ src, onAnnotationsChange }) => {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (annotations.length >= 10) return;
    const imageRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;
    setAnnotations((prev) => {
      const updatedAnnotations = [
        ...prev,
        {
          x,
          y,
          label: '',
        },
      ];
      onAnnotationsChange(updatedAnnotations);
      return updatedAnnotations;
    });
  };

  const handleLabelChange = (index: number, value: string) => {
    setAnnotations((prev) => {
      const updatedAnnotations = prev.map((annotation, i) =>
        i === index ? { ...annotation, label: value } : annotation
      );
      onAnnotationsChange(updatedAnnotations);
      return updatedAnnotations;
    });
  };

  const handleDelete = (index: number) => {
    setAnnotations((prev) => {
      const updatedAnnotations = prev.filter((_, i) => i !== index);
      onAnnotationsChange(updatedAnnotations);
      return updatedAnnotations;
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="relative rounded-2xl border-2 border-black border-opacity-10 bg-[#F6F6E6] p-4 pb-5">
        <h1 className="pb-4 text-black">ADD POINTERS</h1>
        <div className="relative">
          <img
            src={src}
            alt="Annotatable"
            onClick={handleImageClick}
            className="h-auto w-full cursor-crosshair border-2 border-black shadow-brut-lg"
          />
          {annotations.map((annotation, index) => (
            <div key={index} className="absolute" style={{ top: annotation.y - 10, left: annotation.x - 10 }}>
              <div className="flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-y-auto rounded-2xl border-2 px-4 py-2" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
        {annotations.map((annotation, index) => (
          <div key={index} className="relative mb-4">
            <div className={`flex items-center justify-between text-black ${index !== 0 && 'pt-2.5'}`}>
              <div>
                <h1 className={`${FontSpaceMono.className} text-base font-bold`}>POINTER {index + 1}</h1>
                <p
                  className={`${FontManrope.className} pb-2 text-base font-semibold normal-case text-black text-opacity-60`}
                >
                  Include instructions and guidelines here.
                </p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="cursor-pointer border-none bg-transparent text-lg text-black hover:text-red-500"
                title="Delete"
              >
                <IconTrash />
              </button>
            </div>

            <textarea
              value={annotation.label}
              onChange={(e) => handleLabelChange(index, e.target.value)}
              rows={3}
              maxLength={55}
              className={`${FontManrope.className} h-20 w-full resize-none border-2 border-black p-3 text-base font-bold text-black shadow-brut-md`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAnnotator;
