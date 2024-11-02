/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main-font": "Roboto, sans-serif",
      },
      fontSize: {
        "M-h2-font-size": "20px",
        "M-normal-font-size": "15px",
      },
      colors: {
        "body-color": "#FCFCFC",
        "body-color-dark": "#1F1F1F",
        "text-color": "#595959",
        "text-color-dark": "#BFBFBF",
        "title-color": "#2E2E2E",
        "title-color-dark": "#F2F2F2",
        "main-color": "#FFB568",
        "main-color-dark": "#EFBE8A",
        "color-light": "#8C8C8C",
        "button-color": "#2B2B2B",
        "border-color": "#F0F0F0",
        "button-color-dark": "#3D3D3D",
        "container-color-dark": "#292929",
        "border-color-dark": "#333333",
      },
      gridTemplateColumns: {
        "products-3": "repeat(3, minmax(200px, 200px))",
        "products-2": "repeat(2, minmax(144px, 144px))",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scrollBehavior: ["responsive", "hover", "focus"],
    },
  },
};
