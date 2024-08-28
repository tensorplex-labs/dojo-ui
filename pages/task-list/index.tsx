'use client';
import Datatable from '@/components/Common/DataTable';
import NavigationBar from '@/components/Common/NavigationBar';
import { WalletManagement } from '@/components/TaskListPageComponents';
import TaskListHeader from '@/components/TaskListPageComponents/TaskListPageHeader';
import { categories, columnDef, dropdownOptions } from '@/data';
import useDropdown from '@/hooks/useDropdown';
import useGetTasks from '@/hooks/useGetTasks'; // Import the hook
import { useModal } from '@/hooks/useModal';
import { usePartnerList } from '@/hooks/usePartnerList';
import useSorting from '@/hooks/useSorting';
import { useAuth } from '@/providers/authContext';
import { useSubmit } from '@/providers/submitContext';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconArrowNarrowDown, IconArrowNarrowUp } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

import { Button } from '@/components/Common/Button';
import { DropdownContainer } from '@/components/Common/DropDown';
import SubscriptionModal from '@/components/Common/Modal/SubscriptionModal';
import { Pagination } from '@/components/Common/Pagination';
import CategoryItem from '@/components/TaskListPageComponents/CategoryList/CategoryItem';
import { ALL_CATEGORY } from '@/constants';
import { useSIWE } from '@/hooks/useSIWE';
import { MODAL } from '@/types/ProvidersTypes';

