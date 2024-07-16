import { buttonVariants } from '@/components/Common/CustomButton';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import Link from 'next/link';

const FAQHero = () => {
  return (
    <div className="relative mx-auto mt-[-116px] flex h-[177px] w-[1075px] justify-between self-center border-2 border-black bg-secondary shadow-brut-sm">
      <div className="pl-[29px] pt-[21px]">
        <h1 className={`${FontManrope.className} text-lg font-extrabold text-black`}>
          {`Not what you're looking for?`}
        </h1>
        <p className={`${FontManrope.className} mt-3 text-base font-medium text-black`}>
          Dojo is a decentralized platform that leverages the collective power of human insights to train AI models.
        </p>
        <div className="mt-3">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/TensorplexLabs"
            className={cn(buttonVariants(), 'mr-[20px] font-bold capitalize text-white hover:shadow-brut-sm')}
          >
            Twitter
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/zVZbRdt6U4"
            className={cn(buttonVariants(), 'mr-[20px] font-bold capitalize text-white hover:shadow-brut-sm')}
          >
            Discord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
