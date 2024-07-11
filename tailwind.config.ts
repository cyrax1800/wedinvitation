import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";
import plugin from 'tailwindcss/plugin'

const containerPlugin: PluginCreator = ({ addUtilities }) => {
  const newUtilities = {
    '.brightness-80': {
      filter: 'brightness(80%)'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    },
    '.preserve-3d': {
      'transform-style': 'preserve-3d'
    },
    '.perspective': {
      'perspective-origin': '50% 50%',
      perspective: '450px'
    },
    '.bg-x-82': {
      'background-position-x': '82%'
    }
  }

  addUtilities(newUtilities)
};

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        flipTop: 'flipTop 1s ease-in',
        flipBottom: 'flipBottom 1s ease-in',
      },
      colors: {
        theme_grayishBlue: 'hsl(237, 18%, 59%)',
        theme_softRed: 'hsl(345, 95%, 68%)',
        theme_white: 'hsl(0, 0%, 100%)',
        theme_darkDesaturatedBlue: 'hsl(236, 21%, 26%)',
        theme_veryDarkBlue: 'hsl(235, 16%, 14%)',
        theme_veryDarkMostlyBlackBlue: 'hsl(234, 17%, 12%)',
      },
      fontSize: {
        'xxs': '0.5rem'
      },
      keyframes: {
        flipTop: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-180deg)' }
        },
        flipBottom: {
          '0%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(0deg)' }
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    containerPlugin
  ],
};


export default config;
