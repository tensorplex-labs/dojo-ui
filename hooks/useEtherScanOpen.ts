import { rpcSettings } from '@/config/settings';
import { useChainId } from 'wagmi';

export const useEtherScanOpen = (address: string, type: 'transaction' | 'address') => {
  const chainId = useChainId();
  const foundRPC = rpcSettings[chainId.toString()];
  const { etherscanUrl } = foundRPC;
  const etherscanLink = `${etherscanUrl}/${type === 'transaction' ? 'tx' : 'address'}/${address}`;
  return () => {
    window.open(etherscanLink);
  };
};
