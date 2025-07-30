import useGaussianSplatViewer from '@/hooks/useGaussianViewer';
import { cn } from '@/utils/tw';
import { IconLoader } from '@tabler/icons-react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  url: string;
  disableKeyboards?: boolean;
}

const GaussianSplatViewer = ({ url, className, disableKeyboards, ...rest }: Props) => {
  const { containerRef, ready, error } = useGaussianSplatViewer(url, { disableKeyboards });
  console.log('ready', ready, url);
  return (
    <div className={cn(!ready && 'h-[200px]', className)}>
      {!ready && <IconLoader className="size-20 animate-spin" />}
      <div ref={containerRef} className={cn('size-full', !ready && 'hidden')} {...rest}></div>
    </div>
  );
};

export default GaussianSplatViewer;
