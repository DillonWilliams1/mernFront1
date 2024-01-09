

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
}