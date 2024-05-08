'use client'
import { FC, HTMLAttributes, useState } from 'react';


import { cn } from '@/utils/tw';
import TPLXManageWalletConnectModal from './tplx-manage-wallet-modal';
import { useModal } from '@/hooks/useModal';
import { MODAL } from '@/providers/modals';
import { TPLXButton } from '../TPLXButton';
import { FontSpaceMono } from '@/utils/typography';



interface Props extends HTMLAttributes<HTMLDivElement> {}

const WalletConnect = (props: Props) => {
  const { onClick, style, className, ...rest } = props;
  const { openModal } = useModal(MODAL.wallet);

  return (
    <>
      <TPLXButton
        className={cn(
          FontSpaceMono.className,
          'text-xs md:text-sm bg-primary rounded-none border-[2px] border-black text-font-secondary hover:shadow-brut-sm',
          className,
        )}
        onClick={openModal}
      >
        CONNECT WALLET
      </TPLXButton>
    </>
  );
};

export default WalletConnect;
