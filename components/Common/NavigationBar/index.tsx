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
    { title: 'Demo', url: '/task-list?exp=demo&?sort=numCriteria&order=desc' },
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <nav
        className={cn(
          'w-[1075px] h-[67.6px] bg-background border-[1px] border-black rounded-md flex px-[20px] py-[12px] items-center',
          className
        )}
      >
        <div className=" flex h-[45px] w-full justify-between ">
          <div className="flex h-full items-center gap-[30px]">
            <div className="">
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
      </nav>
    </div>
  );
};

export default NavigationBar;
