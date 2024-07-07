import { cn } from '@/utils/tw';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react';
import TPLXShimmers from './tplx-shimmers';

const brutCardVariants = cva('border-2 border-black shadow-brut-sm', {
  variants: {
    variant: {
      cta: 'bg-primary',
      default: 'bg-foreground text-card-foreground',
      danger: 'bg-danger-400 text-white',
      muted: 'bg-muted text-muted-foreground',
      none: 'shadow-brut-none border-0 bg-foreground text-card-foreground',
    },
    size: {
      default: 'px-4 py-[8px]',
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
        className={cn(brutCardVariants({ variant, size, className }), 'p-[16px] relative', className)}
        ref={ref}
        {...props}
      >
        {disabledOverlay && (
          <div
            className={cn(
              'bg-gradient-to-t from-primary from-40% to-primary/30 z-10',
              'absolute flex justify-center items-center top-0 left-0  w-full h-full'
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

export { brutCardVariants, TPLXBrutCard };
