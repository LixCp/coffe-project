/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        "brown":{
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:"#967259",
          900:"#634832",
        }
      },
      boxShadow:{
        "c-shadow": "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius:{
        "4xl":"2rem",
      },
      fontFamily:{
        "dana":"Dana",
        "danaMedium":"Dana Medium",
        "danaDemiBold":"Dana DemiBold",
        "morabbaLight":"Morabba Light",
        "morabbaMedium":"Morabba Medium",
        "morabbaBold":"Morabba Bold"
      },
      letterSpacing:{
        "tightset":"-0.065em"
      },
      spacing:{
        '30':"7.5rem"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

