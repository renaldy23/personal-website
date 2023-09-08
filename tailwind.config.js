/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './public/src/**/*.{css,js}'],
  theme: {
    extend: {
      colors: {
        background: '#f9f4ef',
        primary: '#8c7851',
        secondary: '#eaddcf',
        clean: '#fffffe',
        paragraph: '#716040',
        heading: '#020826',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
