import { headerItems } from '@/data';
import TPLXFooterDiscordLogo from '@/public/footer_logo/tplx-footer-discord-logo';
import TPLXFooterGitbookLogo from '@/public/footer_logo/tplx-footer-gitbook-logo';
import TPLXFooterTelegramLogo from '@/public/footer_logo/tplx-footer-telegram-logo';
import TPLXFooterXLogo from '@/public/footer_logo/tplx-footer-x-logo';
import { cn } from '@/utils/tw';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

type FooterLink = {
  url: string;
  alt: string;
  image: React.ReactNode;
};

const footerLinks: Array<FooterLink> = [
  {
    url: 'https://twitter.com/TensorplexLabs',
    alt: 'Twitter',
    image: <TPLXFooterXLogo className="size-[36px]"></TPLXFooterXLogo>,
  },
  {
    url: 'https://t.me/+ug7C1J7Apf8wNzc1/',
    alt: 'Telegram',
    image: <TPLXFooterTelegramLogo className="size-[36px]"></TPLXFooterTelegramLogo>,
  },
  {
    url: 'https://discord.com/invite/zVZbRdt6U4',
    alt: 'Discord',
    image: <TPLXFooterDiscordLogo className="size-[36px]"></TPLXFooterDiscordLogo>,
  },
  {
    url: 'https://tensorplex.gitbook.io/tensorplex-docs/',
    alt: 'Gitbook',
    image: <TPLXFooterGitbookLogo className="size-[36px]"></TPLXFooterGitbookLogo>,
  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TPLXFooter = ({ className, ...props }: Props) => {
  return (
    <div className="bg-background-accent w-full">
      <div className={cn('border-t-[2px] border-font-primary flex flex-col w-full items-center', 'px-4 py-4')}>
        <div className={cn('w-full  flex flex-col flex-wrap justify-between max-w-[1100px] gap-2', className)}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-between items-center">
            <Link href="/">
              <img className="h-[30px]" src="/logo.svg" alt="logo" />
            </Link>
            <div className={cn(`flex justify-between items-center gap-[15px]`)}>
              {headerItems.map((v, idx) => {
                return (
                  <Link
                    className={cn(
                      'text-font-primary hover:cursor-pointer visited:text-font-primary hover:underline hover:text-primary'
                    )}
                    key={`header.menu.${idx}`}
                    href={v.url}
                  >
                    {v.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Logos */}
          <div className={`w-full gap-[0px] flex flex-col sm:flex-row justify-center sm:justify-between items-center`}>
            <div
              className={cn(
                'max-w-[1100px] grow text-muted-foreground text-xs text-center sm:text-start hidden sm:flex'
              )}
            >
              ©2024 Tensorplex Labs - All rights reserved.
            </div>
            <div className="flex">
              {footerLinks.map((link, idx) => {
                return (
                  <a key={`footerlink_${link.alt}_${idx}`} target="_blank" rel="noreferrer" href={link.url}>
                    {link.image}
                  </a>
                );
              })}
            </div>
            <div
              className={cn('max-w-[1100px] grow text-muted-foreground text-xs text-center sm:text-start sm:hidden')}
            >
              ©2024 Tensorplex Labs - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPLXFooter;
