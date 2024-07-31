/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        forest: "url('./media/forest.jpeg')",
        shield: "url('./media/shield.png')",
      },
      colors: {
        "custom-dark": "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};
