import useFeature from '@/hooks/useFeature';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface RouterProviderProps {
  children: (router: ReturnType<typeof useRouter>, exp: boolean) => ReactNode;
  expKW?: string;
}

const RouterProvider = ({ children, expKW }: RouterProviderProps) => {
  const router = useRouter();
  const { exp } = useFeature({ kw: expKW ?? 'demo' });
  return <>{children(router, exp)}</>;
};

export default RouterProvider;
