import React, { ReactNode } from "react";
import NavigationBar from "../components/NavigationBar";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import YieldInput from "@/components/YieldInput";
import Slider from "@/components/Slider";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#FFFFF4] text-black">
      <div className="bg-[#F6F6E6] border-b-2 border-black text-white font-bold">
        <NavigationBar />
      </div>
      <main className="max-w-[1075px] mx-auto">{children}</main>
      <hr className=" border-black"/>
      <Footer />
    </div>
  );
};

export default Layout;