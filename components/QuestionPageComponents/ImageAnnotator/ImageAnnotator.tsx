import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconTrash } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';

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
  const [creatingAnnotation, setCreatingAnnotation] = useState<Annotation | null>(null);
  const [selectedAnnotation, setSelectedAnnotation] = useState<number | null>(null);
  const [arrowCoordinates, setArrowCoordinates] = useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const annotationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (annotations.length >= 10) return;
    const imageRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;

    setCreatingAnnotation({ x, y, label: '' });
  };

  const handleLabelSubmit = () => {
    if (creatingAnnotation && creatingAnnotation.label.trim()) {
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

  const handleAnnotationSelect = (index: number) => {
    setSelectedAnnotation(index);
    setTimeout(() => {
      const element = annotationRefs.current[index];
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
      }
      const textarea = element?.querySelector('textarea');
      if (textarea) {
        textarea.focus();
      }
    }, 0);
  };

  const handleTextareaFocus = (index: number) => {
    setSelectedAnnotation(index);
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

  const drawNewAnnotationMarker = () => {
    if (!creatingAnnotation) return null;

    const circleRadius = 10;
    const newIndex = annotations.length + 1;

    return (
      <div className="pointer-events-none absolute left-[-2px] top-[-2px] size-full">
        <div
          className="absolute rounded-full border-2 border-red-500 bg-white bg-opacity-75"
          style={{
            width: circleRadius * 2,
            height: circleRadius * 2,
            top: creatingAnnotation.y - circleRadius,
            left: creatingAnnotation.x - circleRadius,
          }}
        />
        <div
          className="absolute flex items-center justify-center rounded-full bg-red-500 font-bold text-white"
          style={{
            width: circleRadius * 2,
            height: circleRadius * 2,
            top: creatingAnnotation.y - circleRadius,
            left: creatingAnnotation.x - circleRadius,
          }}
        >
          {newIndex}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="relative rounded-2xl border-2 border-black border-opacity-10 bg-[#F6F6E6] p-4 pb-5">
        <h1 className="pb-4 text-black">ADD POINTERS</h1>
        <p className={`${FontManrope.className} pb-4 text-sm normal-case text-black text-opacity-60`}>
          Identify issues by adding annotations directly on the image (up to 10)
        </p>
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
                className={`flex size-5 items-center justify-center rounded-full bg-primary font-bold text-white ${
                  selectedAnnotation === index ? 'ring-2 ring-black ring-offset-2' : ''
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
          {drawNewAnnotationMarker()}
          {/* {creatingAnnotation && isMobile && (
            <MobileAnnotationInput
              x={creatingAnnotation.x}
              y={creatingAnnotation.y}
              value={creatingAnnotation.label}
              onChange={(value) => handleLabelChangeDuringCreation(value)}
              onSubmit={handleLabelSubmit}
              onClose={() => setCreatingAnnotation(null)}
              imageRef={imageRef}
            />
          )}
          {creatingAnnotation && !isMobile && (
            <AnnotationInput
              creatingAnnotation={creatingAnnotation}
              imageRef={imageRef}
              onClose={() => setCreatingAnnotation(null)}
              onLabelChange={handleLabelChangeDuringCreation}
              onSubmit={handleLabelSubmit}
            />
          )} */}
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
            <div className={`flex items-center justify-between pt-2.5 text-black`}>
              <div className="flex w-full items-center justify-between">
                <h1 className={`${FontSpaceMono.className} text-base font-bold`}>POINTER {index + 1}</h1>
                <button
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer border-none bg-transparent text-lg text-black hover:text-red-500"
                  title="Delete"
                >
                  <IconTrash />
                </button>
              </div>
            </div>
            <p
              className={`${FontManrope.className} pb-2 text-base font-semibold normal-case text-black text-opacity-60`}
            >
              Include instructions and guidelines here.
            </p>
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
              className={`${FontManrope.className} h-20 w-full resize-none border-2 border-black  p-3 text-base font-bold text-black focus:bg-white focus:shadow-brut-sm focus:outline-none`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAnnotator;
