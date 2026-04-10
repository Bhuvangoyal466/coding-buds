# Coding Buds Website Structure and Style Documentation

## 1. Purpose
This document captures the complete current structure, styling system, and interactions for the Coding Buds website.

It is intended to serve as a single reference for:
- Current layout and section mapping
- Color and typography system
- Interaction and animation inventory
- Responsive behavior and breakpoints
- SEO and performance implementation details

---

## 2. Project Inventory

### Root Files
- index.html: Main marketing and lead capture page
- blogs.html: Blogs listing page with modal-based full article view
- README.md: General project overview
- robots.txt: Crawl directives for search engines
- sitemap.xml: URL index for SEO

### Subfolders
- api/verify-captcha.js: CAPTCHA related API logic
- assets/css/style.css: Global styling and component styling
- assets/js/script.js: UI behavior and form/blog logic
- assets/images/: Logos, course images, decorative shapes, and blog visuals

---

## 3. Global Site Architecture

### 3.1 Technology Baseline
- Frontend stack: Static HTML + CSS + vanilla JavaScript
- Icons: Ionicons
- Fonts: League Spartan (headings), Poppins (body)
- Form/email provider: EmailJS
- Tracking placeholder: Google Analytics (gtag setup with placeholder ID)

### 3.2 Shared Pattern Across Pages
Both main pages use a similar shell:
1. Header with logo, navigation, and CTA
2. Main content sections
3. Footer with quick links, courses, newsletter, and social links
4. Back-to-top floating action button

---

## 4. Page Layout Documentation

## 4.1 Home Page Layout (index.html)

