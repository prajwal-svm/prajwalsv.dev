module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], safelist: [
      'bg-[#1DA1F2]',
      'bg-[#764ABC]',
      'bg-[#EA4C89]',
      'bg-[#2BB673]',
      'bg-[#0A66C2]',
      'bg-[#181717]',
    ]
  },
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