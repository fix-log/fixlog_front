// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-suit)', 'SUIT', 'sans-serif'],
      },
      fontSize: {
        h1: ['var(--font-h1, 54px)', { lineHeight: '110%' }],
        h2: ['var(--font-h2, 42px)', { lineHeight: '110%' }],
        h3: ['var(--font-h3, 32px)', { lineHeight: '110%' }],
        h4: ['var(--font-h4, 24px)', { lineHeight: '130%' }],
        h5: ['var(--font-h5, 22px)', { lineHeight: '130%' }],
        h6: ['var(--font-h6, 20px)', { lineHeight: '110%' }],
        'body-l': ['var(--font-body-l, 18px)', { lineHeight: '140%' }],
        'body-m': ['var(--font-body-m, 16px)', { lineHeight: '140%' }],
        'body-s': ['var(--font-body-s, 14px)', { lineHeight: '140%' }],
        'body-xs': ['var(--font-body-xs, 12px)', { lineHeight: '100%' }],
        'btn-l': ['var(--font-btn-l, 20px)', { lineHeight: '100%' }],
      },
    },
  },
  plugins: [],
};
