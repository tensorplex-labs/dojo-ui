import { CustomButton } from '@/components/Common/CustomComponents/button';
import UserCard from '@/components/Common/UserCard';
import Web3Icon from '@/components/Common/Wallet/web3-icon';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import { WalletManagementProps } from '@/types/TaskListTypes';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { FontManrope } from '@/utils/typography';
import { IconCopy, IconExternalLink } from '@tabler/icons-react';
import { FC } from 'react';

const WalletManagement: FC<WalletManagementProps> = ({
  address,
  openModal,
  closeModal,
  setShowUserCard,
  setShowSubscriptionCard,
}) => {
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');

  const walletManagementHandler = () => {
    openModal();
    setShowUserCard(false);
  };

  const handleViewClick = () => {
    setShowUserCard(false);
    closeModal(true);
    setShowSubscriptionCard(true);
  };

  return (
    <UserCard closeModal={() => setShowUserCard(false)}>
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
          <CustomButton onClick={handleCopy} className="h-fit p-0 font-bold text-darkGreen" variant={'link'}>
            <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
            <IconCopy className="size-4" />
          </CustomButton>
          <CustomButton onClick={handleEtherscan} className="h-fit p-0 font-bold text-darkGreen" variant={'link'}>
            <span className="mr-[3px] text-xs underline underline-offset-2">VIEW ON ETHERSCAN</span>{' '}
            <IconExternalLink className="size-4" />
          </CustomButton>
        </div>
      </div>
      <div className="flex  w-full items-center justify-between border-b-2 p-4 text-sm">
        <h1 className="font-bold uppercase">Subscription Keys</h1>
        <button className="font-bold text-darkGreen underline" onClick={handleViewClick}>
          VIEW
        </button>
      </div>
      <div className=" w-full px-4 py-5">
        <button
          onClick={walletManagementHandler}
          className={`focus-visible:ring-ring inline-flex h-[40px] w-full items-center justify-center whitespace-nowrap rounded-none border-2 border-black bg-primary px-4 py-2 text-xs font-bold uppercase text-white ring-offset-background transition-colors hover:cursor-pointer hover:bg-primary/75 hover:shadow-brut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none md:text-sm`}
        >
          Manage Wallet
        </button>
      </div>
    </UserCard>
  );
};

export default WalletManagement;
