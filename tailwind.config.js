const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      'dcard-light-blue': '#246AA6',
      'dcard-dark-blue': '#0c324e',
      'dcard-btn-blue': '#3597cf',
      'dcard-input-blue': '#1d588a',
      'dcard-btn-hover-blue': '#3ba6e3'
    },
    extend: {}
  },
  plugins: []
}
