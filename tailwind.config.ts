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
          blue: "#001535",       // Azul Oscuro (fondo principal de secciones oscuras)
          blueLight: "#0C2350",  // Azul Marino medio (tarjetas y bordes sobre fondo oscuro)
          light: "#F8FAFC",      // Blanco Humo (fondo de secciones claras)
          accent: "#2563EB",     // Azul Eléctrico (botones, links, íconos activos)
          accent2: "#22D3EE",    // Celeste/Cian (detalles, degradados, acentos secundarios)
          text: "#334155",       // Gris Pizarra (texto sobre fondo claro)
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