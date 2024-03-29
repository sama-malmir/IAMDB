/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      backgroundImage: {
        'coversite':"linear-gradient(to bottom, #1b171700, rgba(27, 23, 23, 0.3), #1b1717), url('../assets/img/cover.png')",
        'search':"url('../assets/img/search.svg')",
        'search-d':"url('../assets/img/search-d.svg')",
      },
      colors:{
        'main-color':'#EEEBDD',
        'secondary-color':'rgba(206, 18, 18, 1)',
        'yellow-color':'rgba(255, 210, 0, 1)',
        'back-ground': 'rgba(27, 23, 23, 1)',
        'hover-btnlinks':'rgba(255, 255, 255, 0.1)',
        'hover-links':'rgba(142, 13, 13, 1)',
        'border-0.1':'rgba(238, 235, 221, 0.1)',
        'gradient-1':'rgba(27, 23, 23, -0.7) 48%',
        'gradient-2':'rgba(27, 23, 23, 0.9) 20%',
        'gradient-2m':'rgba(27, 23, 23, -0.5) 20%',
        'gradient-3':'#1B1717',
        
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
        '132px':'132px',
        '200px':'200px',
        'w-18':'18px',
        'w-800':'800px',
        'w-295':'295px',
        'w-1026':'1026px'
      
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
        'h-727':'727px',
        'h-275':'275px',
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
        f25:['25px','29.3px'],
    
      },
      margin: {
        '15px': '15px',
        '110':'110px',
        '18':'18px',
        '90':'90px',
        '147':'147px',
        '60':'60px',
        '464px':'464px',
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