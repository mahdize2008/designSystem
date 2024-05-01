/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      black: '#000',




      primary: '#fe6446',
      'primary-dark': '#056449',
      // 'primary-lighter': '#5f6368',

      secondary:'#fffaea',
      
      dark: 'rgb(23, 23, 23)',
      'dark-alpha': 'rgb(76, 76, 76)',
      'dark-beta': 'rgb(128, 128, 128)',
      // 'dark-tetha':'#3c4043',
      darker:'rgb(33, 33, 33)',
      // 'darker-beta':'#181818',

      natural:'rgb(179, 179, 179)',
      'natural-alpha':'rgb(111, 111, 111)',


      // 'dark-tetha': '#121212',
      // 'dark-gamma': '#1c1c1c',
      // 'primary-dark': '#201e1b',


      lighter: 'rgb(235, 235, 235)',
      // lighter: '#a2a2a2',
    },
    fontSize: {
      '4xs': '8px',
      '3xs': '10px',
      '2xs': '11px',
      xs: '12px',
      'xs-plus': '13px',
      sm: '14px',
      'sm-plus': '15px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '11xl': '42px',
      '12xl': '44px',
      '13xl': '46px',
      '14xl': '48px',
      '15xl': '50px',
      '20xl': '60px',
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '900',
    },

    backgroundImage:{

      'gradient-primary': "linear-gradient(116.63deg, rgb(254, 145, 80) 8.97%, rgb(254, 100, 70) 92.93%)",
      
    },

    boxShadow: {
      'lighter':"rgba(0, 0, 0, 0.13) 0px 2px 6px",
      'lighter-alpha':"rgba(0, 0, 0, 0.13) 0px 2px 6px"
    }
    
  },
  plugins: [],
}