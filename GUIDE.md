# 📖 The Web Tweaks — Developer Guide

> **Purpose:** This file tells you exactly where everything lives and what to edit.
> No guessing, no digging through code.

---

## 🎨 Global Styles & Theme

**File:** `src/index.css`

All visual tokens are in `:root` at the very top of the file. Change these and the entire site updates.

```
:root {
  --color-bg           → Background color
  --color-text         → Main text color
  --color-accent       → Primary accent (buttons, links, glows)
  --color-accent-hover → Accent hover state
  --color-muted        → Muted/gray text
  --color-card-bg      → Card background
  --color-border       → Border colors

  --font-heading       → Heading font family (Syne)
  --font-body          → Body font family (Inter)
  --font-mono          → Mono font family (DM Mono)

  --section-padding    → Vertical padding for all sections
  --container-width    → Max content width
  --border-radius      → Default border radius

  --ease-out           → Animation easing (fast start)
  --ease-in-out        → Animation easing (smooth)
  --ease-drawer        → Drawer/slide easing
}
```

### To change the accent color:
→ Open `src/index.css` → Change `--color-accent` value

### To change fonts:
→ Open `src/index.css` → Change `--font-heading` / `--font-body`
→ Also update the Google Fonts `<link>` in `index.html`

---

## 🔤 Fonts

**File:** `index.html` (the `<link>` tag in `<head>`)

```
Syne 700, 800     → Headings (H1, H2, H3, hero)
Inter 400, 500, 600 → Body text, buttons, nav
DM Mono 400       → Section labels like "01 — Services"
```

