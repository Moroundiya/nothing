/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/hero-image.png')",
        'pattern-bg': "url('/pattern.png')",
        'glyphs': "url('./src/assets/images/GLYPHS.png')",
        'widgets': "url('./src/assets/images/WIDGETS.png')",
        'premium': "url('./src/assets/images/PREMIUM.png')",
        'camera': "url('./src/assets/images/CAMERA.png')",
        'airpod-bg': "url('/airpod-bg.png')",
        'enhance': "url('/GLYPHS.png')",
        'water': "url('/WIDGETS.png')",
        'press': "url('/PREMIUM.png')",
        'overlay-gradient': "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);",
        'interface-bg': "url('/interface.png')",
        'interface': "url('/interfaceSm.png')",
        'connectivity': "url('/connectivity.png')",
        'battery-life': "url('/battery-life.png')",
        'android': "url('/android.png')",
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}

