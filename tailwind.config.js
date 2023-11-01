/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add or update your custom colors here
        customBlue: "#3498db",
        customRed: "#e74c3c",
        customGreen: "#2ecc71",
      }
    },
  },
  plugins: [],
};
