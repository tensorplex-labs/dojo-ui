'use client';
import { CategoryItem } from "@/components/CategoryItem";
import { DropdownContainer } from "@/components/DropDown";
import NavigationBar from "@/components/NavigationBar";
import SubscriptionModal from "@/components/SubscriptionModal";
import { TPLXButton } from "@/components/TPLXButton";
import TPLXDatatable from "@/components/TPLXDatatable";
import UserCard from "@/components/UserCard";
import TPLXWeb3Icon from "@/components/Wallet/tplx-web3-icon";
import { categories, columnDef, dropdownOptions, mockData } from "@/data";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useEtherScanOpen } from "@/hooks/useEtherScanOpen";
import useGetTasks from "@/hooks/useGetTasks"; // Import the hook
import { useModal } from "@/hooks/useModal";
import { usePartnerList } from "@/hooks/usePartnerList";
import useRequestTaskByTaskID from "@/hooks/useRequestTaskByTaskID";
import { useAuth } from "@/providers/authContext";
import { MODAL } from "@/providers/modals";
import { useSubmit } from "@/providers/submitContext";
import { useTaskData } from "@/providers/taskContext";
import { getFirstFourLastFour } from "@/utils/math_helpers";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import {useRouter} from "next/router"
import { Button } from "@/components/Button";



