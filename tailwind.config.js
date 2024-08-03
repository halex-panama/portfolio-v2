import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#030116",
        "dark-bg": "#070a09",
        "light-bg": "#313140",
        "primary-button": {
          DEFAULT: "#6BFBCE",
          700: "#05B981",
        },
        "primary-text": "#EFEDFF",
        "tree-bg": "#221E3E",
        "accent-color-1": "#2a8381",
        "accent-color-2": "#00b38b",
      },
      backgroundImage: {
        star: "url('/src/assets/star.png')",
        cliffLeft: "url('/src/assets/cliff-left.png')",
        cliffRight: "url('/src/assets/cliff-right.png')",
        frontTree: "url('/src/assets/front-tree.png')",
        backTree: "url('/src/assets/back-tree.png')",
      },
      height: {
        navbar: "8rem",
        navMobile: "6rem",
      },
      animation: {
        tilt: "tilt 5s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
