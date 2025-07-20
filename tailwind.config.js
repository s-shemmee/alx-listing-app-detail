/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)', 'sans-serif'],
        oxygen: ['var(--font-oxygen)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
