/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B4EFF',
          light: '#4EC6C6',
          dark: '#553D83',
        },
        dark: '#0F071D',
        gray: {
          light: '#F5F5F5',
          medium: '#B0B0B0',
          dark: '#2E2E3E',
        },
        gradient: {
          from: '#7B4EFF',
          to: '#4EC6C6',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
      }
    },
  },
  plugins: [],
} 