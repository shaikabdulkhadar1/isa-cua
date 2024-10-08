/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "27rem": "27rem",
        flag: "32rem",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      samarkan: ["Samarkan", "sans-serif"],
      roboto: ["Roboto Slab", "sans-serif"],
    },
  },
  plugins: [],
};
