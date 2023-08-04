/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#642C92',
          secondary: '#eb1c7b',
          tiertiary: '#489fb5',
          dark: '#1C1C1C',
          light: '#e5e7eb',
        }
      },
      fontFamily: {
        'sans': [
          'Palanquin',
          'sans-serif'
        ],
        'headings': [
          'Nunito',
          'sans-serif'
        ]
      },
    },
  },
  plugins: [],
}

