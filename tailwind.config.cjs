/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6E3CBC',
        secondary: '#5b2ea2',
        lightgray: '#E8E2E2',
        light: '#F5F5F5',
        darkgray: '#202020',
        dark: '#0e0e0e',
        danger: 'rgb(233, 31, 0)',
        success: '#54B435',
      },
    },
  },
  plugins: [],
};
