import React from 'react';
import { cn } from '@/utils/tw';
import { VariantProps, cva } from 'class-variance-authority';


const buttonVariants = cva(
  'hover:cursor-pointer inline-flex items-center border-[2px] border-black justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary visited:text-font-secondary text-font-secondary hover:bg-primary/70',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary: 'bg-secondary text-font-primary',
        link: 'border-0 bg-transparent text-primary underline-offset-4 hover:underline hover:cursor-pointer visited:text-primary',
        disabled:
          'text-gray-500/50 hover:cursor-not-allowed bg-muted hover:bg-muted',
        none: 'text-font-primary bg-none hover:bg-none border-0 p-0',
        transit: 'bg-transit text-font-secondary hover:cursor-not-allowed',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const TPLXButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, loading, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant: variant,
            size,
            className,
          }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  },
);

TPLXButton.displayName = 'TPLXButton';

export { TPLXButton, buttonVariants };
