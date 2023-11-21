/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundGradient: {
        0: "var(--gradient)",
        50: "var(--gradient)",
        100: "var(--gradient)",
      },
      colors: {
        warnaUnggu: "#5d6af8",
        footeratas: "#9EDDFF",
        footerbawah: "#6499E9",
        footertext: "#2E56BD",
        birugrad: "6499E9",
      },
    },
  },
  plugins: [],
};
