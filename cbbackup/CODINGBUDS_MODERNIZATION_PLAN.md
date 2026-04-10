# Coding Buds Website Modernization — Execution Plan
> Developer-ready blueprint for GitHub Copilot / AI-assisted rebuild

---

## 1. 🛠 Tech Stack Decision

| Technology | Role | Justification |
|---|---|---|
| **Next.js 14 (App Router)** | Framework | SSR/SSG for SEO, file-based routing, built-in image optimization |
| **TypeScript** | Language | Type safety, better DX, fewer runtime bugs |
| **Tailwind CSS v3** | Styling | Utility-first, fast iteration, built-in responsive variants |
| **Framer Motion** | Animations | Declarative animation API, scroll-linked effects, layout transitions |
| **Three.js + @react-three/fiber** | 3D / WebGL | React-idiomatic Three.js; easiest way to embed 3D scenes in Next.js |
| **@react-three/drei** | 3D Helpers | Ready-made helpers: OrbitControls, Stars, Float, Environment |
| **GSAP (ScrollTrigger)** | Scroll FX | For complex scroll-pinned timelines Framer Motion can't handle natively |
| **EmailJS** | Form email | Drop-in replacement; same provider, zero backend needed |
| **next/font** | Typography | Self-hosted Google Fonts (League Spartan + Poppins) with zero layout shift |
| **Lucide React** | Icons | Lightweight, tree-shakable replacement for Ionicons |
| **next-seo** | SEO | Centralized SEO meta, OG, and structured data management |

> **Alternatives:** Astro (if full SSR not needed), Stitches or vanilla-extract (if avoiding Tailwind), React Spring (lighter alternative to GSAP).

---

## 2. 📁 Project Structure

