import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/modules': path.resolve(__dirname, './src/modules'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/routes': path.resolve(__dirname, './src/routes'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/layouts': path.resolve(__dirname, './src/modules/layouts'),
      '@/commons': path.resolve(__dirname, './src/modules/commons'),
      '@/auth': path.resolve(__dirname, './src/modules/auth'),
      '@/products': path.resolve(__dirname, './src/modules/products'),
      '@/users': path.resolve(__dirname, './src/modules/users'),
      '@/home': path.resolve(__dirname, './src/modules/home'),
      '@/chat': path.resolve(__dirname, './src/modules/chat')
    }
  },
  server:{ 
    port: 3000
  }
})
