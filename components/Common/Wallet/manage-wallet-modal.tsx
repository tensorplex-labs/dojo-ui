'use client';

import { useAuth } from '@/providers/authContext';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { Connector, useAccount, useChainId, useConnect } from 'wagmi';
import ModalContainer from '../Modal/ModalContainer';
import WalletConnectedCard from './wallet-connected-card';
import WalletNetworkCard from './walletnetwork-card';
interface Props {
  open: boolean;
  onSave?: () => void;
  onClose?: () => void;
}

const getConnectorById = (connectors: readonly Connector[], connectorId: string) => {
  return connectors.find((connector) => connector.id === connectorId);
};

const allowedNetwork: number[] = [1, 42161, 10, 8453];

const ManageWalletConnectModal = ({ open, onSave, onClose, ...props }: Props) => {
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
    <ModalContainer
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
      bodyClassName="p-0 border-2 border-gray-200 rounded-lg"
    >
      <div className="flex w-full max-w-[400px] flex-col">
        {status === 'connected' && connector && isAuthenticated && (
          <WalletConnectedCard connector={connector} address={address}></WalletConnectedCard>
        )}
        <div className="flex flex-col p-2 sm:p-4 pb-[31px] ">
          <span className={cn(FontSpaceMono.className, 'font-bold text-xs sm:text-sm')}>CHOOSE WALLET</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-[10px] pt-[3px]">
            <WalletNetworkCard
              onClick={() => {
                connectWalletHandler('io.metamask');
              }}
              logo="/wallet_logo/metamask_logo.svg"
              Description="Metamask"
            ></WalletNetworkCard>
            <WalletNetworkCard
              disabled={true}
              logo="/wallet_logo/walletconnect_blue_logo.svg"
              Description="WalletConnect"
            ></WalletNetworkCard>
            <WalletNetworkCard
              disabled={!getConnectorById(connectors, 'io.rabby') || status === 'connected'}
              onClick={() => {
                connectWalletHandler('io.rabby');
              }}
              logo="/wallet_logo/rabbywallet_logo.svg"
              Description="Rabby"
            ></WalletNetworkCard>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ManageWalletConnectModal;
