module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/hero-bg.png')",
      },
      fontFamily: { miriamLibre: 'Miriam Libre' },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': {
            color: 'transparent',
          },
          '50%': {
            color: 'black',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
