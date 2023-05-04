module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      cta: '#FFFD54',
      black: 'black',
      white: 'white',
    },
    extend: {
      backgroundImage: {
        'gradient-slider': 'linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
      },
      fontFamily: { miriamLibre: 'Miriam Libre' },
      animation: {
        blink: 'blink 1s step-end infinite',
        leftRightService: 'leftRightService 1.9s linear infinite',
        upDownService: 'upDownService 1.9s linear infinite',
        fadeIn: 'fadeIn 1s linear forwards',
        fadePop: 'fadePop 0.25s linear forwards',
        fadePop2: 'fadePop 0.5s linear forwards',
        fadePop3: 'fadePop 0.75s linear forwards',
        fadePop4: 'fadePop 1s linear forwards',
        fadeInLeft: 'fadeInLeft 0.5s linear forwards',
        fadeInRight: 'fadeInRight 0.5s linear forwards',
        'slide-scroll': 'slide-scroll 4s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadePop: {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translate(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translate(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
        blink: {
          'from, to': {
            color: 'transparent',
          },
          '50%': {
            color: 'black',
          },
        },
        leftRightService: {
          '0%': {
            transform: 'translateX(-5px)',
          },
          '50%': {
            transform: 'translateX(5px)',
          },
          '100%': {
            transform: 'translateX(-5px)',
          },
        },
        upDownService: {
          '0%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(5px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '75%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
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
