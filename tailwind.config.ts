import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          500: '#4f46e5',
          600: '#4338ca',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(79, 70, 229, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
