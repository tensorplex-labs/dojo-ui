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
  const {disconnectAsync} = useDisconnect();
  const { connector, address, status } = useAccount();
  const [recoveredAddress, setRecoveredAddress] = useState<Address>();
  const [nonce, setNonce] = useState<string>();
  const [siweMessage, setSiweMessage] = useState<string>();
  const { triggerTaskPageReload,setTriggerTaskPageReload } = useSubmit();
  const {
    data: signatureData,
    variables,
    error,
    isSuccess,
    status:statusSignMessage,
    signMessageAsync,
    reset: resetSignMessage,
  } = useSignMessage();
  // const { workerLoginAuth } = useWorkerLoginAuth();
  const {workerLogin: postSignInWithEthereum, isAuthenticated}= useAuth();
  const chainId = useChainId();

  const fetchNonce = async (address: string) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/${address}`;
    const method = 'GET';
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Extracting 'nonce' from the response body if available
      const _nonce = data.body && data.body.nonce ? data.body.nonce : undefined;
      console.log(`Nonce fetched successfully: ${_nonce}`)
      setNonce(_nonce);
      return _nonce;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      throw error;
    }
  };

  const createSiweMessage = (address: string, nonce: string, statement: string) => {
    const message = new SiweMessage({
      domain: `${window.location.host}`,
      address,
      statement,
      uri: window.location.origin,
      version: '1',
      chainId: chainId,
      nonce: nonce
    });
    const preparedMessage = message.prepareMessage();
    setSiweMessage(preparedMessage)
    return preparedMessage;
  };

  const signInWithEthereum = async (address: string) => {
    try {
      const nonce = await fetchNonce(address);
      if (!nonce) throw new Error('Failed to fetch nonce');

      const message = createSiweMessage(address, nonce, 'Sign in with Ethereum to tensorplex');
      if (!message) throw new Error('Failed to create SIWE message');

      const signature = await signMessageAsync({ message });
      if (!signature) throw new Error("Failed to get signature");

      const payload: LoginAuthPayload = {
        walletAddress: address,
        chainId: chainId.toString(),
        signature,
        message,
        timestamp: Math.floor(Date.now() / 1000).toString(),
        nonce: nonce
      };
      // send payload to backend
      await postSignInWithEthereum(payload);
      setTriggerTaskPageReload(true);
      console.log(triggerTaskPageReload)
      onClose?.();

    } catch (error) {
      console.error('Error signing in with Ethereum:', error);
      // if something goes wrong, disconnect the wallet, reset sign message
      disconnectAsync();
      resetSignMessage();
    }
  };

  const connectWalletHandler = async (connectorId: string) => {
    const connector = getConnectorById(connectors, connectorId);
    if (!connector) {
      console.error('Failed to find connector');
      return;
    }
    try {
      const { accounts } = await connectAsync({ connector, chainId });
      if (!accounts.length) throw new Error('No accounts returned');

      await signInWithEthereum(accounts[0]);
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
