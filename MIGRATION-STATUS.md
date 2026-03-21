# EviWsMed V2: Stitch → Astro Migration Status

**Date:** 2026-03-21  
**Status:** ✅ Core Migration Complete

## What's Done

### ✅ 1. Configuration
- Removed `@astrojs/starlight` dependency
- Clean `astro.config.mjs` with only Cloudflare adapter
- Updated `package.json` (removed Starlight, kept Cloudflare adapter)
- New `content.config.ts` with glob loader for erkrankungen collection

### ✅ 2. Layouts (VERBATIM from Stitch)
- **BaseLayout.astro** - Shared head with Tailwind CDN, fonts, config, dark mode
- **LandingLayout.astro** - Wrapper for landing page
- **ArticleLayout.astro** - Article template with sidebar, breadcrumb, prose

### ✅ 3. Components (Extracted from Stitch)
- **Navbar.astro** - Top navigation with dark mode toggle
- **Footer.astro** - Footer with mobile bottom nav

### ✅ 4. Pages
- `/` - Landing page ✅
- `/erkrankungen` - Category listing ✅
- `/erkrankungen/degenerativ/*` - 4 articles ✅
- `/impressum`, `/datenschutz`, `/glossar`, `/ueber-uns`, `/quiz` - Placeholders ✅

### ✅ 5. Content Migration
- Moved 4 existing articles from Starlight to new structure
- All Markdown preserved

### ✅ 6. Design Fidelity
- All Stitch HTML/CSS VERBATIM
- Glass effects, typography, colors unchanged

### ✅ 7. Build
- `npm run build` ✅
- `npm run dev` ✅ (http://127.0.0.1:4321/)

## Next Steps

1. Visual QA (screenshot all pages, compare with Stitch)
2. Fix search (switch to hybrid mode for Pagefind)
3. Dark mode toggle UI
4. Mobile testing
5. Replace placeholder content
6. Deploy to Cloudflare

## Dev Server

```bash
cd /Users/agent/Projects/eviwsmed
npm run dev
# → http://127.0.0.1:4321/
```
