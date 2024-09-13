import { FontManrope } from '@/utils/typography';
import { IconArrowUp } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';

interface MobileAnnotationInputProps {
  x: number;
  y: number;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
  imageRef: React.RefObject<HTMLImageElement>;
}

const MobileAnnotationInput: React.FC<MobileAnnotationInputProps> = ({
  x,
  y,
  value,
  onChange,
  onSubmit,
  onClose,
  imageRef,
}) => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      let left = x - rect.width / 0.9;
      let top = y + 20;

      if (left < 0) {
        left = 0;
      } else if (left + rect.width > screenWidth) {
        left = screenWidth - rect.width;
      }

      setPosition({ left, top });
    }
  }, [x, y]);

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
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }

  return (
    <div
      ref={inputRef}
      className="absolute z-50 bg-white border-2 border-black p-2 shadow-brut-sm"
      style={{
        left: '50%',
        top: position.top,
        width: '280px',
        maxWidth: 'calc(100vw - 20px)',
        transform: 'translateX(-50%)',
      }}
    >
      <div className="flex items-center">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            autoResizeTextArea();
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSubmit();
            }
          }}
          maxLength={70}
          rows={1}
          className={`${FontManrope.className} w-full bg-transparent text-black font-semibold placeholder-gray-400 focus:outline-none text-sm`}
          placeholder="Tell us what's wrong here"
          autoFocus
        />
        <button onClick={onSubmit} className="ml-2 text-white bg-primary p-1 border-2 border-black shadow-brut-sm">
          <IconArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default MobileAnnotationInput;
