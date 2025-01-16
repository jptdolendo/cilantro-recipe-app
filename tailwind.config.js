/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#38b168', light: '#3ebd70', dark: '#2e8f52' },
        onPrimary: { DEFAULT: '#ffffff' },
        secondary: { DEFAULT: '#ee7d24', light: '#fbbf72', dark: '#c96a1f' },
        onSecondary: { DEFAULT: '#ffffff' },
        background: { DEFAULT: '#f5f5f5' },
        onBackground: { DEFAULT: '#4f4f4f' }
      },
      fontFamily: {
        obold: ['Outfit-Bold', 'sans-serif'],
        oextrabold: ['Outfit-ExtraBold', 'sans-serif'],
        oextralight: ['Outfit-ExtraLight', 'sans-serif'],
        olight: ['Outfit-Light', 'sans-serif'],
        omedium: ['Outfit-Medium', 'sans-serif'],
        oregular: ['Outfit-Regular', 'sans-serif'],
        osemibold: ['Outfit-SemiBold', 'sans-serif']
      }
    }
  },
  plugins: []
};
