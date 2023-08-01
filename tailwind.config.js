/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      'xs': '479px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      keyframes: {
        slidein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-30px)',
            scale: 0.9
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
            scale: 1
          },
        },
        animation: {
           slide_in: 'slidein 0.2s easein' 
        },
       
      },
    },
  },
  plugins: [],
};
