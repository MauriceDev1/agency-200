import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      strategies: 'injectManifest',
      srcDir: 'src',  // Directory containing sw.ts
      filename: 'sw.ts', // The name of your service worker file
      registerType: 'autoUpdate',
      injectManifest: {
        swSrc: 'src/sw.ts', // Path to the source service worker
        swDest: 'dist/sw.js', // Destination of the final service worker
      },
      manifest: {
        name: 'Task Management APP',
        short_name: 'Taskio',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        theme_color: '#1a1a1a',
        background_color: '#1a1a1a',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
      },
    }),
  ],
})
