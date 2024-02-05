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
        colors: {
          'ochre': '#f9f4e6',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              maxWidth: 'none',
            },
          },
        }),
      },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  };