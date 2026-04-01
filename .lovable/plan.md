

# Major Color Overhaul — Beige + #47A8BD + Gold

## What's Changing

Replacing the current blue/navy/teal medical palette with a warmer, more distinctive color system based on what Claude was building:

- **Primary blue**: `#0284C7` → `#47A8BD`
- **Backgrounds**: White/light-blue → Warm beige/cream tones
- **Buttons/CTAs**: Blue gradients → Gold gradient buttons (`#C5962C` → `#D4A843`)
- **Navy**: `#1E3A5F` → `#2C3E50` (softer dark)
- **Accents**: Gold highlights throughout instead of teal

## New Color Palette (from PDF)

```text
Gold Accent:     #8B6914, #C5962C, #D4A843, #E8CC7A, #FDF6E3
Primary Blue:    #47A8BD, #3A8FA0, #2D7A8C, #6BBFD0, #E8F6F9
Beige Tones:     #F5F0E8, #FAF7F2, #EDE6D8, #D9D0C1, #FFFDF8
Neutrals:        navy=#2C3E50, background=#FFFDF8, muted=#6B7B8D
Border:          #E5DFD5
```

## Files to Modify

### 1. `src/index.css` — Full variable swap
- Replace all `:root` color variables with the new palette
- Update `@theme inline` block accordingly
- Update heading colors from `var(--navy)` to new navy
- Update `.elevated-shadow` to use gold-tinted shadows

### 2. `tailwind.config.ts` — No structural changes needed
The Tailwind config already maps from CSS variables, so it will pick up the new colors automatically. Just need to ensure `highlight` maps correctly.

### 3. `src/components/HeroSlider.tsx`
- Hero overlay gradient: use new navy `#2C3E50`
- "Call Today" button: gold gradient (`from-gold to-gold-dark`) instead of blue-to-teal
- "Request Care" button: keep transparent/white border style
- Trust badge icons: gold-lighter color instead of `sky-300`
- Location badge: keep glass-morphism, update accent color

### 4. `src/components/SlidingBanner.tsx`
- Background: beige gradient (`from-beige via-beige-light to-beige`) instead of navy
- Text color: navy (dark) instead of white
- Icon color: blue (`#47A8BD`) instead of primary
- Dot separators: beige-dark

### 5. `src/components/WhoWeServe.tsx`
- Section background: `from-cream to-beige-light` gradient
- Card icon gradients: mix gold + blue (e.g., `from-gold to-blue`)
- Card top borders: gold, blue, gold-light variants
- Decorative blurs: gold and blue tinted

### 6. `src/components/BentoGrid.tsx`
- Dark section background: keep dark but use `#0a1f2a` (blue-dark tinted)
- Icon containers: gold-tinted and blue-tinted backgrounds
- Stats text: keep white
- Bento footer icons: gold color

### 7. `src/components/CareTeam.tsx`
- Section background: `from-blue-pale to-gold-pale` gradient
- Role card gradient bars: gold-blue, blue-dark, gold, blue-gold mixes
- Abbr text: gold color instead of primary
- Decorative blur: blue-tinted

### 8. `src/components/Testimonials.tsx`
- Section background: `from-beige-light to-cream`
- Section label: gold background/text
- Card top accent: `from-gold via-blue to-gold-light`
- Stars: keep gold (already highlight)

### 9. `src/components/JoinOurTeam.tsx`
- Keep dark navy background
- Badge: gold-tinted instead of sky-blue
- Accent text: gold-lighter instead of sky-300
- Role badge icons: gold-lighter
- CTA button: gold gradient

### 10. `src/components/OurServices.tsx`
- Section label pill: gold/blue tinted
- Card gradient bars and icon containers: update gradient colors
- Bullet dots: gold color

### 11. `src/components/WhyChooseUs.tsx`
- Dark gradient: keep but use new navy + blue
- Icon containers: gold-to-blue gradient
- Label pill: glass-morphism (keep)

### 12. `src/components/OurCommitment.tsx`
- Same approach as WhyChooseUs — update gradient colors
- Value icon gradients: gold+blue mixes

### 13. `src/components/ContactForm.tsx`
- Section background: `from-cream to-beige-light`
- Contact info cards: beige background
- Icon containers: gold/blue tinted
- Form top accent: `from-gold via-blue to-gold-light`
- Submit button: gold gradient
- Toggle buttons active state: gold instead of primary

### 14. `src/components/Navbar.tsx`
- Scrolled state: cream/beige background instead of white
- CTA button: gold gradient
- "Join Our Team" link: gold color instead of sky-300/primary
- Mobile menu: cream background

### 15. `src/components/SiteFooter.tsx`
- Background: new navy `#2C3E50`
- Accent icons: gold-lighter instead of sky-300

### 16. `src/pages/CareersPage.tsx`
- Hero: new navy background, gold accents
- Benefits section: beige background
- Badge colors: gold-tinted
- Position cards: gold hover accents

### 17. `src/components/FloridaMap.tsx`
- Update pin/pulse colors to use new blue/gold

## Summary
Every component gets updated to use the new beige + `#47A8BD` blue + gold button palette. The overall feel shifts from "clinical blue" to "warm, premium, trustworthy."

