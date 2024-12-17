/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EAD38D',
      
        'white-100': '#FFFFFF',

        'black-500': '#2E2E2E'
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        anton: ['Anton', 'sans-serif'], 
        quicksand: ['Quicksand', 'sans-serif'], 
        opensans: ['Open Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
