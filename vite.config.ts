import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { ssr } from 'vite-plugin-ssr/plugin'
import rehypePrism from '@mapbox/rehype-prism'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx({ rehypePlugins: [rehypePrism] }), ssr({ prerender: true })],
  base: "/animated-pancake/"
})
