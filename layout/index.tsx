'use client'
import React, { ReactNode } from "react";
import NavigationBar from "../components/NavigationBar";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import YieldInput from "@/components/YieldInput";
import Slider from "@/components/Slider";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalProvider from '@/providers/modals';
import { config } from "@/components/Wallet/WagmiWalletConfig";


type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <div className="bg-[#FFFFF4] text-black">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div className="bg-[#F6F6E6] border-b-2 border-black text-white font-bold">
              <NavigationBar />
            </div>
            <main className="max-w-[1075px] mx-auto">{children}</main>
            <hr className=" border-black"/>
            <Footer />
          </ModalProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};

export default Layout;