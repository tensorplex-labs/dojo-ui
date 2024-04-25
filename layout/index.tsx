import React, { ReactNode } from "react";
import NavigationBar from "../components/NavigationBar";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import YieldInput from "@/components/YieldInput";
import Slider from "@/components/Slider";
import { Button } from "@/components/Button";

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
      <hr />
      <footer className="max-w-[1075px] mx-auto p-4">
        <h1 className={`uppercase ${FontSpaceMono.className} text-xl font-bold`}>
          Rewards
        </h1>
        <p className={`text-sm font-semibold ${FontManrope.className} opacity-60`}>
          A brief explanation on how this works, and what the slider does, and
          how this thing would behave so the user is aware on how to use it.
        </p>
        <div className="flex flex-wrap justify-between gap-4 ">
            <div className="flex">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h1 className={`uppercase ${FontSpaceMono.className} text-base font-bold`}>
                Stake Amount
              </h1>
              <YieldInput
                value={""}
                onChange={(value: string) => {
                  // Handle change
                }}
              />
            </div>
            <Slider
              min={1}
              max={100}
              step={10}
              initialValue={0}
              onChange={(value: number) => {
                // Handle slider change
              }}
              minLabel="Low Confidence"
              maxLabel="High Confidence"
              className="w-full mt-4"
            />
          </div>
          <div className="flex-1">
            <h1 className={`uppercase ${FontSpaceMono.className} text-base font-bold mb-4`}>
              Risk & Rewards
            </h1>
            <div className="flex justify-between gap-5">
              <div className="flex flex-col">
                <h2 className={`${FontManrope.className} text-[13px] font-semibold opacity-50`}>Potential Gains</h2>
                <h2 className="text-[#11A365] text-sm font-semibold">
                  + 0.14 stTAO
                </h2>
              </div>
              <div className="flex flex-col">
              <h2 className={`${FontManrope.className} text-[13px] font-semibold opacity-50`}>Potential Loss</h2>
                <h2 className="text-[#E2442F] text-sm font-semibold">
                  - 0.28 stTAO
                </h2>
              </div>
            </div>
          </div>
          </div>
          <div className="flex justify-end gap-4 mt-4 self-center">
          <Button buttonText={"SKIP"} className="text-black bg-[#E4E4E4] shadow-brut-sm !px-[37px] !py-[15px]" />
          <Button buttonText={"PROCEED"} className="text-white bg-[#00B6A6] shadow-brut-sm !px-[37px] !py-[15px]!" />
        </div>
        </div>

      </footer>
    </div>
  );
};

export default Layout;