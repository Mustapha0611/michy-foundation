/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F1F9F2',
        'secondary':'#027357',
        'third':'#6B9B8F'
    },
    fontFamily:{
      'heading':["Archivo Black", 'sans-serif']
    }
  },
  },
  plugins: [],
}

