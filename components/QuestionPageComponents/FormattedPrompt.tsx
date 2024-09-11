import { cn } from '@/utils/tw';
import { IconChevronDown } from '@tabler/icons-react';
import React, { useEffect, useRef, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  collapsedClassName?: string;
  collapsableBtnClassName?: string;
  bottomFadeDivClassName?: string;
  autoHideHeightThreshold?: number;
}

const FormattedPrompt = ({
  children,
  className,
  collapsedClassName,
  collapsableBtnClassName,
  bottomFadeDivClassName,
  autoHideHeightThreshold,
  ...props
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const aht = autoHideHeightThreshold ?? 75;
  useEffect(() => {
    console.log('children', children);
    console.log('rerendering formatted prompt height', divRef.current?.clientHeight, aht);
    if (divRef.current && divRef.current.clientHeight > aht) {
      setIsCollapsible(true);
      setIsCollapsed(true);
    } else {
      setIsCollapsible(false);
      setIsCollapsed(false);
    }
  }, [divRef, children]);

  const toggleCollapse = () => {
    console.log('clicked toggle');
    if (isCollapsible) {
      setIsCollapsed((prev) => !prev);
    }
  };

  return (
    <div
      ref={divRef}
      className={cn(
        'flex relative h-full items-start whitespace-pre-wrap p-2 pl-0 pr-6 text-font-primary/70',
        isCollapsed && 'overflow-hidden max-h-[40px] cursor-pointer',
        isCollapsed && collapsedClassName,
        isCollapsible && 'cursor-pointer',
        !isCollapsed && 'items-center',
        className
      )}
      onClick={toggleCollapse}
      {...props}
    >
      {children}
      {isCollapsible && (
        <>
          {isCollapsed && (
            <div
              className={cn(
                'absolute bottom-0 h-[15px] w-full bg-gradient-to-t from-background to-background/10 ',
                bottomFadeDivClassName
              )}
            ></div>
          )}

          <IconChevronDown
            className={cn(
              'absolute right-1 top-1 size-4 rounded-md bg-font-primary/10 text-font-primary opacity-30 hover:opacity-80',
              collapsableBtnClassName
            )}
          />
        </>
      )}
    </div>
  );
};

export default FormattedPrompt;
