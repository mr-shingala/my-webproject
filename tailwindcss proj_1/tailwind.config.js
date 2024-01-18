/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    extend: {

      colors:{

       'deepblue':'rgb(2, 4, 42)',
       'skyblue':'rgb(43, 132, 234)',
       'limegreen':'rgb(97, 206, 166)',
       'lightgray':'rgb(226, 226, 226)',
       'lightblack':'rgb(7, 38, 84)',
       'borcolor':'#b5d5fa',
      },

      screens: {
         
        'xxl': {'max': '1340px'},
        'xxxl': {'max': '1280px'},
        'xll':{'max': '1150px'},
        'lg':{'max':'1023px'},
      'md': {'max': '767px'},
      'mdmd': {'max': '767px'},
        'smax':{'max':'600px'},
        'smaxx':{'max':'430px'},
        'max':{'max':'350px'},
        'emax':{'max':'230px'},

      },
    },
  },
  plugins: [],
}