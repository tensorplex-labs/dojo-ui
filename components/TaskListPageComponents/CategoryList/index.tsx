import CategoryItem from '@/components/TaskListPageComponents/CategoryList/CategoryItem';
import { categories } from '@/data';
import { CategoryListProps } from '@/types/TaskListTypes';
import { FC } from 'react';

const CategoryList: FC<CategoryListProps> = ({ activeCategories, handleCategoryClick }) => (
  <div className="mt-[18px] flex flex-wrap gap-2">
    {categories.map((category) => (
      <CategoryItem
        key={category.label}
        label={category.label}
        isActive={activeCategories.includes(category.label)}
        onClick={() => handleCategoryClick(category.label)}
      />
    ))}
  </div>
);

export default CategoryList;
