module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      colors: {
        "custom-ligth-blue": '#252945',
        "custom-dark-purple": "#7C5DFA",
        "custom-ligth-100": "#F8F8FB",
        "custom-ligth-200": "#DFE3FA"
      }
    },
  },
  plugins: [],
}
