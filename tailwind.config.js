/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      titles: ["Titles", "sans-serif"],
      revolution: ["Revolution", "sans-serif"],
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
}

