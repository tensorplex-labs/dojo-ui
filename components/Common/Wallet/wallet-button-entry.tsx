/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { useAccount } from 'wagmi';

import { useAuth } from '@/providers/authContext';
import WalletButtonBadge from './wallet-button-badge';
import WalletConnect from './walletConnect';

type WalletButtonProps = {
  openModal: () => void;
};
export const WalletButton = ({ openModal }: WalletButtonProps) => {
  const { address, isConnected } = useAccount();
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isConnected && isAuthenticated ? (
        <div
          onClick={openModal}
          className="flex w-fit items-center justify-start overflow-hidden rounded-full  text-black hover:cursor-pointer hover:bg-muted"
        >
          <WalletButtonBadge account={address} />
        </div>
      ) : (
        <div>
          <WalletConnect></WalletConnect>
        </div>
      )}
    </div>
  );
};
