/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize : {
        customFontSize : '1.1rem' 
      },
      fontFamily : {
        roboto : ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
};