### Header
- Sticky/animated behavior after scroll threshold
- Desktop and mobile nav variants
- Main CTA button: Book a Free Trial
- Nav links:
  - Home (#home)
  - About (#about)
  - Courses (#courses)
  - Testimonials (#testimonials)
  - FAQ (#faq)
  - Blogs (blogs.html)

### Section 1: Hero (id: home)
- Title-driven hero with primary promise
- Subtext listing course types and formats
- CTA to contact section
- Two hero visual cards and decorative shape assets
- Background image treatment (hero-bg.svg)

### Section 2: Categories
- Subtitle + title + supporting text
- 4 category cards:
  - Scratch
  - Python
  - Web Development
  - Java
- Each card includes icon, title, description, and level badge

### Section 3: About (id: about)
- Founder-led credibility section
- Banner image + decorative shapes
- Long-form narrative text
- Feature list with checkmark icon bullets

### Section 4: Courses (id: courses)
- Grid of 4 course cards
- Each card includes:
  - Banner image
  - Level badge
  - Course title link
  - Expanded detail copy
  - Rating row
  - Meta items (sessions, class format)
- CTA to contact section

### Section 5: Image Showcase (video class)
- Visual showcase banner (no active media playback button in markup)
- Rounded corner visual treatment and large format image composition

### Section 6: Stats
- 4 stat cards:
  - 600+ Students
  - 200+ Projects Completed
  - 100% Parent Satisfaction
  - 10+ Years of Experience
- Number counter animation on viewport entry

### Section 7: Testimonials (id: testimonials)
- Dark background section
- 3 testimonial cards
- Avatar placeholder initials + parent details

### Section 8: Contact (id: contact)
- Two-column layout on larger screens
- Left column:
  - Short pitch
  - WhatsApp and email quick links
  - Social links
- Right column:
  - Lead form with fields:
    - Name
    - Email
    - Country code dropdown + phone
    - Child age
    - Course interest select
    - Message
  - Submit CTA

### Section 9: FAQ (id: faq)
- Accordion list
- Expand/collapse behavior with icon rotation
- Two-column layout on tablet+ screens

### Footer
- Four content blocks:
  - Brand + contact
  - Quick links
  - Course links
  - Newsletter + social links
- Bottom copyright strip

### Floating Utility
- Back-to-top button appears after scrolling

---

## 4.2 Blog Page Layout (blogs.html)

### Header
- Same navigation structure pattern as home, with cross-links back to home anchors

### Section 1: Blogs Hero
- Page title and descriptor copy
- Hero image variant for blog context

### Section 2: Blog Grid (id: blog)
- Card-based article listing
- 6 blog articles present in markup
- Each card includes:
  - Image
  - Category pill
  - Date and read time
  - Article title
  - Excerpt and supporting paragraph
  - Read Full Article trigger

### Blog Modal System
- Full-screen overlay modal
- Dynamic content injection from JavaScript object map
- Includes:
  - Modal title
  - Meta row
  - Feature image
  - Rich article content (headings, paragraphs, lists)
- Closing interactions:
  - Close button
  - Overlay click
  - Escape key

### Footer + Back-to-top
- Same structural pattern as home page

---

## 5. Design System Documentation

## 5.1 Color Scheme (CSS Variables)

### Core Brand Colors
- Deep Navy: #1B2D5B
- Electric Blue: #2D8EFF
- Warm Orange: #E8511A
- Soft Blue: #EEF4FF
- Light Gray: #F2F2F2
- White: #FFFFFF

### Text Colors
- Body Text: #444444
- Light Text: #777777

### Accent/Utility Colors
- Selective Yellow: #FFD600
- Platinum: #D9E2F2
- Overlay blacks/whites via HSLA utility tokens

### Gradient
- Main gradient: warm orange to electric blue

---

## 5.2 Typography System
- Heading font: League Spartan
- Body font: Poppins

### Type Scale Tokens
- fs-1: 4.2rem (up to 6.5rem on large screens)
- fs-2: 3.2rem (up to 4.5rem on large screens)
- fs-3: 2.3rem
- fs-4: 1.8rem
- fs-5: 1.5rem
- fs-6: 1.4rem
- fs-7: 1.3rem

### Font Weights
- fw-500
- fw-600

---

## 5.3 Spacing, Radius, and Shadows

### Spacing
- section-padding: 75px (80px on larger screens)

### Radius Tokens
- Pill: 500px
- Circle: 50%
- 3px, 5px, 10px radii

### Shadow Tokens
- shadow-1: subtle lift
- shadow-2: medium depth
- shadow-3: card-heavy depth

---

## 5.4 Layout and Grid System
- Generic container with responsive max-widths by breakpoint
- Reusable grid-list pattern
- Dedicated blog-grid pattern with 1/2/3 column progression by viewport
- Contact and FAQ switch to 2-column on larger breakpoints

---

## 6. Responsive Behavior

### Key Breakpoints in Stylesheet
- min-width: 575px
- min-width: 768px
- min-width: 992px
- min-width: 1200px
- max-width: 768px
- max-width: 576px
- max-width: 480px
- max-width: 375px

### Responsive Patterns Present
- Header/nav shifts from drawer menu to desktop inline nav
- Grid systems progressively expand columns
- Hero alignment transitions from centered stack to split layout
- Contact form and country dropdown heavily optimized for smaller screens
- Modal dimensions and typography scale for mobile devices

---

## 7. Animation and Motion Inventory

## 7.1 Existing Motion (No 3D)
- Section fade-in/slide-up on viewport entry via IntersectionObserver
- Grid item fade-in-up animation
- Hover lift and scale on cards/buttons
- Navbar open/close transitions
- Back-to-top visibility transition
- FAQ icon rotation and accordion reveal
- Stats number counting animation
- Modal open/close transitions with scale/translate
- Decorative bounce and pulse keyframes for selected elements

## 7.2 Current Motion Character
- Primarily 2D transform and opacity-based transitions
- No perspective transforms or 3D scenes
- Motion is mostly lightweight and content-oriented

---

## 8. JavaScript Interaction Architecture

## 8.1 Core UI Logic
- Navigation open/close and overlay handling
- Header active state on scroll
- Back-to-top activation
- Smooth scroll enhancement for anchor links

## 8.2 Content Behavior
- FAQ accordion single-open behavior
- Stats counter animation once section intersects viewport
- Section visibility observer for reveal effects

## 8.3 Forms and Notifications
- EmailJS initialization and direct submission flow
- Newsletter email validation and feedback
- Custom in-page alert system for success/error states
- Phone number and country code system:
  - Country list dataset
  - Searchable dropdown
  - Dynamic phone validation rules by country

## 8.4 Blog Modal Content System
- Blog content held in JavaScript object map
- Read button binds by data-blog-id
- Modal content injected dynamically

---

## 9. SEO and Performance Notes

### SEO Strengths
- Rich meta tags (title, description, keywords)
- Canonical links
- OpenGraph and Twitter cards
- Structured data (Organization, WebSite, Course, FAQ, Breadcrumb)
- robots and sitemap in place

### Performance-Oriented Practices
- Font and CSS loading optimizations
- Image preloading for key hero assets
- Lazy loading on many images
- Relatively lightweight JS architecture (no framework runtime)

### Technical Debt Signals
- CSS file is very large and has repeated/overlapping declarations
- Some inline styles are embedded in markup
- Secrets/keys are visible in client-side JS for EmailJS setup
- Mixed date values and a few content inconsistencies in blog metadata

---

## 10. Current-State Summary
The current website is a static multi-page HTML/CSS/JS implementation with:
- A shared, CTA-focused marketing layout structure
- A clearly defined visual token system (color, type, spacing, radius, shadows)
- Responsive behavior across major viewport tiers
- Animation and interaction features based on 2D transforms, opacity, and viewport observers
- Strong SEO metadata and structured data implementation
- A lead capture workflow (EmailJS) and newsletter validation flow
- A JavaScript-powered blog modal content experience

This document is intentionally descriptive of the present implementation only.
