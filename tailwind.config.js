/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#293C3D", dark: "#1F2E2F", gold: "#C9A461" }
      }
    },
  },
  plugins: [],
}
