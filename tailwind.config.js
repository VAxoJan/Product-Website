/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        headerFont: ["Kumbh Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}