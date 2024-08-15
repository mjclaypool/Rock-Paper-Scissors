/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["Barlow Semi Condensed", "sans-serif"]
      },
      colors: {
        'dark-txt': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
      boxShadow: {
        'inside': 'inset 0 6px 2px 0 rgb(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

