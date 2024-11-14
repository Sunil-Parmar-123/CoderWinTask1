/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}


