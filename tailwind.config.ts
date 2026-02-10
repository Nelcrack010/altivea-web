import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <--- Esta es la importante
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        altivea: {
          blue: "#001535",      // Azul Oscuro
          light: "#F8FAFC",     // Blanco Humo
          accent: "#2563EB",    // Azul Eléctrico
          text: "#334155",      // Gris Pizarra
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;