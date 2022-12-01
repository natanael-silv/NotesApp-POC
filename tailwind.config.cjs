/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(220px, 1fr))",
      }
    },
  },
  plugins: [],
};
