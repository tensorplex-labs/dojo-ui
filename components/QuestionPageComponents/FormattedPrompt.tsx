import { cn } from '@/utils/tw';
import React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const FormattedPrompt = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex h-full min-h-[44px] items-center whitespace-pre-wrap  p-2 pl-0 pr-6 text-font-primary/70',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FormattedPrompt;
