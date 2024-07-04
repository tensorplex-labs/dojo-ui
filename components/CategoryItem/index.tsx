import React from 'react';

type CategoryItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ label, isActive, onClick }) => {
  const activeClasses = ' border-[#00B6A6]  bg-[#DBF5E9] text-[#00B6A6]';
  const inactiveClasses = ' border-black border-opacity-10  bg-[#F8F8F8] text-black text-opacity-75';

  return (
    <div
      className={`${isActive ? activeClasses : inactiveClasses} border-2 px-[11px] py-[5px] cursor-pointer text-[#00B6A6] hover:border-2 hover:border-[#00B6A6] hover:bg-[#DBF5E9]`}
      onClick={onClick}
    >
      <p>{label}</p>
    </div>
  );
};