const ALL_CATEGORY = "All"
export default function Home() {

  const { openModal } = useModal(MODAL.wallet);
  // const [activeCategory, setActiveCategory] = useState("All");
  const [activeCategories, setActiveCategories] = useState<string[]>(["All"]);
  const [filteredData, setFilteredData] = useState(mockData); // State to hold filtered data
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const {isAuthenticated} = useAuth();

  const { address, status, isConnected } = useAccount();
  // const { disconnect } = useDisconnect();
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');
  const walletManagementHandler = () => {
    openModal();
    setShowUserCard(false);
  }
  const {triggerTaskPageReload, setTriggerTaskPageReload} = useSubmit();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams),[searchParams]);
  const router = useRouter();

  const {
    page = 1,
    limit = 10,
    tasks: taskTypes = 'All',
    sort = 'createdAt',
    yieldMin,
    yieldMax
  } = router.query; 


  const { tasks, pagination, loading, error, refetchTasks} = useGetTasks(
    parseInt(page as string),
    parseInt(limit as string),
    taskTypes as string,
    sort as string,
    yieldMin ? parseInt(yieldMin as string) : undefined,
    yieldMax ? parseInt(yieldMax as string) : undefined
  );
  const [refetchTrigger, setRefetchTrigger] = useState(false);  
  const {partners, isLoading: pLoading} = usePartnerList(refetchTrigger)
  const { setTaskData } = useTaskData(); 
  // update the task data in the context
  setTaskData(tasks);


  console.log("tasks.....", tasks);

  const handleViewClick = () => {
    // Logic to close Wallet & API (if any)
    // For example, if you have a function to close the wallet, call it here
    // closeWallet();
    setShowUserCard(false);
    // Set showDemo to true to bring up the demo
    setIsModalVisible(true);
  };

  // Function to toggle the demo content or modal
  const toggleDemo = () => {
    setShowDemo(!showDemo);
  };

  // useEffect(() => {
  //   if (activeCategories.length == 1 && activeCategories.includes("All")) {
  //     setFilteredData(mockData);
  //   } else {
  //     const filtered = mockData.filter((dataItem) => activeCategories.includes(dataItem.type));
  //     setFilteredData(filtered);
  //   }
  // }, [activeCategories]); // Run this effect when activeCategory changes

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

  const handleCategoryClick = useCallback((categoryLabel: string) => {
    console.log("handleCategoryClick called", categoryLabel)

    /**
     * This part for computing categories
     */
  
    let updatedCategories: string[] = [];
    if (categoryLabel === ALL_CATEGORY) {
      // Directly set to all if "All" is clicked
      setActiveCategories([ALL_CATEGORY]);
    } else {
      // Compute new categories list outside the setter
      updatedCategories = activeCategories.includes(categoryLabel)
        ? activeCategories.filter(cat => cat !== categoryLabel && cat !== ALL_CATEGORY) // Remove the category
        : [...activeCategories.filter(cat => cat !== ALL_CATEGORY), categoryLabel]; // Add the category, remove "All"
  
      // Check if the list is empty and reset to "All"
      if (updatedCategories.length === 0) {
        updatedCategories = [ALL_CATEGORY];
      }
      setActiveCategories(updatedCategories);
    }

    /**
     * This part is for updating the URL, and params
     */

    if (updatedCategories.length === 0 || updatedCategories.includes(ALL_CATEGORY)) {
      // setTaskTypes(categories.map(cat => cat.taskType).filter( type => type !== undefined));
      const taskFilter= categories.map(cat => cat.taskType).filter( type => type !== undefined).join(',')

      const newQuery = {
        ...router.query,
        tasks: taskFilter
      };
    
      // Replace the current entry in the history (or use router.push for a new history entry)
      router.replace({
        pathname: router.pathname,
        query: newQuery,
      }, undefined, { shallow: true });
      return;
    } 

    const updatedTaskTypes = categories
    .filter(cat => updatedCategories.includes(cat.label))
    .map(category => category.taskType)
    .filter(type => type !== undefined);

    const newQuery = {
      ...router.query,
      tasks: updatedTaskTypes.join(',')
    };
  
    // Replace the current entry in the history (or use router.push for a new history entry)
    router.replace({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, { shallow: true });

  }, [activeCategories, router]);
    
 
  // const handleYieldInputChange = (index: number, value: string) => {
  //   if (index === 0) {
  //     setInputValue1(value);
  //   } else if (index === 1) {
  //     setInputValue2(value);
  //   }
  // };

  useEffect(()=>{
    if (router.isReady) {
      console.log("Router is ready: ", router.query)
      refetchTasks()
    }

    // setRefetchTrigger(prev => !prev);
    setTriggerTaskPageReload(false);
  },[triggerTaskPageReload, setTriggerTaskPageReload, refetchTasks, router])  


  const updateSorting = useCallback((sort: string) => {
    let sortQuery: string; 
    switch (sort) {
      case 'Most Attempted':
        sortQuery = "numResults"
        break;
      case 'Most Recent':
        sortQuery = "createdAt"
        break;
      case 'Least Questions':
        sortQuery = "numCriteria"
        break;
      default:
        sortQuery = "createdAt"
    }
    const newQuery = {
      ...router.query,
      sort: sortQuery
    };

    router.replace({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, { shallow: true });
  }, [router])


  return (
    <div className="bg-[#FFFFF4] min-h-screen">
      <div className="bg-[#F6F6E6] border-b-2 border-black">
        {/* enable pb-116 if the commented section is alive again*/}
        <NavigationBar openModal={()=>setShowUserCard(true)}/>
        <h1
          className={`${FontSpaceMono.className} tracking-tight text-4xl mt-9 mb-11 text-black font-bold text-center`}
        >
          TASK LIST
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
        <div className="flex justify-between  gap-2 w-full">
          <div className="mt-[18px] flex flex-wrap gap-2">
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
              buttonText={`Sort By ${params.get('sort') === 'createdAt' ? 'Recency' : params.get('sort')=== 'numCriteria' ? 'Least Questions' : 'Most Attempted'}`}
              imgSrc="/top-down-arrow.svg"
              className="w-[193.89px]"
            >
              <ul className="text-black opacity-75">
                {dropdownOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-2 py-[6px] text-black opacity-75 font-semibold text-base ${FontManrope.className} hover:bg-[#dbf5e9] hover:opacity-100 cursor-pointer`}
                    onClick={() => updateSorting(option.text)}
                  >
                    {option.text}
                  </li>
                ))}

              </ul>
            </DropdownContainer>
            {/* <DropdownContainer
              buttonText="Filters"
              imgSrc="/filter-funnel.svg"
              count={"+0"}
            >
              <div className="w-[300px] px-[7px] py-[14px]">
                <YieldInputGroup
                  label="Potential Yield"
                  values={['8.41', '9']}
                  onClear={clearInputs}
                  onChange={handleYieldInputChange}
                />
              </div>
            </DropdownContainer> */}
          </div>
        </div>
      </div>
      <div className="w-[1075px] mx-auto flex flex-col mt-[19px] mb-[40px]">
        <h1 className={`${FontSpaceMono.className} text-black font-bold text-[22px] mb-[19px]`}>
          SHOWING {tasks.length} RECORDS
        </h1>
        <TPLXDatatable data={tasks} columnDef={columnDef} pageSize={pagination?.pageSize || 10}/>
        {!pLoading && partners.length === 0 && isConnected && isAuthenticated ? (<div className="text-center">
          <Button onClick={()=>handleViewClick()} buttonText="Enter Subscription Key" className="text-white bg-primary cursor-not-allowed"/>
        </div>) : null}
      </div>
      {showUserCard && (
      <UserCard closeModal={setShowUserCard}>
        <div className="flex flex-col gap-[5px] w-full p-5  py-3.5 border-b-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start gap-[5px]">
              <img
                className="w-5 aspect-square"
                alt="i"
                src={"/wallet_logo/metamask_logo.svg"}
              ></img>
              <p className={`${FontManrope.className} font-bold`}>Metamask</p>
            </div>
            <div className=" inline-flex gap-2" onClick={walletManagementHandler}>
              <span className={`${FontManrope.className} gap-2 w-fit hover:cursor-pointer hover:bg-muted p-[10px] rounded-full overflow-hidden flex justify-start items-center text-black `}>
              <TPLXWeb3Icon size={20} address={address ?? ''}></TPLXWeb3Icon>
                {getFirstFourLastFour(address ?? '')}
              </span>
            </div>
          </div>
          {/* <div className={`flex items-center gap-[5px] pl-5 ${FontManrope.className} font-bold text-sm text-opacity-75`}>
            4.332stTAO
          </div> */}
          <div className="flex items-center justify-start pl-5 gap-[20px]">
            <TPLXButton
              onClick={handleCopy}
              className="text-[#24837B] p-0 h-fit font-bold"
              variant={'link'}
            >
              <span className=" text-xs mr-[3px] underline-offset-2 underline">
                COPY ADDRESS
              </span>{' '}
              <IconCopy className="w-4 h-4" />
            </TPLXButton>
            <TPLXButton
              onClick={handleEtherscan}
              className="text-[#24837B] p-0 h-fit font-bold"
              variant={'link'}
            >
              <span className="text-xs mr-[3px] underline-offset-2 underline">
                VIEW ON ETHERSCAN
              </span>{' '}
              <IconExternalLink className="w-4 h-4" />
            </TPLXButton>
          </div>
        </div>
        <div className="text-sm  flex justify-between w-full items-center p-4 border-b-2">
          <h1 className={`${FontSpaceMono.className} font-bold uppercase`}>Subscription Keys</h1>
        
          <button className={`${FontSpaceMono.className} text-[#24837B] underline font-bold`} onClick={handleViewClick}>VIEW</button>
          
        </div>
        <div className=" w-full px-4 py-5">
          <button
            onClick={walletManagementHandler}
            className={` text-white hover:shadow-brut-sm hover:cursor-pointer hover:bg-opacity-75 inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none px-4 py-2 text-xs md:text-sm rounded-none border-2 border-black h-[40px] w-full bg-[#00B6A6] ${FontSpaceMono.className} font-bold text-base uppercase`}
          >
            Manage Wallet
          </button>
        </div>
      </UserCard>
      )}
      {isModalVisible && ( <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />)}
    </div>
  );
}
