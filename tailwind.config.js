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
      inter: ['var(--font-inter)', ...fontFamily.sans],
      lato: [`var(--font-lato)`, ...fontFamily.sans],
    },
    extend: {
      colors: {
        'primary-detail': '#16162A',
        danger: '#e13756',
        secondary: '#666f75',
        primary: '#060611',
        border: '#d7dde4',
        placeholder: '#A2A2A5',
        muted: '#A2A2A5',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')],
}
