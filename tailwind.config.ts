/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#26C6DA",

          secondary: "#3F51B5",

          accent: "#db6b69",

          neutral: "#242b38",

          "base-100": "#eff0f6",

          info: "#a2d7e2",

          success: "#ffffff",

          warning: "#f1b150",

          error: "#f65a5f",
        },
      },
    ],
  },
};
