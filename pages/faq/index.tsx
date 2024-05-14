import React, { useEffect, useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { Button } from '@/components/Button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from '@/utils/tw';
import { InputField } from '@/components/Fields/InputField';
import TPLXModalContainer from '@/components/ModalContainer';
import { useSubmitApplication } from '@/hooks/useSubmitApplicationByMiner';
import { QueryClient } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import { MODAL } from '@/providers/modals';
import { usePartnerList } from '@/hooks/usePartnerList';
import { useAccount } from 'wagmi';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import UserCard from '@/components/UserCard';
import TPLXWeb3Icon from '@/components/Wallet/tplx-web3-icon';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { TPLXButton, buttonVariants } from '@/components/TPLXButton';
import { IconCopy, IconExternalLink, IconLoader } from '@tabler/icons-react';
import Modal from '@/components/Modal';
import LabelledInput from '@/components/LabelledInput';
import SubscriptionTable from '@/components/SubscriptionTable';
import { DefaultApiResponse } from '@/utils/model';
import SubscriptionModal from '@/components/SubscriptionModal';
import TPLXAccordion from '@/components/TPLX/tplx-accordian';
import { faqList } from '@/data';
import { brutCardVariants } from '@/components/BrutCard';
import Link from 'next/link';

const FormSchema = z.object({
  hotkey: z.string().min(1, {
    message: "Invalid Hotkey. Please input a valid Hotkey.",
  }),
  email: z.string()
    .min(1, { message: "Missing Email. Please input an email" })
    .email({
      message: "Invalid Email. Please input a correct email format."
    }),
  organizationalKey: z.string()
})

const successMessage = "We are currently reviewing your application. Once approved, we will send you a miner API key and subscription key via the email you provided."

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hotkey: "",
      organizationalKey: "",
      email: "",
    },
  });
  const { submitApplication, response, isLoading } = useSubmitApplication();
  const { openModal } = useModal(MODAL.wallet);
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [modalHeader, setModalHeader] = useState('');
  const { address, status } = useAccount();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

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

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  // TODO: Refactor with proper type and hook
  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    setIsLoadingSubmit(true);
    await submitApplication({
      hotkey: formData.hotkey,
      organisationName: formData.organizationalKey, // Note the API expects "organisationName"
      email: formData.email
    });
    setIsLoadingSubmit(false);
  };

  const handleFormMessage = () => {

  }

  useEffect(() => {
    if (!response) return; // response is initially null, and we don't want to do anything

    if (response.success) {
      reset();
      setModalHeader("Application Completed");
      setModalMessage("Please check your email for the miner API key and worker subscription key.");
    } else {
      setModalHeader("Application Failed")
      setModalMessage(response?.message || 'Application failed');
    }
    setOpen(true);
    setIsLoadingSubmit(false);
  }, [response, reset]);

  const handleOnClose = () => {
    setOpen(false);
    setModalMessage("");
  }

  return (
    <div className="bg-background text-black h-full">

      <div>
        <div className="bg-background-accent h-[320px] border-b-2 border-black">
          <NavigationBar openModal={() => setShowUserCard(true)} />
          <h1 className={`${FontSpaceMono.className} text-font-primary tracking-wide text-4xl mt-9 mb-4 text-black font-bold text-center`}
          >
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>

        <div className="relative mt-[-116px] mx-auto w-[1075px] bg-[#DBF5E9] h-[177px] flex border-2 border-black self-center shadow-brut-sm justify-between">
          <div className="pl-[29px] pt-[21px]">
            <h1
              className={`${FontManrope.className} text-lg font-extrabold text-black`}
            >
              {`Not what you're looking for?`}
            </h1>
            <p
              className={`${FontManrope.className} text-base text-black mt-3 font-medium`}
            >
              Dojo is a decentralized platform that leverages the collective power of human insights to train AI models.
            </p>
            <div className="mt-3">
              {/* <Button
                buttonText="twitter"
                className="mr-[20px] text-white"
              // onClick={toggleDemo} // Attach the toggle function to the onClick event
              /> */}
                          <Link
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/TensorplexLabs"
              className={cn(buttonVariants(), 'mr-[20px] text-white font-bold capitalize hover:shadow-brut-sm')}
            >
              Twitter
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/invite/zVZbRdt6U4"
              className={cn(buttonVariants(), 'mr-[20px] text-white font-bold capitalize hover:shadow-brut-sm')}
            >
              Discord
            </Link>
            </div>

          </div></div>
        <div className='mt-[18px] w-[1075px] mx-auto flex'>
          <div
            className={cn(
              brutCardVariants(),
              'divide-y-[1px] divide-font-primary p-0',
            )}
          >

            {faqList.map((faq, idx) => (
              <TPLXAccordion key={idx} title={faq.title}>
                {/* <div className="text-gray-500">
                  {faq.content}</div> */}
                  <div
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: faq.content }}
              />
              </TPLXAccordion>
            ))}
          </div>
        </div>
        <TPLXModalContainer className={'w-[512px] h-[206px]'} headerClassName={'h-12 pl-4'} bodyClassName="p-0"
          header={modalHeader} open={open} onClose={() => handleOnClose()} onSave={() => handleOnClose()}>
          <div
            className={cn(`${FontManrope.className} py-4 px-6 border-b-2 border-black bg-accent opacity-60 text-[16px] leading-[120%] h-[88px] flex items-center`)}>
            <span>{modalMessage}</span>
          </div>
          <div className={'text-right p-1 w-[100%] h-[100%]'}>
            <Button className={cn('w-[85px] h-[39px] mt-2 mr-4 hover:shadow-brut-sm text-[16px] text-white')}
              buttonText={"CLOSE"} onClick={() => handleOnClose()} />
          </div>
        </TPLXModalContainer>
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
                onClick={walletManagementHandler}
                className={` text-white hover:shadow-brut-sm hover:cursor-pointer hover:bg-opacity-75 inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none px-4 py-2 text-xs md:text-sm rounded-none border-2 border-black h-[40px] w-full bg-[#00B6A6] ${FontSpaceMono.className} font-bold text-base uppercase`}
              >
                Manage Wallet
              </button>
            </div>
          </UserCard>
        )}
        {isModalVisible && (<SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />)}
      </div>
    </div>
  );
};

export default Page;