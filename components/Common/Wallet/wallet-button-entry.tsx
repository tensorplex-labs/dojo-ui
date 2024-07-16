/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

<<<<<<< HEAD:components/Wallet/wallet-button-entry.tsx
import { useAccount, useChainId } from 'wagmi';

import { useAuth } from '@/providers/authContext';
<<<<<<<< HEAD:components/Common/Wallet/wallet-button-entry.tsx
=======
import { useAccount } from 'wagmi';

import { useAuth } from '@/providers/authContext';
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/wallet-button-entry.tsx
import WalletButtonBadge from './wallet-button-badge';
import WalletConnect from './walletConnect';

type WalletButtonProps = {
<<<<<<< HEAD:components/Wallet/wallet-button-entry.tsx
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
=======
  openModal: () => void;
};
export const WalletButton = ({ openModal }: WalletButtonProps) => {
  const { address, isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/wallet-button-entry.tsx

  return (
    <div>
      {isConnected && isAuthenticated ? (
<<<<<<< HEAD:components/Wallet/wallet-button-entry.tsx
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
=======
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/wallet-button-entry.tsx
        <div
          onClick={openModal}
          className="flex w-fit items-center justify-start overflow-hidden rounded-full p-[10px] text-black hover:cursor-pointer hover:bg-muted"
        >
<<<<<<< HEAD:components/Wallet/wallet-button-entry.tsx
<<<<<<<< HEAD:components/Common/Wallet/wallet-button-entry.tsx
          <WalletButtonBadge account={address} />
========
          <WalletBadgeButton account={address} />
>>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/WalletButton.tsx
=======
          <WalletButtonBadge account={address} />
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/Wallet/wallet-button-entry.tsx
        </div>
      ) : (
        <div>
          <WalletConnect></WalletConnect>
        </div>
      )}
    </div>
  );
};
