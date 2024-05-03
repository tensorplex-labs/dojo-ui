'use client'
import React, { ReactNode, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import YieldInput from "@/components/YieldInput";
import Slider from "@/components/Slider";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { WagmiProvider } from "wagmi";
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


type LayoutProps = {
  children: ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient();
  const { openModal } = useModal(MODAL.wallet);
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const subscriptionsData = [
  // This data would come from your state or props
  { name: 'Miner 1', subscriptionKey: 'sk-xxxxxx...xxxxxx', created: '2023-04-01' },
  { name: 'Miner 1', subscriptionKey: 'sk-xxxxxx...xxxxxx', created: '2023-04-02' },
  // ... more data
];


  // Define the handler functions
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');
  const handleViewClick = () => {
    setIsModalVisible(true);
  };

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };


  return (
    <div className="bg-[#FFFFF4] text-black">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div className="bg-[#F6F6E6] border-b-2 border-black text-white font-bold">
              <NavigationBar openModal={openModal}/>
            </div>
            <main className="max-w-[1075px] mx-auto">{children}</main>
            <hr className=" border-black"/>
            {showUserCard && (
      <UserCard closeModal={() => setShowUserCard(false)}>
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
            <div className=" inline-flex gap-2" onClick={openModal}>
              <TPLXWeb3Icon size={20} address={address ?? ''}></TPLXWeb3Icon>
              <span className={FontManrope.className}>
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
        <Modal
          showModal={isModalVisible}
          setShowModal={setIsModalVisible}
          title="SUBSCRIPTION KEYS"
          btnText="Close"
        >
          <div className='bg-[#DBF5E9] w-full px-[22px] py-[15px] text-black'>
            <div>
              <h1 className={`${FontSpaceMono.className} font-bold text-base`}>ENTER SUBSCRIPTION KEY</h1>
              <h2 className={`${FontManrope.className} font-medium text-base opacity-60`}>Obtain subscription key from miners</h2>
            </div>
            <div className={` flex-row`}>
              <div className="flex flex-row justify-between">
                <div className="flex mr-2">
                  <LabelledInput
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    value={inputValue1}
                    onChange={handleInputChange1}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <LabelledInput
                    id="subscriptionKey"
                    label="SUBSCRIPTION KEY"
                    type="text"
                    placeholder="Enter Subscription Key Here"
                    value={inputValue2}
                    onChange={handleInputChange2}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className=" px-[18px] py-[10px] text-base h-auto bg-[#00B6A6] font-spacemono text-white border-2 border-black uppercase cursor-pointer hover:shadow-brut-sm font-bold hover:bg-opacity-80 active:border-b-2"
                  >
                  Create
                </button>
              </div>
            </div>
          </div>
          <SubscriptionTable data={subscriptionsData} />
        </Modal>
      )}
            <Footer />
          </ModalProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};

export default Layout;