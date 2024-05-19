import React, { useCallback, useEffect, useState } from 'react';
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
import { TPLXButton } from '@/components/TPLXButton';
import { IconChevronDown, IconCopy, IconExternalLink, IconLoader } from '@tabler/icons-react';
import Modal from '@/components/Modal';
import LabelledInput from '@/components/LabelledInput';
import SubscriptionTable from '@/components/SubscriptionTable';
import { DefaultApiResponse } from '@/utils/model';
import SubscriptionModal from '@/components/SubscriptionModal';
import { Demo } from '@/components/demo';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ConnectWallet } from '@/components/demo/ConnectWallet';
import { Profile } from '@/components/demo/Profile';
import { SignIn } from '@/components/demo/SignIn';
import { AvatarIcon } from '@radix-ui/react-icons';
import { DropdownContainer } from '@/components/DropDown';
import { Address, SiwsMessage } from "@talismn/siws"
import { useRouter } from 'next/router';

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
  interface SignedData {
    signature: string;
    message: string;
  }

const successMessage = "We are currently reviewing your application. Once approved, we will send you a miner API key and subscription key via the email you provided."

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hotkey: "",
      organizationalKey: "",
      email: "",
    }
  });

  const {
    register: register2,
    setValue: setValue2,
    getValues: getValues2,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      apiKey: "",
      subscriptionKey: ""
    }
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
  const [signedInWith, setSignedInWith] = useState<InjectedAccountWithMeta | undefined>()
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[] | undefined>()
  const [jwtToken, setJwtToken] = useState<string | undefined>()
  const [subscribed, setSubscribed] = useState(false)
  const [showSucceedScreen, setShowSucceedScreen] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | undefined>(
    // accounts?.length === 1 ? accounts[0] : undefined
  )
  const [signedData, setSignedData] = useState<SignedData>({
    signature: '',
    message: '',
  });  const [signingIn, setSigningIn] = useState(false)
  const handleSignedIn = (selectedAccount: InjectedAccountWithMeta, jwtToken: string) => {
    setJwtToken(jwtToken)
    setSignedInWith(selectedAccount)
  }

  const handleSignOut = useCallback(() => {
    setSignedInWith(undefined)
    setJwtToken(undefined)
  }, [])

  // subscribe to extension changes after first connect
  const subscribeToExtensions = useCallback(async () => {
    if (accounts === undefined || subscribed) return
    const { web3AccountsSubscribe } = await import("@polkadot/extension-dapp")

    setSubscribed(true)
    web3AccountsSubscribe((newAccounts) => {
      // // dont update if newAccounts is same as accounts
      // const newAddresses = newAccounts.map((account) => account.address).join("")
      // const oldAddresses = accounts.map((account) => account.address).join("")
      // if (newAddresses === oldAddresses) return
      // // update accounts list
      setAccounts(newAccounts)
    })
  }, [accounts, subscribed])

  useEffect(() => {
    subscribeToExtensions()
  }, [subscribeToExtensions])

  // auto sign out disconnected extensions
  useEffect(() => {
    if (
      signedInWith?.address &&
      accounts &&
      !accounts.find((account) => account.address === signedInWith?.address)
    )
      handleSignOut()
  }, [accounts, handleSignOut, signedInWith?.address])

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
const router = useRouter();

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false)

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
      email: formData.email,
      signature: signedData.signature,
      message: signedData.message,

    });
    setIsLoadingSubmit(false);
  };

  const handleFormMessage = () => {

  }
  const SIWS_DOMAIN = "siws.xyz"

  const handleSignIn = async (account: InjectedAccountWithMeta) => {
    try {
      // dismiss()
      if (!account) throw new Error("No account selected!")

      const address = Address.fromSs58(account.address ?? "")

      console.log(address)
      if (!address)
        // return toast({
        //   title: "Invalid address",
        //   description: "Your address is not a valid Substrate address.",
        // })

      setSigningIn(true)
      // request nonce from server
      // TODO use the fetchNonce method
      const nonceRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/${account.address}`);
      const data = await nonceRes.json();
      const { nonce } = data["body"];

      const siwsMessage = new SiwsMessage({
        domain: window.location.host,
        uri: window.location.origin,
        // use prefix of chain your dapp is on:
        // address: address.toSs58(0),
        address: account.address,
        nonce,
        statement: "Welcome to SIWS! Sign in to see how it works.",
        chainName: "Substrate",
        // expires in 2 mins
        expirationTime: new Date().getTime() + 2 * 60 * 1000,
        // azeroId: resolve(address.toSs58())?.a0id,
      })

      const { web3FromSource } = await import("@polkadot/extension-dapp")
      const injectedExtension = await web3FromSource(account.meta.source)
      const signed = await siwsMessage.sign(injectedExtension)
      setValue('hotkey', account.address)
      // console.log("signed", JSON.stringify(signed))
      setSignedData(signed);
      console.log("signed", JSON.stringify(signed))
    } catch (e: any) {
      // toast({
      //   title: "Uh oh! Couldn't sign in.",
      //   description: e?.message ?? "An error occurred",
      //   variant: "destructive",
      //   action: (
      //     <ToastAction altText="Try Again" onClick={handleSignIn}>
      //       Try Again
      //     </ToastAction>
      //   ),
      // })
    } finally {
      setSigningIn(false)
    }
  }


  useEffect(() => {
    if (!response) return; // response is initially null, and we don't want to do anything
    if (response.success) {
      reset();
      setShowSucceedScreen(true);
      setModalHeader("Application Completed");
      setModalMessage("Please check your email for the miner API key and worker subscription key.");
      setValue2('apiKey', response.body.apiKey);
      setValue2('subscriptionKey', response.body.subscriptionKey);
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

  const popupHandler = ({ account }: { account: InjectedAccountWithMeta }) => {
    console.log('called')
    setSelectedAccount(account);
    setIsOpen(false);
    setValue('hotkey', '');
    handleSignIn(account);
    handleFormMessage();
  }


  return (
    <div className="bg-background text-black h-full">

      <div>
        <div className=" border-black">
          <NavigationBar openModal={() => setShowUserCard(true)} />
          {isLoadingSubmit ? (
            <div className="flex justify-center items-center mt-3">
              <p><span className='animate-spin inline-flex text-center'><IconLoader /></span> Processing. Please wait ...</p>
            </div>
          ) : (
          <div className={cn(`${FontSpaceMono.className} flex flex-col justify-center mt-10 w-[593px] border-2 border-black mx-auto shadow-brut-sm mb-5`)}>
            {!showSucceedScreen ? (
              <>
            <div className="flex flex-col px-5 py-2 border-b-2 border-black bg-[#F8F8F8]">
              <h1 className={`${FontSpaceMono.className} text-font-primary tracking-wide text-black font-bold text-xl`}>MINER APPLICATION </h1>
              <p className={`${FontManrope.className} text-base font-medium opacity-60`}>Connect and verify your bittensor wallet to receive API and subscription key via email</p>
            </div>
            <div className={`flex flex-col  px-5 py-2 border-b-2 border-black pb-[41px] ${!getValues('hotkey') && "bg-[#00B6A6]"} bg-opacity-10`}>
              <div className={`font-bold text-base opacity-80 mb-4 mt-[20px]`}><span className={`text-sm opacity-100 px-2 py-1 rounded-3xl bg-[#00B6A6] text-white uppercase shadow-brut-sm border-black border-2`}>Step 1</span> CONNECT YOUR BITTENSOR WALLET</div>
              
              <div className=' w-full p-2 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                  {/* <Button buttonText={"CONNECT"} className=' bg-opacity-15' onClick={setAccounts} /> */}
                  {signedInWith && !!jwtToken ? (
                    <Profile account={signedInWith} jwtToken={jwtToken} onSignOut={handleSignOut} />
                  ) : accounts ? (
                  <>
                    <div className='flex flex-col py-1 px-2 bg-[#F8F8F8] border-2 border-black shadow-brut-sm'>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center py-2'>
                          <div className='w-[25px] h-[25px] mr-2 bg-[#D9D9D9] rounded-full'/>
                          <span className={`${FontManrope.className} font-bold text-xl`}>{selectedAccount?.meta.name}</span>
                        </div>
                        <IconChevronDown
                          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                        />
                      </div>
                    </div>
                    <div className='flex items-center mt-4'>
                      <TPLXWeb3Icon size={20} address={selectedAccount?.address ?? ''} />
                      <span className={`${FontManrope.className} opacity-50 text-sm font-medium ml-4`}>{getFirstFourLastFour(selectedAccount?.address ?? '')}</span>
                    </div>

                    <div className="absolute z-10 mt-[-30px] inline-block text-left">
                    {isOpen && (
                      <div className="bottom-0 border-2 shadow-brut-sm w-[536px] border-black bg-white cursor-pointer">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {accounts.map((account) => (
                            <a href="#" key={account.address} className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-[#00B6A6] hover:border-[#00B6A6]" role="menuitem" onClick={()=>popupHandler({account})}>
                              <div className='flex items-center'>
                                <div className='w-[25px] h-[25px] mr-2 bg-[#D9D9D9] rounded-full'/>
                                <span className={`${FontManrope.className} font-bold text-base`}>{account?.meta.name}</span>
                              </div>
                              <div className='flex items-center mt-1'>
                                <TPLXWeb3Icon size={16} address={account.address} />
                                <span className={`${FontManrope.className} opacity-50 text-xs font-medium ml-2`}>{getFirstFourLastFour(account.address)}</span>  
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  </>
                    // </div>
                  ) : (
                    <>
                    {/* <div className='flex justify-between py-2'>
                      <h1 className={`${FontManrope.className} text-xl font-bold`}>Please Connect your wallet</h1>
                      <ConnectWallet onAccounts={setAccounts} />
                    </div> */}
                    {/* <div className={`${FontManrope.className} flex`}>No Wallet Address</div> */}
                    <div className='flex flex-col py-1 px-2 bg-[#F8F8F8] border-2 border-black shadow-brut-sm'>
                      <div className='flex justify-between items-center '>
                        <div className='flex items-center py-2'>
                          <span className={`${FontManrope.className} font-bold text-xl`}>Please Connect your wallet</span>
                        </div>
                        <ConnectWallet onAccounts={setAccounts} />
                      </div>
                    </div>
                    <div className='flex items-center mt-4'>
                      <span className={`${FontManrope.className} opacity-50 text-sm font-medium ml-4`}>No Wallet Address</span>
                    </div>
                    </>
                  )}         
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col w-full self-center  px-5 py-2 ${getValues('hotkey') && "bg-[#00B6A6]"} bg-opacity-10`}>
              <div className={`font-bold text-base opacity-80 mb-4 mt-[20px]`}><span className={`text-sm opacity-100 px-2 py-1 rounded-3xl  uppercase shadow-brut-sm border-black border-2 ${getValues('hotkey') ? "bg-[#00B6A6] text-white" : "bg-[#DADADA]"}`}>Step 2</span> VERIFY HOTKEY</div>
              <div className={cn('mb-3')}>
                <label htmlFor="hotkey" className={cn('block font-bold text-sm text-font-accent')}>HOTKEY<span
                  className="text-red-500 align-text-top">*</span></label>
                <InputField
                  className={'mt-3 '}
                  id="hotkey"
                  {...register('hotkey')}
                  placeholder="Enter Hot Key Here"
                  hasError={!!errors.hotkey}
                  errorMessage={errors.hotkey?.message}
                  disabled={true}
                />
              </div>
              <div className={cn('mb-3')}>
                <label htmlFor="organizationalName" className={cn("block font-bold text-sm text-font-accent")}>ORGANISATION
                  NAME</label>
                <InputField
                  className={cn("mt-3")}
                  id="organizationalKey"
                  {...register("organizationalKey")}
                  placeholder="Enter Organisation Name Here"
                />
              </div>
              <div className={cn("mb-3")}>
                <label htmlFor="email" className={cn("block font-bold text-sm text-font-accent")}>EMAIL<span
                  className="text-red-500 align-text-top">*</span></label>
                <InputField
                  className={cn("mt-3")}
                  id="email"
                  {...register("email")}
                  placeholder="Enter Email Here"
                  hasError={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div className={cn('text-right text-white mb-4')}>
                <Button buttonText={"VERIFY HOTKEY"} type="submit"/>
              </div>
            </form>
            </>) : (
              <>
                <div className="flex flex-col justify-center my-2">
                  <h1 className={`${FontSpaceMono.className} text-xl font-bold uppercase ml-5`}>Application Successful!</h1>
                </div>
                <div className={`h-[215px] bg-[#DBF5E9] flex flex-col items-center border-t-2 border-black`}>
                  <img src='./check-mark.svg' alt='check-mark' className='w-12 h-12 mx-auto mt-4 mb-4'/>
                  <h1 className={`uppercase text-2xl font-bold mb-4 ${FontSpaceMono.className}`}>{`We've emailed your key`}</h1>
                  <p className={`w-[380px] opacity-50 text-center font-semibold text-base ${FontManrope.className}`}>{`We’ve sent it to ${getValues('email')} It should take up to five minutes to arrive`}</p>
                </div>
                <div className='px-5 py-4 flex flex-col gap-y-5'>
                <label htmlFor="apiKey" className={cn('block font-bold text-sm text-font-accent uppercase')}>API KEY<span
                  className="text-red-500 align-text-top">*</span></label>
                  <InputField
                    className={cn('mt-3')}
                    id="apiKey"
                    {...register2('apiKey')}
                    placeholder="Enter Hot Key Here"
                    disabled={true}
                    isCopy
                  />
                <label htmlFor="subscriptionKey" className={cn('block font-bold text-sm text-font-accent uppercase')}>Secret Key<span
                  className="text-red-500 align-text-top">*</span></label>
                  <InputField
                    className={cn('mt-3')}
                    id="subscriptionKey"
                    {...register2('subscriptionKey')}
                    placeholder="Enter Hot Key Here"
                    disabled={true}
                    isCopy
                  />
                  <div className={cn('text-right text-white mb-4')}>
                    <Button buttonText={"Home"} onClick={() => router.push('/')}/>
                  </div>
                </div>
              </>
            )}
          </div>
          )}
        </div>
        {/* <Demo /> */}
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
