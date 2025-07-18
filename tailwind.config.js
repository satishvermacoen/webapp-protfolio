module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9FAFB', // Light Gray Background
        secondary: '#111827', // Dark Gray Text
        accent: '#0891b2', // A richer cyan for better contrast
        'accent-dark': '#0e7490',
        card: '#FFFFFF', // White Card Background
        border: '#E5E7EB', // Light Gray Border
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(8, 145, 178, 0.3)',
      },
    },
  },
  plugins: [],
};