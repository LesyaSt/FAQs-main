/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html" ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('./images/background-pattern-desktop.svg')"
      },
      backgroundSize: {
         'custom-size': '100% 50%',
      },
      colors: {
        'dark-purple': 'hsl(292, 42%, 14%)',
        'light-purple': 'hsl(292, 16%, 49%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'purple': '#b326ee'
      },
      fontFamily: {
        custom: ['WorkSansBold', 'bold'],
        regular: ['WorkSansRegular', 'regular'],
        semibold: ['WorkSansSemiBold', 'semi-bold'],
        variable: ['WorkSansSemiVariable', 'variable']
      },
     
    },
  },
  plugins: [],
}

