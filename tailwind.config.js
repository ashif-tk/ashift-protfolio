/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#163fbd',
        secondary: '#ff7f50',
        cream: '#f8f5ef',
        card: '#ffffff',
        ink: '#1f2937',
        accent: '#e7f0ff',
        coralLight: '#fff1ec',
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(22, 63, 189, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
