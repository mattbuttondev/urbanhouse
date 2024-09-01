import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
      },
      screens: {
        default: "100%",
        "2xl": "1536px",
      },
      center: true,
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "auto" }],
      sm: ["0.875rem", { lineHeight: "1.375rem" }],
      md: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.25rem", { lineHeight: "1.75rem" }],
      xl: ["1.5rem", { lineHeight: "2rem" }],
      "2xl": ["1.75rem", { lineHeight: "2.25rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3rem" }],
    },
    extend: {
      colors: {
        accent: {
          100: "#FCFCFD",
          200: "#E0E0E1",
          300: "#97989B",
          400: "#787A7D",
          500: "#5A5B5E",
          600: "#3C3C3E",
        },
        primary: {
          100: "#CCE3E6",
          200: "#AAD1D5",
          300: "#55A2AB",
          400: "#007481",
          500: "#00616B",
          600: "#004D56",
        },
        danger: {
          100: "#FDE9EC",
          200: "#F7A7B4",
          300: "#EF5069",
          400: "#EB2444",
          500: "#C91330",
          600: "#A30F27",
        },
        warning: {
          100: "#FFF9EE",
          200: "#FFF7E1",
          300: "#FFFAB3",
          400: "#FFDD82",
          500: "#FFC62B",
          600: "#FFAD0D",
        },
        success: {
          100: "#E8F7F0",
          200: "#D1EEE0",
          300: "#47BC84",
          400: "#158E54",
          500: "#177247",
          600: "#0D4027",
        },
      },
    },
  },
  plugins: [],
};
export default config;
