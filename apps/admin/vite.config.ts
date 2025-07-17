import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src/') }]
  },
  plugins: [react(), generouted(), tailwindcss()],
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 5173 // 可选，指定端口
  }
})
