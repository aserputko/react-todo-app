/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#3A7CFD', // active state
        white: '#FFFFFF', // todo background
        light: '#FAFAFA', // body background
        dark: '#494C6B', // default text color
        'gray-500': '#9495A5', // filters text color, add todo color
        'gray-300': '#D1D2DA', // competed
        'gray-200': '#E3E4F1', // borders
        'gray-100': '#FAFAFA', // body background

        // DARK
        black: '#171823', // body background
        'slate-800': '#25273D', // todo background
        'slate-700': '#393A4B', // borders
        'slate-600': '#4D5067', // competed
        'slate-500': '#767992', // filters text color, add todo color
        'slate-200': '#C8CBE7', // default text color
      },
    },
  },
  plugins: [],
};
