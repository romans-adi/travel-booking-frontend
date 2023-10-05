/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#7bcd00',
        second: '#313037',
        supportive: '#e5e5e4',
      },
      dropShadow: {
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      boxShadow: {
        '4xl': '0 35px 35px rgba(0, 0, 0, 0.25), 0 45px 65px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
