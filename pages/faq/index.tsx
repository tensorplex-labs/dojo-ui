import SubscriptionModal from '@/components/Common/SubscriptionModal';
import { FAQHero, FAQList } from '@/components/FAQPage';
import NavigationBar from '@/components/NavigationBar';
import { WalletManagement } from '@/components/TaskListPageComponents';
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
        {isModalVisible && <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />}
      </div>
    </div>
  );
};

export default Page;
