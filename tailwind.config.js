/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cavern-pink": "#E1B0AC",
        "navy-blue": "#213F99",
        "light-pink": "#F2D4D6",
      },
    },
  },
  plugins: [],
});
