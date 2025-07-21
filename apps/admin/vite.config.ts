import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import tailwindcss from '@tailwindcss/vite'
import { compression, defineAlgorithm } from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src/') }]
  },
  plugins: [
    react(),
    generouted(),
    tailwindcss(),
    compression({
      algorithms: [defineAlgorithm('gzip', { level: 9 })]
    }),
    visualizer({
      open: false,
      filename: 'dist/report.html',
      gzipSize: true,
      brotliSize: true
    })
  ]
})