```
codingbuds/
├── app/
│   ├── layout.tsx               # Root layout (fonts, metadata, providers)
│   ├── page.tsx                 # Home page
│   ├── blogs/
│   │   └── page.tsx             # Blog listing page
│   └── globals.css              # Tailwind base + CSS variable tokens
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx           # Page shell wrapper
│   │
│   ├── sections/                # One file per page section
│   │   ├── Hero.tsx
│   │   ├── Categories.tsx
│   │   ├── About.tsx
│   │   ├── Courses.tsx
│   │   ├── Showcase.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   └── BlogGrid.tsx
│   │
│   ├── ui/                      # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── CounterNumber.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Modal.tsx
│   │   └── Alert.tsx
│   │
│   ├── three/                   # Three.js / R3F scene components
│   │   ├── HeroScene.tsx        # Main 3D hero scene
│   │   ├── ParticleField.tsx    # Background particle system
│   │   └── FloatingObject.tsx   # Reusable animated 3D mesh
│   │
│   └── blog/
│       ├── BlogCard.tsx
│       └── BlogModal.tsx
│
├── animations/
│   ├── variants.ts              # Framer Motion variant presets
│   ├── transitions.ts           # Shared transition configs
│   └── scrollAnimations.ts     # GSAP ScrollTrigger helpers
│
├── hooks/
│   ├── useScrollProgress.ts     # Scroll position hook
│   ├── useInView.ts             # IntersectionObserver hook
│   └── useCountUp.ts            # Animated number counter
│
├── lib/
│   ├── emailjs.ts               # EmailJS config & send helpers
│   ├── blogData.ts              # Blog content data store
│   └── countries.ts             # Country code dataset
│
├── public/
│   ├── images/                  # All existing assets migrated here
│   └── models/                  # Optional .glb 3D model files
│
├── styles/
│   └── tokens.css               # CSS custom properties (colors, radius, shadows)
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 3. 🧩 Component Architecture

### Layout Components

#### `Navbar.tsx`
- **Purpose:** Sticky top navigation with scroll-aware behavior
- **Props:** none (reads scroll state internally)
- **Behavior:**
  - Transparent on top → frosted glass (`backdrop-blur`) after 80px scroll
  - Mobile: slide-in drawer from right with overlay
  - Active link highlight via scroll spy
  - CTA button pulses subtly (Framer Motion `animate` loop)

#### `Footer.tsx`
- **Purpose:** Site footer with links, newsletter, socials
- **Props:** none
- **Behavior:** Newsletter input with EmailJS validation; social icon hover lifts

#### `Layout.tsx`
- **Purpose:** Wraps every page with Navbar + Footer + smooth scroll provider
- **Props:** `children: ReactNode`

---

### Section Components

#### `Hero.tsx`
- **Purpose:** First impression, primary CTA
- **Props:** none
- **Behavior:**
  - Full-viewport height
  - 3D scene (HeroScene) as background via R3F `<Canvas>`
  - Headline animates in with staggered word reveal (Framer Motion)
  - Two floating stat cards animate in from sides
  - Scroll-indicator arrow bounces at bottom

#### `Categories.tsx`
- **Purpose:** 4 course category cards
- **Props:** `categories: CategoryItem[]`
- **Behavior:** Cards stagger-reveal on scroll; hover lifts + gradient border glow

#### `About.tsx`
- **Purpose:** Founder story and trust signals
- **Props:** none
- **Behavior:** Parallax image on scroll (GSAP ScrollTrigger); text reveals line-by-line

#### `Courses.tsx`
- **Purpose:** 4 detailed course cards
- **Props:** `courses: CourseItem[]`
- **Behavior:** Horizontal scroll carousel on mobile; card flip on hover (3D CSS transform)

#### `Stats.tsx`
- **Purpose:** 4 key numbers (students, projects, etc.)
- **Props:** `stats: StatItem[]`
- **Behavior:** Count-up animation triggers on viewport entry (useCountUp hook)

#### `Testimonials.tsx`
- **Purpose:** Social proof section
- **Props:** `testimonials: TestimonialItem[]`
- **Behavior:** Auto-advancing slider with drag support (Framer Motion `drag`)

#### `Contact.tsx`
- **Purpose:** Lead capture form
- **Props:** none
- **Behavior:** EmailJS submit; country dropdown searchable; animated success state

#### `FAQ.tsx`
- **Purpose:** Accordion Q&A
- **Props:** `faqs: FAQItem[]`
- **Behavior:** Framer Motion `AnimatePresence` for smooth expand/collapse; single-open

#### `BlogGrid.tsx`
- **Purpose:** Blog listing
- **Props:** `blogs: BlogPost[]`
- **Behavior:** Masonry-style grid; modal opens with page-level `AnimatePresence`

---

### Reusable UI Components

#### `Button.tsx`
```tsx
type ButtonProps = {
  variant: 'primary' | 'ghost' | 'outline'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
  href?: string
}
```

#### `SectionHeading.tsx`
```tsx
type SectionHeadingProps = {
  subtitle: string    // small label above
  title: string       // main heading
  align?: 'left' | 'center'
}
```

#### `CounterNumber.tsx`
```tsx
type CounterProps = {
  end: number
  suffix?: string   // e.g. '+', '%'
  duration?: number // ms
}
```

---

## 4. 🎨 Styling Strategy

### Approach: Tailwind CSS + CSS Variables

Define all brand tokens in `styles/tokens.css` and extend them into `tailwind.config.ts`.

#### `styles/tokens.css`
```css
:root {
  /* Brand Colors — preserved exactly */
  --color-navy:    #1B2D5B;
  --color-blue:    #2D8EFF;
  --color-orange:  #E8511A;
  --color-soft:    #EEF4FF;
  --color-gray:    #F2F2F2;
  --color-yellow:  #FFD600;

  /* Text */
  --color-body:    #444444;
  --color-muted:   #777777;

  /* Gradients */
  --gradient-brand: linear-gradient(135deg, #E8511A, #2D8EFF);
  --gradient-hero:  linear-gradient(180deg, #1B2D5B 0%, #0d1a35 100%);

  /* Radius */
  --radius-pill:   500px;
  --radius-card:   16px;
  --radius-sm:     8px;

  /* Shadows */
  --shadow-card:   0 4px 24px rgba(27,45,91,0.10);
  --shadow-glow:   0 0 32px rgba(45,142,255,0.25);
}
```

#### `tailwind.config.ts` Extension
```ts
theme: {
  extend: {
    colors: {
      navy:   'var(--color-navy)',
      blue:   'var(--color-blue)',
      orange: 'var(--color-orange)',
      soft:   'var(--color-soft)',
    },
    fontFamily: {
      heading: ['League Spartan', 'sans-serif'],
      body:    ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'display': ['6.5rem', { lineHeight: '1.05' }],
      'h1':      ['4.2rem', { lineHeight: '1.1' }],
      'h2':      ['3.2rem', { lineHeight: '1.15' }],
      'h3':      ['2.3rem', { lineHeight: '1.2' }],
    }
  }
}
```

### Typography Rules
- All headings: `font-heading font-semibold`
- Body text: `font-body text-[var(--color-body)]`
- Section labels: `text-orange uppercase tracking-widest text-sm font-semibold`

### Spacing
- Section vertical padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## 5. 🎬 Animation System

### Primary Library: Framer Motion
### Secondary: GSAP (ScrollTrigger only)

---

### Animation Variant Presets — `animations/variants.ts`

```ts
// Fade up — most common entry animation
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

// Stagger container — wraps a list of children
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

// Fade in from left
export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

// Scale in (for cards, modals)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

// Word-by-word title reveal
export const wordReveal = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
```

### Shared Transition Config — `animations/transitions.ts`
```ts
export const smooth = { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.6 }
export const spring = { type: 'spring', stiffness: 300, damping: 30 }
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
}
```

### Implementation Patterns

#### Pattern 1 — Scroll-triggered section reveal
```tsx
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/variants'

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeUp}>
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

