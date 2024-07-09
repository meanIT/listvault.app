module.exports = {
  mode: 'jit',
  content: [
    './public/*.html'
  ],
  corePlugins: {
    container: true 
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      colors: {
        'picton-blue': {
          '50': '#f2f8fd',
          '100': '#e3f0fb',
          '200': '#c2e1f5',
          '300': '#8cc8ed',
          '400': '#62b5e5',
          '500': '#2791d0',
          '600': '#1974b0',
          '700': '#155d8f',
          '800': '#164f76',
          '900': '#174363',
          '950': '#102a41',
        }
      }
    }
  }
};
