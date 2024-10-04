import { ButtonProps } from '@/types/CommonTypes';
import { cn } from '@/utils/tw';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-sm border-2 border-black text-sm font-medium ring-offset-background transition-colors hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-font-secondary visited:text-font-secondary hover:bg-primary/70',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary: 'bg-secondary text-font-primary',
        link: 'border-0 bg-transparent text-primary underline-offset-4 visited:text-primary hover:cursor-pointer hover:underline',
        disabled: 'bg-muted text-gray-500/50 hover:cursor-not-allowed hover:bg-muted',
        none: 'border-0 bg-none p-0 text-font-primary hover:bg-none',
        transit: 'bg-transit text-font-secondary hover:cursor-not-allowed',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, loading, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant: variant,
            size,
            className,
          }),
          className
        )}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div
            className="text-surface inline-block size-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { buttonVariants, CustomButton };
