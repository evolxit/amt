/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fff4cc",
          200: "#ffe999",
          300: "#ffdd66",
          400: "#ffd233",
          500: "#FFC814", // Base Color
          600: "#e5b312",
          700: "#cc9e0f",
          800: "#b38a0d",
          900: "#806109",
        },
        secondary: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#BDBDBD",
          400: "#9E9E9E",
          500: "#757575",
          600: "#616161",
          700: "#424242",
          800: "#303030",
          900: "#212121",
        },
        third: {
          100: "#CCD7F0",
          200: "#99AEE1",
          300: "#6685D2",
          400: "#335BC3",
          500: "#0032B4",
          600: "#002D9E",
          700: "#002788",
          800: "#002172",
          900: "#00225D", // Base Color
        },
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
      },
      fontFamily: {
        sans: [
          "var(--aw-font-sans, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "var(--aw-font-serif, ui-serif)",
          ...defaultTheme.fontFamily.serif,
        ],
        heading: [
          "var(--aw-font-heading, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
