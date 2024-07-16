import React from 'react';

type CategoryItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ label, isActive, onClick }) => {
  const activeClasses = ' border-primary  bg-secondary text-primary';
  const inactiveClasses = ' border-black border-opacity-10  bg-card-background text-black text-opacity-75';

  return (
    <div
      className={`${isActive ? activeClasses : inactiveClasses} cursor-pointer border-2 px-[11px] py-[5px] hover:border-2 hover:border-primary hover:bg-secondary`}
      onClick={onClick}
    >
      <p>{label}</p>
    </div>
  );
};
