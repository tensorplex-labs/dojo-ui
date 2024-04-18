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
        onClick={e => {
          setIsOpen(prev => !prev);
        }}
        className={cn('relative flex flex-col gap-[4px] hover:cursor-pointer', className)}
      >
        <div className="h-[3px] w-[20px] rounded-full bg-muted-foreground"></div>
        <div className="h-[3px] w-[20px] rounded-full bg-muted-foreground"></div>
        <div className="h-[3px] w-[20px] rounded-full bg-muted-foreground"></div>
      </div>
      <div
        style={{ transform: `translate(${isOpen ? '0%' : '120%'})` }}
        className={cn(
          'fixed bottom-[5%] right-6 top-[5%] z-50 h-[90vh] w-[250px] bg-white transition-all duration-300 md:hidden',
          'border-[2px] border-font-primary bg-background shadow-brut-md',
          'flex flex-col'
        )}
      >
        <Link className="p-3" href="/public">
          {logo || 'logo'}
        </Link>
        <hr className="h-[2px] bg-font-primary"></hr>
        <div
          onClick={e => {
            setIsOpen(false);
          }}
          className="flex flex-col gap-[8px] p-3"
        >
          {menuItems.map((v, idx) => {
            return (
              <Link
                className={cn(
                  'text-font-primary visited:text-font-primary hover:cursor-pointer hover:text-primary hover:underline'
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
        onClick={e => setIsOpen(prev => !prev)}
        className={cn(
          'fixed left-0 top-0 z-40 h-[100vh] w-[100vw] bg-font-primary/20 backdrop-blur-sm md:hidden',
          !isOpen && 'hidden'
        )}
      ></div>
    </>
  );
};

export default TPLXMobileMenu;
