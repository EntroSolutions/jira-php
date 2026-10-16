/** NativeWind/Tailwind configuration for Local Bulgarian Tour. */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Bulgarian cultural palette — flag colors + traditional accent tones.
        // All text/bg pairs meet WCAG AA contrast.
        flag: {
          green: '#00994D',
          red: '#D62612',
        },
        primary: {
          DEFAULT: '#00994D', // BG flag green
          dark: '#007A3E',
          light: '#4DB87F',
        },
        accent: {
          DEFAULT: '#D62612', // BG flag red
          dark: '#A81E0E',
          light: '#E86A5C',
        },
        // Rose-oil gold, inspired by Kazanlak rose festival motifs.
        gold: '#C79A3B',
        surface: {
          light: '#FFFFFF',
          dark: '#121B17',
        },
        background: {
          light: '#F7F9F7',
          dark: '#0B100E',
        },
        content: {
          light: '#1A241F',
          dark: '#F2F5F2',
        },
        muted: {
          light: '#5C6B63',
          dark: '#9AAFA3',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      fontSize: {
        caption: ['12px', { lineHeight: '16px' }],
        body: ['16px', { lineHeight: '24px' }],
        heading: ['24px', { lineHeight: '32px', fontWeight: '700' }],
        display: ['32px', { lineHeight: '40px', fontWeight: '800' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
};
