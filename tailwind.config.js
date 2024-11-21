/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet: '600px',
        laptop: '900px',
        desktop: '1280px',
      },
      boxShadow: {
        glow: '0 0 10px rgba(26, 174, 51, 0.8)', // Customize this as needed
      },
      borderRadius: {
        'tl-24': '24px 24px 24px 24px',
      },
      spacing: {
        '48px': '48px',
        '510px': '510px',
        '437px': '437px',
        100: '25rem,',
      },
      colors: {
        'custom-bgreen': '#cee0d0',
        'custom-green': '#1aae33',
        'custom-purple': '#8133f1',
        'custom-blue': '#33adf1',
        'custom-white': '#f2f7f4',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
