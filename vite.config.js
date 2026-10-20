import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'PUBLIC_'],
  server: { port: 5173, strictPort: true },
  build: { sourcemap: true }
})
