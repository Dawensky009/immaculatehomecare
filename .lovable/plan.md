

# Website Enhancement Plan

## Issues to Fix

### 1. Navbar Text Invisible Over Hero
The navigation links currently use dark text colors (`text-muted-foreground`, `text-navy`) which disappear against the dark hero background. The fix is to make the navbar text white when the page hasn't been scrolled (i.e., when the hero is behind it), and switch to dark text once the user scrolls down and the white background kicks in.

### 2. "Request Care" Button Text Invisible
The "Request Care" button in the hero uses the `outline` variant which applies a white background (`bg-background`), making the white text invisible. The fix is to override the button styling to be transparent with a visible white border and white text.

### 3. Make the Site More Dynamic and Professional

#### A. Sliding Certification Banner (Marquee)
A continuously scrolling horizontal ticker/marquee strip that highlights certifications and credentials. It will display items like:
- "CNA Certified"
- "AHCA Licensed"
- "LPN & RN Staffed"
- "Background Checked"
- "Serving All of Florida"

This will appear as a standalone banner AND be embedded inside the bento grid.

#### B. Bento Grid Section (Inspired by the Reference Image)
A visually rich, multi-cell grid layout placed after the "Who We Serve" section. The grid will have a dark navy/charcoal background with cards of varying sizes, similar to the uploaded reference image. It will contain:

- **Cell 1 (Large, top-left)**: Key stats with partner/certification logos - "500+ Families Served", "AHCA Licensed Provider"
- **Cell 2 (Large, top-right)**: Trusted by leading healthcare networks and insurers (with placeholder brand names)
- **Cell 3 (Bottom-left)**: An animated counter/stat card - "24/7 Care Available", "15+ Years Combined Experience"
- **Cell 4 (Bottom-center)**: A stylized Florida map with location markers showing service areas, using SVG
- **Cell 5 (Bottom-right)**: The sliding certification banner (marquee) embedded inside a grid cell

#### C. Sliding Testimonials/Comments
A horizontally auto-scrolling testimonial section with cards showing client reviews. Each card will include a quote, client name (anonymized), and star rating. This adds social proof and visual movement.

#### D. Scroll Animations
Sections will fade in as they enter the viewport using `framer-motion` (already installed). This adds life to the page as users scroll.

---

## Technical Details

### Files to Modify
- **`src/components/Navbar.tsx`** -- Add `isScrolled` conditional classes: white text when transparent, dark text when scrolled
- **`src/components/HeroSlider.tsx`** -- Fix the "Request Care" button by removing the outline variant's background override

### Files to Create
- **`src/components/SlidingBanner.tsx`** -- Infinite-scroll marquee component with certification badges
- **`src/components/BentoGrid.tsx`** -- Dark-themed bento grid with stats, Florida map SVG, and embedded marquee
- **`src/components/FloridaMap.tsx`** -- SVG map of Florida with animated location pins
- **`src/components/Testimonials.tsx`** -- Auto-scrolling testimonial cards with ratings
- **`src/components/ScrollReveal.tsx`** -- Wrapper component using framer-motion for fade-in-on-scroll animation

### Files to Update
- **`src/App.tsx`** -- Add the new sections (SlidingBanner, BentoGrid, Testimonials) and wrap existing sections in ScrollReveal
- **`src/index.css`** -- Add marquee animation keyframes and bento grid utility styles

### Section Order (Updated)
1. Navbar
2. Hero Slider
3. Sliding Certification Banner (marquee strip)
4. Who We Serve
5. Bento Grid (stats, Florida map, embedded marquee)
6. Care Team
7. Testimonials (sliding comments)
8. Our Services
9. Why Choose Us
10. Our Commitment
11. Contact Form
12. Footer

