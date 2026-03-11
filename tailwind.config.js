/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d3142',       // Dark blue-gray
        accent: '#ef8354',        // Orange/coral
        background: '#ffffff',    // White
        secondary: '#bfc0c0',     // Light gray
        tertiary: '#4f5d75',      // Medium blue-gray
        dark: '#141414'           // Keep for certain elements
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        drama: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
