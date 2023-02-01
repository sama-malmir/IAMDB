/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'main-color':'#EEEBDD',
        'secondary-color':'rgba(206, 18, 18, 1)',
        'yellow-color':'rgba(255, 210, 0, 1)',
        'back-ground': 'rgba(27, 23, 23, 1)',
      },
      spacing: {
        'w-18': '75px',
        'w-21':'21px',
      },
      height: {
        'h-18': '75px',
        'h-21':'21px',
      },
      fontSize: {
        f14: ['14px', '16.41px'],
        f16: ['16px', '18.75px'],
        ftm: ['24px', '50px'],
        ftd: ['28px', '50px'],
        f18: ['18px','21px'],
      },
      margin: {
        '15px': '15px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),

  ],
};