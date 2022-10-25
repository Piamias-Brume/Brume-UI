const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./entities/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("aria-selected", "[aria-selected=true]&");
      addVariant("aria-unselected", "[aria-selected=false]&");

      addVariant("data-loading", "[data-loading=true]&");

      addVariant("ahover", ["&:active", "@media(hover: hover){&:hover}"]);
      addVariant("scroll", "&::-webkit-scrollbar-thumb");
      addVariant("children", "& > *");
    }),
  ],
  theme: {
    extend: {
      colors: {
        indigo1: "#fdfdfe",
        indigo2: "#f8faff",
        indigo3: "#f0f4ff",
        indigo4: "#e6edfe",
        indigo5: "#d9e2fc",
        indigo6: "#c6d4f9",
        indigo7: "#aec0f5",
        indigo8: "#8da4ef",
        indigo9: "#3e63dd",
        indigo10: "#3a5ccc",
        indigo11: "#3451b2",
        indigo12: "#101d46",

        violet1: "#fdfcfe",
        violet2: "#fbfaff",
        violet3: "#f5f2ff",
        violet4: "#ede9fe",
        violet5: "#e4defc",
        violet6: "#d7cff9",
        violet7: "#c4b8f3",
        violet8: "#aa99ec",
        violet9: "#6e56cf",
        violet10: "#644fc1",
        violet11: "#5746af",
        violet12: "#20134b",
        violet13: "#110a29",

        mauve1: "#fdfcfd",
        mauve2: "#f9f8f9",
        mauve3: "#f4f2f4",
        mauve4: "#eeedef",
        mauve5: "#e9e8ea",
        mauve6: "#e4e2e4",
        mauve7: "#dcdbdd",
        mauve8: "#c8c7cb",
        mauve9: "#908e96",
        mauve10: "#86848d",
        mauve11: "#6f6e77",
        mauve12: "#1a1523",

        slate1: "#fbfcfd",
        slate2: "#f8f9fa",
        slate3: "#f1f3f5",
        slate4: "#eceef0",
        slate5: "#e6e8eb",
        slate6: "#dfe3e6",
        slate7: "#d7dbdf",
        slate8: "#c1c8cd",
        slate9: "#889096",
        slate10: "#7e868c",
        slate11: "#687076",
        slate12: "#11181c",

        tomato1: "#fffcfc",
        tomato2: "#fff8f7",
        tomato3: "#fff0ee",
        tomato4: "#ffe6e2",
        tomato5: "#fdd8d3",
        tomato6: "#fac7be",
        tomato7: "#f3b0a2",
        tomato8: "#ea9280",
        tomato9: "#e54d2e",
        tomato10: "#db4324",
        tomato11: "#ca3214",
        "tomato11.5": "#8b230e",
        tomato12: "#341711",

        grass1: "#fbfefb",
        grass2: "#f3fcf3",
        grass3: "#ebf9eb",
        grass4: "#dff3df",
        grass5: "#ceebcf",
        grass6: "#b7dfba",
        grass7: "#97cf9c",
        grass8: "#65ba75",
        grass9: "#46a758",
        grass10: "#3d9a50",
        grass11: "#297c3b",
        grass12: "#1b311e",
      },
    },
  },
};
