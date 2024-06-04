import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')
import { red } from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseYandScale: {
          '0%, 100%': { transform: 'translateY(0) scale(1.4)' },
          '50%': { transform: 'translateY(-12px) scale(1.9)' },
        },
      },
      animation: {
        pulseY: 'pulseY 2s ease-in-out infinite',
        pulseYandScale: 'pulseYandScale 2s ease-in-out infinite',
      },
      colors: {
        primary: 'hsla(var(--primary))',
        secondary: 'hsla(var(--secondary))',
        accent: 'hsla(var(--accent))',
        background: {
          DEFAULT: 'hsla(var(--background))',
          accent: 'hsla(var(--background-dark))',
        },
        foreground: 'hsla(var(--foreground))',
        danger: red,
        error: 'hsla(var(--error))',
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
          accent: 'hsla(var(--text-accent))',
        },
        transit: {
          DEFAULT: 'hsla(var(--transit))',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'brut-sm': '4px 4px 0px 0px rgba(0,0,0,1);',
        'brut-md': '8px 8px 0px 0px rgba(0,0,0,1);',
        'brut-lg': '12px 12px 0px 0px rgba(0,0,0,1);',
      },
    },
  },
  fontFamily: {
    'spacemono': ['var(--font-mono)', ...fontFamily.mono],
    'manrope': ['var(--font-manrope)', ...fontFamily.sans]
  },
  plugins: [],
};
export default config;
