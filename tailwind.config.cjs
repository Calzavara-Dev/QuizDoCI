module.exports = {
  content: [
    './index.html',
    './*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './utils/**/*.{ts,tsx,js,jsx}',
    './types/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      colors: {
        app: {
          dark: '#05070e',
          card: '#0f172a',
          accent: '#00e5ff',
          purple: '#8b5cf6',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.4)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(0, 229, 255, 0.15)',
      }
    },
  },
  plugins: [],
};

