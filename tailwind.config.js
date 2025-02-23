/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: "#363636",
          "light-gray": "#B7B7B7",
          "dark-gray": "#141A20",
        },
      },
    },
  },
  plugins: [],
};