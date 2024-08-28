import useGaussianSplatViewer from '@/hooks/useGaussianViewer';
import { cn } from '@/utils/tw';
import { IconLoader } from '@tabler/icons-react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  url: string;
}

const GaussianSplatViewer = ({ url, className, ...rest }: Props) => {
  const { containerRef, ready, error } = useGaussianSplatViewer(url);

  return (
    <div className={cn(!ready && 'h-[200px]', className)}>
      {!ready && <IconLoader className="size-20 animate-spin" />}
      <div ref={containerRef} className={cn('size-full', !ready && 'hidden')} {...rest}></div>
    </div>
  );
};

export default GaussianSplatViewer;
