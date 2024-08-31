import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

/**
 * @description - This hook is used to update the search params.
 * @returns {updateQueryString} - function to update the query string
 * 
 * @example
 * const { updateQueryString } = useQueryFunc();
 * updateQueryString([
      { name: 'exp', value: 'demo' },
      { name: 'addParams', value: '3d' },
    ]);
 * This will result in search params <current>&exp=demo&addParams=3d
 */
const useQueryFunc = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryString = useCallback(
    (params: Array<{ name: string; value: string }>) => {
      const updatedParams = new URLSearchParams(searchParams.toString());
      params.forEach(({ name, value }) => {
        updatedParams.set(name, value);
      });

      router.replace(`${router.pathname}?${updatedParams.toString()}`, undefined, { shallow: true });
    },
    [searchParams, router]
  );

  return { updateQueryString };
};

export default useQueryFunc;
