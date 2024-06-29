/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Calibre", "Inter", "San Francis"],
      extend: {
        colors: {
          navy: {
            100: "#CEE4F4",
            200: "#A0C7EA",
            300: "#6592C0",
            400: "#355782",
            default: "#0a192f",
            600: "#071328",
            700: "#050E21",
            800: "#03091B",
            900: "#010616",
          },
        },
        slate: {
          300: "#ccd6f6",
          400: "#a8b2d1",
          500: "#8892b0",
          600: "#495670",
        },
      },
    },
  },
  plugins: [],
};
