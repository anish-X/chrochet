/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Brand Foundation Tokens
        'brand-primary': '#485B48',
        'brand-primary-hover': '#384A38',
        'brand-primary-light': '#76864A',
        'brand-pink': '#FFC2C2',
        'brand-terracotta': '#CE876E',
        'brand-brown': '#8A6A52',
        'brand-dark': '#283A44',
        'brand-gold': '#EFB254',
        'brand-border': '#F0DAD5',
        'brand-muted': '#F9E9E6',

        // Main Background & Off-white Canvas (#FFF9F7)
        parchment: {
          DEFAULT: '#FFF9F7',
          50: '#FFFFFF',
          100: '#FFF9F7',
          200: '#F9E9E6',
          300: '#F0DAD5',
          400: '#E2BFB8',
        },
        // Warm Delicate Linen / Muted Background (#F9E9E6) & Borders (#F0DAD5)
        linen: {
          DEFAULT: '#F9E9E6',
          50: '#FFFFFF',
          100: '#FFF9F7',
          200: '#F9E9E6',
          300: '#F0DAD5',
          400: '#E2BFB8',
        },
        // Deep Charcoal Teal (Primary Text & Dark Surfaces - #283A44)
        espresso: {
          DEFAULT: '#283A44',
          dark: '#1D2A31',
          light: '#354854',
          soft: '#455E6D',
          muted: '#7B92A0',
          subtle: '#B0C2CC',
        },
        // Warm Cocoa Brown (Secondary Text & Subtitles - #8A6A52)
        umber: {
          DEFAULT: '#8A6A52',
          muted: '#8A6A52',
          subtle: '#A88B74',
          light: '#D3BFB1',
        },
        // Terracotta & Blush Pink (#CE876E / #FFC2C2)
        terracotta: {
          DEFAULT: '#CE876E',
          50: '#FCF7F5',
          100: '#F8ECE7',
          200: '#F1D6CC',
          300: '#FFC2C2', // Blush Pink
          400: '#E29E88',
          500: '#CE876E', // Terracotta
          600: '#B86F57',
          700: '#9B543E',
          800: '#7E3F2D',
          900: '#5F2D1F',
          clay: '#CE876E',
          pink: '#FFC2C2',
        },
        // Forest Sage Green (Primary Brand & Buttons - #485B48)
        sage: {
          DEFAULT: '#485B48',
          50: '#F4F7F4',
          100: '#E4ECE4',
          200: '#C7D7C7',
          300: '#A4BFA4',
          400: '#76864A', // Olive Sage
          500: '#5D735D',
          600: '#485B48', // Forest Sage Green (Primary Button)
          700: '#384A38', // Primary Button Hover
          800: '#2A382A',
        },
        // Golden Yellow (#EFB254 - Highlights, Badges & Stars)
        honey: {
          DEFAULT: '#EFB254',
          50: '#FEFAF0',
          100: '#FDF3DC',
          200: '#F9E3B7',
          400: '#EFB254', // Golden Yellow
          500: '#DC9B36',
          600: '#BA7A1E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'craft-sm': '0 1px 3px rgba(38, 46, 42, 0.05), 0 1px 2px rgba(38, 46, 42, 0.03)',
        'craft-md': '0 4px 14px rgba(38, 46, 42, 0.07), 0 2px 6px rgba(38, 46, 42, 0.04)',
        'craft-lg': '0 12px 28px rgba(38, 46, 42, 0.09), 0 4px 10px rgba(38, 46, 42, 0.05)',
        'craft-lift': '0 16px 36px -4px rgba(38, 46, 42, 0.12), 0 6px 12px -2px rgba(38, 46, 42, 0.06)',
      },
      borderRadius: {
        'craft': '12px',
        'craft-lg': '20px',
      }
    },
  },
  plugins: [],
}
