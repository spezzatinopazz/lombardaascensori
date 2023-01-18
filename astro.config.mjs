import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://lombardaascensori.it',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
    }), alpinejs(),
    sitemap({
      filter: (page) => 
        page !== 'https://lombardaascensori.it/privacy-policy/' && 
        page !== 'https://lombardaascensori.it/cookie-policy/'
    })
  ]
});