/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", 'serif'],
        gelasio: ["Gelasio", 'serif']
      }
    },
    keyframes: {
      grain: {
        '0%': {
          backgroundPosition: '0 0'
        },
        '10%': {
          backgroundPosition: '-15% -20%'
        },
        '20%': {
          backgroundPosition: '-0% -0%'
        },
        '30%': {
          backgroundPosition: '-15% -20%'
        },
        '40%': {
          backgroundPosition: '-0% -0%'
        },
        '50%': {
          backgroundPosition: '-15% -20%'
        },
        '60%': {
          backgroundPosition: '-0% -0%'
        },
        '70%': {
          backgroundPosition: '-15% -20%'
        },
        '80%': {
          backgroundPosition: '-0% -0%'
        },
        '90%': {
          backgroundPosition: '-15% -20%'
        },
        '100%': {
          backgroundPosition: '-0% -0%'
        }
      },
      scratch: {
        '0%': {
          transform: 'translateX(0%)'
        },
        '10%': {
          transform: 'translateX(-1%)'
        },
        '20%': {
          transform: 'translateX(1%)'
        },
        '30%': {
          transform: 'translateX(-50%)'
        },
        '40%': {
          transform: 'translateX(-52%)'
        },
        '50%': {
          transform: 'translateX(-90%)'
        },
        '60%': {
          transform: 'translateX(-3%)'
        },
        '70%': {
          transform: 'translateX(-80%)'
        },
        '80%': {  
          transform: 'translateX(1%)'
        },
        '90%': {
          transform: 'translateX(-75%)'
        },
        '100%': {
          transform: 'translateX(-73%)'
        }
      }
    },
    colors: {
      blue: {
        500: '#0A0F2D',
        400: '#121639',
        300: '#242C50',
        200: '#3F4B7D',
        100: '#7B89C6'
      },
      red: {
        500: '#591114',
        400: '#831C1F',
        300: '#B52E32',
        200: '#DC4F55',
        100: '#FF8387'
      },
      green: {
        500: '#0A3710',
        400: '#11521A',
        300: '#2B6F36',
        200: '#3E964C',
        100: '#6CCF7D'
      },
      yellow: {
        500: '#8C5E13',
        400: '#D69118',
        300: '#E9B120',
        200: '#F9D864',
        100: '#FFECAA'
      },
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}