'use client';
<<<<<<< HEAD
import Footer from '@/components/Footer';
import SubscriptionModal from '@/components/SubscriptionModal';
import UserCard from '@/components/UserCard';
import { config } from '@/components/Wallet/WagmiWalletConfig';
import Web3Icon from '@/components/Wallet/web3-icon';
import { CustomButton } from '@/components/utils/custom-button';
=======
import Footer from '@/components/Common/Footer';
import SubscriptionModal from '@/components/Common/SubscriptionModal';
import UserCard from '@/components/Common/UserCard';
import { config } from '@/components/Common/Wallet/WagmiWalletConfig';
import Web3Icon from '@/components/Common/Wallet/web3-icon';
import { CustomButton } from '@/components/CustomButton';
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import { useModal } from '@/hooks/useModal';
import ModalProvider from '@/providers/modals';
import { MODAL } from '@/types/ProvidersTypes';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCopy, IconExternalLink } from '@tabler/icons-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';
import { WagmiProvider, useAccount } from 'wagmi';
import NavigationBar from '../components/Common/NavigationBar';

type LayoutProps = {
  children: ReactNode;
  showFooter?: boolean;
  isFullWidth?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true, isFullWidth = false }) => {
  const queryClient = new QueryClient();
  const { openModal } = useModal(MODAL.wallet);
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
<<<<<<< HEAD

  const { address, status } = useAccount();
=======
  const { address } = useAccount();
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)

  const handleViewClick = () => {
    setShowUserCard(false);
    setIsModalVisible(true);
  };

  const walletManagementHandler = () => {
    openModal();
    setShowUserCard(false);
  };

  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');

  return (
    <div className="min-h-screen bg-primaryBG-bg text-black">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div className="border-b-2 border-black bg-ecru-white text-white">
              <NavigationBar openModal={() => setShowUserCard(true)} />
            </div>
            <main className={`${!isFullWidth && 'max-w-[1075px]'} mx-auto`}>{children}</main>
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
                        <Web3Icon size={20} address={address ?? ''}></Web3Icon>
                        {getFirstFourLastFour(address ?? '')}
                      </span>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="flex items-center justify-start gap-[20px] pl-5">
                    <CustomButton onClick={handleCopy} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
=======

                  <div className="flex items-center justify-start gap-[20px] pl-5">
                    <CustomButton onClick={handleCopy} className="h-fit p-0 font-bold text-darkGreen" variant={'link'}>
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)
                      <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
                      <IconCopy className="h-4 w-4" />
                    </CustomButton>
                    <CustomButton
                      onClick={handleEtherscan}
                      className="h-fit p-0 font-bold text-darkGreen"
                      variant={'link'}
                    >
                      <span className="mr-[3px] text-xs underline underline-offset-2">VIEW ON ETHERSCAN</span>{' '}
                      <IconExternalLink className="h-4 w-4" />
                    </CustomButton>
                  </div>
                </div>
                <div className="flex  w-full items-center justify-between border-b-2 p-4 text-sm">
                  <h1 className={`${FontSpaceMono.className} font-bold uppercase`}>Subscription Keys</h1>

                  <button
                    className={`${FontSpaceMono.className} font-bold text-darkGreen underline`}
                    onClick={handleViewClick}
                  >
                    VIEW
                  </button>
                </div>
                <div className=" w-full px-4 py-5">
                  <button
                    onClick={walletManagementHandler}
                    className={` focus-visible:ring-ring inline-flex h-[40px] w-full items-center justify-center whitespace-nowrap rounded-none border-2 border-black bg-primary px-4 py-2 text-xs text-white ring-offset-background transition-colors hover:cursor-pointer hover:bg-opacity-75 hover:shadow-brut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none md:text-sm ${FontSpaceMono.className} text-base font-bold uppercase`}
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
