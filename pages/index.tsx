import { Button } from "@/components/Button";
import { CategoryItem } from "@/components/CategoryItem";
import { DropdownContainer } from "@/components/DropDown";
import NavigationBar from "@/components/NavigationBar";
import TPLXDatatable from "@/components/TPLXDatatable";
import YieldInputGroup from "@/components/YieldInputGroup";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import { useEffect, useState } from "react";
import { dropdownOptions, mockData, columnDef, categories } from "@/data";
import Slider from "@/components/Slider";
import YieldInput from "@/components/YieldInput";


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(mockData); // State to hold filtered data
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredData(mockData);
    } else {
      const filtered = mockData.filter((dataItem) => dataItem.type === activeCategory);
      setFilteredData(filtered);
    }
  }, [activeCategory]); // Run this effect when activeCategory changes

  const clearInputs = () => {
    setInputValue1("");
    setInputValue2("");
  };

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  if (value === "" || /^[0-9]{0,4}(\.[0-9]*)?$/.test(value)) {
    setInputValue(value);
  }
};

  const handleCategoryClick = (categoryLabel: string) => {
    setActiveCategory(categoryLabel);
  };
  const handleYieldInputChange = (index: number, value: string) => {
    if (index === 0) {
      setInputValue1(value);
    } else if (index === 1) {
      setInputValue2(value);
    }
  };
  return (
    <div className="bg-[#FFFFF4]">
      <div className="bg-[#F6F6E6]  pb-[116px] border-b-2 border-black">
        <NavigationBar />
        <h1
          className={`${FontSpaceMono.className} tracking-tight text-4xl mt-9 mb-11 text-black font-bold text-center`}
        >
          QUESTION BANKS
        </h1>
      </div>
      <div className="relative mt-[-116px] mx-auto w-[1075px] bg-[#DBF5E9] h-[177px] flex border-2 border-black self-center shadow-brut-sm justify-between">
        <div className="pl-[29px] pt-[21px]">
          <h1
            className={`${FontManrope.className} text-lg font-extrabold text-black`}
          >
            TRY OUT A QUESTION
          </h1>
          <p
            className={`${FontManrope.className} text-base text-black opacity-50 mt-2 font-medium`}
          >
            Find out how easy it is to earn with Tensorplex Guru! Try out a
            sample question!{" "}
          </p>
          <div className="mt-1">
            <Button buttonText="Start Demo" className="mr-[20px] text-white" />
            <Button buttonText="connect wallet" className="text-white"/>
          </div>
          <p
            className={`${FontManrope.className} font-extrabold text-black mt-2 opacity-50 text-sm`}
          >
            Est 2 mins
          </p>
        </div>
        <div className="relative flex w-[300px] justify-end items-center h-full">
          <img src="/grid-lines.svg" className="h-[177px] absolute" />
          <img
            src="/bitTensor-logo.svg"
            className="h-[100px] w-[100px] relative z-10 mr-[60px]"
          />
        </div>
      </div>
      <div className="mt-[18px] w-[1075px] mx-auto flex">
        <div className="flex gap-2">
          <div className="mt-[18px] w-[720px] mx-auto flex flex-wrap gap-[18px]">
            {categories.map((category) => (
              <CategoryItem
                key={category.label}
                label={category.label}
                isActive={category.label === activeCategory}
                onClick={() => handleCategoryClick(category.label)}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-[18px]">
            <DropdownContainer
              buttonText="Sort By Recency"
              imgSrc="/top-down-arrow.svg"
              className="w-[193.89px]"
            >
              <ul className="text-black opacity-75">
                {dropdownOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-2 py-[6px] text-black opacity-75 font-semibold text-base ${FontManrope.className} hover:bg-[#dbf5e9] hover:opacity-100 cursor-pointer`}
                  >
                    {option.text}
                  </li>
                ))}
              </ul>
            </DropdownContainer>
            <DropdownContainer
              buttonText="Filters"
              imgSrc="/filter-funnel.svg"
              count={"+0"}
            >
              <div className="w-[300px] px-[7px] py-[14px]">
                <YieldInputGroup
                  label="Potential Yield"
                  values={[inputValue1, inputValue2]}
                  onClear={clearInputs}
                  onChange={handleYieldInputChange}
                />
              </div>
            </DropdownContainer>
          </div>
        </div>
      </div>
      <div className="w-[1075px] mx-auto flex flex-col mt-[19px] mb-[40px]">
      <h1 className={`${FontSpaceMono.className} text-black font-bold text-[22px] mb-[19px]`}>
        SHOWING {filteredData.length} RECORDS
      </h1>
      <TPLXDatatable data={filteredData} columnDef={columnDef} pageSize={10} />
    </div>
    </div>
  );
}
