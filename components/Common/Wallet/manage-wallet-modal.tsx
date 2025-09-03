'use client';

import { useSIWE } from '@/hooks/useSIWE';
import useSubstrateAuth from '@/hooks/useSubstrateAuth';
import { useAuth } from '@/providers/authContext';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { useState } from 'react';
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
  const { connectors, connectAsync, connect } = useConnect();
  const { connector, address, status, isConnected } = useAccount();
  const { signInWithEthereum } = useSIWE(() => {});
  const { isAuthenticated } = useAuth();
  const { signInWithSubstrate, loading: substrateLoading } = useSubstrateAuth();
  const chainId = useChainId();

  // NEW: State for Talisman account management
  const [talismanAccounts, setTalismanAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [showAccountSelection, setShowAccountSelection] = useState(false);
  const [authenticatingAccount, setAuthenticatingAccount] = useState<string | null>(null);

  const connectWalletHandler = async (connectorId: string) => {
    const connector = getConnectorById(connectors, connectorId);
    if (!connector) {
      console.error('Failed to find connector');
      return;
    }
    if (isConnected && address) {
      signInWithEthereum(address ?? '');
      return;
    }
    try {
      const { accounts } = await connectAsync({ connector, chainId });
      if (!accounts.length) {
        throw new Error('No accounts returned');
      } else {
        signInWithEthereum(accounts[0]);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
    }
  };
  // Talisman handler - direct extension approach
  const connectTalismanHandler = async () => {
    try {
      if (typeof window === 'undefined') {
        throw new Error('This function can only be called in the browser');
      }

      console.log('Connecting to Talisman wallet...');

      // Dynamic import for SSR compatibility
      const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp');

      const extensions = await web3Enable('Dojo UI');
      if (extensions.length === 0) {
        throw new Error('No Substrate wallet extension found. Please install Talisman.');
      }

      console.log('Extensions found:', extensions);
      const accounts: InjectedAccountWithMeta[] = await web3Accounts();
      if (accounts.length === 0) {
        throw new Error('No accounts found in Talisman. Please create an account first.');
      }

      console.log('Accounts found:', accounts);

      // Step 3: Store accounts and show selection UI
      setTalismanAccounts(accounts);
      setShowAccountSelection(true);
    } catch (error: any) {
      console.error('Error connecting Talisman wallet:', error);
      alert(`Failed to connect: ${error.message || 'Unknown error'}`);
    }
  };

  // NEW: Handle account selection with SIWS authentication
  const selectTalismanAccount = async (selectedAccount: InjectedAccountWithMeta) => {
    try {
      console.log('Selected account:', selectedAccount);

      // Set loading state for this account
      setAuthenticatingAccount(selectedAccount.address);

      // Start SIWS authentication
      console.log('Starting SIWS authentication...');
      await signInWithSubstrate(selectedAccount);

      // Success - user is now authenticated
      console.log('✅ Successfully authenticated with Substrate!');

      // Clear states and close modal
      setShowAccountSelection(false);
      setTalismanAccounts([]);
      setAuthenticatingAccount(null);
      onClose?.(); // Close the modal
    } catch (error: any) {
      console.error('Error during Substrate authentication:', error);
      alert(`Authentication failed: ${error.message}`);

      // Reset states on error
      setShowAccountSelection(false);
      setTalismanAccounts([]);
      setAuthenticatingAccount(null);
    }
  };

  return (
    <ModalContainer
      header={'MANAGE WALLET'}
      open={open}
      onSave={() => {
        onSave?.();
      }}
      onClose={() => {
        // Reset Talisman state when closing
        setShowAccountSelection(false);
        setTalismanAccounts([]);
        setAuthenticatingAccount(null);
        onClose?.();
      }}
      bodyClassName="p-0"
      className="w-[90%] sm:max-w-[420px]"
    >
      <div className="flex min-w-full max-w-[410px] flex-col">
        {status === 'connected' && connector && isAuthenticated && (
          <WalletConnectedCard connector={connector} address={address}></WalletConnectedCard>
        )}
        <div className="flex w-full flex-col p-2 pb-[31px]">
          {!showAccountSelection ? (
            // Regular wallet selection
            <>
              <span className={cn(FontSpaceMono.className, 'font-bold text-xs')}>CHOOSE WALLET</span>
              <div className="flex min-w-fit flex-wrap items-stretch gap-[10px] pt-[3px] sm:flex-nowrap">
                <WalletNetworkCard
                  // disabled={!getConnectorById(connectors, 'io.metamask') || status === 'connected' }
                  onClick={() => {
                    connectWalletHandler('io.metamask');
                  }}
                  logo="/wallet_logo/metamask_logo.svg"
                  Description="Metamask"
                ></WalletNetworkCard>
                <WalletNetworkCard
                  onClick={() => {
                    connectTalismanHandler();
                  }}
                  logo="/wallet_logo/talisman_logo.svg"
                  Description="Talisman"
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
            </>
          ) : (
            // NEW: Account selection UI
            <>
              <span className={cn(FontSpaceMono.className, 'font-bold text-xs')}>CHOOSE TALISMAN ACCOUNT</span>
              <div className="flex flex-col gap-2 pt-2">
                {talismanAccounts.map((account, index) => {
                  const isAuthenticating = authenticatingAccount === account.address;
                  return (
                    <div
                      key={account.address}
                      onClick={() => !isAuthenticating && selectTalismanAccount(account)}
                      className={`flex items-center justify-between rounded border border-gray-300 p-3 ${
                        isAuthenticating
                          ? 'cursor-not-allowed bg-gray-100 opacity-75'
                          : 'cursor-pointer hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className={cn(FontSpaceMono.className, 'font-bold text-sm')}>
                          {account.meta?.name || `Account ${index + 1}`}
                        </span>
                        <span className="text-xs text-gray-500">
                          {`${account.address.slice(0, 8)}...${account.address.slice(-8)}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isAuthenticating && (
                          <div className="size-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
                        )}
                        <span className="text-xs text-gray-400">
                          {isAuthenticating ? 'Authenticating...' : account.type || 'sr25519'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Back button */}
              <button
                onClick={() => {
                  setShowAccountSelection(false);
                  setTalismanAccounts([]);
                  setAuthenticatingAccount(null);
                }}
                className="mt-3 text-sm text-gray-500 hover:text-gray-700"
              >
                ← Back to wallet selection
              </button>
            </>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default ManageWalletConnectModal;
