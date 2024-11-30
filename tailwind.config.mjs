/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "christmas-pastel": "#E3D3C4",
        "christmas-regular": "#A95646",
        "christmas-green": "#115F37",
        "christmas-green-pastel": "#32676B",
        "christmas-brown": "#F07951",
        "christmas-red": "#E3322E",
        "christmas-grey": "#E6E0E0"
      },
      backgroundImage: {
        christmas: "url(/fondo-calendar.webp)"
      }
    }
  },
  plugins: []
};

/* "christmas-green": "#32676B"" */
