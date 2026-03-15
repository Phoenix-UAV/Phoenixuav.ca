// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
    vite: {
    plugins: [tailwindcss()], 
  },
  fonts: 
    [
      {
      provider: fontProviders.local(),
      name: "BankGothicBold",
      cssVariable: "--bank-gothic-bold",
      options: {
        variants: [{
          src: ['./src/assets/fonts/bankgothic-md-bt/BankGothicBold.ttf'],
          weight: 'normal',
          style: 'normal'
         }]
        }
      } 
    ]
});
