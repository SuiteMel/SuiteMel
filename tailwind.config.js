/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
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
      screens: {
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}