#### Pattern 2 — Hero title word-by-word reveal
```tsx
const title = "Learn Coding. Build the Future."
const words = title.split(' ')

<motion.h1 variants={staggerContainer} initial="hidden" animate="visible">
  {words.map((word, i) => (
    <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.span variants={wordReveal} style={{ display: 'inline-block' }}>
        {word}&nbsp;
      </motion.span>
    </span>
  ))}
</motion.h1>
```

#### Pattern 3 — Card hover interaction
```tsx
<motion.div
  whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
  transition={spring}
>
  {/* card */}
</motion.div>
```

#### Pattern 4 — Modal with AnimatePresence
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={smooth}
    >
      {/* modal content */}
    </motion.div>
  )}
</AnimatePresence>
```

#### Pattern 5 — GSAP ScrollTrigger parallax (About section image)
```ts
// animations/scrollAnimations.ts
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function initAboutParallax(imageRef: RefObject<HTMLElement>) {
  gsap.to(imageRef.current, {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: imageRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}
```

---

## 6. 🌌 3D & Advanced Visual Effects

### Library: Three.js via `@react-three/fiber` + `@react-three/drei`

### Where 3D Is Used

| Location | Effect | Purpose |
|---|---|---|
| Hero section | Floating geometric mesh (icosahedron / torus knot) | Immersive, memorable first impression |
| Hero background | Particle field (star-like dots) | Depth and movement |
| Stats section | Subtle grid plane | High-tech feel |

---

### Hero 3D Scene — `components/three/HeroScene.tsx`

```tsx
'use client'
import { Canvas } from '@react-three/fiber'
import { Float, Stars, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import FloatingObject from './FloatingObject'

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}          // cap pixel ratio for performance
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#2D8EFF" />
          <pointLight position={[-10, -5, -5]} intensity={0.6} color="#E8511A" />

          {/* Main floating 3D object */}
          <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
            <FloatingObject />
          </Float>

          {/* Background particle field */}
          <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
```

### Floating 3D Object — `components/three/FloatingObject.tsx`

```tsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
  })

  return (
    <mesh ref={meshRef} position={[2.5, 0, 0]}>
      <icosahedronGeometry args={[1.4, 4]} />
      <MeshDistortMaterial
        color="#2D8EFF"
        emissive="#1B2D5B"
        metalness={0.8}
        roughness={0.1}
        distort={0.3}
        speed={2}
      />
    </mesh>
  )
}
```

### Performance Rules for 3D
- Always wrap Canvas in `<Suspense>` with a fallback
- Set `dpr={[1, 1.5]}` — never let it go above 1.5
- Use `dispose={null}` on geometries/materials to prevent memory leaks
- Detect `prefers-reduced-motion` and skip the Canvas entirely if set
- Use dynamic import for the entire HeroScene component:

```ts
// In Hero.tsx
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false })
```

---

## 7. 🌊 Scroll & Background Experience

### Smooth Scrolling
Install `lenis` for butter-smooth scrolling:
```bash
npm install lenis
```
Initialize in `app/layout.tsx`:
```ts
const lenis = new Lenis({ lerp: 0.08, smooth: true })
```

### Parallax Strategy
- **Hero background:** CSS `transform: translateY()` driven by scroll position via `useScrollProgress` hook
- **About image:** GSAP ScrollTrigger (see Section 5, Pattern 5)
- **Section backgrounds:** Framer Motion `useScroll` + `useTransform`

```tsx
// hooks/useScrollProgress.ts
import { useScroll, useTransform } from 'framer-motion'

