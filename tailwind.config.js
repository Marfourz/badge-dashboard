/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        borderColor:'#858C94',
        fadeDanger: '#FEEFEF',
        fadeSuccess: '#EDF9F0',
        primary : '#318F60',
        success: '#318F60',
        danger: '#DA1414',
        secondary : '#FC6E1F',
        warning : '#D96C19',
        fadeWarning : '#FCF1E8',
        fadeSecondary : '#FCF1E8',
        tableColor : '#272833',
        grey:{
          10: '#F4F6F9',
          20: '#E5E5E5',
          30: '#A5ABB3',
          40:'#292929',
          50: '#6D7580',
          70: '#394452',
          80: '#09101D',
          90: '#858C94'
        },
        green: {
          100: "#287D3C"
        }
      },
    },
   
  },
  plugins: [],
}

