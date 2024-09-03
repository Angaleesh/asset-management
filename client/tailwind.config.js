/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#402b5a",
        black: "#363636",
        gray: "#cfcfcf",
        slate: "#787878",
        overlay: "#030E1E50",
        contactbg: "#030E1E",
      },
      backgroundImage: {
        hero: "url(assets/images/herobg.png)",
        buttonbg: "linear-gradient(30deg, #f29f05 50%, transparent 50%)",
      },
      boxShadow: {
        xl: "0px -1px 30px 4px rgba(0,0,0,0.05)",
        lg: "-1px 15px 26px -4px rgba(161,151,151,0.15)",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        skew: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        fadeIn1: "fadeIn 400ms ease-in-out",
        fadeIn2: "fadeIn 400ms ease-in-out",
        skew: "skew 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
