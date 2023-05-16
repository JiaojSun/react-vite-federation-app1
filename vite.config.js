import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';
import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        shared: 'http://localhost:5001/assets/shared.js'
      },
      shared: ['react']
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://172.12.253.156:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
        // rewrite: (path) => path.replace("/api", "")
      }
    }
  },
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  }
});
