/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { useAccount, useChainId } from 'wagmi';

import { useAuth } from '@/providers/authContext';
<<<<<<<< HEAD:components/Common/Wallet/wallet-button-entry.tsx
import WalletButtonBadge from './wallet-button-badge';
import WalletConnect from './walletConnect';

type WalletButtonProps = {
  openModal: () => void; // Prop for the openModal function
};
export const WalletButton = ({ openModal }: WalletButtonProps) => {
========
import WalletBadgeButton from './WalletButtonBadge';
import WalletConnect from './walletConnect';

type WalletButtonEntryProps = {
  openModal: () => void; // Prop for the openModal function
};
export const WalletButton = ({ openModal }: WalletButtonEntryProps) => {
>>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/WalletButton.tsx
  const chainId = useChainId();
  const { address, status, isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  // const { openModal } = useModal(MODAL.wallet);

  return (
    <div>
      {isConnected && isAuthenticated ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          onClick={openModal}
          className="flex w-fit items-center justify-start overflow-hidden rounded-full p-[10px] text-black hover:cursor-pointer hover:bg-muted"
        >
<<<<<<<< HEAD:components/Common/Wallet/wallet-button-entry.tsx
          <WalletButtonBadge account={address} />
========
          <WalletBadgeButton account={address} />
>>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/WalletButton.tsx
        </div>
      ) : (
        <div>
          <WalletConnect></WalletConnect>
        </div>
      )}
    </div>
  );
};
