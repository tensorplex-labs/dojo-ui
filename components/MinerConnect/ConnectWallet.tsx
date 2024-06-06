import { Button } from '@/components/Button';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { useState } from 'react';
type Props = {
  onAccounts: (accounts: InjectedAccountWithMeta[]) => void;
};

export const ConnectWallet: React.FC<Props> = ({ onAccounts }) => {
  const [connecting, setConnecting] = useState(false);

  const handleConnectWallet = async () => {
    setConnecting(true);
    const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp');
    try {
      const extensions = await web3Enable('Sign-In with Substrate Demo');
      if (extensions.length === 0) {
        onAccounts([]);
      } else {
        const accounts = await web3Accounts();
        console.log('it"s set', accounts);
        onAccounts(accounts);
      }
    } catch (e) {
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Button
      buttonText={connecting ? 'Connecting wallet...' : 'Connect Wallet'}
      onClick={handleConnectWallet}
      disabled={connecting}
      className="w-fit text-white"
    />
  );
};
