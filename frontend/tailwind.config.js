module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        almost: "calc(-6rem + 100vh)",
      },
      maxWidth: {
        "1/2": "50%",
      },

      // keyframes: {
      //   inProgress: {
      //     opacity: "0",
      //     opacity: "1",
      //   },
      // },
      // animation: {
      //   inProgress: "1s ease infinite alternate",
      // },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};

// We installed  `npm install tailwind-scrollbar-hide` to hide scrollbar and then added it to plygins
