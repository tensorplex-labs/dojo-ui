import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconTrash } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';

interface Annotation {
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
  const [creatingAnnotation, setCreatingAnnotation] = useState<Annotation | null>(null);
  const [selectedAnnotation, setSelectedAnnotation] = useState<number | null>(null);
  const [arrowCoordinates, setArrowCoordinates] = useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
  } | null>(null);
  const annotationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (annotations.length >= 10) return;
    const imageRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;

    setCreatingAnnotation({ x, y, label: '' });
  };

  const handleLabelSubmit = () => {
    if (creatingAnnotation && creatingAnnotation.label) {
      const updatedAnnotations = [...annotations, creatingAnnotation];
      setAnnotations(updatedAnnotations);
      onAnnotationsChange(updatedAnnotations);
      setCreatingAnnotation(null);

      const newIndex = updatedAnnotations.length - 1;
      setSelectedAnnotation(newIndex);

      setTimeout(() => {
        const lastIndex = updatedAnnotations.length - 1;
        const element = annotationRefs.current[lastIndex];
        if (element) {
          const container = element.closest('.overflow-y-auto');
          if (container) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            const offset = 20;

            container.scrollTo({
              top: elementRect.top - containerRect.top + container.scrollTop - offset,
              behavior: 'smooth',
            });
          }
          const textarea = element.querySelector('textarea');
          if (textarea) {
            textarea.focus();
          }
        }
      }, 0);
    } else {
      setCreatingAnnotation(null);
    }
  };

  const handleLabelChangeDuringCreation = (value: string) => {
    if (creatingAnnotation) {
      setCreatingAnnotation({ ...creatingAnnotation, label: value });
    }
  };

  const handleDelete = (index: number) => {
    setAnnotations((prev) => {
      const updatedAnnotations = prev.filter((_, i) => i !== index);
      onAnnotationsChange(updatedAnnotations);
      return updatedAnnotations;
    });
    setCreatingAnnotation(null);
    setSelectedAnnotation(null);
  };
  useEffect(() => {
    if (creatingAnnotation) {
      const imageRect = imageRef.current?.getBoundingClientRect();
      const textareaRect = document.querySelector('textarea')?.getBoundingClientRect();

      if (imageRect && textareaRect) {
        const start = {
          x: creatingAnnotation.x,
          y: creatingAnnotation.y,
        };
        const end = {
          x:
            creatingAnnotation.x > imageRect.width / 2
              ? textareaRect.left - imageRect.left
              : textareaRect.right - imageRect.left,
          y: textareaRect.top - imageRect.top + textareaRect.height / 2,
        };
        setArrowCoordinates({ start, end });
      }
    } else {
      setArrowCoordinates(null);
    }
  }, [creatingAnnotation]);
  const drawArrow = () => {
    if (!arrowCoordinates) return null;

    const { start, end } = arrowCoordinates;
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const length = Math.sqrt(dx * dx + dy * dy);
    const circleRadius = 10;

    return (
      <div className="pointer-events-none absolute left-[-2px] top-[-2px] size-full">
        <div
          className="absolute  origin-left border-[0.5px] border-red-500 bg-white"
          style={{
            width: length,
            height: '2px',
            top: start.y,
            left: start.x,
            transform: `rotate(${angle}deg)`,
          }}
        />
        <div
          className="absolute rounded-full border-2 border-red-500 bg-white bg-opacity-75"
          style={{
            width: circleRadius * 2,
            height: circleRadius * 2,
            top: start.y - circleRadius,
            left: start.x - circleRadius,
          }}
        />
      </div>
    );
  };
  const handleAnnotationSelect = (index: number) => {
    setSelectedAnnotation(index);
    setTimeout(() => {
      const element = annotationRefs.current[index];
      if (element) {
        const container = element.closest('.overflow-y-auto');
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          const offset = 20; // Adjust this value to control the top margin

          container.scrollTo({
            top: elementRect.top - containerRect.top + container.scrollTop - offset,
            behavior: 'smooth',
          });
        }
      }
      const textarea = element?.querySelector('textarea');
      if (textarea) {
        textarea.focus();
      }
    }, 0);
  };

  const handleTextareaFocus = (index: number) => {
    setSelectedAnnotation(index);
    // Scroll the image to show the selected annotation
    const imageContainer = imageRef.current?.parentElement;
    if (imageContainer) {
      const annotation = annotations[index];
      imageContainer.scrollTo({
        left: annotation.x - imageContainer.clientWidth / 2,
        top: annotation.y - imageContainer.clientHeight / 2,
        behavior: 'smooth',
      });
    }
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
            className="h-auto w-full cursor-crosshair border-2 border-black shadow-brut-md"
            ref={imageRef}
          />
          {annotations.map((annotation, index) => (
            <div
              key={index}
              className="absolute cursor-pointer"
              style={{ top: annotation.y - 10, left: annotation.x - 10 }}
              onClick={() => handleAnnotationSelect(index)}
            >
              <div
                className={`flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white ${
                  selectedAnnotation === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
          {drawArrow()}
          {creatingAnnotation && (
            <div
              className="absolute z-50"
              style={{
                top: creatingAnnotation.y + 20,
                left:
                  creatingAnnotation.x > (imageRef.current?.clientWidth || 0) / 2
                    ? creatingAnnotation.x - 160 // Adjust left position if on the right half
                    : creatingAnnotation.x,
              }}
            >
              <textarea
                value={creatingAnnotation.label}
                onChange={(e) => handleLabelChangeDuringCreation(e.target.value)}
                rows={3}
                maxLength={55}
                className={`${FontManrope.className} h-20 w-40 resize-none border-2 border-black p-3 text-base font-bold text-black shadow-brut-sm focus:border-2 focus:border-black focus:border-opacity-50`}
                placeholder="Add text to your pointer here"
                onBlur={handleLabelSubmit}
                onKeyPress={(e) => e.key === 'Enter' && handleLabelSubmit()}
                autoFocus
              />
            </div>
          )}
        </div>
      </div>

      <div className="overflow-y-auto rounded-2xl border-2 px-4 py-2" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
        {annotations.map((annotation, index) => (
          <div
            key={index}
            ref={(el) => {
              annotationRefs.current[index] = el;
            }}
            className={`relative mb-4 ${selectedAnnotation === index ? 'rounded-md bg-green-100 p-2' : ''}`}
          >
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
              onChange={(e) =>
                setAnnotations((prev) => {
                  const updatedAnnotations = prev.map((a, i) => (i === index ? { ...a, label: e.target.value } : a));
                  onAnnotationsChange(updatedAnnotations);
                  return updatedAnnotations;
                })
              }
              onFocus={() => handleTextareaFocus(index)}
              rows={3}
              maxLength={55}
              className={`${FontManrope.className} h-20 w-full resize-none border-2 border-black bg-[#d7d7d7] p-3 text-base font-bold text-black focus:bg-white focus:shadow-brut-sm`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAnnotator;
