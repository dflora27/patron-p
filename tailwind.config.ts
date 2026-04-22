import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1B3022',
          black: '#121212',
          obsidian: '#090909',
          gold: '#598565',
          cinnamon: '#A74D3A',
          walnut: '#3E2723',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('/noise.png')",
        'radial-fade': 'radial-gradient(circle, rgba(18,18,18,0) 0%, rgba(18,18,18,1) 90%)'
      }
    },
  },
  plugins: [],
}
export default config
