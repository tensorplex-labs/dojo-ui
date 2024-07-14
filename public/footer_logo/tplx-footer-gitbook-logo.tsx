import React, { HTMLAttributes } from 'react';
import { cn } from '@/utils/tw';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}
const TPLXFooterGitbookLogo = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center group hover:cursor-pointer hover:bg-[#E3E3D2] rounded-[12px]',
        className,
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className={cn('fill-[#838378] group-hover:fill-[#3A3A2B]')}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_210_401)">
          <path d="M10.8018 17.7703C11.1889 17.7703 11.5039 18.0854 11.5039 18.4722C11.5039 18.8592 11.1889 19.174 10.8018 19.174C10.4147 19.174 10.0999 18.8589 10.0999 18.4722C10.0996 18.0854 10.4147 17.7703 10.8018 17.7703ZM21.826 13.4226C21.4389 13.4226 21.1238 13.1075 21.1238 12.7207C21.1238 12.3336 21.4389 12.0186 21.826 12.0186C22.2131 12.0186 22.5278 12.3336 22.5278 12.7207C22.5282 13.1075 22.2131 13.4226 21.826 13.4226ZM21.826 10.5467C20.6274 10.5467 19.6519 11.5218 19.6519 12.7207C19.6519 12.9542 19.6907 13.1867 19.7671 13.4126L12.5857 17.2355C12.1777 16.6475 11.5163 16.2991 10.8011 16.2991C9.9724 16.2991 9.21708 16.7733 8.8516 17.5142L2.39971 14.1127C1.71811 13.7544 1.20794 12.6316 1.26211 11.6099C1.29023 11.0767 1.47434 10.6632 1.7548 10.5035C1.93274 10.4023 2.14703 10.4112 2.37434 10.5302L2.41754 10.5528C4.12668 11.4535 9.72177 14.4004 9.95732 14.5098C10.3207 14.6778 10.523 14.746 11.1422 14.4525L22.7075 8.43776C22.8769 8.37365 23.0747 8.21147 23.0747 7.96462C23.0747 7.62244 22.7209 7.4877 22.7198 7.4877C22.0622 7.17228 21.0511 6.69879 20.0647 6.2373C17.9569 5.25022 15.5678 4.13182 14.5187 3.58222C13.6129 3.10804 12.8839 3.50782 12.7537 3.58873L12.501 3.71387C7.77914 6.04907 1.45994 9.17867 1.09994 9.39742C0.455709 9.7893 0.0566256 10.5703 0.00519703 11.5399C-0.0753744 13.077 0.70874 14.6791 1.82954 15.2671L8.65171 18.7855C8.80531 19.8501 9.72177 20.6469 10.8014 20.6469C11.9891 20.6469 12.9573 19.6896 12.9751 18.5061L20.4889 14.434C20.8698 14.7316 21.3422 14.8951 21.826 14.8951C23.0246 14.8951 24.0001 13.9197 24.0001 12.7211C24.0001 11.5224 23.0246 10.5467 21.826 10.5467Z" />
        </g>
        <defs>
          <clipPath id="clip0_210_401">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TPLXFooterGitbookLogo;
