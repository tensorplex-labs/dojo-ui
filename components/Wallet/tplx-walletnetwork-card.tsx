'use client';
import { cn } from '@/utils/tw';
import { HTMLAttributes } from 'react';
import { TPLXBrutCard, brutCardVariants } from '../BrutCard';

interface Props extends HTMLAttributes<HTMLDivElement> {
  logo?: string;
  Description?: string;
  disabled?: boolean;
  selected?: boolean;
}

const TPLXWalletNetworkCard = ({ logo, Description, className, disabled, selected, ...props }: Props) => {
  return (
    <TPLXBrutCard
      className={cn(
        'py-[10px] w-full h-full',
        disabled ? '' : 'hover:cursor-pointer hover:border-primary hover:bg-secondary hover:shadow-brut-sm-primary',
        selected && !disabled && 'border-primary shadow-brut-sm-primary',
        className,
        disabled && brutCardVariants({ variant: 'muted' })
      )}
      {...props}
    >
      <div className="flex size-full flex-col items-center justify-center gap-[3px]">
        <img className="aspect-square w-[25px]" src={logo ?? ''} alt="L"></img>
        <span>{Description}</span>
      </div>
    </TPLXBrutCard>
  );
};

export default TPLXWalletNetworkCard;
