import { headerItems } from '@/data';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
// import TPLXFooterGitbookLogo from './tplx-footer-gitbook-logo.svg';
// import TPLXFooterDiscordLogo from '/tplx-footer-discord-logo.svg';
// import TPLXFooterTelegramLogo from '/tplx-footer-telegram-logo.svg';
// import TPLXFooterXLogo from '/tplx-footer-x-logo.svg';

type FooterLink = {
  url: string;
  alt: string;
  image: React.ReactNode;
};

const footerLinks: Array<FooterLink> = [
  {
    url: 'https://twitter.com/TensorplexLabs',
    alt: 'Twitter',
    image: <img src='../twitter.png' className="size-[36px]" />,
  },
  {
    url: 'https://t.me/+ug7C1J7Apf8wNzc1/',
    alt: 'Telegram',
    image: <img src='../telegram.png' className="size-[36px]" />,
  },
  {
    url: 'https://discord.com/invite/zVZbRdt6U4',
    alt: 'Discord',
    image: <img src='../discord.png' className="size-[36px]" />,
  },
  {
    url: 'https://tensorplex.gitbook.io/tensorplex-docs/',
    alt: 'Gitbook',
    image: <img src='../gitbook.png' className="size-[36px]" />,

  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TPLXFooter = ({ className, ...props }: Props) => {
  return (
    <div className="bg-background-accent ">
      <div
        className={cn(
          'border-t-[2px] border-font-primary flex flex-col w-full items-center',
          'px-4 py-4',
        )}
      >
        <div
          className={cn(
            'w-full  flex flex-col flex-wrap justify-between max-w-[1075px] gap-2',
            className,
          )}
        >
          <div className="flex flex-col flex-wrap items-center justify-between gap-2 sm:flex-row">
            <Link href="/">
              <img className="h-[30px]" src="/logo.svg" alt="logo" />
            </Link>
            <div className={cn(`flex justify-between ${FontManrope.className} text-xl font-bold items-center gap-[15px]`)}>
              {headerItems.map((v, idx) => {
                return (
                  <Link
                    className={cn(
                      'text-font-primary hover:cursor-pointer visited:text-font-primary hover:underline hover:text-primary',
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
          <div className={`w-full ${FontManrope.className} flex items-center justify-center gap-0 text-xl font-bold sm:justify-start`}>
            {footerLinks.map((link, idx) => {
              return (
                <a
                  key={`footerlink_${link.alt}_${idx}`}
                  target="_blank"
                  rel="noreferrer"
                  href={link.url}
                >
                  {link.image}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-t-2 border-muted px-4 py-2">
        <div
          className={cn(
            'max-w-[1075px] grow text-muted-foreground text-xs text-center sm:text-start',
          )}
        >
          ©2024 Tensorplex Labs - All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default TPLXFooter;
