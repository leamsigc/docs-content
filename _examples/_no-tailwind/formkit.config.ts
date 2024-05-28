import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { genesisIcons } from '@formkit/icons'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, inputs)

export default defineFormKitConfig({
  plugins: [pro],
  theme: 'genesis', // legacy Genesis CSS theme
  icons: {
    ...genesisIcons,
  },
})