export function useParallax(ref: RefObject<HTMLElement>, distance = 80) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  return useTransform(scrollYProgress, [0, 1], [-distance, distance])
}
```

### Animated Section Backgrounds

#### Hero — Dark starfield gradient
```css
background: radial-gradient(ellipse at 60% 40%, #1e3a7a 0%, #0d1a35 60%, #000 100%);
```

#### Stats — Subtle grid pattern
```css
background-image: linear-gradient(rgba(45,142,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(45,142,255,0.05) 1px, transparent 1px);
background-size: 40px 40px;
```

#### Testimonials — Keep existing dark navy + add animated gradient blob
```tsx
// Animated blob using Framer Motion
<motion.div
  animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
  style={{ background: 'var(--gradient-brand)' }}
/>
```

---

## 8. ⚡ Performance Strategy

### Code Splitting
- Each page section is a separate component — Next.js splits automatically
- 3D scene: dynamic import with `ssr: false` (see Section 6)
- Blog modal content: dynamic import

### Image Optimization
- Replace all `<img>` with `next/image`
- Always provide `width`, `height`, and `priority` on hero image
- Use `loading="lazy"` default for below-fold images

### Animation Performance
- All Framer Motion animations use `transform` and `opacity` only — GPU composited
- GSAP ScrollTrigger: set `invalidateOnRefresh: true` and clean up in `useEffect` return
- Use `will-change: transform` sparingly (only on active animated elements)
- Respect `prefers-reduced-motion`:
```ts
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

### Bundle Size
- Import only used Lucide icons: `import { ArrowRight } from 'lucide-react'`
- Import only used Three.js parts via R3F (tree-shaken automatically)
- Use `next/font` for fonts — eliminates render-blocking external font requests

### 3D Performance
- Limit polygon count: icosahedron detail level `args={[1.4, 4]}` not higher
- Pause `useFrame` when canvas not in viewport using `useIntersect` from drei

---

## 9. 📱 Responsiveness Plan

### Breakpoints (match existing site)
```ts
// tailwind.config.ts
screens: {
  'xs':  '375px',
  'sm':  '575px',
  'md':  '768px',
  'lg':  '992px',
  'xl':  '1200px',
  '2xl': '1400px',
}
```

### Mobile-First Strategy
- Write base styles for mobile, add `md:`, `lg:` modifiers for larger screens
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` pattern throughout
- Hero: single-column stack on mobile, split layout on `lg:`
- Contact form: full-width on mobile, two-column on `lg:`

### Low-End Device Handling
```tsx
// Detect capability and skip 3D
const [canRender3D, setCanRender3D] = useState(false)

useEffect(() => {
  const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const lowMemory = (navigator as any).deviceMemory < 4  // 4GB threshold
  setCanRender3D(!noMotion && !lowMemory)
}, [])

// In Hero.tsx
{canRender3D ? <HeroScene /> : <StaticHeroBg />}
```

### Touch Interactions
- Testimonials slider: enable `drag` on Framer Motion for swipe
- Mobile nav: full-screen overlay with large touch targets (min 44px)
- FAQ: full-width tap area, not just the text

---

## 10. 🔁 Step-by-Step Implementation Plan

---

### Step 1 — Initialize Next.js Project
**Files created:** entire project scaffold

```bash
npx create-next-app@latest codingbuds \
  --typescript --tailwind --eslint --app --src-dir=false
cd codingbuds
```

**Expected output:** Running Next.js app at `localhost:3000`

---

### Step 2 — Install All Dependencies
**Files edited:** `package.json`

```bash
npm install framer-motion gsap lenis three @react-three/fiber @react-three/drei
npm install next-seo lucide-react emailjs-browser
npm install -D @types/three
```

---

### Step 3 — Configure Tailwind + CSS Tokens
**Files created/edited:**
- `styles/tokens.css` → paste full CSS variables block from Section 4
- `tailwind.config.ts` → extend with brand colors, fonts, sizes
- `app/globals.css` → import tokens.css + Tailwind directives

```css
/* app/globals.css */
@import '../styles/tokens.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Expected output:** Brand colors available as `text-navy`, `bg-blue`, etc.

---

### Step 4 — Set Up Fonts
**Files edited:** `app/layout.tsx`

```tsx
import { League_Spartan, Poppins } from 'next/font/google'

const spartan = League_Spartan({ subsets: ['latin'], variable: '--font-heading' })
const poppins  = Poppins({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-body' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spartan.variable} ${poppins.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
```

**Expected output:** League Spartan and Poppins load with no layout shift.

---

### Step 5 — Create Animation Utilities
**Files created:**
- `animations/variants.ts` → paste all variant presets from Section 5
- `animations/transitions.ts` → paste transition configs
- `animations/scrollAnimations.ts` → paste GSAP helper

**Expected output:** Importable animation presets ready for use.

---

### Step 6 — Build Layout Shell
**Files created:**
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/layout/Layout.tsx`

**Navbar implementation checklist:**
- [ ] Logo on left, nav links center, CTA button right
- [ ] `useScroll` to toggle frosted glass class after 80px
- [ ] Mobile hamburger → slide-in drawer with `AnimatePresence`
- [ ] Active section highlight via scroll spy

**Footer implementation checklist:**
- [ ] 4-column grid → 2-col on tablet → 1-col on mobile
- [ ] Newsletter input with EmailJS
- [ ] Social icons with hover lift

**Expected output:** Full-width header + footer visible on home page.

---

### Step 7 — Migrate Brand Data & Content
**Files created:**
- `lib/blogData.ts` → migrate all blog content from existing JS object map
- `lib/countries.ts` → migrate country code dataset
- `lib/emailjs.ts` → EmailJS init + send helper

**Expected output:** All content accessible via typed imports.

---

### Step 8 — Build Hero Section (with 3D)
**Files created:**
- `components/three/FloatingObject.tsx`
- `components/three/HeroScene.tsx`
- `components/sections/Hero.tsx`

**Implementation checklist:**
- [ ] Full-viewport dark navy background
- [ ] R3F Canvas with FloatingObject + Stars (dynamic imported, ssr:false)
- [ ] Animated headline with word-by-word stagger reveal
- [ ] Subtext fade-up after 400ms delay
- [ ] Two floating stat cards animate in from left/right
- [ ] Bounce-animated scroll indicator at bottom
- [ ] Low-end device fallback: static gradient SVG background

**Expected output:** Visually immersive hero with rotating 3D object and animated text.

---

### Step 9 — Build Categories Section
**Files created:** `components/sections/Categories.tsx`

**Implementation checklist:**
- [ ] `SectionHeading` component used for subtitle/title
- [ ] 4-card grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- [ ] Each card: icon, title, description, level badge
- [ ] Stagger reveal on scroll via `staggerContainer` + `fadeUp` variants
- [ ] Hover: `whileHover={{ y: -8 }}` + gradient border glow via box-shadow

**Expected output:** 4 cards appearing with stagger animation on scroll.

---

### Step 10 — Build About Section
**Files created:** `components/sections/About.tsx`

**Implementation checklist:**
- [ ] Two-column layout on `lg:` (image left, text right)
- [ ] GSAP `initAboutParallax` applied to image ref on mount
- [ ] Feature list items stagger-reveal
- [ ] Decorative shapes (reuse existing SVGs via `next/image`)

**Expected output:** Parallax image scrolls at different speed than text.

---

### Step 11 — Build Courses Section
**Files created:** `components/sections/Courses.tsx`

**Implementation checklist:**
- [ ] 4-card grid matching existing content
- [ ] Each card: image (next/image), badge, title, meta row, CTA link
- [ ] Card 3D flip on hover using CSS `transform: rotateY(180deg)` with backface-hidden
- [ ] Scroll-triggered stagger entry

**Expected output:** Course cards with flip interaction on hover.

---

### Step 12 — Build Stats Section with CountUp
**Files created:**
- `hooks/useCountUp.ts`
- `components/ui/CounterNumber.tsx`
- `components/sections/Stats.tsx`

**useCountUp hook:**
```ts
export function useCountUp(end: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = (end / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, end, duration])
  return count
}
```

**Expected output:** Numbers count up smoothly when scrolled into view.

---

### Step 13 — Build Testimonials Section
**Files created:** `components/sections/Testimonials.tsx`

**Implementation checklist:**
- [ ] Dark navy background
- [ ] Animated gradient blob in background (see Section 7)
- [ ] 3-card slider with Framer Motion `drag="x"` on mobile
- [ ] Auto-advance every 5s with pause on hover
- [ ] Dot indicator for current slide

**Expected output:** Auto-playing draggable testimonial carousel.

---

### Step 14 — Build Contact Section
**Files created:** `components/sections/Contact.tsx`

**Implementation checklist:**
- [ ] Two-column layout on `lg:`
- [ ] Left: pitch text + WhatsApp/email links + social icons
- [ ] Right: form with all existing fields (name, email, country+phone, child age, course, message)
- [ ] Country code searchable dropdown (migrate existing logic to React state)
- [ ] EmailJS submit with loading spinner + animated success/error alert
- [ ] Form fields animate in with stagger on scroll

**Expected output:** Fully functional lead form with EmailJS integration.

---

### Step 15 — Build FAQ Section
**Files created:** `components/sections/FAQ.tsx`

**Implementation checklist:**
- [ ] 2-column layout on `md:`
- [ ] `AnimatePresence` for smooth height animation on open/close
- [ ] Only one item open at a time (track `openIndex` in state)
- [ ] Chevron rotates 180° when open

```tsx
<AnimatePresence>
  {openIndex === i && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>
```

**Expected output:** Smooth accordion with single-open behavior.

---

### Step 16 — Build Blog Page + Modal
**Files created:**
- `app/blogs/page.tsx`
- `components/sections/BlogGrid.tsx`
- `components/blog/BlogCard.tsx`
- `components/blog/BlogModal.tsx`

**Implementation checklist:**
- [ ] Blog hero section with page title
- [ ] Masonry grid: `columns-1 sm:columns-2 lg:columns-3`
- [ ] Each card: image, category pill, date, title, excerpt, read button
- [ ] Modal: full-screen overlay with `AnimatePresence`, injected blog content
- [ ] Close on overlay click, close button, and Escape key

**Expected output:** Blog listing with modal article viewer.

---

### Step 17 — Add SEO + Structured Data
**Files edited:** `app/layout.tsx`, `app/page.tsx`, `app/blogs/page.tsx`

```tsx
// app/layout.tsx
export const metadata = {
  title: 'Coding Buds — Coding Classes for Kids',
  description: '...',
  openGraph: { ... },
  twitter: { ... },
}
```

Migrate existing structured data (Organization, Course, FAQ schemas) into `<script type="application/ld+json">` in layout.

**Expected output:** Full OG tags and structured data visible in page source.

---

### Step 18 — Initialize Lenis Smooth Scroll
**Files edited:** `app/layout.tsx`

```tsx
'use client'
import Lenis from 'lenis'
useEffect(() => {
  const lenis = new Lenis({ lerp: 0.08 })
  function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
  return () => lenis.destroy()
}, [])
```

**Expected output:** Silky smooth scroll behavior across the entire site.

---

### Step 19 — Add Back-to-Top Button
**Files created:** `components/ui/BackToTop.tsx`

```tsx
const { scrollY } = useScroll()
const visible = useTransform(scrollY, [300, 400], [0, 1])
<motion.button style={{ opacity: visible }} onClick={() => window.scrollTo({ top: 0 })}>
  ↑
</motion.button>
```

**Expected output:** Fade-in back-to-top button after 300px scroll.

---

### Step 20 — Final Polish & QA

**Checklist:**
- [ ] Test all forms (EmailJS submissions reach inbox)
- [ ] Verify 3D scene on Safari / iOS (WebGL support check)
- [ ] Run Lighthouse — target 90+ Performance, 100 SEO, 100 Accessibility
- [ ] Check all animations respect `prefers-reduced-motion`
- [ ] Verify mobile nav on real device (iOS Safari + Android Chrome)
- [ ] Confirm all `next/image` components have `alt` text
- [ ] Remove all console.log statements
- [ ] Check for exposed EmailJS keys → move to `.env.local`

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Expected output:** Production-ready build with no console errors.

---

## 11. 🧪 Optional Enhancements

### Dark Mode
The existing dark navy palette is already dark-mode-adjacent. If implementing:
- Add `class` strategy to `tailwind.config.ts`: `darkMode: 'class'`
- Toggle `dark` class on `<html>` via a sun/moon button in Navbar
- Most sections already work; adjust light sections (Categories, About) to use dark backgrounds

### Accessibility Improvements
- All interactive elements: `focus-visible` ring using `ring-2 ring-blue ring-offset-2`
- FAQ accordion: proper `aria-expanded`, `aria-controls`, `role="button"`
- Modal: trap focus inside when open; restore focus on close
- Form: all inputs have associated `<label>` elements
- Images: descriptive `alt` text on all `next/image` components
- Color contrast: verify orange `#E8511A` on white meets WCAG AA (it does at large sizes)

### Additional SEO
- `robots.txt` and `sitemap.xml` → use `next-sitemap` package to auto-generate
- Canonical URLs in metadata
- Blog posts: add `Article` structured data per post

---

## Summary — Implementation Order at a Glance

```
Step 1  → Init Next.js project
Step 2  → Install dependencies
Step 3  → Tailwind + CSS tokens
Step 4  → Font setup
Step 5  → Animation utilities
Step 6  → Navbar + Footer + Layout shell
Step 7  → Migrate content/data
Step 8  → Hero section (3D scene)
Step 9  → Categories section
Step 10 → About section (parallax)
Step 11 → Courses section (card flip)
Step 12 → Stats section (count-up)
Step 13 → Testimonials (carousel)
Step 14 → Contact form (EmailJS)
Step 15 → FAQ accordion
Step 16 → Blog page + modal
Step 17 → SEO + structured data
Step 18 → Lenis smooth scroll
Step 19 → Back-to-top button
Step 20 → Final QA + polish
```

---

*Plan authored for: Coding Buds Website Modernization*
*Target stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js*
