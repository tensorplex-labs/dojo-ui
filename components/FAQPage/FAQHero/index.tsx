import { buttonVariants } from '@/components/Common/CustomComponents/button';
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconBrandDiscord, IconBrandX } from '@tabler/icons-react';
import Link from 'next/link';

const FAQHero = () => {
  return (
    <div className="px-4">
      <div className="relative mx-auto mt-[-116px] flex h-fit max-w-[1075px] justify-between self-center rounded-sm border-2 border-black bg-secondary shadow-brut-sm">
        <div className="px-4 py-5 sm:px-[29px] sm:py-[21px]">
          <h1 className={`${FontManrope.className} text-base font-extrabold text-black sm:text-lg`}>
            Can&apos;t find what you&apos;re looking for?
          </h1>
          <p className={`${FontManrope.className} mt-2 text-sm font-medium text-black/60 sm:mt-3 sm:text-base`}>
            Dojo enables contributions from users of all technical levels to Decentralized AI. If you have any further
            questions or are facing any technical issues, feel free to open a ticket via Discord.
          </p>
          <div className={cn('mt-3 flex flex-col sm:flex-row gap-2 sm:gap-[10px]', FontSpaceMono.className)}>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/TensorplexLabs"
              className={cn(
                buttonVariants(),
                'w-full sm:w-auto text-xs sm:text-sm font-bold capitalize text-white hover:shadow-brut-sm justify-center'
              )}
            >
              <IconBrandX size={16} /> &nbsp;(Twitter)
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/invite/zVZbRdt6U4"
              className={cn(
                buttonVariants(),
                'w-full sm:w-auto text-xs sm:text-sm font-bold capitalize text-white hover:shadow-brut-sm justify-center'
              )}
            >
              <IconBrandDiscord size={16} className="rounded-full bg-[#7289DA] p-1" /> &nbsp;Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
