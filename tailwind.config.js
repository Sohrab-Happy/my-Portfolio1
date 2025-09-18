/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // allows dark mode toggle
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        accent: "#14b8a6", // Teal
      },
    },
  },
  plugins: [],
};
