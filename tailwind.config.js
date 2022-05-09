/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1560px",
      "4xl": "1920px",
    },
    colors: {
      "main-color": "#15C39A",
      black: "#0E1019",
      white: "#f9f9f9",
    },
    extend: {
      fontSize: {
        1: ".25rem",
        1.5: ".375rem",
        2: ".5rem",
        2.5: ".625rem",
        3: ".75rem",
        3.5: ".875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        5.5: "1.375rem",
        6: "1.5rem",
        6.5: "1.625rem",
        7: "1.75rem",
        7.5: "1.875rem",
        8: "2rem",
        8.5: "2.125rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        11.5: "2.875rem",
        12: "3rem",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
      transitionDelay: {
        0: "0ms",
      },
      backgroundImage: {
        "green-shadow":
          "linear-gradient(180deg, rgba(169, 217, 208, 0.35) 0%, rgba(169, 217, 208, 0) 100%)",
      },
      backgroundColor: {},
      boxShadow: {},
      zIndex: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        1000: "1000",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // ".no-select": {
        //   "-webkit-tap-highlight-color": "transparent",
        //   "-webkit-touch-callout": "none",
        //   "-webkit-user-select": "none",
        //   "-khtml-user-select": "none",
        //   "-moz-user-select": "none",
        //   "-ms-user-select": "none",
        //   "user-select": "none"
        // },
        // ".hide-scrollbar": {
        //   "-ms-overflow-style": "none",
        //   "scrollbar-width": "none"
        // },
        ".custom-scrollbar": {
          "scroll-behavior": "smooth",
          "scrollbar-width": "thin",
          "scrollbar-color": "#d4dbdd",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            "background-color": "white",
            "border-radius": "5px",
            border: "1px solid #d4dbdd",
          },
          "&::-webkit-scrollbar-thumb": {
            "background-color": "#d4dbdd",
            "border-radius": "5px",
          },
        },
      });
    }),
  ],
};
