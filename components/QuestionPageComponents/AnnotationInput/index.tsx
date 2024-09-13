import { FontManrope } from '@/utils/typography';
import { IconX } from '@tabler/icons-react';
import React, { useEffect, useRef } from 'react';

interface AnnotationInputProps {
  creatingAnnotation: { x: number; y: number; label: string };
  imageRef: React.RefObject<HTMLImageElement>;
  onClose: () => void;
  onLabelChange: (value: string) => void;
  onSubmit: () => void;
}

const AnnotationInput: React.FC<AnnotationInputProps> = ({
  creatingAnnotation,
  imageRef,
  onClose,
  onLabelChange,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  return (
    <div
      ref={inputRef}
      className="absolute z-50 bg-[#FFFFF4] shadow-brut-sm min-w-80 border-2 border-black"
      style={{
        top: creatingAnnotation.y + 20,
        left:
          creatingAnnotation.x > (imageRef.current?.clientWidth || 0) / 1.1
            ? creatingAnnotation.x - 320
            : creatingAnnotation.x,
        width: '280px',
      }}
    >
      <div className="flex justify-between items-center px-3 pt-2">
        <div>
          <h3 className={`${FontManrope.className} text-[15px] font-bold normal-case`}>Annotate</h3>
          <p className={`${FontManrope.className} text-[13px] text-opacity-60 font-semibold normal-case text-black `}>
            {`Type what's wrong with this particular area`}
          </p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 self-start">
          <IconX />
        </button>
      </div>
      <div className="p-3 flex flex-col gap-[14px] pb-5">
        <textarea
          ref={textareaRef}
          value={creatingAnnotation.label}
          onChange={(e) => {
            onLabelChange(e.target.value);
            autoResizeTextArea();
          }}
          maxLength={70}
          className={`${FontManrope.className} w-full px-3 py-2 text-base font-semibold text-black focus:outline-none border-2 border-black bg-white resize-none overflow-hidden`}
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
          className="w-full mt-2 bg-teal-500 text-white font-bold py-2 shadow-brut-sm border-2 border-black hover:bg-teal-800"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AnnotationInput;
