/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "neu-pale-orange" : "hsl(33, 100%, 98%)",
        "neu-dark-brown" : "hsl(25, 47%, 15%)",
        "neu-medium-brown" : "hsl(28, 10%, 53%)",
        "neu-cream" : "hsl(27, 66%, 92%)",

        "prim-soft-red" : "hsl(10, 79%, 65%)",
        "prim-cyan" : "hsl(186, 34%, 60%)",


// ## Primary
// - Soft red: hsl(10, 79%, 65%)
// - Cyan: hsl(186, 34%, 60%)

// ### Neutral

// - Dark brown: hsl(25, 47%, 15%)
// - Medium brown: hsl(28, 10%, 53%)
// - Cream: hsl(27, 66%, 92%)
// - Very pale orange: hsl(33, 100%, 98%)

      }
    },
  },
  plugins: [],
}

