import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Importamos el helper de Material Tailwind
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EAD38D',
        'primary-100': '#e9cb6f',
        'white-100': '#FFFFFF',
        'black-500': '#2E2E2E',
        'gray': '#625453',
        'marron-100': '#251919',
        'marron-50': '#644844',
        'black-80': '#110A09'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        anton: ['Anton', 'sans-serif'], 
        quicksand: ['Quicksand', 'sans-serif'], 
        opensans: ['Open Sans', 'sans-serif'], 
        italianno: ['Italianno', 'cursive'],
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
    // Otros plugins que quieras usar
  ],
});
