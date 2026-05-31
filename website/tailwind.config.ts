import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03050f',
        },
      },
      backgroundImage: {
        'space-radial': 'radial-gradient(ellipse at center, #0a1628 0%, #03050f 70%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34,211,238,0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
