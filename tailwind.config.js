const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          label: 'var(--color-text-label)',
          placeholder: 'var(--color-text-placeholder)',
          warning: 'var(--color-text-warning)',
          inverted: 'var(--color-text-inverted)',
          accent: 'var(--color-accent-primary)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          card: 'var(--color-bg-card)',
          accent: 'var(--color-accent-primary)',
        },
      },
      fontFamily: {
        sans: [`var(--font-inter)`, ...fontFamily.sans],
        lato: [`var(--font-lato)`, ...fontFamily.sans],
      },
      colors: {
        FADE_BLACK: '#161C24',
        DRIVLY: '#060611',
        DARK_BTN: '#2D333A',
        BORDER_DARK: '#D2D5D8',
        GRAY_HEAD: '#EBECF0',
        NAV_GRAY: '#8a8f98',
        URL_GRAY: '#A4A9B3',
        LIGHT_BORDER: '#F5F5F5',
        LIGHT_GRAY: '#EAEAEA',
        BG_LIGHT: '#f6f9fc',
        OFF_WHITE: '#F9F9F9',
        WHITE_GRAY: '#F9F9FB',
        DRIVLY_GREEN: '#00CAB9',
        txtPrimaryColor: '#16161a',
        txtHintColor: '#666f75',
        txtDisabledColor: '#a0a6ac',
        primaryColor: '#16161a',
        bodyColor: '#f8f9fa',
        baseColor: '#ffffff',
        baseAlt1Color: '#e4e9ec',
        baseAlt2Color: '#d7dde4',
        baseAlt3Color: '#c6cdd7',
        baseAlt4Color: '#a5b0c0',
        infoColor: '#3da9fc',
        infoAltColor: '#d2ecfe',
        successColor: '#2aac76',
        successAltColor: '#d2f4e6',
        dangerColor: '#e13756',
        dangerAltColor: '#fcdee4',
        warningColor: '#ff8e3c',
        warningAltColor: '#ffeadb',
        whitishGray: '#F1F1F1',
        bgDrivly: '#f6f9fc',
        darkGreen: '#3A6D48',
        lightBorder: '#F5F5F5',
        MODAL_OVERLAY: '#DCDCDC',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
