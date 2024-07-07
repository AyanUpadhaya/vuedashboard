/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //custom screen
      screens: {
        xs: "320",
      },
      // custom colors

      colors: {
        transparent: "transparent",
        overlay: "rgba(24, 26, 32,0.6)",
        // disable veriants

        disable: "#D0D0D0",

        // white veriants

        white: "#fff",
        "white-60": "#F9FAFC",
        "white-base": "#C5DDF0",
        "white-low": "#ECEFF5",

        // dark veriants

        dark: "#2E2E2E",
        "dark-200": "#0A142F",

        // black veriants
        "black-900": "#101010",
        "black-600": "#262A41",
        "black-300": "#404852",
        "black-400": "#273240",

        warningColor: "#DC3434",
        barColor: "#31BA96",
      },

      boxShadow: {
        pricingCard: "0px 4px 10px 0px rgba(0, 0, 0, 0.16)",
      },

      // font family

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        avenir: ["AvenirNext", "sans-serif"],
      },

      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
