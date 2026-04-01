

# Plan: Extract Complete Site Structure

I'll create a comprehensive document that captures every component, its exact code, the full styling system, routing, animations, and data structures — everything needed to recreate or improve this site.

## What the document will contain

**1. Project overview** — Tech stack, dependencies, file tree

**2. Global configuration** — Full `index.css` (CSS variables, keyframes, utilities), `tailwind.config.ts` color mappings, `App.tsx` routing setup

**3. Every component with full source code:**
- `Navbar.tsx` — Sticky nav with scroll-aware transparency, cross-page anchor navigation
- `HeroSlider.tsx` — 4-image carousel with crossfade, gradient overlay, trust badges, CTAs
- `SlidingBanner.tsx` — Infinite marquee with certification badges (standalone + embedded variants)
- `WhoWeServe.tsx` — 3-card grid with gradient icon containers, colored top borders
- `BentoGrid.tsx` — Dark section with glass cards, animated counters, Florida map, embedded marquee
- `FloridaMap.tsx` — SVG map with framer-motion pulsing location markers
- `CareTeam.tsx` — 4-column role cards (CNA/HHA/LPN/RN) with gradient accent bars
- `Testimonials.tsx` — Auto-scrolling marquee of review cards with amber star ratings
- `JoinOurTeam.tsx` — Dark CTA banner linking to `/careers`
- `OurServices.tsx` — Accordion-style expandable service cards with gradient sidebar accents
- `WhyChooseUs.tsx` — Dark gradient section with glass cards
- `OurCommitment.tsx` — Dark gradient section with value icons
- `ContactForm.tsx` — Intake form with toggle buttons, multi-select, validation
- `SiteFooter.tsx` — 3-column footer with links and contact info
- `ScrollReveal.tsx` — Framer Motion fade-in wrapper
- `ApplicationForm.tsx` — Full job application form with react-hook-form + zod

**4. Page compositions:**
- `HomePage.tsx` — Section ordering with ScrollReveal wrappers
- `CareersPage.tsx` — Hero, benefits grid, open positions, application form

**5. Assets required** — Hero images (4 slides)

## Output

A single markdown file at `/mnt/documents/site-structure.md` containing the complete architecture and all source code, ready to hand to another AI for improvement.

