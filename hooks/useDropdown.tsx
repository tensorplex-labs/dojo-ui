// useDropdown.ts
import { useCallback, useRef, useState } from 'react';

const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  }, []);

  return { isDropdownOpen, handleToggle, handleClickOutside, dropdownRef };
};

export default useDropdown;
