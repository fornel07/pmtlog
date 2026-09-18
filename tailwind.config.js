/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pmt: {
          navy: "#000B4F",
          cobalt: "#003882",
          blue: "#0284C7",
          cyan: "#0EA5E9",
          amber: "#F59E0B",
          dark: "#080B14",
          card: "#0E1526",
          cardLight: "#151F38",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-urbanist)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
