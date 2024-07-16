/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ModalContainerProps } from '@/types/CommonTypes';
import { cn } from '@/utils/tw';
import { FontSpaceMono } from '@/utils/typography';
import { IconX } from '@tabler/icons-react';
<<<<<<< HEAD:components/ModalContainer/index.tsx
import React, { HTMLAttributes } from 'react';
import { BrutCard } from '../BrutCard';

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
  header?: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
}
const ModalContainer = React.forwardRef<HTMLInputElement, Props>(
=======
import React from 'react';
import { BrutCard } from '../BrutCard';

const ModalContainer = React.forwardRef<HTMLInputElement, ModalContainerProps>(
>>>>>>> 6edf9430 (refactored codebase and tailwindConfig):components/Common/ModalContainer/index.tsx
  ({ className, headerClassName, bodyClassName, open, onClose, header, children, ...props }, ref) => {
    return (
      <>
        {open && (
          <div
            onClick={(e) => onClose()}
            className="fixed left-0 top-0 z-10 size-[10000px] bg-black/40 backdrop-blur-sm"
          ></div>
        )}
        {open && (
          <BrutCard
            className={cn(
              `${className} p-0 z-10 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[200px]`
            )}
          >
            <div className="flex flex-col">
              {/* header */}
              <div className={cn('flex items-stretch justify-center border-b-[2px] border-b-black', headerClassName)}>
                <span className={cn(FontSpaceMono.className, 'p-2 flex grow items-center justify-start font-bold')}>
                  {header}
                </span>
                <div
                  onClick={(e) => onClose()}
                  className="flex items-center justify-center  border-l-2 border-black px-4 py-1 hover:cursor-pointer"
                >
                  <IconX className="size-6"></IconX>
                </div>
              </div>
              <div className={cn('p-2', bodyClassName)}>{children}</div>
            </div>
          </BrutCard>
        )}
      </>
    );
  }
);

ModalContainer.displayName = 'ModalContainer';

export default ModalContainer;
