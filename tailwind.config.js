/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#FAF8F5',
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4EFE8',
          300: '#ECE3D7',
        },
        linen: {
          DEFAULT: '#F5EFEB',
          100: '#FAF6F2',
          200: '#EFE7DF',
          300: '#E4D7C9',
          400: '#D5C4B1',
        },
        espresso: {
          DEFAULT: '#1D1714',
          light: '#2C231F',
          soft: '#3A302A',
        },
        umber: {
          DEFAULT: '#5A4E46',
          muted: '#807268',
          subtle: '#A6988E',
        },
        terracotta: {
          50: '#FDF6F3',
          100: '#FAECE7',
          200: '#F5D8CF',
          300: '#EDB7A6',
          400: '#DD8A71',
          500: '#B35438',
          600: '#994128',
          700: '#7D331E',
          800: '#642918',
        },
        sage: {
          50: '#F2F6F3',
          100: '#E3ECE5',
          200: '#C7DACB',
          300: '#A4C1AA',
          500: '#52775E',
          600: '#3D5A46',
          700: '#2E4434',
          800: '#233428',
        },
        honey: {
          50: '#FDF9F0',
          100: '#FAF1DE',
          200: '#F4DFB8',
          400: '#DE9F45',
          500: '#C98630',
          600: '#AA6D21',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'craft-sm': '0 1px 3px rgba(29, 23, 20, 0.05), 0 1px 2px rgba(29, 23, 20, 0.03)',
        'craft-md': '0 4px 14px rgba(29, 23, 20, 0.07), 0 2px 6px rgba(29, 23, 20, 0.04)',
        'craft-lg': '0 12px 28px rgba(29, 23, 20, 0.09), 0 4px 10px rgba(29, 23, 20, 0.05)',
        'craft-lift': '0 16px 36px -4px rgba(29, 23, 20, 0.12), 0 6px 12px -2px rgba(29, 23, 20, 0.06)',
      },
      borderRadius: {
        'craft': '12px',
        'craft-lg': '20px',
      }
    },
  },
  plugins: [],
}

