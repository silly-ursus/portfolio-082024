/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        portia: ['Portia\\ AgedOblique', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}

