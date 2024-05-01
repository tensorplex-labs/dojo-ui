/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';

import { useAccount, useChainId, useDisconnect } from 'wagmi';

import { useEffect } from 'react';

import TPLXWalletButtonBadge from './tplx-wallet-button-badge';
import WalletConnect from './walletConnect';
import { useModal } from '@/hooks/useModal';
import { MODAL } from '@/providers/modals';



export const TPLXWalletButton = () => {
  const chainId = useChainId();
  const { address, status } = useAccount();
  const { openModal } = useModal(MODAL.wallet);
  const { disconnect } = useDisconnect();

  useEffect(() => {
    console.log('chain id', chainId);
  }, [chainId]);
  return (
    <div>
      {status === 'connected' ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          onClick={openModal}
          className="w-fit hover:cursor-pointer hover:bg-muted p-[10px] rounded-full overflow-hidden flex justify-start items-center"
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
