'use client'
import React, { ReactNode, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import YieldInput from "@/components/YieldInput";
import Slider from "@/components/Slider";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalProvider, { MODAL } from '@/providers/modals';
import { config } from "@/components/Wallet/WagmiWalletConfig";
import UserCard from "@/components/UserCard";
import TPLXWeb3Icon from "@/components/Wallet/tplx-web3-icon";
import { getFirstFourLastFour } from "@/utils/math_helpers";
import { TPLXButton } from "@/components/TPLXButton";
import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import Modal from "@/components/Modal";
import LabelledInput from "@/components/LabelledInput";
import SubscriptionTable from "@/components/SubscriptionTable";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useEtherScanOpen } from "@/hooks/useEtherScanOpen";
import { useModal } from "@/hooks/useModal";
import { usePartnerList } from "@/hooks/usePartnerList";
import SubscriptionModal from "@/components/SubscriptionModal";


type LayoutProps = {
  children: ReactNode;
  showFooter?: boolean;
};


const Layout: React.FC<LayoutProps> = ({ children, showFooter= true }) => {
  const queryClient = new QueryClient();
  const { openModal } = useModal(MODAL.wallet);
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

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
  }

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
    <div className="bg-[#FFFFF4] min-h-screen text-black">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div className="bg-[#F6F6E6] border-b-2 border-black text-white">
            <NavigationBar openModal={()=>setShowUserCard(true)}/>
            </div>
            <main className="max-w-[1075px] mx-auto">{children}</main>
            {showFooter && <hr className=" border-black" />}
            {showUserCard && (
      <UserCard closeModal={setShowUserCard}>
        <div className="flex flex-col gap-[5px] w-full p-5  py-3.5 border-b-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start gap-[5px]">
              <img
                className="w-5 aspect-square"
                alt="i"
                src={"/wallet_logo/metamask_logo.svg"}
              ></img>
              <p className={`${FontManrope.className} font-bold`}>Metamask</p>
            </div>
            <div className=" inline-flex gap-2" onClick={walletManagementHandler}>
              <span className={`${FontManrope.className} gap-2 w-fit hover:cursor-pointer hover:bg-muted p-[10px] rounded-full overflow-hidden flex justify-start items-center text-black `}>
              <TPLXWeb3Icon size={20} address={address ?? ''}></TPLXWeb3Icon>
                {getFirstFourLastFour(address ?? '')}
              </span>
            </div>
          </div>
          <div className={`flex items-center gap-[5px] pl-5 ${FontManrope.className} font-bold text-sm text-opacity-75`}>
            4.332stTAO
          </div>
          <div className="flex items-center justify-start pl-5 gap-[20px]">
            <TPLXButton
              onClick={handleCopy}
              className="text-[#24837B] p-0 h-fit font-bold"
              variant={'link'}
            >
              <span className=" text-xs mr-[3px] underline-offset-2 underline">
                COPY ADDRESS
              </span>{' '}
              <IconCopy className="w-4 h-4" />
            </TPLXButton>
            <TPLXButton
              onClick={handleEtherscan}
              className="text-[#24837B] p-0 h-fit font-bold"
              variant={'link'}
            >
              <span className="text-xs mr-[3px] underline-offset-2 underline">
                VIEW ON ETHERSCAN
              </span>{' '}
              <IconExternalLink className="w-4 h-4" />
            </TPLXButton>
          </div>
        </div>
        <div className="text-sm  flex justify-between w-full items-center p-4 border-b-2">
          <h1 className={`${FontSpaceMono.className} font-bold uppercase`}>Subscription Keys</h1>
        
          <button className={`${FontSpaceMono.className} text-[#24837B] underline font-bold`} onClick={handleViewClick}>VIEW</button>
          
        </div>
        <div className=" w-full px-4 py-5">
          <button
            onClick={() => console.log('clicked')}
            className={` text-white hover:shadow-brut-sm hover:cursor-pointer hover:bg-opacity-75 inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none px-4 py-2 text-xs md:text-sm rounded-none border-2 border-black h-[40px] w-full bg-[#00B6A6] ${FontSpaceMono.className} font-bold text-base uppercase`}
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