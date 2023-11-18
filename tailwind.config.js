/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundGradient: {
        '0': 'var(--gradient)',
        '50': 'var(--gradient)',
        '100': 'var(--gradient)',
      },
    },
  },
  plugins: [],
}