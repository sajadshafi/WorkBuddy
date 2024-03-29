/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6E3CBC',
        secondary: '#5b2ea2',
        lightgray: '#E8E2E2',
        lightbg: '#E5E1E1',
        light: '#F5F5F5',
        darkgray: '#202020',
        darkbg: '#333333',
        dark: '#0e0e0e',
        danger: '#e91f00',
        success: '#54B435',
        warning: '#ffbb52',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg.png')",
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      arvo: ['Arvo', 'serif'],
    },
  },
  plugins: [],
};
