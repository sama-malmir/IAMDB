/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coversite': "url('../assets/img/cover.png')",
      },
      colors:{
        'main-color':'#EEEBDD',
        'secondary-color':'rgba(206, 18, 18, 1)',
        'yellow-color':'rgba(255, 210, 0, 1)',
        'back-ground': 'rgba(27, 23, 23, 1)',
        'hover-btnlinks':'rgba(255, 255, 255, 0.1)',
        'hover-links':'rgba(142, 13, 13, 1)',
        'border-0.1':'rgba(238, 235, 221, 0.1)',
      },
      spacing: {
        'w-75': '75px',
        'w-21':'21px',
        'w-61':'61px',
        'w-330':'330px',
        'w-158':'158px',
        'w-216':'216px',
        'w-230':'230px',
        'w-276':'276px',
        'w-198':'198px',
        'w-165':'165px',
        'w-504':'504px',
        '17px':'17px',
        '18px':'18px',
        '9px':'9px',
        'w-14.66':'14.66px',
        'w-17.1':'17.1px',
      
      },
      height: {
        'h-75': '75px',
        'h-21':'21px',
        'h-61':'61px',
        'h-102':'102px',
        'h-144':'144px',
        'h-342':'342px',
        'h-409':'409px',
        'h-264':'264px',
        'h-671':'671px',
        'h-415':'415px',
        'h-18':'18px',
      },
      fontSize: {
        f14: ['14px', '16.41px'],
        f16: ['16px', '18.75px'],
        ftm: ['24px', '50px'],
        ftd: ['28px', '50px'],
        f18: ['18px','21.9px'],
        f32: ['32px','40px'],
        f48:['48px','40px'],
        f12:['12px','14.06px'],
        f21:['21px','24.61px'],
        ff40:['40px','46.88px'],
        ff48:['48px','56.25px'],
    
      },
      margin: {
        '15px': '15px',
        '110':'110px',
        '18':'18px',
        '90':'90px',
        '147':'147px',
        '60':'60px',
      },
      gap: {
        'g-60': '60px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),

  ],
};