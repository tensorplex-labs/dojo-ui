import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { cn } from '@/utils/tw';
import { IconCopy } from '@tabler/icons-react';

interface Props {
  copyString: string;
  className?: string;
}
const CopyBtn = ({ copyString, className }: Props) => {
  const handleCopy = useCopyToClipboard(copyString);
  return <IconCopy className={cn('hover:cursor-pointer', className)} onClick={(e) => handleCopy()}></IconCopy>;
};

export default CopyBtn;
