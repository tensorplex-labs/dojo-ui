'use client';
import React, { useEffect, useState } from 'react';

import TPLXWalletNetworkCard from './tplx-walletnetwork-card';
import { Connector, useAccount, useChainId, useConnect, useSignMessage } from 'wagmi';
import TPLXLWalletConnectedCard from './tplx-wallet-connected-card';
import { FontSpaceMono } from '@/utils/typography';
import { cn } from '@/utils/tw';
import TPLXModalContainer from '../ModalContainer';
import { recoverMessageAddress, type Address } from 'viem';
import { SiweMessage } from 'siwe';
import useWorkerLoginAuth from '@/hooks/useWorkerLoginAuth';
interface WorkerLoginAuthResponse {
  success: boolean;
  body?: {
    token: string;
  };
  error?: string;
}
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
  const {
    data: signature,
    variables,
    error,
    status:statusSignMessage,
    signMessageAsync: signMessage,
  } = useSignMessage();
  const chainId = useChainId();

  const createSiweMessage = (address: string, statement: string) => {
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement,
      uri: window.location.origin,
      version: '1',
      chainId: chainId,
    });
    return message.prepareMessage();
  };

  useEffect(() => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkb2pvLWFwaSIsInN1YiI6IjB4OTk3QkRkMjM1MDcyQjU1NTc1QTFhMWI0ZEE4ODQxNUE5ZDc2QjUwNSIsImV4cCI6MTcxNDY1NzIyN30.JEJY_piKjZx_25uXecQHKZp2w2My7ljOJGglFQHD7kk')
  },[])

  const { workerLoginAuth } = useWorkerLoginAuth() as {
    workerLoginAuth: (payload: any) => Promise<WorkerLoginAuthResponse>;
    loading: boolean;
    error: string | null;
  };
  const postSignInWithEthereum = async (signature: string, message: any) => {
    console.log("This is the signature", signature);
    try {
      if (!address) {
        console.error("Wallet address is undefined");
        onClose?.();
        return;
      }
      // Create the payload
      const payload = {
        walletAddress: address,
        chainId: chainId.toString(),
        signature: signature,
        message: 'Hello World',
        timestamp: (Math.floor(Date.now() / 1000)).toString(),      };

      // Call the workerLoginAuth function with the payload
      const response = await workerLoginAuth(payload);
      if (response && response.success && response.body?.token) {
        localStorage.setItem('token', response.body.token);
        onSave?.();
      } else {
        throw new Error(response.error || 'Authentication failed');
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
    const msg = createSiweMessage(
      address,
      'Sign in with Ethereum to tensorplex',
    );
    await signMessage({ message: msg });
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
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature,
        });
        setRecoveredAddress(recoveredAddress);
        postSignInWithEthereum(signature, variables?.message);
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
