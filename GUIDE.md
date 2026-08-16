# 📖 The Web Tweaks — Architecture & Developer Guide

> **Purpose:** Accurate technical reference for **The Web Tweaks** boutique studio website.
> Covers design tokens, component architecture, Three.js WebGL background, GSAP + Lenis motion system, and content customization.

---

## 🎨 Global Design System & CSS Tokens

**File:** [`src/index.css`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/index.css)

All primary visual tokens are defined in `:root` at the top of `src/index.css`:

```css
:root {
  /* Color Palette */
  --bg: #0B0A08;                       /* Primary dark background */
  --bg2: #161310;                      /* Card & panel surface background */
  --ink: #F3EEE3;                      /* Primary light text & headings */
  --dim: #948C7C;                      /* Muted body copy & secondary labels */
  --ember: #E85C1F;                    /* Vibrant ember orange accent (CTAs, kickers) */
  --gold: #D9A441;                     /* Vintage warm gold accent (eyebrows, script) */
  --line: rgba(243, 238, 227, 0.12);   /* Subtle border & divider line */
  --line-strong: rgba(243, 238, 227, 0.26); /* Card border on hover / emphasis */

  /* Typography Stacks */
  --font-editorial: 'Fraunces', serif;        /* Italic editorial serif headline font */
  --font-sans-bold: 'Space Grotesk', sans-serif; /* Massive bold sans headlines */
  --font-script: 'Caveat', cursive;           /* Hand-drawn accent script highlights */
  --font-body: 'Inter', sans-serif;           /* Clean, legible UI & body font */
  --font-mono: 'JetBrains Mono', monospace;   /* Technical labels, tags, numbers */

  /* Layout & Radii */
  --container-max: 1280px;
  --section-padding-y: clamp(4rem, 8vw, 8rem);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
}
```

---

## 🏗️ Component Structure

All modular components are located in [`src/components/`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components):

| Component | File | Description |
| :--- | :--- | :--- |
| **BackgroundEffects** | [`BackgroundEffects.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/BackgroundEffects.jsx) | Ambient film grain overlay + mouse-reactive glowing smoke blobs |
| **CustomCursor** | [`CustomCursor.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/CustomCursor.jsx) | Desktop lerp custom cursor with default, link hover, and `[data-view]` states |
| **Navbar** | [`Navbar.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Navbar.jsx) | Fixed glassmorphism header, monogram badge, desktop tab links, and animated mobile drawer |
| **Hero** | [`Hero.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Hero.jsx) | Kinetic mixed-typography split reveal, rotating circular badge seal, studio summary |
| **HeroThreeCanvas**| [`HeroThreeCanvas.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/HeroThreeCanvas.jsx) | Interactive WebGL dual-icosahedron wireframe background in Three.js |
| **Marquee** | [`Marquee.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Marquee.jsx) | Seamless infinite ticker of studio capabilities |
| **FeaturedProject**| [`FeaturedProject.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/FeaturedProject.jsx) | Spotlight project card with interactive parallax card and detail modal trigger |
| **Studio** | [`Studio.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Studio.jsx) | 01 section: Core studio expertise, 6-person team avatar stack, studio guarantee |
| **Process** | [`Process.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Process.jsx) | 4-step delivery pipeline from Discovery & Architecture to Launch & Care |
| **Services** | [`Services.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Services.jsx) | 02 section: Service cards with tech tags and bespoke flat-lay SVG desk illustration |
| **Work** | [`Work.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Work.jsx) | 03 section: 3D interactive tilt cards with metrics & case study modal trigger |
| **Testimonials** | [`Testimonials.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Testimonials.jsx) | Animated carousel with client endorsements and verified metrics |
| **Faq** | [`Faq.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Faq.jsx) | Expandable spring-animated accordion for common client questions |
| **Contact** | [`Contact.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Contact.jsx) | 04 section: Project inquiry brief form, budget selector, studio direct contact info |
| **Footer** | [`Footer.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Footer.jsx) | Monogram, section navigation, social links, back-to-top button |
| **CaseStudyModal** | [`CaseStudyModal.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/CaseStudyModal.jsx) | Modal dialog for Problem / Approach / Result breakdown with keyboard lock and escape key handler |

---

## ⚡ Motion & Physics Architecture

### 1. Lenis Smooth Scrolling + GSAP ScrollTrigger
**File:** [`src/utils/smoothScroll.js`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/utils/smoothScroll.js)
- Smooth wheel scrolling integrated with GSAP's `ticker`.
- `lagSmoothing(0)` ensures seamless scroll synchronicity.
- Automatically disables when `(prefers-reduced-motion: reduce)` is detected.

### 2. Three.js WebGL Wireframe Background
**File:** [`src/components/HeroThreeCanvas.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/HeroThreeCanvas.jsx)
- Renders an interactive 3D icosahedron wireframe with ember and gold line materials.
- Gently tilts in response to cursor coordinates.
- Fully cleans up geometries, materials, and RAF frames on unmount.

### 3. Motion (Framer Motion) Micro-Interactions
- Used in `Navbar` (mobile drawer transitions), `CaseStudyModal` (spring open/close), `Testimonials` (cross-fading quotes), and `Faq` (spring height expansion).

---

## 🚀 How to Edit Content

### To edit Featured or Portfolio Projects:
1. Open [`src/components/FeaturedProject.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/FeaturedProject.jsx) or [`src/components/Work.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Work.jsx).
2. Edit the `projects` or `featuredData` object (title, problem, approach, result, metrics, stack).
3. The card and the interactive modal update automatically!

### To edit FAQs:
- Open [`src/components/Faq.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Faq.jsx) and add/modify objects in the `faqs` array.

### To edit Services:
- Open [`src/components/Services.jsx`](file:///c:/Users/MSI%20GAMING/Documents/Web%20Develpoment/LameWeb/The%20Web%20Tweaks/src/components/Services.jsx) and add/modify items in `serviceList` or `toolChips`.

---

## 🛠️ Build & Development Commands

```bash
# Start local development server
npm run dev

# Build production bundle with optimized chunking
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```
