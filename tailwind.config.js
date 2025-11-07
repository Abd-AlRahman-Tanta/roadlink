import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "#09090b",
        gray: "#292A2A",
        darkGray: "#121212",
        lightGray: "#C2C2C2",
        errorRed: "#Cc0202",
        successGreen: "#198754",
        buttonBg : "#FF6B35" ,
        heroLayerColorStart : "rgba(18,21,57,70%)",
        heroLayerColorEnd : "rgba(255,107,53,10%)",
        regularLayerStart : "rgba(18,21,57,0%)" ,
        regularLayerEnd : "rgba(18,21,57,70%)",
        orangeIconBg : "rgba(255, 107, 53, 10%)" ,
        whiteIconBg : "rgba(255, 255, 255 , 10%)" ,
        homePageBack : "#F7F9FC" ,
        none: "transparent",
      },
      fontFamily: {
        cairo: ["Cairo", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        desc: { max: "992px" },
        tab: { max: "768px" },
        mob: { max: "576px" },
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      boxShadow: {
        normal: "2px 3px 6px 0 #00000030",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        scaleUp: {
          "0%": { transform: "scale(0.90)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(2rem)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0rem)",
          },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 300ms ease-in-out",
        fadeIn: "fadeIn 150ms ease-in-out",
        scaleUp: "scaleUp 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
