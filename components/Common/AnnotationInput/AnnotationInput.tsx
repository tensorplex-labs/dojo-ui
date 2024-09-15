import { FontManrope } from '@/utils/typography';
import { IconX } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';

interface AnnotationInputProps {
  creatingAnnotation: { x: number; y: number; label: string };
  imageRef: React.RefObject<HTMLImageElement>;
  onClose: () => void;
  onLabelChange: (value: string) => void;
  onSubmit: () => void;
}

const annotationRectStaticWidth = 320;
const annotationRectBaseHeight = 195;

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
        inputRef.current.style.position = 'absolute';
        const imageRect = imageRef.current.getBoundingClientRect();
        let relativeTop = (creatingAnnotation.y / 100) * imageRect.height + 20;
        let relativeLeft = (creatingAnnotation.x / 100) * imageRect.width + 10;

        // Adjust position to keep within viewport
        if (relativeLeft + imageRect.left + annotationRectStaticWidth > window.innerWidth) {
          const tmpOverFlow = relativeLeft + imageRect.left + annotationRectStaticWidth - window.innerWidth;
          relativeLeft = relativeLeft - Math.abs(tmpOverFlow) - 10;
        }
        if (relativeTop + imageRect.top + annotationRectBaseHeight > window.innerHeight) {
          const tmpOverFlow = relativeTop + imageRect.top + annotationRectBaseHeight - window.innerHeight;
          relativeTop = relativeTop - annotationRectBaseHeight - 40;
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
    <div
      ref={inputRef}
      className="fixed z-10 min-w-[320px] border-2 border-black bg-[#FFFFF4] shadow-brut-sm"
      style={{
        top: '50%',
        overflowY: 'auto',
      }}
    >
      <div className="flex items-center justify-between px-3 pt-2">
        <div>
          <h3 className={`${FontManrope.className} text-[15px] font-bold normal-case`}>Annotate</h3>
          <p className={`${FontManrope.className} text-[13px] font-semibold normal-case text-black text-opacity-60 `}>
            {`Type what's wrong with this particular area`}
          </p>
        </div>
        <button onClick={onClose} className="self-start text-gray-500 hover:text-gray-700">
          <IconX />
        </button>
      </div>
      <div className="flex flex-col gap-[14px] p-3 pb-5">
        <textarea
          ref={textareaRef}
          value={creatingAnnotation.label}
          onChange={(e) => {
            onLabelChange(e.target.value);
            autoResizeTextArea();
          }}
          maxLength={70}
          className={`${FontManrope.className} w-full resize-none overflow-hidden border-2 border-black bg-white px-3 py-2 text-base font-semibold text-black focus:outline-none`}
          placeholder="Enter your input"
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
          className="mt-2 w-full border-2 border-black bg-teal-500 py-2 font-bold text-white shadow-brut-sm hover:bg-teal-800"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AnnotationInput;
