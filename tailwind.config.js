/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'neutral':{
        0:'rgb(255 255 255/1)',
        50: 'rgb(211 216 232/1)',
        300: '#b4b4b4',
        400: 'rgb(209 213 219/1)',
        500: '#515152'
      },
      'purple':{
        600: 'rgb(117 99 236)',
        // 600:'#8c52ff',
        700:'#8244ff',
      },
      'blue':{
        500: '#0a0d38',
        750: 'rgb(38 43 66/1)',
        850: 'rgb(17 21 44/1)',
        950:'rgb(13 18 36/1)'
      },
      'green':'rgb(22 248 182/1)',
      'pink':'rgb(249 38 174/1)',
      'orange':'rgb(255 159 36/1)',
      'yellow':'rgb(255 210 36/1)',
      'cyan':'rgb(20 213 254/1)'
    },
    extend: {},
  },
  plugins: [],
}