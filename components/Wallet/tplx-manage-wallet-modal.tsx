'use client';
import React, { useEffect, useState } from 'react';

import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { SiweMessage } from 'siwe';
import { recoverMessageAddress, type Address } from 'viem';
import { Connector, useAccount, useChainId, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import TPLXModalContainer from '../ModalContainer';
import TPLXLWalletConnectedCard from './tplx-wallet-connected-card';
import TPLXWalletNetworkCard from './tplx-walletnetwork-card';
import { useAuth } from '@/providers/authContext';
import { useSubmit } from '@/providers/submitContext';
interface Props {
  open: boolean;
  onSave?: () => void;
  onClose?: () => void;
}


const getConnectorById = (
  connectors: readonly Connector[],
  connectorId: string,
) => {
  return connectors.find((connector) => connector.id === connectorId);
};

const allowedNetwork: number[] = [1, 42161, 10, 8453];

const TPLXManageWalletConnectModal = ({
  open,
  onSave,
  onClose,
  ...props
}: Props) => {
  const { connectors, connectAsync } = useConnect();
  const { connector, address, status } = useAccount();

  // const { workerLoginAuth } = useWorkerLoginAuth();
  const {isAuthenticated}= useAuth();
  const chainId = useChainId();


  const connectWalletHandler = async (connectorId: string) => {
    const connector = getConnectorById(connectors, connectorId);
    if (!connector) {
      console.error('Failed to find connector');
      return;
    }
    try {
      const { accounts } = await connectAsync({ connector, chainId });
      if (!accounts.length) throw new Error('No accounts returned');
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };


  return (
    <TPLXModalContainer
      header={'MANAGE WALLET'}
      open={open}
      onSave={() => {
        console.log('Modal saved');
        onSave?.();
      }}
      onClose={() => {
        console.log('Modal closed');
        onClose?.();
      }}
      bodyClassName="p-0"
    >
      <div className="flex flex-col w-[400px]">
        {status === 'connected' && connector && isAuthenticated && (
          <TPLXLWalletConnectedCard
            connector={connector}
            address={address}
          ></TPLXLWalletConnectedCard>
        )}
        <div className="flex flex-col p-2 pb-[31px]">
          <span className={cn(FontSpaceMono.className, 'font-bold text-xs')}>
            CHOOSE WALLET
          </span>
          <div className="grid grid-cols-3 gap-[10px] pt-[3px]">
            <TPLXWalletNetworkCard
              // disabled={!getConnectorById(connectors, 'io.metamask') || status === 'connected' }
              onClick={() => {
                connectWalletHandler("io.metamask");
              }}
              logo="/wallet_logo/metamask_logo.svg"
              Description="Metamask"
            ></TPLXWalletNetworkCard>
            <TPLXWalletNetworkCard
              disabled={true}
              logo="/wallet_logo/walletconnect_blue_logo.svg"
              Description="WalletConnect"
            ></TPLXWalletNetworkCard>
            <TPLXWalletNetworkCard
              disabled={!getConnectorById(connectors, 'io.rabby') || status === 'connected' }
              onClick={() => {
                connectWalletHandler("io.rabby")
              }}
              logo="/wallet_logo/rabbywallet_logo.svg"
              Description="Rabby"
            ></TPLXWalletNetworkCard>
          </div>
        </div>
      </div>
    </TPLXModalContainer>
  );
};

export default TPLXManageWalletConnectModal;
