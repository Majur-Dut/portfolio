import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // 👈 use your repo name here
  build: {
    outDir: 'build',
    sourcemap: false, // Disable source maps to avoid confusion in production
  },
})
