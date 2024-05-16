import { cn } from '@/utils/tw';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FontManrope } from '@/utils/typography';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {hasError?: boolean, errorMessage?: string, isCopy?: boolean}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, errorMessage, isCopy, ...props }, ref) => {
    const handleCopy = () => {
      if (ref && typeof ref === 'object' && 'current' in ref) {
        ref.current?.select();
        document.execCommand('copy');
      }
    };

    return (
      <div className={`${FontManrope.className}`}>
        <div className="relative">
          <input
            type={type}
            className={cn(
              ` font-medium text-sm w-full h-[40px] bg-foreground p-[10px] border-2 border-black shadow-brut-sm text-black outline-0 mb-2`,
            )}
            ref={ref}
            {...props}
          />
          {isCopy && (
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
              onClick={handleCopy}
            >
              <img src="./copy.svg" alt="copy" className="w-4 h-4" />
            </button>
          )}
        </div>
        {hasError && <p className="text-red-500 text-sm font-medium">{errorMessage}</p>}
      </div>
    )
  }
)
InputField.displayName = "InputField"

export { InputField }