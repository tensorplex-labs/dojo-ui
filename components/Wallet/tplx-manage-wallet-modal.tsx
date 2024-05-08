'use client';
import React, { useEffect, useState } from 'react';

import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { SiweMessage } from 'siwe';
import { recoverMessageAddress, type Address } from 'viem';
import { Connector, useAccount, useChainId, useConnect, useSignMessage } from 'wagmi';
import TPLXModalContainer from '../ModalContainer';
import TPLXLWalletConnectedCard from './tplx-wallet-connected-card';
import TPLXWalletNetworkCard from './tplx-walletnetwork-card';
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
  const { connectors, connect, connectAsync } = useConnect();
  const { connector, address, status } = useAccount();
  const [recoveredAddress, setRecoveredAddress] = useState<Address>();
  const [nonce, setNonce] = useState<string>();
  const [siweMessage, setSiweMessage] = useState<string>();
  const { triggerTaskPageReload,setTriggerTaskPageReload } = useSubmit();
  const {
    data: signature,
    variables,
    error,
    status:statusSignMessage,
    signMessageAsync: signMessage,
  } = useSignMessage();
  const { workerLoginAuth } = useWorkerLoginAuth();
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

  const postSignInWithEthereum = async (signature: string) => {
    console.log("This is the signature", signature);
    try {
      if (!address) {
        throw new Error('Wallet address is undefined');
      }
      if (!siweMessage) {
        throw new Error('SIWE message has not been prepared');
      }

      // Create the payload
      const payload: LoginAuthPayload = {
        walletAddress: address,
        chainId: chainId.toString(),
        signature: signature,
        message: siweMessage,
        timestamp: Math.floor(Date.now() / 1000).toString(),
        nonce: nonce,
      };

      // Call the workerLoginAuth function with the payload
      await workerLoginAuth(payload);
      setTriggerTaskPageReload(true);
      console.log(triggerTaskPageReload)
      const token = getFromLocalStorage('jwtToken');
      if (!token) {
        throw new Error('Token not found in local storage');
      }
    } catch (error) {
      console.error("Error during worker login authentication", error);
      onClose?.(); // Close the modal on error
    }
  };

  
  const signInWithEthereum = async (address:string) => {
    if (!address) {
      return;
    }
    const _nonce = await fetchNonce(address);
    if (_nonce) {
      const msg = createSiweMessage(
        address,
        _nonce,
        'Sign in with Ethereum to tensorplex',
      );
      await signMessage({ message: msg });
    }
  };

  const postConnectWallet = async (address:string) => {
    signInWithEthereum(address).catch((err) => {
      console.log("Error signing in with ethereum",err)
    });
  }

  const conenctWalletHandler = (connectorId: string) => {
    const connector = getConnectorById(connectors, connectorId);
    console.log('clicked', connector);
    if (connector) {
      connectAsync({
        connector,
        chainId,
      })
        .then((res) => {
          postConnectWallet(res.accounts[0]);
        })
        .catch((err) => {
          console.log('Error Connection');
        });
    }
    onClose?.();
  };

  useEffect(() => {
    (async () => {
      if (variables?.message && signature) {
        postSignInWithEthereum(signature);
      }
    })();
  }, [signature, variables?.message]);
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
              disabled={!getConnectorById(connectors, 'io.metamask') || status === 'connected' }
              onClick={() => {
                conenctWalletHandler("io.metamask");
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
                conenctWalletHandler("io.rabby")
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
