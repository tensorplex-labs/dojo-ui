/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { useAccount, useChainId } from 'wagmi';

import { useAuth } from '@/providers/authContext';
import TPLXWalletButtonBadge from './tplx-wallet-button-badge';
import WalletConnect from './walletConnect';

type TPLXWalletButtonProps = {
  openModal: () => void; // Prop for the openModal function
};
export const TPLXWalletButton = ({ openModal }: TPLXWalletButtonProps) => {
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
          <TPLXWalletButtonBadge account={address} />
        </div>
      ) : (
        <div>
          <WalletConnect></WalletConnect>
        </div>
      )}
    </div>
  );
};
