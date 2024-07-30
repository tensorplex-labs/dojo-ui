import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { useRouter } from 'next/router';
import { CustomButton } from '../../CustomButton';

const GetStartedButton = () => {
  const router = useRouter();

  return (
    <CustomButton
      className={cn(
        FontSpaceMono.className,
        'rounded-none border-[2px] border-black bg-primary text-xs uppercase text-font-secondary font-semibold hover:shadow-brut-sm md:text-sm'
      )}
      onClick={() => router.push('/task-list')}
    >
      Get started
    </CustomButton>
  );
};

export default GetStartedButton;
