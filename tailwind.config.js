/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "rgb(12, 24, 46)", // Primary night color
          light: "rgb(25, 40, 80)", // Slightly lighter night shade
          dark: "rgb(8, 16, 30)", // Darker night shade
        },
        darkGrey: {
          DEFAULT: "rgb(138, 145, 175)", // Neutral dark grey
          light: "rgb(165, 172, 202)", // Lighter grey
          dark: "rgb(110, 115, 140)", // Darker grey
        },
        lightGrey: {
          DEFAULT: "rgb(206, 213, 245)", // Base light grey
          light: "rgb(226, 230, 250)", // Lighter shade
          dark: "rgb(180, 186, 220)", // Slightly darker shade
        },
        cyan: {
          DEFAULT: "rgb(132, 252, 219)", // Vibrant cyan
          light: "rgb(180, 255, 234)", // Lighter cyan
          dark: "rgb(90, 200, 170)", // Muted, darker cyan
        },
        complimentary: {
          red: "rgb(255, 77, 77)", // A strong red to contrast with cyan
          yellow: "rgb(255, 212, 77)", // A vibrant yellow
          green: "rgb(77, 255, 148)", // A bright green to complement night tones
          purple: "rgb(148, 77, 255)", // A contrasting purple
        },
      },
      fontFamily: {
        sans: [
          "Nobel",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    daisyui,
  ],
};
