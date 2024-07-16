import { InputFieldProps } from '@/types/CommonTypes';
import { cn } from '@/utils/tw';
import { FontManrope } from '@/utils/typography';
import { forwardRef } from 'react';

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
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
              ` font-medium disabled:bg-gray-300 text-sm w-full h-[40px] bg-foreground p-[10px] border-2 border-black shadow-brut-sm text-black outline-0 mb-2`
            )}
            ref={ref}
            {...props}
          />
          {isCopy && (
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-gray-200 px-2 py-1 font-bold text-gray-800 hover:bg-gray-300"
              onClick={handleCopy}
            >
              <img src="./copy.svg" alt="copy" className="size-4" />
            </button>
          )}
        </div>
        {hasError && <p className="text-sm font-medium text-red-500">{errorMessage}</p>}
      </div>
    );
  }
);
InputField.displayName = 'InputField';

export { InputField };
