'use client';
import React, { useState } from 'react';

import TPLXWalletNetworkCard from './tplx-walletnetwork-card';
import { Connector, useAccount, useChainId, useConnect } from 'wagmi';
import TPLXLWalletConnectedCard from './tplx-wallet-connected-card';
import { FontSpaceMono } from '@/utils/typography';
import { cn } from '@/utils/tw';
import TPLXModalContainer from '../ModalContainer';

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
  const { connectors, connect } = useConnect();
  const { connector, address, status } = useAccount();
  const chainId = useChainId();

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
        {status === 'connected' && connector && (
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
              disabled={!getConnectorById(connectors, 'io.metamask')}
              onClick={() => {
                const connector = getConnectorById(connectors, 'io.metamask');
                console.log('clicked', connector);
                connector &&
                  connect({
                    connector: connector,
                    chainId: chainId,
                  });
                onClose?.();
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
              disabled={!getConnectorById(connectors, 'io.rabby')}
              onClick={() => {
                const connector = getConnectorById(connectors, 'io.rabby');
                console.log('clicked', connector);
                connector &&
                  connect({
                    connector: connector,
                    chainId: chainId,
                  });
                onClose?.();
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
