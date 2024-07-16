'use client';
import { Button } from '@/components/Button';
import { CategoryItem } from '@/components/CategoryItem';
import Datatable from '@/components/Datatable';
import { DropdownContainer } from '@/components/DropDown';
import NavigationBar from '@/components/NavigationBar';
import { Pagination } from '@/components/Pagination';
import SubscriptionModal from '@/components/SubscriptionModal';
import UserCard from '@/components/UserCard';
import Web3Icon from '@/components/Wallet/web3-icon';
import { CustomButton } from '@/components/utils/custom-button';
import { categories, columnDef, dropdownOptions } from '@/data';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useEtherScanOpen } from '@/hooks/useEtherScanOpen';
import useGetTasks from '@/hooks/useGetTasks'; // Import the hook
import { useJwtToken } from '@/hooks/useJwtToken';
import { useModal } from '@/hooks/useModal';
import { usePartnerList } from '@/hooks/usePartnerList';
import { useSIWE } from '@/hooks/useSIWE';
import { useAuth } from '@/providers/authContext';
import { MODAL } from '@/providers/modals';
import { useSubmit } from '@/providers/submitContext';
import { getFirstFourLastFour } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconArrowNarrowDown, IconArrowNarrowUp, IconCopy, IconExternalLink } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

const ALL_CATEGORY = 'All';
export default function Home() {
  const { openModal } = useModal(MODAL.wallet);
  const [activeCategories, setActiveCategories] = useState<string[]>(['All']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const { isAuthenticated, isSignedIn } = useAuth();
  const { address, status, isConnected } = useAccount();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSortOrderDropdownOpen, setIsSortOrderDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sortOrderDropdownRef = useRef<HTMLDivElement>(null);
  const { signInWithEthereum } = useSIWE(() => console.log('post signin'));

  const jwtToken = useJwtToken();
  useEffect(() => {
    if (!isAuthenticated && isConnected && isSignedIn) {
      signInWithEthereum(address ?? '');
    }
  }, [isAuthenticated, isConnected, isSignedIn]);
  useEffect(() => {
    console.log('tasks', { tasks }, { jwtToken });
    if (jwtToken) {
      console.log('User is authenticated');
    }
  }, [jwtToken]);

  // const { disconnect } = useDisconnect();
  const handleCopy = useCopyToClipboard(address ?? '');
  const handleEtherscan = useEtherScanOpen(address ?? '', 'address');
  const walletManagementHandler = () => {
    openModal();
    setShowUserCard(false);
  };
  const { triggerTaskPageReload } = useSubmit();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('1');
  const { page, limit, tasks: taskTypes, sort, order, yieldMin, yieldMax } = router.query;
  const { disconnect } = useDisconnect();
  const jwtTokenKey = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'wagmi.io.metamask.disconnected') {
        window.location.reload();
      }
      if (event.key === jwtTokenKey) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [disconnect]);

  const { tasks, pagination, loading, refetchTasks } = useGetTasks(
    page ? parseInt(page as string) : parseInt(currentPage),
    limit ? parseInt(limit as string) : 10,
    taskTypes ? (taskTypes as string) : 'All', // 'All' as default task type if not provided
    sort ? (sort as string) : 'createdAt',
    order ? (order as string) : 'desc',
    yieldMin ? parseInt(yieldMin as string) : undefined,
    yieldMax ? parseInt(yieldMax as string) : undefined
  );
  const { partners, isLoading: pLoading } = usePartnerList(triggerTaskPageReload);
  const [countdown, setCountdown] = useState(120);

  // Define the function to handle polling and refetching tasks
  const handlePollingTasks = useCallback(async () => {
    if (countdown === 0) {
      await refetchTasks();
      setCountdown(120); // Reset the countdown only after refetchTasks completes
    } else {
      setCountdown((prev) => prev - 1); // Decrease the countdown
    }
  }, [countdown, refetchTasks]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) ||
      (sortOrderDropdownRef.current && !sortOrderDropdownRef.current.contains(event.target as Node))
    ) {
      setIsDropdownOpen(false);
      setIsSortOrderDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Polling Tasks
  useEffect(() => {
    if (!isAuthenticated || !isConnected) return;
    const timer = setInterval(() => {
      handlePollingTasks();
    }, 1000); // Decrease the countdown every second

    return () => clearInterval(timer);
  }, [handlePollingTasks, isAuthenticated, isConnected]);

  const handleViewClick = () => {
    setShowUserCard(false);
    setIsModalVisible(true);
  };

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = useCallback(
    (categoryLabel: string) => {
      console.log('handleCategoryClick called', categoryLabel);
      let updatedCategories: string[] = [];
      if (categoryLabel === ALL_CATEGORY) {
        setActiveCategories([ALL_CATEGORY]);
      } else {
        updatedCategories = activeCategories.includes(categoryLabel)
          ? activeCategories.filter((cat) => cat !== categoryLabel && cat !== ALL_CATEGORY) // Remove the category
          : [...activeCategories.filter((cat) => cat !== ALL_CATEGORY), categoryLabel]; // Add the category, remove "All"

        if (updatedCategories.length === 0) {
          updatedCategories = [ALL_CATEGORY];
        }
        setActiveCategories(updatedCategories);
      }

      if (updatedCategories.length === 0 || updatedCategories.includes(ALL_CATEGORY)) {
        const taskFilter = categories
          .map((cat) => cat.taskType)
          .filter((type) => type !== undefined)
          .join(',');

        const newQuery = {
          ...router.query,
          tasks: taskFilter,
        };

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
        .filter((cat) => updatedCategories.includes(cat.label))
        .map((category) => category.taskType)
        .filter((type) => type !== undefined);

      const newQuery = {
        ...router.query,
        tasks: updatedTaskTypes.join(','),
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
    [activeCategories, router]
  );

  const updateOrderSorting = useCallback(
    (sort: string) => {
      const newQuery = {
        ...router.query,
        order: sort,
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
        <NavigationBar openModal={() => setShowUserCard(true)} />
        <h1
          className={`${FontSpaceMono.className} mb-11 mt-9 text-center text-4xl font-bold tracking-tight text-black`}
        >
          TASK LIST
        </h1>
      </div>

      <div className="mx-auto mt-[18px] flex w-[1075px]">
        <div className="flex w-full  justify-between gap-2">
          <div className="mt-[18px] flex items-center gap-2">
            {categories.map((category) => (
              <CategoryItem
                key={category.label}
                label={category.label}
                isActive={activeCategories.includes(category.label)}
                onClick={() => handleCategoryClick(category.label)}
              />
            ))}
          </div>
          <div className="mt-[18px] flex gap-2">
            <div ref={dropdownRef}>
              <DropdownContainer
                buttonText={`Sort By ${params.get('sort') === 'createdAt' ? 'Most Recent' : params.get('sort') === 'numCriteria' ? 'Least Difficult' : params.get('sort') === 'numResults' ? 'Most Attempted' : 'Most Recent'}`}
                imgSrc={`${params.get('order') === 'asc' ? '/top-arrow.svg' : '/down-arrow.svg'}`}
                className="w-[193.89px]"
                onToggle={handleToggle}
                isOpen={isDropdownOpen}
              >
                <ul className="text-black opacity-75">
                  {dropdownOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`flex  text-base font-semibold text-black ${
                        params.get('sort') === option.value ? 'bg-[#dbf5e9] opacity-100' : 'opacity-75 py-1.5'
                      } ${FontManrope.className} cursor-pointer hover:bg-[#dbf5e9] hover:opacity-100  items-center justify-between`}
                    >
                      <div className="pl-1.5 h-full  min-w-[80%]" onClick={() => updateSorting(option.text)}>
                        {option.text}
                      </div>
                      <div className="w-[20%] h-full">
                        {params.get('sort') === option.value ? (
                          params.get('order') === 'asc' ? (
                            <div
                              key={index}
                              className={`px-2 py-[6px] text-base font-semibold text-black opacity-75 ${FontManrope.className} cursor-pointer hover:bg-[#dbf5e9] hover:opacity-100`}
                              onClick={() => updateOrderSorting('desc')}
                            >
                              <IconArrowNarrowUp />
                            </div>
                          ) : (
                            <div
                              key={index}
                              className={`px-2 py-[6px] text-base font-semibold text-black opacity-75 ${FontManrope.className} cursor-pointer hover:bg-[#dbf5e9] hover:opacity-100`}
                              onClick={() => updateOrderSorting('asc')}
                            >
                              <IconArrowNarrowDown />
                            </div>
                          )
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </DropdownContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[40px] mt-[19px] flex w-[1075px] flex-col">
        <div className="mb-[19px]">
          <h1 className={`${FontSpaceMono.className}text-[22px] uppercase font-bold text-black`}>
            SHOWING {tasks.length} of {pagination?.totalItems || 0} RECORDS
          </h1>
          {isAuthenticated && isConnected ? (
            <span className={`${FontSpaceMono.className} text-sm font-bold text-black opacity-60`}>
              Fetching latest tasks in {countdown}s
            </span>
          ) : null}
        </div>
        <Datatable data={tasks} columnDef={columnDef} pageSize={pagination?.pageSize || 10} isLoading={loading} />
        <div className="mt-3"></div>
        <Pagination totalPages={pagination?.totalPages || 1} handlePageChange={handlePageChange} />
        {isAuthenticated ? (
          partners.length === 0 || tasks.length <= 0 ? (
            <div className="text-center">
              <Button
                onClick={() => handleViewClick()}
                buttonText="Enter Subscription Key"
                className="cursor-not-allowed bg-primary text-white"
              />
            </div>
          ) : null
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
                  <Web3Icon size={20} address={address ?? ''}></Web3Icon>
                  {getFirstFourLastFour(address ?? '')}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-[20px] pl-5">
              <CustomButton onClick={handleCopy} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                <span className=" mr-[3px] text-xs underline underline-offset-2">COPY ADDRESS</span>{' '}
                <IconCopy className="size-4" />
              </CustomButton>
              <CustomButton onClick={handleEtherscan} className="h-fit p-0 font-bold text-[#24837B]" variant={'link'}>
                <span className="mr-[3px] text-xs underline underline-offset-2">VIEW ON ETHERSCAN</span>{' '}
                <IconExternalLink className="size-4" />
              </CustomButton>
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
