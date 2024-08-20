import { CustomButton } from '@/components/Common/CustomComponents/button';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { useRouter } from 'next/router';

const GetStartedButton = () => {
  const router = useRouter();

  return (
    <CustomButton
      className={cn(
        FontSpaceMono.className,
        // 'rounded-[10px] z-50 cursor-pointer border-none bg-[#00B6A6] text-lg font-bold uppercase text-font-secondary text-white hover:shadow-brut-sm md:text-lg'
        'rounded-none !h-[30px] border-[2px] border-black bg-primary text-xs uppercase text-font-secondary font-semibold hover:shadow-brut-sm md:text-sm'
      )}
      onClick={() => router.push('/task-list')}
    >
      Get started
    </CustomButton>
  );
};

export default GetStartedButton;
