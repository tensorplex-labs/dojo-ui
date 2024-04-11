/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';
import { cn } from '@/utils/tw';
import Link from 'next/link';
import React, { HTMLAttributes, ReactNode, useState } from 'react';

export interface HeaderItem {
  title: string;
  url: string;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  menuItems: HeaderItem[];
  logo?: ReactNode;
}
const TPLXMobileMenu = ({ className, menuItems, logo, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          setIsOpen((prev) => !prev);
        }}
        className={cn(
          'hover:cursor-pointer relative flex flex-col gap-[4px]',
          className,
        )}
      >
        <div className="w-[20px] h-[3px] rounded-full bg-muted-foreground"></div>
        <div className="w-[20px] h-[3px] rounded-full bg-muted-foreground"></div>
        <div className="w-[20px] h-[3px] rounded-full bg-muted-foreground"></div>
      </div>
      <div
        style={{ transform: `translate(${isOpen ? '0%' : '120%'})` }}
        className={cn(
          'md:hidden z-50 transition-all duration-300 right-6 bg-white fixed w-[250px] h-[90vh] top-[5%] bottom-[5%]',
          'bg-background shadow-brut-md border-[2px] border-font-primary',
          'flex flex-col',
        )}
      >
        <Link className="p-3" href="/">
          {logo ? logo : 'logo'}
        </Link>
        <hr className="bg-font-primary h-[2px]"></hr>
        <div
          onClick={(e) => {
            setIsOpen(false);
          }}
          className="p-3 flex flex-col gap-[8px]"
        >
          {menuItems.map((v, idx) => {
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
      <div
        onClick={(e) => setIsOpen((prev) => !prev)}
        className={cn(
          'z-40 md:hidden fixed top-0 left-0 w-[100vw] h-[100vh] bg-font-primary/20 backdrop-blur-sm',
          !isOpen && 'hidden',
        )}
      ></div>
    </>
  );
};

export default TPLXMobileMenu;
