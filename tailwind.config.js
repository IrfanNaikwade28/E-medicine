/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          'custom-blue':'rgb(11, 102, 175)',
        },
        screens:{
          'xsm':'426px'
        },
        boxShadow:{
          'shadow-top':'0px -1px 10px rgba(0,0,0,0.1)'
        }
      }
  },
  plugins: [],
}