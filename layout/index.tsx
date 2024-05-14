/* eslint-disable tailwindcss/migration-from-tailwind-2 */
'use client';
import Footer from '@/components/Footer';
import SubscriptionModal from '@/components/SubscriptionModal';
import { TPLXButton } from '@/components/TPLXButton';
import UserCard from '@/components/UserCard';
import TPLXWeb3Icon from '@/components/Wallet/tplx-web3-icon';
import { config } from '@/components/Wallet/WagmiWalletConfig';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import { useModal } from '@/hooks/useModal';
import ModalProvider, { MODAL } from '@/providers/modals';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCopy, IconExternalLink } from '@tabler/icons-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';
import { WagmiProvider, useAccount } from 'wagmi';
import NavigationBar from '../components/NavigationBar';

type LayoutProps = {
  children: ReactNode;
  showFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  const queryClient = new QueryClient();
  const { openModal } = useModal(MODAL.wallet);
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const { address, status } = useAccount();

  const subscriptionsData = [
    // This data would come from your state or props
    { name: 'Miner 1', subscriptionKey: 'sk-xxxxxx...xxxxxx', created: '2023-04-01' },
    { name: 'Miner 1', subscriptionKey: 'sk-xxxxxx...xxxxxx', created: '2023-04-02' },
    // ... more data
  ];

  const handleViewClick = () => {
    // Logic to close Wallet & API (if any)
    // For example, if you have a function to close the wallet, call it here
    // closeWallet();
    setShowUserCard(false);
    // Set showDemo to true to bring up the demo
    setIsModalVisible(true);
  };

  const walletManagementHandler = () => {
    openModal();
    setShowUserCard(false);
  };

  // Define the handler functions
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };
  const handleSubmit = () => {
    // API submission logic here
  };

  return (
    <div className="min-h-screen bg-[#FFFFF4] text-black">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div className="border-b-2 border-black bg-[#F6F6E6] text-white">
              <NavigationBar openModal={() => setShowUserCard(true)} />
            </div>
            <main className="mx-auto max-w-[1075px]">{children}</main>
            {showFooter && <hr className=" border-black" />}
            {showUserCard && (
              <UserCard closeModal={setShowUserCard}>
                <div className="flex w-full flex-col gap-[5px] border-b-2  p-5 py-3.5">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-start gap-[5px]">
                      <img className="aspect-square w-5" alt="i" src={'/wallet_logo/metamask_logo.svg'}></img>
                      <p className={`${FontManrope.className} font-bold`}>Metamask</p>
                    </div>
                    <div className=" inline-flex gap-2" onClick={walletManagementHandler}>
                      <span
                        className={`${FontManrope.className} flex w-fit items-center justify-start gap-2 overflow-hidden rounded-full p-[10px] text-black hover:cursor-pointer hover:bg-muted `}
                      >
                        <TPLXWeb3Icon size={20} address={address ?? ''}></TPLXWeb3Icon>
                        {getFirstFourLastFour(address ?? '')}
                      </span>
                    </div>
                  </div>
                  {/* <div className={`flex items-center gap-[5px] pl-5 ${FontManrope.className} font-bold text-sm text-opacity-75`}>
            4.332stTAO
          </div> */}
                  <div className="flex items-center justify-start gap-[20px] pl-5">
                    <TPLXButton onClick={handleCopy} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                      <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
                      <IconCopy className="size-4" />
                    </TPLXButton>
                    <TPLXButton
                      onClick={handleEtherscan}
                      className="h-fit p-0 font-bold text-[#24837B]"
                      variant={'link'}
                    >
                      <span className="mr-[3px] text-xs underline underline-offset-2">VIEW ON ETHERSCAN</span>{' '}
                      <IconExternalLink className="size-4" />
                    </TPLXButton>
                  </div>
                </div>
                <div className="flex  w-full items-center justify-between border-b-2 p-4 text-sm">
                  <h1 className={`${FontSpaceMono.className} font-bold uppercase`}>Subscription Keys</h1>

                  <button
                    className={`${FontSpaceMono.className} font-bold text-[#24837B] underline`}
                    onClick={handleViewClick}
                  >
                    VIEW
                  </button>
                </div>
                <div className=" w-full px-4 py-5">
                  <button
                    onClick={walletManagementHandler}
                    className={` focus-visible:ring-ring inline-flex h-[40px] w-full items-center justify-center whitespace-nowrap rounded-none border-2 border-black bg-[#00B6A6] px-4 py-2 text-xs text-white ring-offset-background transition-colors hover:cursor-pointer hover:bg-opacity-75 hover:shadow-brut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none md:text-sm ${FontSpaceMono.className} text-base font-bold uppercase`}
                  >
                    Manage Wallet
                  </button>
                </div>
              </UserCard>
            )}
            {isModalVisible && (
              <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />
            )}
            {showFooter && <Footer />}
          </ModalProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};

export default Layout;
