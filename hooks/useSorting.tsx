import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useSorting = () => {
  const router = useRouter();

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

  return { updateSorting };
};

export default useSorting;
