import React from 'react';
import { cn } from '@/utils/tw';

const LeftSidebar = () => {
  return (
    <section
      className={cn(
        'sticky left-[100px] h-screen flex-col justify-between border-2 border-r',
        'bg-background-accent p-6 pt-36 max-sm:hidden lg:w-[266px]'
      )}
    >
      <div>menu 1</div>
      <div>menu 2</div>
    </section>
  );
};

export default LeftSidebar;
