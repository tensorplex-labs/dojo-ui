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
        className={`} flex size-full cursor-pointer flex-row gap-1 border-2 border-black bg-[#F8F8F8] p-1 hover:bg-[#DBF5E9]`}
        onClick={handleClick}
      >
        <div
          className={` ${type === "product" ? "min-w-[41px] self-center" : "min-w-[14px] px-2 pt-1"}  `}
        >
          {type === "product" ? (
            <img src="/not-found-icon-2.png" className="min-h-[34px] min-w-[41px]" alt="product icon"/>
          ) : (
            <img src="/not-found-icon-1.png" className="min-h-[16px] min-w-[14px]" alt="icon"/>
          )}
        </div>
        <div>
          <h1 className="text-xs font-bold text-black opacity-70 md:text-sm">{title}</h1>
          <p className="text-xs font-medium text-black opacity-60 md:text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FrequentlyAccessedItem;
