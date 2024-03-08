import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.BASE_URL,
  plugins: [react()],
  server: {
    port: 3334,
    host: true
  }
})
