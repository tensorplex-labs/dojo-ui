import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const styleBrutSm = 'shadow-brut-sm border-[1px] border-black';
export const styleBrutMd = 'shadow-brut-md border-[1px] border-black';
export const styleBrutLg = 'shadow-brut-lg border-[1px] border-black';
