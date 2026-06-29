/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'brand-black': '#000000',
        'brand-white': '#F8F8F5',
        'brand-gray': '#A7A7A2',
        'brand-gray-dark': '#3A3A38',
        'brand-accent': '#8D6B4F',
        'brand-accent-light': '#A88563',
        'brand-accent-pale': '#C4A882',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
