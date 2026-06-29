import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rmSync } from 'node:fs'
import { join } from 'node:path'

const publishedImages = new Set([
  'interface-ai-assistant.png',
  'interface-dashboard.png',
  'interface-explainability.png',
  'interface-network-orange.png',
  'interface-stock-table.png',
  'logo.png',
  'method-architecture.png',
  'method-kernel-dtw.png',
  'system-home-v2.png',
])

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'trim-public-assets',
      closeBundle() {
        rmSync(join(process.cwd(), 'dist', 'docs'), { recursive: true, force: true })
        for (const name of [
          'architecture.png',
          'baseline-correlation.jpg',
          'graph-fusion.jpg',
          'interface-cluster-analysis.png',
          'interface-market-structure.png',
          'interface-network-graph.png',
          'kernel-dtw.png',
          'ppt-contact-sheet.jpg',
          'system-home.png',
          'system-screen-1.png',
          'system-screen-2.png',
        ]) {
          if (!publishedImages.has(name)) {
            rmSync(join(process.cwd(), 'dist', 'images', name), { force: true })
          }
        }
        rmSync(join(process.cwd(), 'dist', 'videos', 'full-demo.mp4'), { force: true })
      },
    },
  ],
  base: '/SynGraphX-Showcase/',
})
