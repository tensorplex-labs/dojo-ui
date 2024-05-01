import { cn } from '@/utils/tw';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FontManrope } from '@/utils/typography';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {hasError?: boolean, errorMessage?: string}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, errorMessage, ...props }, ref) => {
    return (
      <div className={`${FontManrope.className}`}>
        <input
        type={type}
        className={cn(
          ` font-medium text-sm w-[1075px] h-[40px] bg-foreground p-[10px] border-2 border-black shadow-brut-sm text-black outline-0 mb-2`,
        )}
        ref={ref}
        {...props}
        />
        {hasError && <p className="text-red-500 text-sm font-medium">{errorMessage}</p>}
      </div>
    )
  }
)
InputField.displayName = "InputField"

export { InputField }
