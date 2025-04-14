'use client';
import MainFooter from '@/components/Common/Footer/MainFooter';
import SubscriptionModal from '@/components/Common/Modal/SubscriptionModal';
import { LeaderboardSection } from '@/components/DashboardPageComponents';
import DashboardGraphAndMetrics from '@/components/DashboardPageComponents/DashboardGraphAndMetrics';
import { WalletManagement } from '@/components/TaskListPageComponents';
import { useModal } from '@/hooks/useModal';
import Layout from '@/layout';
import { MODAL } from '@/types/ProvidersTypes';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { useAccount } from 'wagmi';

interface Delegate {
  id: string;
  name: string;
}

interface Props {
  delegates: Delegate[];
}

const DashboardPage: React.FC<Props> = ({ delegates }) => {
  const [showUserCard, setShowUserCard] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { openModal } = useModal(MODAL.wallet);
  const { address } = useAccount();

  return (
    <Layout isFullWidth headerText={'Dashboard'}>
      <main className="px-4">
        <DashboardGraphAndMetrics />
        <LeaderboardSection />
      </main>
      {showUserCard && (
        <WalletManagement
          address={address || ''}
          openModal={openModal}
          closeModal={setShowUserCard}
          setShowUserCard={setShowUserCard}
          setShowSubscriptionCard={setIsModalVisible}
        />
      )}
      {isModalVisible && <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />}
      <MainFooter />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/opentensor/bittensor-delegates/refs/heads/main/public/delegates.json'
  );
  const delegates = await res.json();
  return {
    props: {
      delegates,
    },
  };
};

export default DashboardPage;
