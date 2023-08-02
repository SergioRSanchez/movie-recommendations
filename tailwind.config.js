/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-outfit)',
      },
      colors: {
        purple: '#8323FF',
        pink: '#FF2DAF',
        yellow: '#FEEA35',
        'cinza-dark': '#1E1F28',
        cinza: '#2B2B37',
        'cinza-medio': '#373745',
        'cinza-light': '#8B8D9B',
      },
      animation: {
        "slide-down": "slideDown 0.8s linear",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" }
        }
      }
    },
  },
  plugins: [],
}
