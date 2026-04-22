import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Accent palette — identical in both themes.
        // Neutrals like `brand.black` / `brand.obsidian` are deliberately
        // STATIC dark; use `surface.*` tokens for theme-aware backgrounds.
        brand: {
          green: '#1B3022',
          black: '#121212',
          obsidian: '#090909',
          gold: '#598565',
          cinnamon: '#A74D3A',
          walnut: '#3E2723',
        },
        // Theme-aware surfaces (swap with `.dark` class on <html>)
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
          inverse: 'rgb(var(--surface-inverse) / <alpha-value>)',
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
          muted: 'rgb(var(--foreground-muted) / <alpha-value>)',
          subtle: 'rgb(var(--foreground-subtle) / <alpha-value>)',
        },
        hairline: {
          DEFAULT: 'rgb(var(--hairline) / <alpha-value>)',
          strong: 'rgb(var(--hairline-strong) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('/noise.png')",
        'radial-fade': 'radial-gradient(circle, rgba(var(--surface),0) 0%, rgba(var(--surface),1) 90%)'
      }
    },
  },
  plugins: [],
}
export default config
