import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  base: '/slides-miashs-2025/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'slides/*',
          dest: 'slides'
        }
      ]
    })
  ]
}