### To swap a font:
1. Go to [fonts.google.com](https://fonts.google.com)
2. Copy the new `<link>` tag
3. Replace the existing one in `index.html`
4. Update `--font-heading` or `--font-body` in `src/index.css`

---

## 🧭 Navbar

**File:** `src/components/Navbar.jsx`

### Navigation links:
Look for the `navLinks` array at the top of the file:
```js
const navLinks = [
  { label: "Work",     path: "/work"     },
  { label: "Services", path: "/services" },
  { label: "Process",  path: "#process"  },
  { label: "About",    path: "/about"    },
]
```
→ Add, remove, or rename links here. The JSX renders them automatically.

### Logo text:
Search for `"The Web Tweaks"` in the JSX — it's a plain text string.

### CTA button text:
Search for `"Start a Project"` — it's the button label.

---

## 🦸 Hero Section

**File:** `src/components/Hero.jsx`

### Headline:
Look for the `headline` variable at the top:
```js
const headline = "We Build Websites That Actually Convert"
```

### Subtitle:
```js
const subtitle = "..."
```

### CTA buttons:
```js
const ctaPrimary = { label: "Start a Project", link: "/contact" }
const ctaSecondary = { label: "See Our Work", link: "/work" }
```

### Mouse tracker orb:
The glowing orb is in this file. It uses Motion's `useSpring`.
- To change orb color → search for the gradient/background style
- To change follow speed → adjust `stiffness` and `damping` values
- To remove the orb → delete the `<MouseTracker />` component from the JSX

---

## 📢 Marquee / Ticker

**File:** `src/components/Marquee.jsx`

### Ticker items:
```js
const marqueeItems = [
  "React", "Next.js", "GSAP", "Figma", "Webflow", "Motion", "Vite"
]
```
→ Add or remove items from this array. The animation handles the rest.

### Speed:
In the CSS (`index.css` or scoped styles), look for:
```css
animation: marquee __s linear infinite;
```
→ Change the `__s` duration value. Lower = faster.

---

## 🛠️ Services Section

**File:** `src/components/Services.jsx`

### Service cards:
```js
const services = [
  {
    icon: "Palette",         // ← Lucide icon name
    title: "Web Design",
    description: "..."
  },
  {
    icon: "Code",
    title: "Development",
    description: "..."
  },
  // ... more cards
]
```

### To add a new service:
→ Add a new object to the `services` array. That's it.

### To change an icon:
→ Browse icons at [lucide.dev/icons](https://lucide.dev/icons)
→ Replace the `icon` string with the new icon name

---

## 🔢 Process Section

**File:** `src/components/Process.jsx`

### Steps:
```js
const steps = [
  { number: "01", title: "Discovery",  description: "..." },
  { number: "02", title: "Design",     description: "..." },
  { number: "03", title: "Develop",    description: "..." },
  { number: "04", title: "Launch",     description: "..." },
]
```
→ Add or edit steps here.

---

## 💼 Work / Portfolio Section

**File:** `src/components/Work.jsx`

### Projects:
```js
const projects = [
  {
    title: "Project Name",
    category: "Web Design",
    image: "/images/project1.jpg",   // ← put images in public/images/
    slug: "project-name"
  },
  // ... more projects
]
```

### To add a new project:
1. Add your project image to `public/images/`
2. Add a new object to the `projects` array
3. Done — the grid auto-expands

---

## 📊 Stats Section

**File:** `src/components/Stats.jsx`

### Numbers:
```js
const stats = [
  { value: 50,  suffix: "+", label: "Projects Completed" },
  { value: 30,  suffix: "+", label: "Happy Clients"      },
  { value: 3,   suffix: "+", label: "Years Experience"    },
]
```
→ Change `value`, `suffix`, or `label` here.
→ NumberFlow animates the counting automatically.

---

## 💬 Testimonials Section

**File:** `src/components/Testimonials.jsx`

### Quotes:
```js
const testimonials = [
  {
    quote: "They transformed our online presence...",
    name: "John Doe",
    role: "CEO, Company Name",
    avatar: "/images/avatar1.jpg"   // ← put in public/images/
  },
  // ... more testimonials
]
```
→ Add new testimonials by adding objects to the array.

---

## 📣 CTA Banner

**File:** `src/components/CtaBanner.jsx`

### Text:
```js
const ctaHeadline = "Ready to Build Something Great?"
const ctaSubtext = "..."
const ctaButtonLabel = "Get In Touch"
const ctaButtonLink = "/contact"
```
→ Edit these strings to change the CTA content.

---

## 🔗 Footer

**File:** `src/components/Footer.jsx`

### Footer links:
```js
const footerLinks = [
  { label: "Work",     path: "/work"     },
  { label: "Services", path: "/services" },
  { label: "About",    path: "/about"    },
  { label: "Contact",  path: "/contact"  },
]
```

### Social links:
```js
const socials = [
  { icon: "Twitter",   url: "https://twitter.com/yourhandle"   },
  { icon: "Instagram", url: "https://instagram.com/yourhandle" },
  { icon: "Linkedin",  url: "https://linkedin.com/in/yourname" },
]
```

### Copyright text:
Search for `"The Web Tweaks"` in the JSX.

---

## 📄 Pages & Routing

**File:** `src/app.jsx`

### Routes:
```jsx
<Route path="/"             element={<Home />}        />
<Route path="/work"         element={<Work />}         />
<Route path="/work/:slug"   element={<ProjectDetail />}/>
<Route path="/services"     element={<Services />}     />
<Route path="/about"        element={<About />}        />
<Route path="/contact"      element={<Contact />}      />
```

### To add a new page:
1. Create `src/pages/NewPage.jsx`
2. Add a `<Route>` line in `src/app.jsx`
3. Add a link in `navLinks` (Navbar.jsx) and `footerLinks` (Footer.jsx)

---

## 🖼️ Images & Assets

**Location:** `public/images/`

All static images go here. Reference them with `/images/filename.jpg` in your code.

```
public/
├── favicon.svg
├── icons.svg
└── images/
    ├── project1.jpg
    ├── project2.jpg
    ├── avatar1.jpg
    └── ...
```

---

## 📱 Responsive Breakpoints

**File:** `src/index.css`

```
< 640px    → Mobile (1 column, hamburger nav)
640–1024px → Tablet (2 columns, condensed)
> 1024px   → Desktop (full layout, 3–4 columns)
```

Fluid values use `clamp()` — they scale automatically.
Layout changes use `@media` queries.

---

## 🎞️ Animations

### GSAP (scroll-driven)
- **Files:** Inside each component's `useGSAP()` hook
- **Scroll triggers** control when things animate in
- **To disable a section's animation:** Remove the `useGSAP()` block in that component

### Motion (component-level)
- **Files:** `Navbar.jsx` (mobile menu), any modal/dialog
- **Spring physics:** Look for `useSpring` / `stiffness` / `damping`
- **To change animation speed:** Adjust `duration` or spring values

### Marquee
- **File:** CSS in `index.css` or component styles
- **Pure CSS** — `animation: marquee Xs linear infinite`

### Mouse Tracker
- **File:** `src/components/Hero.jsx` (or separate `MouseTracker.jsx`)
- **To change follow speed:** Edit `stiffness` (higher = snappier) and `damping` (higher = less bounce)

---

## ⚡ Quick Reference

| I want to...                  | Go to...                              |
|-------------------------------|---------------------------------------|
| Change site colors            | `src/index.css` → `:root`             |
| Change fonts                  | `index.html` + `src/index.css` `:root`|
| Edit hero headline            | `src/components/Hero.jsx` → top       |
| Add a service card            | `src/components/Services.jsx` → array |
| Add a portfolio project       | `src/components/Work.jsx` → array     |
| Change stat numbers           | `src/components/Stats.jsx` → array    |
| Add a testimonial             | `src/components/Testimonials.jsx`     |
| Change CTA text               | `src/components/CtaBanner.jsx` → top  |
| Add a nav link                | `src/components/Navbar.jsx` → array   |
| Add social links              | `src/components/Footer.jsx` → array   |
| Add a new page                | `src/pages/` + route in `app.jsx`     |
| Add project images            | `public/images/`                      |
| Disable an animation          | Remove `useGSAP()` from that file     |
| Change mouse tracker speed    | `stiffness` / `damping` values        |
