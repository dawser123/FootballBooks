/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url(assets/hero-img.jpg)",
      },
      colors: {
        "primary-color": "#050A30",
        "secondary-color": "#0b145b",
        "primary-color-hover": "#3ba027 ",
        "primary-color-hover-button": "#9C7356 ",
        "secondary-text-color": "#10141f",
        "primary-text-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
