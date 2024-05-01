'use client'
import React, { useState } from "react";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import Link from "next/link";
import { TPLXWalletButton } from "../Wallet/tplx-wallet-button-entry";
const WalletConnect = ({
  handleWalletConnect,
}: {
  handleWalletConnect: () => void;
}) => {
  return (
    <button
      onClick={handleWalletConnect}
      className={`hover:cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none visited:text-font-secondary hover:bg-primary px-4 py-2 text-xs md:text-sm bg-primary rounded-none border-[2px] border-black text-font-secondary h-[40px] bg-[#00b8a8] ${FontSpaceMono.className} uppercase`}
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
      <button
        onClick={toggleMenu}
        className="p-4 focus:outline-none focus:bg-gray-700"
      >
        {/* Icon for mobile menu button */}
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
      <div className={`${isOpen ? "block" : "hidden"} mobile-menu`}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="block text-sm px-2 py-4 text-white bg-gray-900 hover:bg-gray-700"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};


// NavigationBar component
const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const handleWalletModalOpen = () => {
    setIsWalletModalOpen(true);
  };

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
    { title: "Home", url: "/" },
    { title: "Dashboard", url: "/quest" },
    { title: "FAQ", url: "/faq" },
  ];

  return (
    <div className="justify-center items-center flex py-[1rem]">
      <nav className="bg-[#fffff5] border border-black rounded-[16px] max-w-[1075px] justify-center w-full h-[75px]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <div>
                <Link
                  href="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img src="./logo.svg" alt="logo" className="h-[20px]" />
                </Link>
              </div>
              {/* Primary Nav Items */}
              <div className="hidden md:flex items-center space-x-3">
                {headerItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className={`py-5 px-4 hover:opacity-100 hover:underline-offset-2 hover:underline text-black hover:text-black opacity-75 font-bold text-xl ${FontManrope.className} tracking-tight	`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-[8px]">
              <TPLXWalletButton></TPLXWalletButton>
              <TPLXMobileMenu
                menuItems={headerItems}
                isOpen={isMobileMenuOpen}
                toggleMenu={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
