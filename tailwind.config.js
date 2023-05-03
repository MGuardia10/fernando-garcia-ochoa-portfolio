/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lato: ['lato'],
        BASKVILL: ['BASKVILL']
      },
      screens: {
        md: '900px'
      },
      hueRotate: {
        248: '248deg'
      }
    }
  },
  plugins: [
    // require('flowbite/plugin')
  ]
}
