/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { HTMLAttributes } from 'react';
import { IconX } from '@tabler/icons-react';
import { cn } from '@/utils/tw';
import { TPLXBrutCard } from '../BrutCard';
import { FontSpaceMono } from '@/utils/typography';


interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
  header?: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
}
const TPLXModalContainer = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      headerClassName,
      bodyClassName,
      open,
      onClose,
      header,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {open && (
          <div
            onClick={(e) => onClose()}
            className="fixed bg-black/40 backdrop-blur-sm z-10 w-[10000px] h-[10000px] top-0 left-0"
          ></div>
        )}
        {open && (
          <TPLXBrutCard
            className={cn(
              `${className} p-0 z-10 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[200px]`,
            )}
          >
            <div className="flex flex-col">
              {/* header */}
              <div
                className={cn(
                  'flex items-stretch justify-center border-b-[2px] border-b-black',
                  headerClassName,
                )}
              >
                <span
                  className={cn(
                    FontSpaceMono.className,
                    'p-2 flex grow items-center justify-start font-bold',
                  )}
                >
                  {header}
                </span>
                <div
                  onClick={(e) => onClose()}
                  className="hover:cursor-pointer px-4 py-1 flex items-center justify-center border-l-[2px] border-black"
                >
                  <IconX className="w-6 h-6"></IconX>
                </div>
              </div>
              <div className={cn(bodyClassName)}>{children}</div>
            </div>
          </TPLXBrutCard>
        )}
      </>
    );
  },
);

TPLXModalContainer.displayName = 'TPLXModalContainer';

export default TPLXModalContainer;
