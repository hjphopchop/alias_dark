module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/img/wave.svg')",
      },
      fontFamily: {
        sofia: ['var(--font-sofia)'],
        zaychik: ['var(--font-zaychik)'],
      }
    },
  },
  plugins: [],
};
