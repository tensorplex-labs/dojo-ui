import React from 'react';

type CategoryItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ label, isActive, onClick }) => {
  const activeClasses = "border-2 border-[#00B6A6] p-[11px] bg-[#DBF5E9] text-[#00B6A6]";
  const inactiveClasses = "border-2 border-black border-opacity-10 p-[11px] bg-[#F8F8F8] text-black text-opacity-75";

  return (
    <div className={`${isActive ? activeClasses : inactiveClasses} cursor-pointer hover:border-2 hover:border-[#00B6A6] hover:p-[11px] hover:bg-[#DBF5E9] text-[#00B6A6]`} onClick={onClick}>
      <p>{label}</p>
    </div>
  );
};