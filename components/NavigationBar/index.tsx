'use client';
import { useSIWE } from '@/hooks/useSIWE';
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GetStartedButton from '../Button/GetStarted';
import { TPLXButton } from '../TPLXButton';
import { TPLXWalletButton } from '../Wallet/tplx-wallet-button-entry';
const WalletConnect = ({ handleWalletConnect }: { handleWalletConnect: () => void }) => {
  return (
    <button
      onClick={handleWalletConnect}
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className={`focus-visible:ring-ring inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-none border-2 border-black bg-[#00b8a8] bg-primary px-4 py-2 text-xs font-medium text-font-secondary ring-offset-background transition-colors visited:text-font-secondary hover:cursor-pointer hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none md:text-sm ${FontSpaceMono.className} uppercase`}
    >
      Connect Wallet
    </button>
  );
};

// TPLXMobileMenu component
interface MenuItem {
  title: string;
  url: string;
}

const TPLXMobileMenu = ({
  menuItems,
  isOpen,
  toggleMenu,
}: {
  menuItems: MenuItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-4 focus:bg-gray-700 focus:outline-none">
        {/* Icon for mobile menu button */}
        <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
          {isOpen ? (
            // 'X' icon for open menu
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            // Hamburger icon for closed menu
            <path
              fillRule="evenodd"
              d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15zM2.5 10a.5.5 0 000 1h15a.5.5 0 000-1h-15zM2.5 15a.5.5 0 000 1h15a.5.5 0 000-1h-15z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} mobile-menu`}>
        {menuItems.map((item, index) => (
          <a key={index} href={item.url} className="block bg-gray-900 px-2 py-4 text-sm text-white hover:bg-gray-700">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

type NavigationBarProps = {
  openModal: () => void;
  isHomePage?: boolean;
};
// NavigationBar component
const NavigationBar = ({ openModal, isHomePage }: NavigationBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const router = useRouter();

  const handleWalletModalOpen = () => {
    setIsWalletModalOpen(true);
  };

  useSIWE(() => {
    console.log('Successfully signed in');
  });

  const handleWalletModalClose = () => {
    setIsWalletModalOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleWalletConnect = async () => {
    handleWalletModalOpen();
  };

  const headerItems = [
    // { title: "Home", url: "/" },
    // { title: "Dashboard", url: "/quest" },
    // { title: "Apply", url: "/apply" },
    { title: 'FAQ', url: '/faq' },
  ];

  return (
    <div className="flex items-center justify-center py-4">
      <nav className="h-[75px] w-full max-w-[1075px] justify-center rounded-[16px] border border-black bg-[#fffff5]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <Link href="/" className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900">
                  <img src="./logo.svg" alt="logo" className="h-[20px]" />
                </Link>
              </div>
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
                    <TPLXWalletButton openModal={openModal}></TPLXWalletButton>
                  </div>
                  <div className="flex items-center justify-center gap-[8px]">
                    <TPLXButton
                      className={cn(
                        FontSpaceMono.className,
                        'rounded-none border-[2px] border-black bg-primary text-xs uppercase text-font-secondary hover:shadow-brut-sm md:text-sm'
                      )}
                      onClick={() => router.push('/apply')}
                    >
                      {`I'm a miner`}
                    </TPLXButton>
                  </div>
                </>
              ) : (
                <GetStartedButton />
                // <div className="rounded-[10px] bg-[#00B6A6] font-bold uppercase text-white">Get started</div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
