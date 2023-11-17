import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this value as needed
  },
})