/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('./src/assets/images/hero-image.png')",
        'pattern-bg': "url('./src/assets/images/pattern.png')",
        'glyphs': "url('./src/assets/images/GLYPHS.png')",
        'widgets': "url('./src/assets/images/WIDGETS.png')",
        'premium': "url('./src/assets/images/PREMIUM.png')",
        'camera': "url('./src/assets/images/CAMERA.png')",
        'airpod-bg': "url('./src/assets/images/airpod-bg.png')",
        'enhance': "url('./src/assets/images/Enhanced_Performance.png')",
        'water': "url('./src/assets/images/Water_Resistence.webp')",
        'press': "url('./src/assets/images/Press_Control.png')",
        'overlay-gradient': "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);",
        'interface-bg': "url('./src/assets/images/interface.png')",
        'interface': "url('./src/assets/images/interfaceSm.png')",
        'connectivity': "url('./src/assets/images/connectivity.png')",
        'battery-life': "url('./src/assets/images/battery-life.png')",
        'android': "url('./src/assets/images/android.png')",
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}

