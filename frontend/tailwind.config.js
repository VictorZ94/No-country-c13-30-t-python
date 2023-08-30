/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primario-c": {
          300: "#444965",
          400: "#2A2B4D",
          500: "#110F36"
        },
        "secondary-c": "#4F48ED"
      },
      backgroundColor: theme => ({
        ...theme("colors"),
        "blanco-c": "#F7F8FB",
        "placeholder-c": "#D8D7F8",
        "secondary-c": "#4F48ED"
      }),
      ringColor: {
        "blanco-c": "#F7F8FB",
        "placeholder-c": "#D8D7F8",
        "secondary-c": "#4F48ED"
      },
      borderColor: {
        "blanco-c": "#F7F8FB",
        "placeholder-c": "#D8D7F8",
        "secondary-c": "#4F48ED"
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
