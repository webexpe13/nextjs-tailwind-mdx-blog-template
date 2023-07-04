/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx', './src/**/*.tsx'],
  theme: {
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1000px",
      xl: "1200px"
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
