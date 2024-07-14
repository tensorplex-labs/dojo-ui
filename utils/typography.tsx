import { Manrope, Roboto_Mono, Space_Mono } from 'next/font/google';

export const FontSpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const FontRobotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '500', '600'],
});

export const FontManrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '500', '600', '800', '400', '700'],
});
