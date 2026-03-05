import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './stories/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        'gochi-hand': ['"Gochi Hand"', ...fontFamily.serif],
      },
      fontSize: {
        '5xl':     '3.75rem',  // 60px
        '4xl':     '3rem',     // 48px
        '3xl':     '1.75rem',  // 28px
        '2xl':     '1.5rem',   // 24px
        'xl':      '1.25rem',  // 20px
        'lg':      '1.125rem', // 18px
        'default': '1rem',     // 16px
        'sm':      '0.875rem', // 14px
        'xs':      '0.75rem',  // 12px
        '2xs':     '0.625rem', // 10px
      },
      lineHeight: {
        'heading': '1.2',
      },
      letterSpacing: {
        '1': '0.0625rem',
      },
      spacing: {
        '4.5': '1.125rem', // 18px
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', translate: '0 -20px' },
          '100%': { opacity: '1', translate: '0 0' },
        },
        slideRight: {
          '0%': { opacity: '0', translate: '-20px 0' },
          '100%': { opacity: '1', translate: '0 0' },
        },
        slideLeft: {
          '0%': { opacity: '0', translate: '20px 0' },
          '100%': { opacity: '1', translate: '0 0' },
        },
        slideUp: {
          '0%': { opacity: '0', translate: '0 -20px' },
          '100%': { opacity: '1', translate: '0 0' },
        },
      },
      animation: {
        slideDown: 'slideDown 240ms ease-in both',
        slideRight: 'slideRight 240ms ease-in both',
        slideLeft: 'slideLeft 240ms ease-in both',
        slideUp: 'slideUp 240ms ease-in both',
      },
      boxShadow: {
        'soft-y': '0 -16px 32px rgba(165,165,165,0.10), 0 16px 32px rgba(165,165,165,0.10)',
      },
      borderRadius: {
        'xs':     '0.125rem', // 2px
        'sm':     '0.25rem',  // 4px
        'DEFAULT':'0.375rem', // 6px  → rounded
        '3xl':    '1.25rem',  // 20px
        '4xl':    '1.5rem',   // 24px
        '5xl':    '5rem',     // 80px
      },
      colors: {
        neutral: {
          100:  '#f5f5f5',
          200:  '#f9f9f9',
          300:  '#e6e6e6',
          400:  '#d6d6d6',
          500:  '#a5a5a5',
          600:  '#767676',
          700:  '#575757',
          800:  '#434343',
          900:  '#292929',
          1000: '#000000',
          60:   '#00000099',
          20:   '#00000033',
        },
        primary: {
          100:  '#f0f7ff',
          200:  '#b9defe',
          300:  '#7cc5fd',
          400:  '#36a8fa',
          500:  '#0c8ce9',
          600:  '#006fc9',
          700:  '#0257a2',
          800:  '#064b86',
          900:  '#0b3f6f',
          1000: '#07284a',
          60:   '#0c8ce999',
          20:   '#0c8ce933',
        },
        secondary: {
          100:  '#f9f5ff',
          200:  '#f1e7ff',
          300:  '#e5d4ff',
          400:  '#d0b2ff',
          500:  '#9751fb',
          600:  '#802eef',
          700:  '#6c1ed2',
          800:  '#5d1eab',
          900:  '#4d198a',
          1000: '#310566',
          60:   '#9751fb99',
          20:   '#9751fb33',
        },
        success: {
          100:  '#d7f4e0',
          200:  '#b3e7c6',
          300:  '#89d7ab',
          400:  '#4dba80',
          500:  '#2a9f64',
          600:  '#1c7f4f',
          700:  '#166642',
          800:  '#145136',
          900:  '#11432e',
          1000: '#09251a',
          60:   '#2a9f6499',
          20:   '#2a9f6433',
        },
        danger: {
          100:  '#fdd1d1',
          200:  '#fba3a3',
          300:  '#fa7474',
          400:  '#f84646',
          500:  '#f61818',
          600:  '#e20909',
          700:  '#c10808',
          800:  '#9f0606',
          900:  '#7d0505',
          1000: '#5c0404',
          60:   '#e2090999',
          20:   '#e2090933',
        },
        warning: {
          100:  '#fff7c0',
          200:  '#ffeb85',
          300:  '#ffd83f',
          400:  '#ffc10b',
          500:  '#f4a700',
          600:  '#d37e00',
          700:  '#a85700',
          800:  '#8a4409',
          900:  '#75380e',
          1000: '#451b03',
          60:   '#f4a70099',
          20:   '#f4a70033',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
