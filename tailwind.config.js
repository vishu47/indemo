module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'xxs': '380px',
      'xs': '280px',
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      colors: {
        'std': '#341F87',
      },
      text: {
        'std': '#341F87',
      },
      boxShadow: {
        'shadow-std': '0px 4px 4px rgba(0, 0, 0, 0.25',
      },
    },
  },
  plugins: [],
}