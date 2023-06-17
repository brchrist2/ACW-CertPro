/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.vue","./src/components/*.vue","./public/*.html"],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}