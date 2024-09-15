import { FontManrope } from '@/utils/typography';
import { IconArrowUp, IconX } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';

interface AnnotationInputProps {
  creatingAnnotation: { x: number; y: number; label: string };
  imageRef: React.RefObject<HTMLImageElement>;
  onClose: () => void;
  onLabelChange: (value: string) => void;
  onSubmit: () => void;
}

const annotationRectBaseWidth = 320;
const annotationRectBaseHeight = 175;
const annotationRectBaseWidthMobile = 320;
const annotationRectBaseHeightMobile = 40;

const AnnotationInput: React.FC<AnnotationInputProps> = ({
  creatingAnnotation,
  imageRef,
  onClose,
  onLabelChange,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        imageRef.current &&
        !imageRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, imageRef]);

  function autoResizeTextArea() {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height to auto
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // Set the height to match the content
    }
  }

  useEffect(() => {
    autoResizeTextArea();
  }, [creatingAnnotation.label]);
  useEffect(() => {
    const updatePosition = () => {
      if (inputRef.current && imageRef.current) {
        const baseAnnotationRectWidth =
          window.innerWidth > 768 ? annotationRectBaseWidth : annotationRectBaseWidthMobile;
        const baseAnnotationRectHeight =
          window.innerWidth > 768 ? annotationRectBaseHeight : annotationRectBaseHeightMobile;
        inputRef.current.style.position = 'absolute';
        const imageRect = imageRef.current.getBoundingClientRect();
        let relativeTop = (creatingAnnotation.y / 100) * imageRect.height + 20;
        let relativeLeft = (creatingAnnotation.x / 100) * imageRect.width + 10;

        // Adjust position to keep within viewport
        if (relativeLeft + imageRect.left + baseAnnotationRectWidth > window.innerWidth) {
          const tmpOverFlow = relativeLeft + imageRect.left + baseAnnotationRectWidth - window.innerWidth;
          relativeLeft = relativeLeft - Math.abs(tmpOverFlow) - 10;
        }
        if (relativeTop + imageRect.top + baseAnnotationRectHeight > window.innerHeight) {
          relativeTop = relativeTop - baseAnnotationRectHeight - 40;
        }

        inputRef.current.style.top = `${relativeTop}px`;
        inputRef.current.style.left = `${relativeLeft}px`;
      } else {
        console.log('something not loaded');
      }
    };

    // Initial position update
    updatePosition();

    // Update position on window resize
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [creatingAnnotation.x, creatingAnnotation.y, imageRef]);

  return (
    // I start the element with a fixed div but in the useEffect above,
    // I change it to absolute.
    // This is because browser keeps trying to scroll the initially added
    // element into view. But fixing it to 50% top of browser will ensure it starts in view,
    // then the useEffect will adjust it to the correct position.
    <>
      <div
        ref={inputRef}
        className="fixed z-10  min-w-[320px] border-2 border-black bg-[#FFFFF4] shadow-brut-sm"
        style={{
          top: '50%',
          overflowY: 'auto',
        }}
      >
        <div className="hidden items-center justify-between px-3 pt-2 md:flex">
          <div className="">
            <h3 className={`${FontManrope.className} text-[15px] font-bold normal-case`}>Annotate</h3>
            <p className={`${FontManrope.className} text-[13px] font-semibold normal-case text-black text-opacity-60 `}>
              {`Type what's wrong with this particular area`}
            </p>
          </div>
          <button onClick={onClose} className="hidden self-start text-gray-500 hover:text-gray-700 md:flex">
            <IconX />
          </button>
        </div>
        <div className="flex flex-col gap-[14px] pr-[28px] md:p-3">
          <textarea
            ref={textareaRef}
            value={creatingAnnotation.label}
            onChange={(e) => {
              onLabelChange(e.target.value);
              autoResizeTextArea();
            }}
            maxLength={70}
            className={`${FontManrope.className} w-full resize-none overflow-hidden border-black bg-background px-3 py-2 text-sm font-semibold text-black placeholder:text-sm focus:outline-none md:border-2`}
            placeholder="What's wrong with this area?"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSubmit();
              }
            }}
            rows={1}
            autoFocus
          />
          <button
            onClick={onSubmit}
            className="absolute right-2 top-[50%]  flex aspect-square size-fit -translate-y-1/2 items-center justify-center border-2 border-black bg-teal-500 font-bold text-white hover:bg-teal-800 md:relative md:right-auto  md:top-auto md:aspect-auto md:w-full md:translate-y-0 md:py-2"
          >
            <span className="hidden md:flex">SUBMIT</span>
            <IconArrowUp className="md:hidden" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AnnotationInput;
