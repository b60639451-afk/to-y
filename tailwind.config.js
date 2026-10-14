/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush:    { 50: '#FFF5F5', 100: '#FDE8E8', 200: '#F5C6CB', 300: '#E8A5AE', 400: '#D4919A', 500: '#C07C85' },
        burgundy: { DEFAULT: '#8B3A4A', dark: '#6B2D3E', light: '#A85060' },
        ivory:    { DEFAULT: '#FFF9F5', warm: '#FDF6F0', deep: '#F5EDE6' },
        gold:     { light: '#E2D0A8', DEFAULT: '#C9A96E', dark: '#A88C55' },
        walnut:   { DEFAULT: '#4A3728', light: '#6B5B4F', muted: '#8A7A6E' },
      },
      fontFamily: {
        script:  ['"Great Vibes"', 'cursive'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp:     { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:     { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        scaleIn:    { '0%': { opacity: 0, transform: 'scale(.9)' }, '100%': { opacity: 1, transform: 'scale(1)' } },
        float:      { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        flapOpen:   { '0%': { transform: 'rotateX(0deg)' }, '100%': { transform: 'rotateX(180deg)' } },
        slideUp:    { '0%': { transform: 'translateY(60px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
        heartbeat:  { '0%,100%': { transform: 'scale(1)' }, '14%': { transform: 'scale(1.15)' }, '28%': { transform: 'scale(1)' }, '42%': { transform: 'scale(1.15)' }, '56%': { transform: 'scale(1)' } },
      },
      animation: {
        'fade-up':   'fadeUp .8s ease-out forwards',
        'fade-in':   'fadeIn .6s ease-out forwards',
        'scale-in':  'scaleIn .7s ease-out forwards',
        'float':     'float 4s ease-in-out infinite',
        'flap-open': 'flapOpen .8s ease-in-out forwards',
        'slide-up':  'slideUp .8s cubic-bezier(.16,1,.3,1) forwards',
        'heartbeat': 'heartbeat 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
