/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",          // Untuk file HTML utama
      "./src/**/*.{js,jsx}",   // Untuk semua file JSX/JS di folder src
    ],
    theme: {
      extend: {
        colors: {
          warning: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
        },
      },
    },
    plugins: [],
  };