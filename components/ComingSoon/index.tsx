import { TensorplexProducts, frequentlyAccessedData } from "@/data";
import Link from "next/link";
import React from "react";
import Layout from "@/layout";
import FrequentlyAccessedItem from "@/components/FrequentlyAccessedItem";

type Props = {
  type?: "Coming Soon" | "Not Found";
  mainTitle?: string;
  mainSubTitle?: string;
  subtitle1?: string;
  subtitle2?: string;
};

function ComingSoon({
  mainTitle = "Coming Soon",
  mainSubTitle = "Stay tuned for more resources =)",
  type = "Coming Soon",
  subtitle1 = "Why not try our other features?",
  subtitle2 = "Tensorplex applications",
}: Props) {
  return (
    <Layout showFooter={false}>
    <div className=" max-w-screen-xl h-full flex flex-col items-center justify-center m-auto mb-8">
        <div className="text-center mb-10 w-full h-[22.5vh] flex flex-col justify-center">
          <h1 className="font-spacemono md:text-4xl text-2xl font-bold leading-tight pb-4">
            {mainTitle}
          </h1>
          <p className="font-manrope font-medium md:text-xl text-md">
            {mainSubTitle}
          </p>
        </div>
      {/* <div className="w-4/5 md:w-3/5 pl-2 h-full">
        <h1 className="uppercase text-start font-spacemono text-base md:text-xl font-bold">
          {subtitle1}
        </h1>
      </div> */}
      {/* <div className="w-4/5 md:w-3/5 flex justify-center h-full flex-wrap">
        {frequentlyAccessedData.map((data, index) => (
          <div
            key={index}
            className={`w-full ${
              !data.isLong && "lg:w-1/2"
            } p-2 xl:min-h-[88px]`}
          >
            <FrequentlyAccessedItem {...data} />
          </div>
        ))}
      </div> */}
      <div className="w-4/5 pl-2 md:w-3/5 mt-4">
        <h1 className="uppercase text-start font-spacemono text-base md:text-lg font-bold">
          {subtitle2}
        </h1>
      </div>
      <div className="w-4/5 md:w-3/5 flex justify-center flex-wrap ">
        {TensorplexProducts.map((data, index) => (
          <div key={index} className={`w-full  p-2`}>
            <FrequentlyAccessedItem {...data} />
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default ComingSoon;