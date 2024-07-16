import { cn } from '@/utils/tw';
import React from 'react';

type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <hr className={cn('w-full border-2 border-black', className)} />;
};

export default Divider;
