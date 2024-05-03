import { Button } from "@/components/Button";
import { CategoryItem } from "@/components/CategoryItem";
import { DropdownContainer } from "@/components/DropDown";
import LabelledInput from "@/components/LabelledInput";
import Modal from "@/components/Modal";
import NavigationBar from "@/components/NavigationBar";
import Slider from "@/components/Slider";
import SubscriptionTable from "@/components/SubscriptionTable";
import TPLXDatatable from "@/components/TPLXDatatable";
import YieldInput from "@/components/YieldInput";
import YieldInputGroup from "@/components/YieldInputGroup";
import { categories, columnDef, dropdownOptions, mockData } from "@/data";
import useGetTasks from "@/hooks/useGetTasks"; // Import the hook
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import { useEffect, useState } from "react";
import { useAccount, useSignMessage } from "wagmi";


export default function Home() {
  // const [activeCategory, setActiveCategory] = useState("All");
  const [activeCategories, setActiveCategories] = useState<string[]>(["All"]);
  const [filteredData, setFilteredData] = useState(mockData); // State to hold filtered data
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [taskTypes, setTaskTypes] = useState(['CODE_GENERATION', 'DIALOGUE']);
  const [sort, setSort] = useState('createdAt');
  const [yieldMin, setYieldMin] = useState(0);
  const [yieldMax, setYieldMax] = useState(10);
  const { address, status } = useAccount();

  const { tasks, pagination, loading, error } = useGetTasks(page, limit, taskTypes, sort, yieldMin, yieldMax);

  const subscriptionsData = [
    // This data would come from your state or props
    { name: 'Miner 1', subscriptionKey: 'sk-xxxxxx...xxxxxx', created: '2023-04-01' },
    { name: 'Miner 1', subscriptionKey: 'sk-xxxxxx...xxxxxx', created: '2023-04-02' },
    // ... more data
  ];

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };
  // Function to toggle the demo content or modal
  const toggleDemo = () => {
    setShowDemo(!showDemo);
  };

  useEffect(() => {
    if (activeCategories.length == 1 && activeCategories.includes("All")) {
      setFilteredData(mockData);
    } else {
      const filtered = mockData.filter((dataItem) => activeCategories.includes(dataItem.type));
      setFilteredData(filtered);
    }
  }, [activeCategories]); // Run this effect when activeCategory changes

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
    if (categoryLabel === "All") {
      setActiveCategories(['All']);
      return;
    }
    let updatedCategories: any[] = [];
    setActiveCategories(prevCategories => {
      // Check if the category is already active
      if (prevCategories.includes(categoryLabel)) {
        // If it is, remove it from the array
        updatedCategories = prevCategories.filter(category => category !== categoryLabel && category !== 'All');
      } else {
        // If it's not, add it to the array
        updatedCategories = [...prevCategories.filter(category => category !== 'All'), categoryLabel];
      }
      return updatedCategories;
    });

    const taskTypes: string[] = categories.filter(category => updatedCategories.includes(category.label)).map(category => category?.taskType).filter((taskType): taskType is string => typeof taskType === 'string');
    console.info('taskTypes', taskTypes)
    setTaskTypes(taskTypes);

  };
  const handleYieldInputChange = (index: number, value: string) => {
    if (index === 0) {
      setInputValue1(value);
    } else if (index === 1) {
      setInputValue2(value);
    }
  };
  return (
    <div className="bg-[#FFFFF4] min-h-screen">
      <div className="bg-[#F6F6E6] border-b-2 border-black">
        {/* enable pb-116 if the commented section is alive again*/}
        <NavigationBar />
        <h1
          className={`${FontSpaceMono.className} tracking-tight text-4xl mt-9 mb-11 text-black font-bold text-center`}
        >
          QUESTION BANKS
        </h1>
      </div>
{/*
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
            <Button
              buttonText="Start Demo"
              className="mr-[20px] text-white"
              onClick={toggleDemo} // Attach the toggle function to the onClick event
            />            <Button buttonText="connect wallet" className="text-white" />
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
      </div> */}
      <div className="mt-[18px] w-[1075px] mx-auto flex">
        <div className="flex gap-2">
          <div className="mt-[18px] w-[720px] mx-auto flex flex-wrap gap-[18px]">
            {categories.map((category) => (
              <CategoryItem
                key={category.label}
                label={category.label}
                isActive={activeCategories.includes(category.label)}
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
          SHOWING {tasks.length} RECORDS
        </h1>
        <TPLXDatatable data={tasks} columnDef={columnDef} pageSize={pagination?.pageSize || 10} />
      </div>
      {showDemo && (
        <Modal
          showModal={isModalVisible}
          setShowModal={setIsModalVisible}
          title="SUBSCRIPTION KEYS"
          btnText="Close"
        >
          <div className='bg-[#DBF5E9] w-full px-[22px] py-[15px] text-black'>
            <div>
              <h1 className={`${FontSpaceMono.className} font-bold text-base`}>ENTER SUBSCRIPTION KEY</h1>
              <h2 className={`${FontManrope.className} font-medium text-base opacity-60`}>Obtain subscription key from miners</h2>
            </div>
            <div className={` flex-row`}>
              <div className="flex flex-row justify-between">
                <div className="flex mr-2">
                  <LabelledInput
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    value={inputValue1}
                    onChange={handleInputChange1}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <LabelledInput
                    id="subscriptionKey"
                    label="SUBSCRIPTION KEY"
                    type="text"
                    placeholder="Enter Subscription Key Here"
                    value={inputValue2}
                    onChange={handleInputChange2}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className=" px-[18px] py-[10px] text-base h-auto bg-[#00B6A6] font-spacemono text-white border-2 border-black uppercase cursor-pointer shadow-brut-sm font-bold hover:bg-opacity-80 active:border-b-2"
                  onClick={() => { }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <SubscriptionTable data={subscriptionsData} />
        </Modal>
      )}
    </div>
  );
}
