'use client';
import { Button } from '@/components/Button';
import { CategoryItem } from '@/components/CategoryItem';
import { DropdownContainer } from '@/components/DropDown';
import NavigationBar from '@/components/NavigationBar';
import { Pagination } from '@/components/Pagination';
import SubscriptionModal from '@/components/SubscriptionModal';
import { TPLXButton } from '@/components/TPLXButton';
import TPLXDatatable from '@/components/TPLXDatatable';
import UserCard from '@/components/UserCard';
import TPLXWeb3Icon from '@/components/Wallet/tplx-web3-icon';
import { categories, columnDef, dropdownOptions, mockData } from '@/data';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import useGetTasks from '@/hooks/useGetTasks'; // Import the hook
import { useModal } from '@/hooks/useModal';
import { usePartnerList } from '@/hooks/usePartnerList';
import { useAuth } from '@/providers/authContext';
import { MODAL } from '@/providers/modals';
import { useSubmit } from '@/providers/submitContext';
import { useTaskData } from '@/providers/taskContext';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCopy, IconExternalLink } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';

const ALL_CATEGORY = 'All';
export default function Home() {
  const { openModal } = useModal(MODAL.wallet);
  // const [activeCategory, setActiveCategory] = useState("All");
  const [activeCategories, setActiveCategories] = useState<string[]>(['All']);
  const [filteredData, setFilteredData] = useState(mockData); // State to hold filtered data
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const { isAuthenticated } = useAuth();

  const { address, status, isConnected } = useAccount();
  // const { disconnect } = useDisconnect();
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');
  const walletManagementHandler = () => {
    openModal();
    setShowUserCard(false);
  };
  const { triggerTaskPageReload, setTriggerTaskPageReload } = useSubmit();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('1');
  const { page, limit, tasks: taskTypes, sort, yieldMin, yieldMax } = router.query;

  const { tasks, pagination, loading } = useGetTasks(
    page ? parseInt(page as string) : parseInt(currentPage),
    limit ? parseInt(limit as string) : 10,
    taskTypes ? (taskTypes as string) : 'All', // 'All' as default task type if not provided
    sort ? (sort as string) : 'createdAt',
    yieldMin ? parseInt(yieldMin as string) : undefined,
    yieldMax ? parseInt(yieldMax as string) : undefined
  );
  const { partners, isLoading: pLoading } = usePartnerList(triggerTaskPageReload);
  const { setTaskData, setPagination } = useTaskData();
  // update the task data in the context

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
    setInputValue1('');
    setInputValue2('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '' || /^[0-9]{0,4}(\.[0-9]*)?$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleCategoryClick = useCallback(
    (categoryLabel: string) => {
      console.log('handleCategoryClick called', categoryLabel);

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
        const taskFilter = categories
          .map(cat => cat.taskType)
          .filter(type => type !== undefined)
          .join(',');

        const newQuery = {
          ...router.query,
          tasks: taskFilter,
        };

        // Replace the current entry in the history (or use router.push for a new history entry)
        router.replace(
          {
            pathname: router.pathname,
            query: newQuery,
          },
          undefined,
          { shallow: true }
        );
        return;
      }

      const updatedTaskTypes = categories
        .filter(cat => updatedCategories.includes(cat.label))
        .map(category => category.taskType)
        .filter(type => type !== undefined);

      const newQuery = {
        ...router.query,
        tasks: updatedTaskTypes.join(','),
      };

      // Replace the current entry in the history (or use router.push for a new history entry)
      router.replace(
        {
          pathname: router.pathname,
          query: newQuery,
        },
        undefined,
        { shallow: true }
      );
    },
    [activeCategories, router]
  );

  // const handleYieldInputChange = (index: number, value: string) => {
  //   if (index === 0) {
  //     setInputValue1(value);
  //   } else if (index === 1) {
  //     setInputValue2(value);
  //   }
  // };

  useEffect(() => {
    if (tasks && tasks.length > 0) setTaskData(tasks);
    if (pagination) setPagination(pagination);
  }, [tasks, pagination, setTaskData, setPagination]);

  const updateSorting = useCallback(
    (sort: string) => {
      let sortQuery: string;
      switch (sort) {
        case 'Most Attempted':
          sortQuery = 'numResults';
          break;
        case 'Most Recent':
          sortQuery = 'createdAt';
          break;
        case 'Least Difficult':
          sortQuery = 'numCriteria';
          break;
        default:
          sortQuery = 'createdAt';
      }
      const newQuery = {
        ...router.query,
        sort: sortQuery,
      };

      router.replace(
        {
          pathname: router.pathname,
          query: newQuery,
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const handlePageChange = (pageIndex: number | string) => {
    setCurrentPage(pageIndex.toString());
  };

  return (
    <div className="min-h-screen bg-[#FFFFF4]">
      <div className="border-b-2 border-black bg-[#F6F6E6]">
        {/* enable pb-116 if the commented section is alive again*/}
        <NavigationBar openModal={() => setShowUserCard(true)} />
        <h1
          className={`${FontSpaceMono.className} mb-11 mt-9 text-center text-4xl font-bold tracking-tight text-black`}
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
      <div className="mx-auto mt-[18px] flex w-[1075px]">
        <div className="flex w-full  justify-between gap-2">
          <div className="mt-[18px] flex flex-wrap gap-2">
            {categories.map(category => (
              <CategoryItem
                key={category.label}
                label={category.label}
                isActive={activeCategories.includes(category.label)}
                onClick={() => handleCategoryClick(category.label)}
              />
            ))}
          </div>
          <div className="mt-[18px] flex gap-2">
            <DropdownContainer
              buttonText={`Sort By ${params.get('sort') === 'createdAt' ? 'Most Recent' : params.get('sort') === 'numCriteria' ? 'Least Difficult' : 'Most Attempted'}`}
              imgSrc="/top-down-arrow.svg"
              className="w-[193.89px]"
            >
              <ul className="text-black opacity-75">
                {dropdownOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-2 py-[6px] text-base font-semibold text-black opacity-75 ${FontManrope.className} cursor-pointer hover:bg-[#dbf5e9] hover:opacity-100`}
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
      <div className="mx-auto mb-[40px] mt-[19px] flex w-[1075px] flex-col">
        <h1 className={`${FontSpaceMono.className} mb-[19px] text-[22px] font-bold text-black`}>
          SHOWING {tasks.length} RECORDS
        </h1>
        <TPLXDatatable data={tasks} columnDef={columnDef} pageSize={pagination?.pageSize || 10} isLoading={loading} />
        <div className=" mt-3"></div>
        <Pagination totalPages={pagination?.totalPages || 1} handlePageChange={handlePageChange} />
        {partners.length === 0 || tasks.length <= 0 ? (
          <div className="text-center">
            <Button
              onClick={() => handleViewClick()}
              buttonText="Enter Subscription Key"
              className="cursor-not-allowed bg-primary text-white"
            />
          </div>
        ) : null}
      </div>
      {showUserCard && (
        <UserCard closeModal={setShowUserCard}>
          <div className="flex w-full flex-col gap-[5px] border-b-2  p-5 py-3.5">
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-start gap-[5px]">
                <img className="aspect-square w-5" alt="i" src={'/wallet_logo/metamask_logo.svg'}></img>
                <p className={`${FontManrope.className} font-bold`}>Metamask</p>
              </div>
              <div className=" inline-flex gap-2" onClick={walletManagementHandler}>
                <span
                  className={`${FontManrope.className} flex w-fit items-center justify-start gap-2 overflow-hidden rounded-full p-[10px] text-black hover:cursor-pointer hover:bg-muted `}
                >
                  <TPLXWeb3Icon size={20} address={address ?? ''}></TPLXWeb3Icon>
                  {getFirstFourLastFour(address ?? '')}
                </span>
              </div>
            </div>
            {/* <div className={`flex items-center gap-[5px] pl-5 ${FontManrope.className} font-bold text-sm text-opacity-75`}>
            4.332stTAO
          </div> */}
            <div className="flex items-center justify-start gap-[20px] pl-5">
              <TPLXButton onClick={handleCopy} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
                <IconCopy className="size-4" />
              </TPLXButton>
              <TPLXButton onClick={handleEtherscan} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                <span className="mr-[3px] text-xs underline underline-offset-2">VIEW ON ETHERSCAN</span>{' '}
                <IconExternalLink className="size-4" />
              </TPLXButton>
            </div>
          </div>
          <div className="flex  w-full items-center justify-between border-b-2 p-4 text-sm">
            <h1 className={`${FontSpaceMono.className} font-bold uppercase`}>Subscription Keys</h1>

            <button
              className={`${FontSpaceMono.className} font-bold text-[#24837B] underline`}
              onClick={handleViewClick}
            >
              VIEW
            </button>
          </div>
          <div className=" w-full px-4 py-5">
            <button
              onClick={walletManagementHandler}
              className={`focus-visible:ring-ring inline-flex h-[40px] w-full items-center justify-center whitespace-nowrap rounded-none border-2 border-black bg-[#00B6A6] px-4 py-2 text-xs text-white ring-offset-background transition-colors hover:cursor-pointer hover:bg-opacity-75 hover:shadow-brut-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none md:text-sm ${FontSpaceMono.className} text-base font-bold uppercase`}
            >
              Manage Wallet
            </button>
          </div>
        </UserCard>
      )}
      {isModalVisible && <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />}
    </div>
  );
}
