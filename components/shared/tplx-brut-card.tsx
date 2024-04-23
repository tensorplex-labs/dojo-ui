import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import TPLXShimmers from './tplx-shimmers';
import { cn } from '@/utils/tw';

const brutCardVariants = cva('border-2 border-black shadow-brut-sm', {
  variants: {
    variant: {
      cta: 'bg-primary',
      default: 'bg-foreground text-card-foreground',
      danger: 'bg-danger-400 text-white',
      muted: 'bg-muted text-muted-foreground',
    },
    size: {
      default: 'px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof brutCardVariants> {
  loading?: boolean;
  disabledOverlay?: ReactNode;
}

const TPLXBrutCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, variant, size, disabledOverlay, loading, ...props }, ref) => {
    return (
      <div
        className={cn(brutCardVariants({ variant, size, className }), 'relative p-[16px]', className)}
        ref={ref}
        {...props}
      >
        {disabledOverlay && (
          <div
            className={cn(
              'z-10 bg-gradient-to-t from-primary from-30% to-primary/60',
              'absolute left-0 top-0 flex h-full w-full  items-center justify-center'
            )}
          >
            {disabledOverlay}
          </div>
        )}
        {!loading ? (
          props.children
        ) : (
          <div className="flex flex-col gap-[10px]">
            <TPLXShimmers className="w-4/12"></TPLXShimmers>
            <TPLXShimmers className="w-6/12"></TPLXShimmers>
          </div>
        )}
      </div>
    );
  }
);

TPLXBrutCard.displayName = 'TPLXBrutCard';

export { TPLXBrutCard, brutCardVariants };
