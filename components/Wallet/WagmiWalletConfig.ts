'use client';
import { createConfig, http } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygonMumbai, sepolia } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, base, sepolia, optimism, arbitrum, polygonMumbai],
  ssr: true,
  multiInjectedProviderDiscovery: true,
  connectors: [
    injected(),
    walletConnect({
      projectId: '5a2c221a8067443b3052d5cd9378d315',
      showQrModal: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [polygonMumbai.id]: http(),
  },
});
