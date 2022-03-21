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
    },
  },
  variants: {},
  plugins: [],
};
