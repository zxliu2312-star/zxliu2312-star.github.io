import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        oat: {
          DEFAULT: '#EEE9DD',
          light: '#F7F4EC',
        },
        forest: {
          DEFAULT: '#354E40',
          dark: '#26392F',
        },
        terracotta: {
          DEFAULT: '#BD654B',
          light: '#DCA28E',
        },
        sand: {
          DEFAULT: '#C5A46D',
        },
        warm: {
          black: '#292923',
          gray: '#A39C8F',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'Noto Sans SC', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        source: ['Source Serif Pro', 'serif'],
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      maxWidth: {
        'content': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
