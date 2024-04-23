import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
