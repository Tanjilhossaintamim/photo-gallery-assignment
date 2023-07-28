/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-black": "#131617",
        "color-red": "#F71735",
        "color-white": "#E3E3E3",
        "color-gradiant": "#00000001",
        "color-font": "#b7b7b7"
      },
      backgroundImage: {
        'banner-image': "url('assets/banner.jpg')",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: {
          DEFAULT: "20px",
          md: '50px'
        }
      }
    }
  },

  plugins: [],
}

