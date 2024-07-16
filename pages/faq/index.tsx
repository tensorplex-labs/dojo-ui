<<<<<<< HEAD
import { brutCardVariants } from '@/components/BrutCard';
import { Button } from '@/components/Button';
import ModalContainer from '@/components/ModalContainer';
import NavigationBar from '@/components/NavigationBar';
import SubscriptionModal from '@/components/SubscriptionModal';
import UserCard from '@/components/UserCard';
import Web3Icon from '@/components/Wallet/web3-icon';
import Accordion from '@/components/utils/accordian';
import { CustomButton, buttonVariants } from '@/components/utils/custom-button';
import { faqList } from '@/data';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
=======
import SubscriptionModal from '@/components/Common/SubscriptionModal';
import { FAQHero, FAQList } from '@/components/FAQPage';
import NavigationBar from '@/components/NavigationBar';
import { WalletManagement } from '@/components/TaskListPageComponents';
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)
import { useJwtToken } from '@/hooks/useJwtToken';
import { useModal } from '@/hooks/useModal';
import { useSIWE } from '@/hooks/useSIWE';
import { useAuth } from '@/providers/authContext';
import { MODAL } from '@/types/ProvidersTypes';
import { FontSpaceMono } from '@/utils/typography';
import { useEffect, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

const Page = () => {
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { openModal } = useModal(MODAL.wallet);
  const { address } = useAccount();

  const { isAuthenticated, isSignedIn } = useAuth();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const jwtTokenKey = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;

  const { signInWithEthereum } = useSIWE(() => console.log('post signin'));

  const jwtToken = useJwtToken();
  useEffect(() => {
    if (!isAuthenticated && isConnected && isSignedIn) {
      signInWithEthereum(address ?? '');
    }
  }, [isAuthenticated, isConnected, isSignedIn]);
  useEffect(() => {
    if (jwtToken) {
      console.log('User is authenticated');
    }
  }, [jwtToken]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'wagmi.io.metamask.disconnected') {
        window.location.reload();
      }
      if (event.key === jwtTokenKey) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [disconnect]);

  return (
    <div className="h-full bg-background text-black">
      <div>
        <div className="h-[320px] border-b-2 border-black bg-background-accent">
          <NavigationBar openModal={() => setShowUserCard(true)} />
          <h1
            className={`${FontSpaceMono.className} my-2 mt-5 text-center text-4xl font-bold tracking-wide text-font-primary`}
          >
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
<<<<<<< HEAD

        <div className="relative mx-auto mt-[-116px] flex h-[177px] w-[1075px] justify-between self-center border-2 border-black bg-[#DBF5E9] shadow-brut-sm">
          <div className="pl-[29px] pt-[21px]">
            <h1 className={`${FontManrope.className} text-lg font-extrabold text-black`}>
              {`Not what you're looking for?`}
            </h1>
            <p className={`${FontManrope.className} mt-3 text-base font-medium text-black`}>
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
                className={cn(buttonVariants(), 'mr-[20px] font-bold capitalize text-white hover:shadow-brut-sm')}
              >
                Twitter
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/invite/zVZbRdt6U4"
                className={cn(buttonVariants(), 'mr-[20px] font-bold capitalize text-white hover:shadow-brut-sm')}
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-3 mt-[18px] flex w-[1075px]">
          <div className={cn(brutCardVariants(), 'divide-y-[1px] divide-font-primary p-0')}>
            {faqList.map((faq, idx) => (
              <Accordion key={idx} title={faq.title}>
                {/* <div className="text-gray-500">
                  {faq.content}</div> */}
                <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: faq.content }} />
              </Accordion>
            ))}
          </div>
        </div>
        <ModalContainer
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
        </ModalContainer>
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
              <div className="flex items-center justify-start gap-[20px] pl-5">
                <CustomButton onClick={handleCopy} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                  <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
                  <IconCopy className="size-4" />
                </CustomButton>
                <CustomButton onClick={handleEtherscan} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                  <span className="mr-[3px] text-xs underline underline-offset-2">VIEW ON ETHERSCAN</span>{' '}
                  <IconExternalLink className="size-4" />
                </CustomButton>
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
=======
        <FAQHero />
        <FAQList />
        {showUserCard && (
          <WalletManagement
            address={address || ''}
            openModal={openModal}
            closeModal={setShowUserCard}
            setShowUserCard={setShowUserCard}
            setShowSubscriptionCard={setIsModalVisible}
          />
        )}{' '}
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)
        {isModalVisible && <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />}
      </div>
    </div>
  );
};

export default Page;
