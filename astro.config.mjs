// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site URL - used for canonical URLs and Open Graph tags
  // Update this to your custom domain when you connect it
  site: 'https://luismonbo-com.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  }
});