export default function Index() {
  const [activeCategories, setActiveCategories] = useState<string[]>([ALL_CATEGORY]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const [countdown, setCountdown] = useState(120);

  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { openModal } = useModal(MODAL.wallet);
  const { updateSorting } = useSorting();
  const { isDropdownOpen, handleToggle, handleClickOutside, dropdownRef } = useDropdown();
  const { address, isConnected } = useAccount();
  const { triggerTaskPageReload } = useSubmit();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const [currentPage, setCurrentPage] = useState<string>('1');
  const { page, limit, tasks: taskTypes, sort, order, yieldMin, yieldMax } = router.query;
  const { disconnect } = useDisconnect();
  const { isSignedIn } = useAuth();
  const { signInWithEthereum } = useSIWE(() => console.log('post signin'));
  const jwtTokenKey = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
  useEffect(() => {
    if (!isAuthenticated && isConnected && isSignedIn) {
      signInWithEthereum(address ?? '');
    }
  }, [isAuthenticated, isConnected, isSignedIn]);
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
    taskTypes ? (taskTypes as string) : 'All',
    sort ? (sort as string) : 'createdAt',
    order ? (order as string) : 'desc',
    isConnected,
    isAuthenticated,
    yieldMin ? parseInt(yieldMin as string) : undefined,
    yieldMax ? parseInt(yieldMax as string) : undefined
  );
  const { partners } = usePartnerList(triggerTaskPageReload);
  const handlePollingTasks = useCallback(async () => {
    if (countdown === 0) {
      await refetchTasks();
      setCountdown(120); // Reset the countdown only after refetchTasks completes
    } else {
      setCountdown((prev) => prev - 1); // Decrease the countdown
    }
  }, [countdown, refetchTasks]);

  useEffect(() => {
    if (!isAuthenticated || !isConnected) return;
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const timer = setInterval(handlePollingTasks, 1000);
    return () => clearInterval(timer);
  }, [handlePollingTasks]);

  const handleCategoryClick = useCallback(
    (categoryLabel: string) => {
      console.log('handleCategoryClick called', categoryLabel);

      let updatedCategories: string[] = [];

      if (categoryLabel === ALL_CATEGORY) {
        setActiveCategories([ALL_CATEGORY]);
      } else {
        updatedCategories = activeCategories.includes(categoryLabel)
          ? activeCategories.filter((cat) => cat !== categoryLabel && cat !== ALL_CATEGORY)
          : [...activeCategories.filter((cat) => cat !== ALL_CATEGORY), categoryLabel];

        if (updatedCategories.length === 0) {
          updatedCategories = [ALL_CATEGORY];
        }
        setActiveCategories(updatedCategories);
      }
      const taskFilter = updatedCategories.includes(ALL_CATEGORY)
        ? categories
            .map((cat) => cat.taskType)
            .filter(Boolean)
            .join(',')
        : categories
            .filter((cat) => updatedCategories.includes(cat.label))
            .map((category) => category.taskType)
            .filter(Boolean)
            .join(',');

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
          query: { ...router.query, tasks: taskFilter },
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

  const handleWalletConnect = async () => {
    openModal();
  };
  const handlePageChange = (pageIndex: number | string) => {
    setCurrentPage(pageIndex.toString());
  };

  const handleViewClick = () => {
    setShowUserCard(false);
    setIsModalVisible(true);
  };

  return (
    <div className="min-h-screen bg-primaryBG-bg">
      <div className="border-b-2 border-black bg-ecru-white">
        <NavigationBar openModal={() => setShowUserCard(true)} />
        <TaskListHeader />
      </div>
      <div className="relative mx-auto mt-[-116px] flex h-[177px] max-w-[1075px] justify-between self-center border-2 border-black bg-[#DBF5E9] shadow-brut-sm">
        <div className="pl-[29px] pt-[21px]">
          <h1 className={`${FontManrope.className} text-lg font-extrabold text-black`}>TRY OUT A QUESTION</h1>
          <p className={`${FontManrope.className} mt-2 text-base font-medium text-black opacity-50`}>
            Find out how easy it is to earn with Tensorplex Dojo! Try out a sample question!
          </p>
          <div className="mt-1">
            {!isAuthenticated && !isConnected ? (
              <>
                <Button buttonText={'Start Demo'} className="mr-[20px] text-white" onClick={handleWalletConnect} />
                <Button
                  buttonText={'connect wallet'}
                  className="text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                  onClick={handleWalletConnect}
                />
              </>
            ) : (
              <Button
                buttonText={'Start Demo'}
                className="mr-[20px] text-white"
                onClick={() => {
                  router.push(`/Questions?taskId=28ea5921-7ff2-4080-b306-b6aa89adc079`);
                }} // Attach the toggle function to the onClick event
              />
            )}
          </div>
          <p className={`${FontManrope.className} mt-2 text-sm font-extrabold text-black opacity-50`}>Est 2 mins</p>
        </div>
        <div className="relative flex h-full w-[300px] items-center justify-end">
          <img src="/grid-lines.svg" className="absolute h-[177px]" />
          <img src="/bitTensor-logo.svg" className="relative z-10 mr-[60px] size-[100px]" />
        </div>
      </div>

      <div className="mx-auto mt-[18px] flex w-[1075px]">
        <div className="flex w-full justify-between gap-2">
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
                buttonText={`Sort By ${params.get('sort') === 'createdAt' ? 'Most Recent' : params.get('sort') === 'numCriteria' ? 'Least Difficult' : 'Most Attempted'}`}
                imgSrc={`${params.get('order') === 'asc' ? '/top-arrow.svg' : '/down-arrow.svg'}`}
                className="w-[193.89px]"
                isOpen={isDropdownOpen}
                onToggle={handleToggle}
              >
                <ul className="text-black opacity-75">
                  {dropdownOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`flex  text-base font-semibold text-black ${
                        params.get('sort') === option.value ? 'bg-secondary opacity-100' : 'py-1.5 opacity-75'
                      } ${FontManrope.className} cursor-pointer items-center justify-between  hover:bg-secondary hover:opacity-100`}
                    >
                      <div className="h-full min-w-[80%]  pl-1.5" onClick={() => updateSorting(option.text)}>
                        {option.text}
                      </div>
                      <div className="h-full w-1/5">
                        {params.get('sort') === option.value ? (
                          params.get('order') === 'asc' ? (
                            <div
                              key={index}
                              className={`px-2 py-[6px] text-base font-semibold text-black opacity-75 ${FontManrope.className} cursor-pointer hover:bg-secondary hover:opacity-100`}
                              onClick={() => updateOrderSorting('desc')}
                            >
                              <IconArrowNarrowUp />
                            </div>
                          ) : (
                            <div
                              key={index}
                              className={`px-2 py-[6px] text-base font-semibold text-black opacity-75 ${FontManrope.className} cursor-pointer hover:bg-secondary hover:opacity-100`}
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
          <h1 className={`${FontSpaceMono.className} text-[22px] font-bold uppercase text-black`}>
            SHOWING {tasks.length} of {pagination?.totalItems || 0} RECORDS
          </h1>
          {isAuthenticated && isConnected ? (
            <span className={`${FontSpaceMono.className} text-sm font-bold text-black opacity-60`}>
              Fetching latest tasks in {countdown}s
            </span>
          ) : null}
        </div>
        <Datatable
          data={(isConnected && isAuthenticated && tasks) || []}
          columnDef={columnDef}
          pageSize={pagination?.pageSize || 10}
          isLoading={loading}
        />
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
        <WalletManagement
          address={address || ''}
          openModal={openModal}
          closeModal={setShowUserCard}
          setShowUserCard={setShowUserCard}
          setShowSubscriptionCard={setIsModalVisible}
        />
      )}
      {isModalVisible && <SubscriptionModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />}
    </div>
  );
}
