// // const { red } = require('@mui/material/colors');
// // const { default: shadows } = require('@mui/material/styles/shadows');

const { blue, red, green, grey, orange } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        150: '150px',
        190: '190px',
        225: '225px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        375: '375px',
        460: '460px',
        656: '656px',
        880: '880px',
        508: '508px',
      }
    },
    height: {
      auto: 'auto',
      full: '100%',
      screen: '100vh',
      fullScreen: '100vw',
    
      0: '0px',
      1: '1px',
      2.5: '25px',
      16: '4rem',
      80: '80px',
      150: '150px',
      225: '225px',
      300: '300px',
      340: '340px',
      370: '370px',
      420: '420px',
      510: '510px',
      600: '600px',
      650: '650px',
      685: '685px',
      800: '800px',
      '90vh': '90vh',

    },
    minWidth: {
      210: '210px',
      350: '350px',
      620: '620px',
    },
    screen: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      emerald: '#00b894',
      emerald100: '#d1fae5',
      
      emerald400: '#34d399',
      emerald500: '#10b981',
      zinc500: '#a0aec0',
      zinc800: '#27272a',
      zinc900: '#121212',

      gray1:grey[100],
      gray2:grey[200],
      gray3:grey[300],
      gray4:grey[400],
      gray5:grey[500],
      gray6:grey[600],
      orange: '#fd9644',
      orange100: orange[100],
      orange400: orange[400],
      orange500: orange[500],
      blue: '#0984e3',
      blue1: '#ebf8ff',
      red: '#eb5757',
      red100: red[100],
      red4: red[400],
      white: '#fff',
      red5: red[500],
      red6: red[600],
      green4: green[400],
      green5: green[500],
      
      orange6: orange[600],
      orange5: orange[500],
      orange4: orange[400],
      orange3: orange[300],
      orange2: orange[200],
      orange1: orange[100],
      headingColor: '#2e2e2e',
      black: '#222',
      textColor: '#515151',
      primary: '#f3f3f3',    
      darkOverlay: 'rgba(0, 0, 0, 0.2)',
      lightOverlay: 'rgba(255, 255, 255, 0.4)',
      lighttextGray: '#9ca0ab',
      card: "rgba(256,256,256,0.8)",
      cartbg: "#282a2c",
      cartItem: "#2e3033",
      cartTotal: "#343739",  
      transparent: 'transparent',    
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

