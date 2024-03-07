/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         bgMain: {
           50: '#f8fafc',
          100: '#aad3ee',
          200: '#6f9dc4',
          300: '#336699'
         },
         mainText:{

         }
      }
    },
  },
  plugins: [],
}

