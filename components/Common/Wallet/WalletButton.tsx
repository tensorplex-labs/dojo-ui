/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { useAccount, useChainId } from 'wagmi';

import { useAuth } from '@/providers/authContext';
import WalletBadgeButton from './WalletButtonBadge';
import WalletConnect from './walletConnect';

type WalletButtonEntryProps = {
  openModal: () => void; // Prop for the openModal function
};
export const WalletButton = ({ openModal }: WalletButtonEntryProps) => {
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
          className="flex w-fit items-center justify-start overflow-hidden rounded-sm px-3 py-2 text-black hover:cursor-pointer hover:bg-muted"
        >
          <WalletBadgeButton account={address} />
        </div>
      ) : (
        <div>
          <WalletConnect></WalletConnect>
        </div>
      )}
    </div>
  );
};
