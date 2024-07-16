'use client';
import { HTMLAttributes } from 'react';

import { useModal } from '@/hooks/useModal';
import { MODAL } from '@/types/ProvidersTypes';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
<<<<<<< HEAD:components/Wallet/walletConnect.tsx
import { CustomButton } from '../utils/custom-button';
=======
import { CustomButton } from '../CustomButton';
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/walletConnect.tsx

interface Props extends HTMLAttributes<HTMLDivElement> {}

const WalletConnect = (props: Props) => {
  const { onClick, style, className, ...rest } = props;
  const { openModal } = useModal(MODAL.wallet);

  return (
    <>
      <CustomButton
        className={cn(
          FontSpaceMono.className,
          'text-xs md:text-sm bg-primary rounded-none border-[2px] border-black text-font-secondary hover:shadow-brut-sm',
          className
        )}
        onClick={openModal}
      >
        CONNECT WALLET
      </CustomButton>
    </>
  );
};

export default WalletConnect;
