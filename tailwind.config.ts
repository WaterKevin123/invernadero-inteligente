import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: { primary: '#16a34a', 'primary-dark': '#13803d' },
      fontFamily: { pacifico: ['Pacifico','cursive'], inter: ['Inter','sans-serif'] }
    }
  },
  plugins: [],
}
export default config
