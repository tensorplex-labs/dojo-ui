'use client';
import NavigationBar from '@/components/Common/NavigationBar';
import { WalletManagement } from '@/components/TaskListPageComponents';
import TaskListHeader from '@/components/TaskListPageComponents/TaskListPageHeader';
import { categories as cat, columnDef, dropdownOptions } from '@/data';
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
import Datatablev2 from '@/components/Common/DataTable/Datatablev2';
import { DropdownContainer } from '@/components/Common/DropDown';
import SubscriptionModal from '@/components/Common/Modal/SubscriptionModal';
import { Pagination } from '@/components/Common/Pagination';
import CategoryItem from '@/components/TaskListPageComponents/CategoryList/CategoryItem';
import { ALL_CATEGORY } from '@/constants';
import useFeature from '@/hooks/useFeature';
import { useSIWE } from '@/hooks/useSIWE';
import { MODAL } from '@/types/ProvidersTypes';
import { cn } from '@/utils/tw';

const getCategoryObjectsFromUrlQuery = (query: string | string[] | undefined, baseCategories: any[]) => {
  if (!query) return [];
  if (typeof query === 'string') {
    const queryCategories = query.split(',');
    return baseCategories.filter((bcat) => queryCategories.includes(bcat.taskType));
  }
  if (Array.isArray(query)) {
    return baseCategories.filter((bcat) => query[0] === bcat.taskType);
  }

  return [];
};

const getUrlQueryFromCategoryObjects = (categories: any[]) => {
  return categories.map((cat) => cat.taskType).join(',');
};

const categoryIsActive = (taskType: string, query: string | string[] | undefined) => {
  if (!query) return false;
  if (typeof query === 'string') {
    return query.split(',').includes(taskType);
  }
  if (Array.isArray(query)) {
    return query.includes(taskType);
  }
  return false;
};

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
  const { exp } = useFeature({ kw: 'demo' });

  //Demo, shift it to cat when is done
  const categories = cat.concat(exp ? [{ label: '3D Model', isActive: false, taskType: '3D_MODEL' }] : []);

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
      //If all is clicked, remove all categories and just show all
      if (categoryLabel.toLowerCase() === 'all') {
        router.replace(
          {
            pathname: router.pathname,
            query: { ...router.query, tasks: undefined },
          },
          undefined,
          { shallow: true }
        );
        return;
      }
      if (!router) return;
      const activeCats = getCategoryObjectsFromUrlQuery(router.query.tasks, categories);
      // If the category is already active, remove it, else add it
      const updatedCategories = activeCats.some((cat) => cat.label.toLowerCase() === categoryLabel.toLowerCase())
        ? activeCats.filter((cat) => cat.label.toLowerCase() !== categoryLabel.toLowerCase())
        : [...activeCats, categories.find((cat) => cat.label.toLowerCase() === categoryLabel.toLowerCase())];

      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, tasks: getUrlQueryFromCategoryObjects(updatedCategories) },
        },
        undefined,
        { shallow: true }
      );
    },
    [router, categories]
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
      <div className="w-full px-4">
        <div className="mx-auto mt-[18px] flex max-w-[1075px] md:py-2 lg:py-2">
          <div className="flex w-full flex-col items-start justify-between gap-[6px]">
            <span className={cn(FontSpaceMono.className, 'font-bold text-[22px] text-font-primary')}>Task Types</span>
            <div className="flex w-full flex-wrap items-center justify-between gap-2">
              <div className="flex flex-col items-stretch gap-[8px]">
                <div className="flex flex-wrap items-center gap-2">
                  <CategoryItem
                    className="px-4"
                    key={'all'}
                    label={'All'}
                    isActive={router.query.tasks === undefined || router.query.tasks === ''}
                    onClick={() => handleCategoryClick('all')}
                  />
                  {categories.map((category) => (
                    <CategoryItem
                      key={category.label}
                      label={category.label}
                      isActive={categoryIsActive(category.taskType, router.query.tasks)}
                      onClick={() => handleCategoryClick(category.label)}
                    />
                  ))}
                </div>
              </div>
              <div className=" flex gap-2">
                {!exp && (
                  <div ref={dropdownRef}>
                    <DropdownContainer
                      buttonText={`Sort By ${params.get('sort') === 'createdAt' ? 'Most Recent' : params.get('sort') === 'numCriteria' ? 'Least Difficult' : 'Most Attempted'}`}
                      imgSrc={`${params.get('order') === 'asc' ? '/top-arrow.svg' : '/down-arrow.svg'}`}
                      isOpen={isDropdownOpen}
                      onToggle={handleToggle}
                    >
                      <div
                        className={`DropDownButton-content absolute z-10 mt-[10px] w-full overflow-hidden rounded-[18px] border border-black/10 bg-card-background`}
                      >
                        <ul className="text-black opacity-75">
                          {dropdownOptions.map((option, index) => (
                            <li
                              key={index}
                              className={`flex text-base font-semibold text-black ${
                                params.get('sort') === option.value ? 'bg-secondary opacity-100' : 'py-1.5 opacity-75'
                              } ${FontManrope.className} cursor-pointer items-center justify-between  hover:bg-secondary hover:opacity-100`}
                            >
                              <div className="h-full min-w-[80%]  pl-[11px]" onClick={() => updateSorting(option.text)}>
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
                      </div>
                    </DropdownContainer>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="mx-auto mb-[40px] mt-[19px] flex max-w-[1075px] flex-col md:py-2 lg:py-2">
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
          <Datatablev2
            tooltipShowingXofY={false}
            headerCellClassName={cn('py-2 uppercase', FontSpaceMono.className)}
            minColumnSize={10}
            defaultColumnSize={0}
            containerClassName="rounded-sm"
            tableClassName={cn('w-[1071px]', FontManrope.className)}
            data={tasks || []}
            columnDef={columnDef}
            pageSize={pagination?.pageSize || 10}
            loadingState={loading}
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
