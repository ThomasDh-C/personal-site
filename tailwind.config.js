module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          'xs': '475px',
        },
      },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  };