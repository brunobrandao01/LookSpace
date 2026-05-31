/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#02020d',
          900: '#070815',
          800: '#12162a',
          700: '#1a1e3f',
          600: '#252c57',
          500: '#4d5bf8',
        },
      },
      boxShadow: {
        glow: '0 0 80px rgba(79, 118, 255, 0.25)',
      },
      backgroundImage: {
        'space-radial': 'radial-gradient(circle at top, rgba(79, 118, 255, 0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(255, 94, 140, 0.14), transparent 18%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
