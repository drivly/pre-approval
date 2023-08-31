const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@drivly/ui/dist/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
