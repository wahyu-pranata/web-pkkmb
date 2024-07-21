/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        Dekstop: '1440px',
        Mobile: '320px'
      },
      fontSize: {
        head: '38px',
        p_xl: '17px',
        p_l: '15px',
        p_m: '12px',
        p_s: '10px',
        p_xs: '9px',
        p_2xs: '8px',
        p_mobile: '6px',
      },
      colors: {
        'udayana-blue': '#3F4B7D',
      },
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
      height: {
        'rektorat': '50vh',
        'rektoratmobile': '30vh'
      },
      width: {
        'mobile': '70vw',
        'xl': '30vw',
      }
    },
  },
  plugins: [],
}

