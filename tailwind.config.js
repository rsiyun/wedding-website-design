/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Dancingscript: ["Dancing Script"],
        timesnewroman: ['"Times New Roman",Times,serif'],
      },
      colors: {
        brown: "rgba(235, 229, 228, 0.2)",
      },
    },
  },
  plugins: [],
};
