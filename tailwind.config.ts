import type { Config } from 'tailwindcss';
import { red } from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gradientColorStops: {
        primary: '#F8F8F8',
      },
      colors: {
        primary: 'hsla(var(--primary))',
        secondary: 'hsla(var(--secondary))',
        background: {
          DEFAULT: 'hsla(var(--background))',
          accent: 'hsla(var(--background-dark))',
        },
        foreground: 'hsla(var(--foreground))',
        danger: red,
        muted: {
          DEFAULT: 'hsla(var(--muted))',
          foreground: 'hsla(var(--muted-foreground))',
        },
        card: {
          foreground: 'hsla(var(--card-foreground))',
          background: 'hsla(var(--card-background))',
        },
        font: {
          primary: 'hsla(var(--text-primary))',
          secondary: 'hsla(var(--text-secondary))',
        },
        transit: {
          DEFAULT: 'hsla(var(--transit))',
        },
      },
      boxShadow: {
        'brut-sm': '4px 4px 0px 0px rgba(0,0,0,1);',
        'brut-md': '8px 8px 0px 0px rgba(0,0,0,1);',
        'brut-lg': '12px 12px 0px 0px rgba(0,0,0,1);',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 16s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
