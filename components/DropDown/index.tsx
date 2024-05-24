import React, { ReactNode, useState } from 'react';
import { DropDownButton } from '../DropDownButton';

interface DropdownContainerProps {
  buttonText: string;
  imgSrc: string;
  children?: ReactNode; // Optional children prop if you want to pass additional content
  className?: string;
  count?: string; // Optional count prop
}

export const DropdownContainer: React.FC<DropdownContainerProps> = ({ buttonText, imgSrc, children, className, count }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <DropDownButton
        buttonText={buttonText} // Use the buttonText prop
        imgSrc={imgSrc} // Use the imgSrc prop
        onClick={toggleDropdown}
        count={count}
      />
      {isOpen && (
        <div className={`DropDownButton-content absolute z-10 mt-[10px] border-2 border-black bg-white shadow-brut-sm ${className}`}>
          {/* Use children here if needed, otherwise remove the children prop */}
          {children || (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};