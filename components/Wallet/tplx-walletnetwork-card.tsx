'use client';
import { cn } from '@/utils/tw';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';
import { TPLXBrutCard, brutCardVariants } from '../BrutCard';


interface Props extends HTMLAttributes<HTMLDivElement> {
  logo?: string;
  Description?: string;
  disabled?: boolean;
  selected?: boolean;
}

const TPLXWalletNetworkCard = ({
  logo,
  Description,
  className,
  disabled,
  selected,
  ...props
}: Props) => {
  return (
    <TPLXBrutCard
      className={cn(
        'py-[10px] w-full h-full',
        disabled
          ? ''
          : 'hover:cursor-pointer hover:border-primary hover:bg-secondary hover:shadow-brut-sm-primary',
        selected && !disabled && 'border-primary shadow-brut-sm-primary',
        className,
        disabled && brutCardVariants({ variant: 'muted' }),
      )}
      {...props}
    >
      <div className="flex flex-col gap-[3px] items-center justify-center w-full h-full">
        <img className="w-[25px] aspect-square" src={logo ?? ''} alt="L"></img>
        <span>{Description}</span>
      </div>
    </TPLXBrutCard>
  );
};

export default TPLXWalletNetworkCard;
