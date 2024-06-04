/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        teachers: ["Teachers", "sans-serif"],
        yaldevi: ["Yaldevi", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        youngSerif: ["Young Serif", "sans-serif"],
        platypi: ["Platypi", "sans-serif"],
      },
    },
  },
  plugins: [],
}