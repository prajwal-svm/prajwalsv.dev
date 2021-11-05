module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundSize: {
      header: '100% 400px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit'
}