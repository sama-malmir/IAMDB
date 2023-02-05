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
        'hover-btnlinks':'rgba(255, 255, 255, 0.1)',
        'border-0.1':'rgba(238, 235, 221, 0.1)',
      },
      spacing: {
        'w-18': '75px',
        'w-21':'21px',
        'w-61':'61px',
        'w-330':'330px',
      },
      height: {
        'h-18': '75px',
        'h-21':'21px',
        'h-61':'61px',
      },
      fontSize: {
        f14: ['14px', '16.41px'],
        f16: ['16px', '18.75px'],
        ftm: ['24px', '50px'],
        ftd: ['28px', '50px'],
        f18: ['18px','21.9px'],
        f32: ['32px','40px'],
        f48:['48px','40px'],
    
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