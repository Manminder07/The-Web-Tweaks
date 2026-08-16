import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three'
          }
          if (id.includes('node_modules/motion')) {
            return 'motion'
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'scroll'
          }
        },
      },
    },
  },
})


