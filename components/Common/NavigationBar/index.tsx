'use client';
import { cn } from '@/utils/tw';
import Link from 'next/link';
import GetStartedButton from '../Button/GetStarted';
import { WalletButton } from '../Wallet/WalletButton';

type NavigationBarProps = {
  openModal: () => void;
  isHomePage?: boolean;
  className?: string;
};

const NavigationBar = ({ openModal, isHomePage, className }: NavigationBarProps) => {
  const headerItems = [
    { title: 'Task List', url: '/task-list?sort=numCriteria&order=desc' },
    { title: 'FAQ', url: '/faq' },
  ];

  return (
    <div className="flex items-center justify-center py-4">
      <nav
        className={cn(
          'bg-background border-[1px] border-black rounded-md flex px-[20px] py-[12px] w-[1075px]',
          className
        )}
      >
        <div className=" w-full">
          <div className="flex justify-between">
            <div className="flex items-center gap-[30px]">
              <div>
                <Link href="/">
                  <img className="h-[20px] w-[220px] md:h-[30px]" src="/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="hidden items-center gap-[10px] md:flex">
                {headerItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className={cn(
                      'text-font-primary hover:cursor-pointer visited:text-font-primary hover:underline hover:text-primary'
                    )}
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
