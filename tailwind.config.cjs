/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "375px",
        xxs: "300px",
      },
      scale: {
        '100' : '1.0',
        '80': '0.8',
        '70': '0.7',
        '50': '0.5',
        '45': '0.45',
        '35': '0.35',
      },
      // translate: {
      //   '-1/2': '-50%',
      // //   '200': '200px',
      // //   '600': '600px',
      // //   '100': '-100px',
      // //   '50': '-50px',
      // },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
