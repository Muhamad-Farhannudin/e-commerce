/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark' : '#1C1C1C',
        'gray' : {
          100: '#F7FAFC',
          200: '#EFF2F4',
          300: '#DEE2E7', 
          400: '#BDC4CD', 
          500: '#8B96A5', 
          600: '#505050', 
        },
        'blue' : {
          DEFAULT: '#0D6EFD',
          100: '#E3F0FF'
        },
        'green' : {
          DEFAULT: '#00B517', 
          100: '#C3FFCB',
        },
        'orange' : {
          DEFAULT: '#FF9017',
          100: '#FFE5BF',
        },
        'red': '#FA3434',
      },
    },
  },
  plugins: [],
}
