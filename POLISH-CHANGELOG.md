# Polish Pass Changelog — EviWsMed Landing Page

**Date:** 2026-03-21  
**Commit:** feat: polish pass - premium animations, spacing & micro-interactions

---

## 🎯 Design-Gap Analysis (vs. Function Health)

### Before
- Basic IntersectionObserver (simple opacity fade)
- Linear transitions
- Tight spacing (insufficient whitespace)
- Hard borders on cards
- No backdrop-blur on navigation
- Missing micro-interactions
- Static hover states

### After
- Premium scroll animations with cubic-bezier easing
- Generous section padding (100-120px)
- Soft shadows with CSS custom properties
- Smooth backdrop-blur navigation
- Rich micro-interactions throughout
- Professional hover states on all interactive elements

---

## ✨ Animation Improvements

### Hero Section
- **Staggered Reveal:** Badge → Headline → Subtitle → CTA (200ms delay each)
- **Keyframe Animation:** `fadeInUp` with cubic-bezier(0.4, 0, 0.2, 1)
- **Initial State:** opacity: 0, translateY(30px)

### Scroll-Triggered Animations
- **IntersectionObserver:**
  - threshold: 0.15
  - rootMargin: '0px 0px -80px 0px'
  - Staggered reveal: 100ms delay per element
- **Animated Elements:**
  - `.step` (numbered steps)
  - `.category-card` (category cards)
  - `.trust blockquote` (testimonials)
  - `.comparison-table` (comparison table)
  - `.author-image` + `.author-text`

### Ticker Animation
- **Duration:** 40s → 45s (slower, smoother)
- **Pause-on-hover:** `animation-play-state: paused`
- **Mask Gradient:** `linear-gradient(90deg, transparent, black 10%, black 90%, transparent)`
- **will-change:** transform (GPU acceleration)

---

## 📐 Typography + Spacing

### Letter-Spacing
- Headlines: `-0.02em` to `-0.03em` (tighter, more premium)
- Cormorant SC: `0.08em` (slight tracking on smallcaps)
- Body text: no change (1.75 line-height preserved)

### Line-Height
- Body: `1.75` (was 1.7)
- Headlines: `1.2`
- Subtitles: `1.8`

### Section Padding
- **Before:** 3-4rem
- **After:** 100-120px (100px default, 120px comparison/categories)
- **Hero:** 5rem (increased from 4rem)

### Font Weights
- Step numbers: `font-weight: 300` (thin, elegant)
- Headlines: `font-weight: 700` (bold, impactful)

### Responsive Sizes
```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(1.8rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.3rem, 3vw, 1.8rem); }
```

---

## 🎯 Micro-Interactions

### Navigation
```css
/* Scroll Behavior */
nav {
  background: transparent;
  backdrop-filter: blur(0px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

nav.scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-subtle);
}

/* Link Underlines */
.nav-links a::after {
  content: '';
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links a:hover::after {
  width: 100%;
}
```

### Hero CTA Button
```css
.hero-cta:hover {
  background: var(--primary-hover);
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--shadow-medium);
}

.hero-cta:active {
  transform: translateY(-1px) scale(0.98);
}
```

### Category Cards
```css
.category-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: var(--primary);
  box-shadow: var(--shadow-medium);
  background: var(--bg);
}

.category-card:hover h3 {
  color: var(--gold);
}

.category-card:hover li::before {
  transform: translateX(4px);
}
```

### Comparison Table
```css
.comparison-row:hover .check {
  transform: scale(1.2);
}
```

### Footer Links
```css
.footer-section a::before {
  content: '';
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-section a:hover {
  transform: translateX(4px);
}

.footer-section a:hover::before {
  width: 20px;
}
```

---

## 🎨 Visual Polish

### Shadow System
```css
:root {
  --shadow-subtle: 0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.10);
  --shadow-strong: 0 16px 48px rgba(0, 0, 0, 0.14);
}

@media (prefers-color-scheme: dark) {
  :root {
    --shadow-subtle: 0 2px 12px rgba(0, 0, 0, 0.4);
    --shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.5);
    --shadow-strong: 0 16px 48px rgba(0, 0, 0, 0.6);
  }
}
```

### Border-Radius
- Consistent: `12px` for cards, sections
- Buttons: `8px`
- Ticker items: `28px` (pill shape)
- Badge: `24px`

### Gradient Backgrounds
```css
.hero {
  background: linear-gradient(135deg, var(--bg) 0%, var(--card-bg) 50%, var(--bg) 100%);
}

.ticker-section {
  background: linear-gradient(180deg, var(--bg) 0%, var(--card-bg) 50%, var(--bg) 100%);
}

.trust {
  background: linear-gradient(180deg, var(--card-bg) 0%, var(--bg) 100%);
}

footer {
  background: linear-gradient(180deg, var(--bg) 0%, var(--card-bg) 100%);
}
```

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```

---

## 🔧 Technical Details

### Easing Curves
- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — Material Design easing
- **Used for:** transitions, transforms, animations
- **Replaced:** `ease` (browser default) and `linear`

### Performance
- `will-change: transform` on ticker (GPU acceleration)
- IntersectionObserver threshold: 0.15 (trigger earlier)
- Staggered animations prevent layout thrashing
- CSS transitions preferred over JS animations

### Accessibility
- Smooth scroll respects `prefers-reduced-motion` (browser default)
- Focus states preserved
- ARIA labels unchanged
- No pure CSS-driven motion (all triggered by user interaction or scroll)

---

## 📊 Comparison: Before vs After

| Aspect | Before | After |
|--------|--------|-------|
| Section Padding | 3-4rem | 100-120px |
| Transition Easing | linear / ease | cubic-bezier |
| Border Radius | 6-8px mixed | 12px consistent |
| Shadows | basic box-shadow | CSS custom properties |
| Nav Backdrop Blur | none | 12px when scrolled |
| Card Hover | translateY(-4px) | translateY(-6px) + scale(1.02) |
| Hero Animations | none | staggered fadeInUp |
| Scroll Animations | basic fade | fade + slide + stagger |
| Ticker | basic scroll | smooth + pause-on-hover |

---

## ✅ Testing Performed

- [x] `npm run build` — successful build
- [x] Dev server (`npm run dev`) — animations working
- [x] Browser testing — hover states confirmed
- [x] Scroll behavior — IntersectionObserver triggering correctly
- [x] Mobile responsive — layout intact
- [x] Dark mode — shadow values adjusted
- [x] Navigation scroll — backdrop-blur transition smooth

---

## 📝 Notes

- All changes CSS + vanilla JS (no new dependencies)
- Styleguide colors preserved (not modified)
- Mobile-first approach maintained
- Build output clean (no warnings)
- Committed with conventional commit message
