const { fontFamily } = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/form-inputs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
      lato: [`var(--font-lato)`, ...fontFamily.sans],
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          label: withOpacity('--color-text-label'),
          placeholder: withOpacity('--color-text-placeholder'),
          warning: withOpacity('--color-text-warning'),
          inverted: withOpacity('--color-text-inverted'),
          accent: withOpacity('--color-accent-primary'),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity('--color-bg-base'),
          card: withOpacity('--color-bg-card'),
          accent: withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-inverted': withOpacity('--color-button-inverted'),
        },
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
        txtHintColor: '#8792A2',
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
        GRAY_1: '#CBCBCB',
        GRAY_2: '#FBFBFB',
        GRAY_3: '#425466',
        BADGE__GRAY: '#eff2f5c1',
        OPT_GRAY: '#DEDEDE',
        BG_WHITE: '#F5F5F5',
        DETAIL__WHITE: '#EFF2F5',
        BLACK__1: '#161616',
        TEXT__DARK: '#100024',
        DRIVLY: '#060611',
        DETAIL__BLACK: '#16162A',
        MARKER__LIGHT: '#D9D9D9',
        BADGE_BORDER: '#E4E6E9',
        STEEL__BLUE: '#58667E',
        off_white: '#F8FAFD',
        BORDER__LIGHT: '#F4F4F4',
        DRIVLY_GREEN: '#00CAB9',
        WHITE_1: '#E9E9E9',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
