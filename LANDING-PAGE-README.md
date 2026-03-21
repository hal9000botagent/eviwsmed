# EviWsMed Landing Page — Design Dokumentation

## Überblick
Custom Astro Landing Page im Function Health Stil für evidenzbasierte-wirbelsaeulenmedizin.de

## Architektur
- **Landing Page**: `src/pages/index.astro` (Custom, OHNE Starlight Layout)
- **Artikel**: Starlight bleibt unverändert (Sidebar, TOC, Search funktionieren)
- **Routing**: Custom Landing überschreibt Starlight splash page

## Design-Adaption von Function Health

### ✓ Implementierte Sections
1. **Hero Section**
   - Badge "EVIDENZBASIERT"
   - H1 mit Italic Emphasis
   - Subtitle mit klarem Versprechen
   - Primary CTA Button

2. **Numbered Steps** (3er-Grid)
   - 01 Erkrankung finden
   - 02 Verständlich erklärt
   - 03 Quellenbasiert informiert

3. **Scrolling Ticker**
   - Infinite Loop Animation (40s)
   - 8 Erkrankungen (dupliziert für seamless scroll)

4. **Category Cards** (5 Kategorien)
   - Degenerativ
   - Verletzungen
   - Tumoren
   - Entzündungen
   - Fehlbildungen
   - Hover-Effekte (translateY, border-color, shadow)

5. **Trust Section**
   - 2 Blockquotes aus AWMF-Leitlinien
   - Gold-Border Left Accent

6. **Author Section**
   - Grid Layout (1:2 auf Desktop)
   - Gradient Background Placeholder (👨‍⚕️)
   - Dr. Jan-Philip Zeden Credentials

7. **Comparison Table**
   - EviWsMed vs Dr. Google
   - 5 Vergleichspunkte (Check ✓ / Cross ✗)
   - Responsive Grid (2fr 1fr 1fr auf Mobile)

8. **Footer**
   - 3-Spalten Grid (Auto-fit)
   - Inhalte, Kategorien, Rechtliches

9. **Navigation**
   - Sticky Nav mit Backdrop-Blur
   - Mobile Hamburger Menu (Transform-Animation)

## Styleguide (beibehalten)
### Fonts
- Headlines: **Playfair Display** (700, italic für Akzente)
- Body: **EB Garamond** (400, 500)
- Nav/Labels: **Cormorant SC** (500, letter-spacing 0.08em)

### Colors (Light Mode)
- BG: `#F5F0E8` (Elfenbein)
- Primary: `#6B1D2A` (Burgunder)
- Accent: `#2D4A3E` (Waldgrün)
- Gold: `#A8884A`
- Border: `#D4CBBA`
- Card: `#FFFDF7`

### Colors (Dark Mode)
- BG: `#1A1A1F` (Nacht)
- Primary: `#C4586A` (Rosé)
- Accent: `#5A9E82` (Jade)
- Gold: `#C4A96A`

## Features
- ✅ Mobile-first responsive
- ✅ Smooth scroll animations (IntersectionObserver)
- ✅ CSS-only gradient visuals (kein 404-Risiko)
- ✅ Schema.org MedicalWebPage maintained
- ✅ Keine externen Dependencies (außer Google Fonts)
- ✅ Pagefind Search funktioniert (Starlight-Seiten)
- ✅ Build-fähig (`npm run build`)

## Was NICHT implementiert
- Keine Login/Signup CTAs (ist kein Produkt)
- Keine Pricing Section
- Kein Doctor-Profil-Slider (nur statisches Autor-Element)
- Keine Video-Embeds (kann später hinzugefügt werden)

## Nächste Schritte (Optional)
1. **Echtes Autor-Foto** statt Emoji
2. **Mehr Erkrankungen im Ticker** (falls vorhanden)
3. **Testimonials** von Patienten/Kollegen
4. **Statistiken** (Anzahl Artikel, Quellen, Besucher)
5. **Newsletter-Signup** im Footer

## Deployment
- Cloudflare Pages deployed automatisch nach Git Push
- Keine Änderungen an bestehenden Artikel-Seiten
- Landing Page ist SEO-optimiert (Schema.org, Meta Tags)

## Technisch
- **Build Time**: ~1.6s
- **Pages**: 24 (Landing + 23 Starlight-Seiten)
- **Pagefind Index**: 502ms
- **Output**: Static HTML

---

**Commit Hash**: 5d99ca0
**Datum**: 2026-03-21
**Status**: ✅ Production Ready
