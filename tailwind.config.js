module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        25: "6.25rem",
      },
      flex: {
        content: {
          center: "",
        },
      },
      fontFamily: {
        anonnymusPro: ["anonnymus-pro", "sans-serif"],
        helvetica: ["'Helvetica Neue LT GEO'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
