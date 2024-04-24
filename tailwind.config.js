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
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1312px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      black: '#000',




      primary: '#01875f',
      'primary-dark': '#056449',
      // 'primary-lighter': '#5f6368',

      secondary:'#98d4e9',
      brown:'#c8968f',
      
      dark: '#202124',
      'dark-alpha': '#5f6368',
      'dark-beta': '#98a5ac',
      'dark-tetha':'#3c4043',
      darker:'#17212f',

      // 'dark-tetha': '#121212',
      // 'dark-gamma': '#1c1c1c',
      // 'primary-dark': '#201e1b',


      // light: '#747474',
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
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '900',
    },
    boxShadow: {
      'xl': '0px 20px 100px 0px rgba(179, 144, 99, 0.3)',
      'sm':'7.66px 6.428px 100px 0px rgba(0, 0, 0, 0.15)',
      'navigation':'0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)'
    }
    
  },
  plugins: [],
}