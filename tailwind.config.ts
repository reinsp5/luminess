import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f4f6fb",
          "100": "#e8ecf6",
          "200": "#cbd8ec",
          "300": "#9eb7db",
          "400": "#6a91c6",
          "500": "#4773b0",
          "600": "#355b94",
          "700": "#2c4978",
          "800": "#283f64",
          "900": "#263754",
          "950": "#0c111b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
