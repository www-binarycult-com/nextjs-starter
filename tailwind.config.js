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
      animation: {
        'slide-scroll': 'slide-scroll 4s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        'slide-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 6))' },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-slider': 'linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
