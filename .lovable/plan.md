
# Website Template Architecture

## Project Structure

```
src/
├── App.tsx                          # Main routing hub (BrowserRouter, Routes)
├── main.tsx                         # Entry point with React.StrictMode
├── index.css                        # Global animations, typography, utilities
├── pages/
│   ├── HomePage.tsx                 # Landing page: Hero → Sections → Footer
│   └── CareersPage.tsx              # Secondary page: Hero → Benefits → Form
├── components/
│   ├── Navbar.tsx                   # Sticky nav with scroll-aware styling
│   ├── SiteFooter.tsx               # Footer with links & contact
│   ├── ScrollReveal.tsx             # Wrapper: fade-in on scroll (framer-motion)
│   ├── HeroSlider.tsx               # Full-screen hero with image carousel
│   ├── SlidingBanner.tsx            # Marquee ticker (infinite horizontal scroll)
│   ├── Testimonials.tsx             # Auto-scrolling cards section
│   ├── BentoGrid.tsx                # Multi-cell grid: stats, map, embedded marquee
│   ├── FloridaMap.tsx               # SVG map with animated location pins
│   ├── [SectionName].tsx            # Content sections (WhoWeServe, CareTeam, etc.)
│   ├── [FormName].tsx               # Forms (ContactForm, ApplicationForm)
│   └── ui/                          # Shadcn UI components (Button, Card, Badge, etc.)
├── assets/                          # Images, SVGs, icons
├── hooks/                           # Custom React hooks
└── lib/                             # Utilities (cn(), animations)
```

## Routing & Navigation

- **React Router**: BrowserRouter wraps entire app
- **Routes**: Define pages (`/`, `/careers`, etc.)
- **Cross-page navigation**: Check `location.pathname` in Navbar; if not on home, navigate to `/` first, then scroll to anchor
- **Layout**: Navbar → Page content → Footer (global, outside Routes)

## Animation Patterns

1. **Scroll Reveal**: `<ScrollReveal>` component wraps sections. Uses framer-motion's `whileInView` + `initial/exit` states for fade-in/slide effects
2. **Marquee/Ticker**: CSS `@keyframes marquee` with `translateX(-50%)` animation. Duplicate items to loop seamlessly
3. **Hero Slider**: `setInterval` toggles image index; CSS `opacity` fade-in/out for cross-fade effect
4. **Hover Effects**: `gentle-animation` class for smooth transitions; `group-hover` for interactive elements

## Color & Theming

- **CSS Variables** in `:root` (index.css): `--navy`, `--sky-blue`, `--teal`, `--light-blue`, `--primary`, etc.
- **Tailwind Config**: Maps variables to theme colors (extendable for dark mode)
- **Responsive Typography**: h1–h4 scale down on mobile; utility p tag has fixed font size

## Component Hierarchy

**Page Level** (HomePage, CareersPage) → **Sections** (HeroSlider, SlidingBanner, etc.) → **UI Components** (Card, Badge, Button)

- Sections are self-contained, import their own styles
- UI components are from Shadcn UI (pre-built, styled with Tailwind)
- Pages compose sections in logical order with ScrollReveal wrappers

## Forms

- **react-hook-form**: Manages state, validation
- **zod**: Schema validation library
- **Toast notifications**: Success/error feedback (sonner/Toaster)

## Key Patterns for Reuse

1. **Section template**: Create new `.tsx` file in components/, export function, wrap page usage with `<ScrollReveal>`
2. **Form template**: Use `react-hook-form` + `zod` schema; import form fields (Input, Select, Checkbox, Textarea from ui/)
3. **Hero template**: Gradient background + large heading + subtitle + CTA button
4. **Grid/Card template**: Use `BentoGrid`-style layout with CSS Grid; add `hover:shadow-lg gentle-animation` for interactivity
5. **Marquee template**: Duplicate array data, apply `animate-marquee` class, adjust animation duration in tailwind.config

## Styling Approach

- **Tailwind CSS**: Utility-first for rapid prototyping
- **CSS custom properties**: For theme colors (easy bulk recolor)
- **Shadcn UI**: Pre-built, accessible components (Dialog, Accordion, Dropdown, etc.)
- **Class utilities**: `gentle-animation`, `subtle-shadow`, `elevated-shadow` (defined in index.css)

## Dev Environment

- **Vite**: Fast dev server + build (alias `@` for src/)
- **TypeScript**: Type safety across components
- **React 18**: Latest features, hooks
- **ESLint**: Code linting
