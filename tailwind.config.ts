import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        'accent-a': 'var(--accent-a)',
        'accent-b': 'var(--accent-b)',
        'accent-c': 'var(--accent-c)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
      },
      transitionDuration: {
        d1: 'var(--d1)',
        d2: 'var(--d2)',
        d3: 'var(--d3)',
      },
      transitionTimingFunction: {
        snappy: 'var(--ease-snappy)',
        cine: 'var(--ease-cine)',
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
        display: ["var(--font-space-grotesk)"],
      },
      keyframes: {
        'pulse-discreet': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        'wiggle-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        'pulse-discreet': 'pulse-discreet 2s ease-in-out infinite',
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        'wiggle-x': 'wiggle-x 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [lineClamp],
};
export default config;
