'use client';
import { FontManrope } from '@/utils/typography';
import Link from 'next/link';
<<<<<<< HEAD
import GetStartedButton from '../Button/GetStarted';
import { WalletButton } from '../Wallet/wallet-button-entry';
=======
import GetStartedButton from '../Common/Button/GetStarted';
import { WalletButton } from '../Common/Wallet/wallet-button-entry';
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)

type NavigationBarProps = {
  openModal: () => void;
  isHomePage?: boolean;
};

const NavigationBar = ({ openModal, isHomePage }: NavigationBarProps) => {
  const headerItems = [
<<<<<<< HEAD
    { title: 'Task List', url: '/' },
=======
    { title: 'Task List', url: '/task-list?sort=numCriteria&order=desc' },
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig)
    { title: 'FAQ', url: '/faq' },
  ];
  return (
    <div className="flex items-center justify-center py-4">
      <nav className="h-[75px] w-full max-w-[1075px] justify-center rounded-[16px] border border-black bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <div></div>
              <div className="hidden items-center space-x-3 md:flex">
                {headerItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className={`px-4 py-5 text-xl font-bold text-black opacity-75 hover:text-black hover:underline hover:underline-offset-2 hover:opacity-100 ${FontManrope.className} tracking-tight	`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {!isHomePage ? (
                <>
                  <div className="flex items-center justify-center gap-[8px]">
                    <WalletButton openModal={openModal}></WalletButton>
                  </div>
                </>
              ) : (
                <GetStartedButton />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
