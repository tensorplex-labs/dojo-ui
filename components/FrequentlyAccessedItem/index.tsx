import React from "react";
import Link from "next/link";
import { FrequentlyAccessedProps } from "@/data";

const FrequentlyAccessedItem: React.FC<FrequentlyAccessedProps> = ({
  title,
  description,
  type,
  route,
  isRoutable,
  delayBy,
  onClickHandler
}) => {
  
  const handleClick = () => {
    if (onClickHandler) {
      onClickHandler(title);
    }
  };
  
  return (
    <Link href={route}>
      <div
        className={`p-1 border-2 border-black w-full flex flex-row gap-1 cursor-pointer hover:bg-[#DBF5E9] bg-[#F8F8F8] } h-full`}
        onClick={handleClick}
      >
        <div
          className={` ${type === "product" ? "self-center min-w-[41px]" : "pt-1 min-w-[14px] pl-2 pr-2"}  `}
        >
          {type === "product" ? (
            <img src="/not-found-icon-2.png" className="min-w-[41px] min-h-[34px]" alt="product icon"/>
          ) : (
            <img src="/not-found-icon-1.png" className="min-w-[14px] min-h-[16px]" alt="icon"/>
          )}
        </div>
        <div>
          <h1 className="font-bold text-black md:text-sm text-xs opacity-70">{title}</h1>
          <p className="text-black font-medium opacity-60 md:text-sm text-xs">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FrequentlyAccessedItem;
