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
      // 'lg': '992px',
      // 'xl': '1200px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
    colors:{
      transparent:'transparent',
      white:'#FFFFFF',
      black:'#1A141F',
      purple:'#9D3FE7',
      hint_text:'#4B3A5A',
      'natural':'#333333',
      border:'#ABA7AF',
      disabled:'#D4D2D5',
      spacer:'#D9D1E0',
      spacer_light:'#E5E0EB',
      bg_light_grey:'#F5F3F7',
      Error:'#FF9500',
      Attention:'#D51A52',
      Approval:'#00B998',
      Link:'#0F0BAB',
    },
    backgroundImage: {
      gradient: "linear-gradient(159.13deg, #9D3FE7 -24.13%, #602093 132.21%)",
    },
    boxShadow: {
      'xs': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      xs: '12px',
      '2sm': '13px',
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
    extend: {},
  },
  plugins: [],
}