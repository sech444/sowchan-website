/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F5C200',
        'gold-dark': '#D4A800',
        crimson: '#C0000C',
        'crimson-dark': '#8B0009',
        charcoal: '#1A1A1A',
        cream: '#FFFDF0',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
