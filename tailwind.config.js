/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'top-bottom':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        xl: { max: '1279px' },

        lg: { max: '1023px' },

        md: { max: '787px' },

        sm: { max: '639px' },

        xs: { max: '375px' },
      },
      colors: {
        color1: '#F5F7FF',
        color2: '#005EAD',
        color3: '#0156FF',
        color4: '#01A4FF',
        color5: '#A2A6B0',
        color6: '#CACDD8',
        color7: '#000000',
        color8: '#C94D3F',
        color9: '#78A962',
        color10: '#666666',
      },
      backgroundImage: {
        feat1: "url('./src/img/featuring/featuring1.jpg')",
        feat2: "url('./src/img/featuring/featuring2.jpeg')",
        feat3: "url('./src/img/featuring/featuring3.jpeg')",
        customBuilds: 'url(./src/img/pcs/customBuildsimg.jpg)',
      },
      maxWidth: {
        readable: '30cw',
      },
      fontSize: {
        xxs: '0.65rem',
      },
      scale: {
        115: '1.15',
      },
    },

    plugins: [],
  },
};
