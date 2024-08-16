/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-comorant_upright)",
      secondary: "var(--font-open_sans)",
    },
    extend: {
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero_overlay.png')",
        opening_hours: "url('/assets/opening_hours/bg.png')",
        footer: "url('/assets/footer/bg.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#100E0E",
        },
        secondary: {
          DEFAULT: "#787F8A",
        },
        accent: {
          DEFAULT: "#C7A17A",
          HOVER: "#A08161",
        },
      },
    },
  },
  plugins: [],
};
