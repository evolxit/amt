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
          100: '#fff9cc',
          200: '#fff399',
          300: '#ffee66',
          400: '#ffe833',
          500: '#feee27', // Yellow Base Color
          600: '#e5d520',
          700: '#ccbc1a',
          800: '#b3a313',
          900: '#80750d',
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
