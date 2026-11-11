/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // 🎨 Warna brand Erlangga + bulatan logo
      colors: {
        'brand-blue': '#324da1',
        'primary-blue': '#0647A3',
        'primary-blue-bg': '#F3F6FF',
        'secondary-yellow': '#F7941E',
        'secondary-yellow-bg': '#FFF6EB',
        'secondary-red': '#FF4B4B',
        'secondary-red-bg': '#FFF5F5',
        'secondary-green': '#05AF49',
        'secondary-green-bg': '#E9FFF2',
      },

      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'marquee-reverse': {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },

        // 🌈 Gradient bergerak
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },

        // 🌊 Wave divider
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      animation: {
        // 🏃 Marquee variasi speed
        'marquee-fast': "marquee 15s linear infinite",
        'marquee-medium': "marquee 25s linear infinite",
        'marquee-slow': "marquee 40s linear infinite",
        'marquee-reverse-fast': "marquee-reverse 15s linear infinite",
        'marquee-reverse-medium': "marquee-reverse 25s linear infinite",
        'marquee-reverse-slow': "marquee-reverse 40s linear infinite",

        // 🔄 Spin
        'spin-slow': "spin 15s linear infinite",
        'spin-reverse': "spin-reverse 15s linear infinite",

        // 🌈 Gradient bergerak
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'gradient-xy': 'gradient-xy 12s ease infinite',

        // 🌊 Wave
        'wave-slow': 'wave 20s linear infinite',
        'wave-fast': 'wave 8s linear infinite',
      },

      fontSize: {
        'editorial-h1': 'clamp(2rem, 5vw, 4rem)',
        'editorial-h2': 'clamp(1.5rem, 4vw, 3rem)',
        'editorial-p': 'clamp(1rem, 1.5vw, 1.25rem)',
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      lineHeight: {
        none: '1',
        tight: '1.2',
      },

      boxShadow: {
        'brand-glow': '0 0 20px rgba(50, 77, 161, 0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
        'glow-blue': '0 0 25px rgba(6,71,163,0.35)',
        'glow-yellow': '0 0 25px rgba(247,148,30,0.35)',
      },

      // 🪄 Tambahan untuk layering
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.circle-fluid': {
          width: 'clamp(7rem, 10vw, 10rem)',
          height: 'clamp(7rem, 10vw, 10rem)',
        },
        '.logo-fluid': {
          width: 'clamp(5rem, 8vw, 8rem)',
          height: 'clamp(5rem, 8vw, 8rem)',
        },
        '.right-fluid': {
          right: 'clamp(1rem, 5vw, 3rem)',
        },
        '.scale-lock': {
          transform: 'scale(1)',
          'transform-origin': 'top left',
        },
        '.btn-primary': {
          '@apply bg-primary-blue hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-editorial-p transition-all': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary-yellow hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-editorial-p transition-all': {},
        },

        // 🪟 Glass effect
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        },
      })
    }
  ],
}
