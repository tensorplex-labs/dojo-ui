import { Button } from '@/components/Button';
import { InputField } from '@/components/Fields/InputField';
import { ConnectWallet } from '@/components/MinerConnect/ConnectWallet';
import TPLXModalContainer from '@/components/ModalContainer';
import NavigationBar from '@/components/NavigationBar';
import SubscriptionModal from '@/components/SubscriptionModal';
import { TPLXButton } from '@/components/TPLXButton';
import UserCard from '@/components/UserCard';
import TPLXWeb3Icon from '@/components/Wallet/tplx-web3-icon';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import { useModal } from '@/hooks/useModal';
import { useSubmitApplication } from '@/hooks/useSubmitApplicationByMiner';
import { MODAL } from '@/providers/modals';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { fetchNonce } from '@/utils/siwe';
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { IconChevronDown, IconCopy, IconExternalLink, IconLoader } from '@tabler/icons-react';
import { Address, SiwsMessage } from '@talismn/siws';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import { z } from 'zod';

const FormSchema = z.object({
  hotkey: z.string().min(1, {
    message: 'Invalid Hotkey. Please input a valid Hotkey.',
  }),
  email: z.string().min(1, { message: 'Missing Email. Please input an email' }).email({
    message: 'Invalid Email. Please input a correct email format.',
  }),
  organizationalKey: z.string(),
});
interface SignedData {
  signature: string;
  message: string;
}

