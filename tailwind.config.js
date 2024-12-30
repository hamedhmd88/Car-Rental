/** @type {import('tailwindcss').Config} */

import {fontFamily} from "tailwindcss/defaultTheme"

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-vazir)', ... fontFamily.sans],
      },
      colors: {
        "black-100": "#2B244c",
        "primary-orange": {
          DEFAULT: "#ff3b1f",
          100: "#1F1F1F",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/images/pattern.png')",
        'hero-bg': "url('/images/hero-bg.png')",
      }
    },
  },
  plugins: [],
};
