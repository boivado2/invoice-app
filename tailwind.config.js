module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode : "class",
  theme: {
    fontFamily: {
      spartan : ['League Spartan', "sans-serif"
    ]
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }

      "3xl": "1800px"
      // => @media (min-width: 22506px) { ... }


    },
    
    extend: {
      colors: {
        "custom-dark-blue-100": '#252945',
        "custom-dark-blue-200": "#1E2139",
        "custom-dark-blue-300": "#141625",
        "custom-dark-blue-400": "#0C0E16",
        "custom-dark-purple": "#7C5DFA",
        "custom-ligth-100": "#F8F8FB",
        "custom-ligth-200": "#DFE3FA",
        "custom-ligth-300": "#F2F2F2",
        "custom-dark-gray-100": "#888EB0",
       "custom-dark-gray-200": "#979797",
        "custom-ligth-red-100": "#EC5757",
        "custom-ligth-green-100": "#33D69F",
        "custom-orange": "#FF8F00",
        "custom-ligth-gray-100": "#DFE3FA"
      },
      
      height: {
        "custom-screen-1": "calc(100vh - 80px)",
      },

      boxShadow: {
        '3xl': '0px -15px 5px 0px rgba(0, 0, 0, 0.2)',
      }

    },
  },
  plugins: [],
}
