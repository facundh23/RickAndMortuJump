/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/../src/assets/images/logo.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        Gabarito: ["Gabarito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
