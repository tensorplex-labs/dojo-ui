import { CategoryItemProps } from '@/types/TaskListTypes';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import React from 'react';

const CategoryItem: React.FC<CategoryItemProps> = ({ label, isActive, onClick, className }) => {
  const activeClasses = ' border-primary  bg-secondary text-primary';
  const inactiveClasses = ' border-black border-opacity-10  bg-card-background text-black opacity-75';

  return (
    <div
      className={cn(
        FontManrope.className,
        isActive ? activeClasses : inactiveClasses,
        `cursor-pointer border px-[11px] py-[5px] hover:border-primary hover:bg-secondary rounded-full`,
        className
      )}
      onClick={onClick}
    >
      <p>{label}</p>
    </div>
  );
};

export default CategoryItem;
