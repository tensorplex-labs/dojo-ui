import { Button } from '@/components/Button';
import { InputField } from '@/components/Fields/InputField';
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
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconCopy, IconExternalLink, IconLoader } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
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

const successMessage =
  'We are currently reviewing your application. Once approved, we will send you a miner API key and subscription key via the email you provided.';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hotkey: '',
      organizationalKey: '',
      email: '',
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

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  // TODO: Refactor with proper type and hook
  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    setIsLoadingSubmit(true);
    await submitApplication({
      hotkey: formData.hotkey,
      organisationName: formData.organizationalKey, // Note the API expects "organisationName"
      email: formData.email,
    });
    setIsLoadingSubmit(false);
  };

  const handleFormMessage = () => {};

  useEffect(() => {
    if (!response) return; // response is initially null, and we don't want to do anything

    if (response.success) {
      reset();
      setModalHeader('Application Completed');
      setModalMessage('Please check your email for the miner API key and worker subscription key.');
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

  return (
    <div className="h-full bg-background text-black">
      <div>
        <div className="h-[257px] border-b-2 border-black bg-background-accent">
          <NavigationBar openModal={() => setShowUserCard(true)} />

          <h1
            // eslint-disable-next-line tailwindcss/no-contradicting-classname
            className={`${FontSpaceMono.className} mb-4 mt-9 text-center text-4xl font-bold tracking-wide text-black text-font-primary`}
          >
            MINER APPLICATION FORM
          </h1>
          <div className={`${FontManrope.className} text-center opacity-50`}>
            Complete the form with the necessary details to get your API key and subscription key via email.
          </div>
        </div>

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
          <div className={cn(`${FontSpaceMono.className} mt-10 flex h-screen justify-center`)}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <div className={cn('mb-12')}>
                <label htmlFor="hotkey" className={cn('block text-sm font-bold text-font-accent')}>
                  HOTKEY<span className="align-text-top text-red-500">*</span>
                </label>
                <InputField
                  className={cn('mt-3')}
                  id="hotkey"
                  {...register('hotkey')}
                  placeholder="Enter Hot Key Here"
                  hasError={!!errors.hotkey}
                  errorMessage={errors.hotkey?.message}
                />
              </div>
              <div className={cn('mb-12')}>
                <label htmlFor="organizationalName" className={cn('block text-sm font-bold text-font-accent')}>
                  ORGANISATION NAME
                </label>
                <InputField
                  className={cn('mt-3')}
                  id="organizationalKey"
                  {...register('organizationalKey')}
                  placeholder="Enter Organisation Name Here"
                />
              </div>
              <div className={cn('mb-12')}>
                <label htmlFor="email" className={cn('block text-sm font-bold text-font-accent')}>
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
              <div className={cn('text-center text-white')}>
                <Button buttonText={'Submit'} />
              </div>
            </form>
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
            `${FontManrope.className} flex h-[88px] items-center border-b-2 border-black bg-accent px-6 py-4 text-[16px] leading-[120%] opacity-60`
          )}
        >
          <span>{modalMessage}</span>
        </div>
        <div className={'size-full p-1 text-right'}>
          <Button
            className={cn('mr-4 mt-2 h-[39px] w-[85px] text-[16px] text-white hover:shadow-brut-sm')}
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
    // </div>
  );
};

export default Page;
