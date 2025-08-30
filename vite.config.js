import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'J. Yanarico Abogados & Asociados',
        short_name: 'JY Abogados',
        description: 'Defensa estratégica y soluciones legales claras. Primera consulta gratis.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#293C3D',
        background_color: '#293C3D',
        lang: 'es-PE',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ],
        shortcuts: [
          {
            name: 'Hacer consulta',
            short_name: 'Consultas',
            url: '/consultas',
            icons: [{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }]
          }
        ]
      }
    })
  ]
})