const successMessage =
  'We are currently reviewing your application. Once approved, we will send you a miner API key and subscription key via the email you provided.';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hotkey: '',
      organizationalKey: '',
      email: '',
    },
  });

  const {
    register: register2,
    setValue: setValue2,
    getValues: getValues2,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      apiKey: '',
      subscriptionKey: '',
    },
  });

  const { submitApplication, response, isLoading } = useSubmitApplication();
  const { openModal } = useModal(MODAL.wallet);
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [modalHeader, setModalHeader] = useState('');
  const { address, status } = useAccount();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [signedInWith, setSignedInWith] = useState<InjectedAccountWithMeta | undefined>();
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[] | undefined>();
  const [jwtToken, setJwtToken] = useState<string | undefined>();
  const [subscribed, setSubscribed] = useState(false);
  const [showSucceedScreen, setShowSucceedScreen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | undefined>();
  // accounts?.length === 1 ? accounts[0] : undefined
  const [signedData, setSignedData] = useState<SignedData>({
    signature: '',
    message: '',
  });
  const [signingIn, setSigningIn] = useState(false);
  const handleSignedIn = (selectedAccount: InjectedAccountWithMeta, jwtToken: string) => {
    setJwtToken(jwtToken);
    setSignedInWith(selectedAccount);
  };

  const handleSignOut = useCallback(() => {
    setSignedInWith(undefined);
    setJwtToken(undefined);
  }, []);

  // subscribe to extension changes after first connect
  const subscribeToExtensions = useCallback(async () => {
    if (accounts === undefined || subscribed) return;
    const { web3AccountsSubscribe } = await import('@polkadot/extension-dapp');

    setSubscribed(true);
    web3AccountsSubscribe((newAccounts) => {
      // // dont update if newAccounts is same as accounts
      // const newAddresses = newAccounts.map((account) => account.address).join("")
      // const oldAddresses = accounts.map((account) => account.address).join("")
      // if (newAddresses === oldAddresses) return
      // // update accounts list
      setAccounts(newAccounts);
    });
  }, [accounts, subscribed]);

  useEffect(() => {
    subscribeToExtensions();
  }, [subscribeToExtensions]);

  // auto sign out disconnected extensions
  useEffect(() => {
    if (signedInWith?.address && accounts && !accounts.find((account) => account.address === signedInWith?.address))
      handleSignOut();
  }, [accounts, handleSignOut, signedInWith?.address]);

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
  const router = useRouter();

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
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

  const handleFormMessage = () => {};
  const SIWS_DOMAIN = 'siws.xyz';

  const handleSignIn = async (account: InjectedAccountWithMeta) => {
    try {
      // dismiss()
      if (!account) throw new Error('No account selected!');

      const address = Address.fromSs58(account.address ?? '');

      console.log(address);
      if (!address)
        // return toast({
        //   title: "Invalid address",
        //   description: "Your address is not a valid Substrate address.",
        // })

        setSigningIn(true);
      // request nonce from server
      // const nonceRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/${account.address}`);
      // const data = await nonceRes.json();
      // const { nonce } = data["body"];
      const nonceRes = fetchNonce(account.address);
      const nonce = await nonceRes;
      const siwsMessage = new SiwsMessage({
        domain: window.location.host,
        uri: window.location.origin,
        // use prefix of chain your dapp is on:
        // address: address.toSs58(0),
        address: account.address,
        nonce,
        statement: 'Sign in with Substrate',
        chainName: 'Substrate',
        // expires in 2 mins
        expirationTime: new Date().getTime() + 2 * 60 * 1000,
        // azeroId: resolve(address.toSs58())?.a0id,
      });

      const { web3FromSource } = await import('@polkadot/extension-dapp');
      const injectedExtension = await web3FromSource(account.meta.source);
      const signed = await siwsMessage.sign(injectedExtension);
      setValue('hotkey', account.address);
      // console.log("signed", JSON.stringify(signed))
      setSignedData(signed);
      console.log('signed', JSON.stringify(signed));
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
      setSigningIn(false);
    }
  };

  useEffect(() => {
    if (!response) return; // response is initially null, and we don't want to do anything
    if (response.success) {
      reset();
      setShowSucceedScreen(true);
      setModalHeader('Application Completed');
      setModalMessage('Please check your email for the miner API key and worker subscription key.');
      setValue2('apiKey', response.body.apiKey);
      setValue2('subscriptionKey', response.body.subscriptionKey);
    } else {
      setModalHeader('Application Failed');
      setModalMessage(response?.message || 'Application failed');
    }
    setOpen(true);
    setIsLoadingSubmit(false);
  }, [response, reset]);

  const handleOnClose = () => {
    setOpen(false);
    setModalMessage('');
  };

  const popupHandler = ({ account }: { account: InjectedAccountWithMeta }) => {
    console.log('called');
    setSelectedAccount(account);
    setIsOpen(false);
    setValue('hotkey', '');
    handleSignIn(account);
    handleFormMessage();
  };

  return (
    <div className="h-full bg-background text-black">
      <div>
        <div className=" border-black">
          <NavigationBar openModal={() => setShowUserCard(true)} />
          {isLoadingSubmit ? (
            <div className="mt-3 flex items-center justify-center">
              <p>
                <span className="inline-flex animate-spin text-center">
                  <IconLoader />
                </span>{' '}
                Processing. Please wait ...
              </p>
            </div>
          ) : (
            <div
              className={cn(
                `${FontSpaceMono.className} flex flex-col justify-center mt-10 w-[593px] border-2 border-black mx-auto shadow-brut-sm mb-5`
              )}
            >
              {!showSucceedScreen ? (
                <>
                  <div className="flex flex-col border-b-2 border-black bg-[#F8F8F8] px-5 py-2">
                    <h1 className={`${FontSpaceMono.className} text-xl font-bold tracking-wide text-font-primary`}>
                      MINER APPLICATION{' '}
                    </h1>
                    <p className={`${FontManrope.className} text-base font-medium opacity-60`}>
                      Connect and verify your bittensor wallet to receive API and subscription key via email
                    </p>
                  </div>
                  <div
                    className={`flex flex-col  border-b-2 border-black px-5 py-2 pb-[41px] ${!getValues('hotkey') && 'bg-[#00B6A6]'} bg-opacity-10`}
                  >
                    <div className={`mb-4 mt-[20px] text-base font-bold opacity-80`}>
                      <span
                        className={`rounded-3xl border-2 border-black bg-[#00B6A6] px-2 py-1 text-sm uppercase text-white opacity-100 shadow-brut-sm`}
                      >
                        Step 1
                      </span>{' '}
                      CONNECT YOUR BITTENSOR WALLET
                    </div>

                    <div className=" w-full cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
                      {/* <Button buttonText={"CONNECT"} className=' bg-opacity-15' onClick={setAccounts} /> */}
                      {signedInWith && !!jwtToken ? (
                        <></>
                      ) : accounts ? (
                        <>
                          <div className="flex flex-col border-2 border-black bg-[#F8F8F8] px-2 py-1 shadow-brut-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center py-2">
                                <div className="mr-2 size-[25px] rounded-full bg-[#D9D9D9]" />
                                <span className={`${FontManrope.className} text-xl font-bold`}>
                                  {selectedAccount?.meta.name}
                                </span>
                              </div>
                              <IconChevronDown
                                className={`size-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                              />
                            </div>
                          </div>
                          <div className="mt-4 flex items-center">
                            <TPLXWeb3Icon size={20} address={selectedAccount?.address ?? ''} />
                            <span className={`${FontManrope.className} ml-4 text-sm font-medium opacity-50`}>
                              {getFirstFourLastFour(selectedAccount?.address ?? '')}
                            </span>
                          </div>

                          <div className="absolute z-10 mt-[-30px] inline-block text-left">
                            {isOpen && (
                              <div className="bottom-0 w-[536px] cursor-pointer border-2 border-black bg-white shadow-brut-sm">
                                <div
                                  className="py-1"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="options-menu"
                                >
                                  {accounts.map((account) => (
                                    <a
                                      href="#"
                                      key={account.address}
                                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:border-[#00B6A6] hover:bg-[#00B6A6] hover:text-gray-900"
                                      role="menuitem"
                                      onClick={() => popupHandler({ account })}
                                    >
                                      <div className="flex items-center">
                                        <div className="mr-2 size-[25px] rounded-full bg-[#D9D9D9]" />
                                        <span className={`${FontManrope.className} text-base font-bold`}>
                                          {account?.meta.name}
                                        </span>
                                      </div>
                                      <div className="mt-1 flex items-center">
                                        <TPLXWeb3Icon size={16} address={account.address} />
                                        <span
                                          className={`${FontManrope.className} ml-2 text-xs font-medium opacity-50`}
                                        >
                                          {getFirstFourLastFour(account.address)}
                                        </span>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        // </div>
                        <>
                          {/* <div className='flex justify-between py-2'>
                      <h1 className={`${FontManrope.className} text-xl font-bold`}>Please Connect your wallet</h1>
                      <ConnectWallet onAccounts={setAccounts} />
                    </div> */}
                          {/* <div className={`${FontManrope.className} flex`}>No Wallet Address</div> */}
                          <div className="flex flex-col border-2 border-black bg-[#F8F8F8] px-2 py-1 shadow-brut-sm">
                            <div className="flex items-center justify-between ">
                              <div className="flex items-center py-2">
                                <span className={`${FontManrope.className} text-xl font-bold`}>
                                  Please Connect your wallet
                                </span>
                              </div>
                              <ConnectWallet onAccounts={setAccounts} />
                            </div>
                          </div>
                          <div className="mt-4 flex items-center">
                            <span className={`${FontManrope.className} ml-4 text-sm font-medium opacity-50`}>
                              No Wallet Address
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`flex w-full flex-col self-center  px-5 py-2 ${getValues('hotkey') && 'bg-[#00B6A6]'} bg-opacity-10`}
                  >
                    <div className={`mb-4 mt-[20px] text-base font-bold opacity-80`}>
                      <span
                        className={`rounded-3xl border-2 border-black px-2 py-1  text-sm uppercase opacity-100 shadow-brut-sm ${getValues('hotkey') ? 'bg-[#00B6A6] text-white' : 'bg-[#DADADA]'}`}
                      >
                        Step 2
                      </span>{' '}
                      VERIFY HOTKEY
                    </div>
                    <div className={cn('mb-3')}>
                      <label htmlFor="hotkey" className={cn('block font-bold text-sm text-font-accent')}>
                        HOTKEY<span className="align-text-top text-red-500">*</span>
                      </label>
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
                      <label htmlFor="organizationalName" className={cn('block font-bold text-sm text-font-accent')}>
                        ORGANISATION NAME
                      </label>
                      <InputField
                        className={cn('mt-3')}
                        id="organizationalKey"
                        {...register('organizationalKey')}
                        placeholder="Enter Organisation Name Here"
                      />
                    </div>
                    <div className={cn('mb-3')}>
                      <label htmlFor="email" className={cn('block font-bold text-sm text-font-accent')}>
                        EMAIL<span className="align-text-top text-red-500">*</span>
                      </label>
                      <InputField
                        className={cn('mt-3')}
                        id="email"
                        {...register('email')}
                        placeholder="Enter Email Here"
                        hasError={!!errors.email}
                        errorMessage={errors.email?.message}
                      />
                    </div>
                    <div className={cn('text-right text-white mb-4')}>
                      <Button buttonText={'VERIFY HOTKEY'} type="submit" />
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="my-2 flex flex-col justify-center">
                    <h1 className={`${FontSpaceMono.className} ml-5 text-xl font-bold uppercase`}>
                      Application Successful!
                    </h1>
                  </div>
                  <div className={`flex h-[215px] flex-col items-center border-t-2 border-black bg-[#DBF5E9]`}>
                    <img src="./check-mark.svg" alt="check-mark" className="mx-auto my-4 size-12" />
                    <h1
                      className={`mb-4 text-2xl font-bold uppercase ${FontSpaceMono.className}`}
                    >{`We've emailed your key`}</h1>
                    <p
                      className={`w-[380px] text-center text-base font-semibold opacity-50 ${FontManrope.className}`}
                    >{`We’ve sent it to ${getValues('email')} It should take up to five minutes to arrive`}</p>
                  </div>
                  <div className="flex flex-col gap-y-5 px-5 py-4">
                    <label htmlFor="apiKey" className={cn('block font-bold text-sm text-font-accent uppercase')}>
                      API KEY<span className="align-text-top text-red-500">*</span>
                    </label>
                    <InputField
                      className={cn('mt-3')}
                      id="apiKey"
                      {...register2('apiKey')}
                      placeholder="Enter Hot Key Here"
                      disabled={true}
                      isCopy
                    />
                    <label
                      htmlFor="subscriptionKey"
                      className={cn('block font-bold text-sm text-font-accent uppercase')}
                    >
                      Secret Key<span className="align-text-top text-red-500">*</span>
                    </label>
                    <InputField
                      className={cn('mt-3')}
                      id="subscriptionKey"
                      {...register2('subscriptionKey')}
                      placeholder="Enter Hot Key Here"
                      disabled={true}
                      isCopy
                    />
                    <div className={cn('text-right text-white mb-4')}>
                      <Button buttonText={'Home'} onClick={() => router.push('/')} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <TPLXModalContainer
          className={'h-[206px] w-[512px]'}
          headerClassName={'h-12 pl-4'}
          bodyClassName="p-0"
          header={modalHeader}
          open={open}
          onClose={() => handleOnClose()}
          onSave={() => handleOnClose()}
        >
          <div
            className={cn(
              `${FontManrope.className} py-4 px-6 border-b-2 border-black bg-accent opacity-60 text-[16px] leading-[120%] h-[88px] flex items-center`
            )}
          >
            <span>{modalMessage}</span>
          </div>
          <div className={'size-full p-1 text-right'}>
            <Button
              className={cn('w-[85px] h-[39px] mt-2 mr-4 hover:shadow-brut-sm text-[16px] text-white')}
              buttonText={'CLOSE'}
              onClick={() => handleOnClose()}
            />
          </div>
        </TPLXModalContainer>
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
              <div className="flex items-center justify-start gap-[20px] pl-5">
                <TPLXButton onClick={handleCopy} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                  <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
                  <IconCopy className="size-4" />
                </TPLXButton>
                <TPLXButton onClick={handleEtherscan} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
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
        {isModalVisible && <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />}
      </div>
    </div>
  );
};

export default Page;
