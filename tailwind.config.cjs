import typographyPlugin from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   100: '#D1E7FF',
        //   200: '#A7CBFF',
        //   300: '#6EAAFF',
        //   400: '#348AFF',
        //   500: '#005BFF',
        //   600: '#0000FF', // Base Color
        //   700: '#0000E6',
        //   800: '#0000B3',
        //   900: '#000080',
        // },

        primary: {
          100: '#fff4cc',
          200: '#ffe999',
          300: '#ffdd66',
          400: '#ffd233',
          500: '#FFC814', // Base Color
          600: '#e5b312',
          700: '#cc9e0f',
          800: '#b38a0d',
          900: '#806109',
        },

        // primary: {
        //   100: '#FFE6CC',
        //   200: '#FFCC99',
        //   300: '#FFB266',
        //   400: '#FF9933',
        //   500: '#FF8000', // Orange Base Color
        //   600: '#E67300',
        //   700: '#CC6600',
        //   800: '#B35900',
        //   900: '#804000',
        // },

        secondary: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#303030',
          900: '#212121',
        },

        third: {
          100: '#CCD7F0',
          200: '#99AEE1',
          300: '#6685D2',
          400: '#335BC3',
          500: '#0032B4',
          600: '#002D9E',
          700: '#002788',
          800: '#002172',
          900: '#00225D', // Base Color
        },

        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      // colors: {
      //   primary: 'var(--aw-color-primary)',
      //   secondary: 'var(--aw-color-secondary)',
      //   accent: 'var(--aw-color-accent)',
      //   default: 'var(--aw-color-text-default)',
      //   muted: 'var(--aw-color-text-muted)',
      // },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
