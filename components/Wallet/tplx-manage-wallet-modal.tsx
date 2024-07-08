'use client';

import { useAuth } from '@/providers/authContext';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { Connector, useAccount, useChainId, useConnect } from 'wagmi';
import TPLXModalContainer from '../ModalContainer';
import TPLXLWalletConnectedCard from './tplx-wallet-connected-card';
import TPLXWalletNetworkCard from './tplx-walletnetwork-card';
interface Props {
  open: boolean;
  onSave?: () => void;
  onClose?: () => void;
}

const getConnectorById = (connectors: readonly Connector[], connectorId: string) => {
  return connectors.find((connector) => connector.id === connectorId);
};

const allowedNetwork: number[] = [1, 42161, 10, 8453];

const TPLXManageWalletConnectModal = ({ open, onSave, onClose, ...props }: Props) => {
  const { connectors, connectAsync } = useConnect();
  const { connector, address, status } = useAccount();
  const { setIsSignedIn } = useAuth();
  // const { workerLoginAuth } = useWorkerLoginAuth();
  const { isAuthenticated } = useAuth();
  const chainId = useChainId();

  const connectWalletHandler = async (connectorId: string) => {
    setIsSignedIn(true);
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
      <div className="flex w-[400px] flex-col">
        {status === 'connected' && connector && isAuthenticated && (
          <TPLXLWalletConnectedCard connector={connector} address={address}></TPLXLWalletConnectedCard>
        )}
        <div className="flex flex-col p-2 pb-[31px]">
          <span className={cn(FontSpaceMono.className, 'font-bold text-xs')}>CHOOSE WALLET</span>
          <div className="grid grid-cols-3 gap-[10px] pt-[3px]">
            <TPLXWalletNetworkCard
              // disabled={!getConnectorById(connectors, 'io.metamask') || status === 'connected' }
              onClick={() => {
                connectWalletHandler('io.metamask');
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
              disabled={!getConnectorById(connectors, 'io.rabby') || status === 'connected'}
              onClick={() => {
                connectWalletHandler('io.rabby');
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
