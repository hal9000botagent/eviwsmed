// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
    site: 'https://evidenzbasierte-wirbelsaeulenmedizin.de',
    
    adapter: cloudflare(),
    
    output: 'server',
    
    // No Starlight - plain Astro with Stitch designs
});
