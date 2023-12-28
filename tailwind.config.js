/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#3A7CFD', // activa state
        white: '#FFFFFF', // todo background
        light: '#FAFAFA', // body background
        dark: '#494C6B', // default text color
        'gray-500': '#9495A5', // filters text color, add todo color
        'gray-300': '#D1D2DA', // competed
        'gray-200': '#E3E4F1', //borders
        'gray-100': '#FAFAFA', // body background
      },
    },
  },
  plugins: [],
};
