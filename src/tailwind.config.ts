import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "hsl(215, 20%, 8%)", // Main background
        "text-light": "#F0F0F0",  // Main text color
        "accent-1": "hsl(200, 100%, 60%)", // Electric Blue Primary
        "accent-2": "hsl(190, 100%, 70%)", // Cyan Secondary
        "card-bg": "hsl(215, 20%, 12%)",   // Card background
        "border-clr": "hsl(215, 20%, 15%)", // Border color
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-space-mono)"],
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "gradient-anim": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "orb-move": {
          "0%, 100%": { transform: "translate(-25%, -25%)" },
          "50%": { transform: "translate(0%, 0%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slower": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        }
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "gradient-anim": "gradient-anim 4s ease infinite",
        "orb-move": "orb-move 30s infinite alternate ease-in-out",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-slower": "spin-slower 40s linear infinite reverse",
        "pulse-slow": "pulse-slow 8s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;