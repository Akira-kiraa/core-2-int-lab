/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        major: "#b08565",
      },
      fontFamily: {
        title: "Marker Felt",
        common: "Inter",
      },
    },
  },
  plugins: [],
};
