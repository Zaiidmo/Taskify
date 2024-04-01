/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      titles: ["Titles", "sans-serif"],
      revolution: ["Revolution", "sans-serif"],
    extend: {},
  },
  plugins: [],
}
}

