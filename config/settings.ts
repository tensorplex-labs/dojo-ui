export interface ChainInfo {
  chainName: string;
}
export const chainInfo: Record<number, ChainInfo> = {
  1: {
    chainName: 'Ethereum',
  },
  10: {
    chainName: 'Optimism',
  },
  42161: {
    chainName: 'Arbitrum',
  },
  8453: {
    chainName: 'Base',
  },
};

export const bridgeProgressUrl: Record<string, string> = {
  ccipMsgId: 'https://ccip.chain.link/msg/__target__',
  ccipTxnHash: 'https://ccip.chain.link/tx/__target__',
  ccipFallback: 'https://ccip.chain.link/',
};

export const settings: any = {
  '31337': {
    wstTAO: '0x2d725f4b726F870484914582db6565b85Cd14cBe',
    wtao: '0xCebB1A1CBA901E0D7464aD76200d45eCE28c0246',
    // MOCK
    ccipRouterAddress: '0xCebB1A1CBA901E0D7464aD76200d45eCE28c0246',
    rpcUrl: '',
  },
  '1': {
    wstTAO: '0xb60acd2057067dc9ed8c083f5aa227a244044fd6',
    wtao: '0x77E06c9eCCf2E797fd462A92B6D7642EF85b0A44',
    ccipRouterAddress: '0x80226fc0Ee2b096224EeAc085Bb9a8cba1146f7D',
    rpcUrl: 'https://eth.llamarpc.com',
  },
  '5': {
    wstTAO: '0x61154248C3Aa26D5f519396b2b1993C6E4135f96',
    wtao: '0xC46A04B1a59a0cBC06BEb8809fF63d59bA431e8f',
    // MOCK
    ccipRouterAddress: '0xCebB1A1CBA901E0D7464aD76200d45eCE28c0246',
    rpcUrl: '',
  },
  '10': {
    wstTAO: '0x2d725f4b726F870484914582db6565b85Cd14cBe',
    wtao: '',
    ccipRouterAddress: '0x3206695CaE29952f4b0c22a169725a865bc8Ce0f',
    rpcUrl: 'https://optimism-mainnet.public.blastapi.io',
  },
  '42161': {
    wstTAO: '0x2d725f4b726F870484914582db6565b85Cd14cBe',
    wtao: '',
    ccipRouterAddress: '0x141fa059441E0ca23ce184B6A78bafD2A517DdE8',
    rpcUrl: 'https://arbitrum-one.public.blastapi.io',
  },
  '8453': {
    wstTAO: '0x806041B6473DA60abbe1b256d9A2749A151be6C6',
    wtao: '',
    ccipRouterAddress: '0x881e3A65B4d4a04dD529061dd0071cf975F58bCD',
    rpcUrl: 'https://base-mainnet.public.blastapi.io',
  },
  '80001': {
    wstTAO: '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05',
    wtao: '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05',
    ccipRouterAddress: '0x1035CabC275068e0F4b745A29CEDf38E13aF41b1',
    rpcUrl: 'https://polygon-testnet.public.blastapi.io',
  },
  '11155111': {
    // Sepolia
    wstTAO: '0x5D2111E463a92c76D9B7eA2b0be056ab2290a9bb',
    wtao: '0x0C66B6884484EECa94CFFee7A432ae3Ea0A70ce1',
    ccipRouterAddress: '0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59',
    rpcUrl: 'https://eth-sepolia.public.blastapi.io',
  },
};

const rpcSettings: any = {
  '80001': {
    etherscanUrl: 'https://mumbai.polygonscan.com',
  },
  '31337': {
    etherscanUrl: 'https://fakeetherscan.io',
  },
  '11155111': {
    etherscanUrl: 'https://sepolia.etherscan.io',
  },
  '1': {
    etherscanUrl: 'https://etherscan.io',
  },
  '5': {
    etherscanUrl: 'https://etherscan.io',
  },
  '8453': {
    etherscanUrl: 'https://basescan.org',
  },
  '10': {
    etherscanUrl: 'https://optimistic.etherscan.io',
  },
  '42161': {
    etherscanUrl: 'https://arbiscan.io',
  },
};

const getChainIds = () => {
  return Object.keys(settings);
};

const isValidChainId = (chainId: string) => {
  const chainIds = getChainIds();
  return chainIds.includes(chainId);
};

export const getBridgeProgressUrl = (bridge: string, identifier: string) => {
  if (bridge in bridgeProgressUrl) return bridgeProgressUrl[bridge].replace('__target__', identifier);
};

export { getChainIds, isValidChainId, rpcSettings };
export default settings;
