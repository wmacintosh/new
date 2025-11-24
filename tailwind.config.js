/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Baltic Blue Theme
        'deep-blue': '#08121c',   // Main background
        'card-blue': '#0b1928',   // Card background
        'ice-blue': '#d7e5f4',    // Primary text / Headers
        'blue-300': '#87b2de',    // Secondary text / Icons
        'blue-500': '#377fc8',    // Primary buttons / Accents
        'blue-600': '#2c66a0',    // Hover states
        'warm-gold': '#f0c14b',   // Subtle accent for "Favorites" stars
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'], // Friendly body text
        'serif': ['Georgia', 'serif'],      // Classic recipe headers
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}