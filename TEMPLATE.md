# Website Template Architecture

Use this as a blueprint to recreate similar websites with animations, scroll effects, and multi-page routing.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Fast dev & build |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Shadcn UI | Pre-built accessible components |
| Framer Motion | Scroll & layout animations |
| React Router DOM | Multi-page routing |
| React Hook Form + Zod | Form state & validation |

---

## Project Structure

```
src/
├── App.tsx                    # BrowserRouter → Navbar → Routes → Footer
├── main.tsx                   # Entry point
├── index.css                  # CSS variables, keyframes, global utilities
│
├── pages/
│   ├── HomePage.tsx           # Composes sections with <ScrollReveal> wrappers
│   └── [OtherPage].tsx        # Additional pages (e.g., CareersPage)
│
├── components/
│   ├── Navbar.tsx             # Sticky, scroll-aware, cross-page nav
│   ├── SiteFooter.tsx         # Footer with links & contact
│   ├── ScrollReveal.tsx       # Framer Motion fade-in-on-scroll wrapper
│   ├── HeroSlider.tsx         # Full-screen image carousel with crossfade
│   ├── SlidingBanner.tsx      # Infinite marquee ticker
│   ├── BentoGrid.tsx          # CSS Grid with glass cards, stats, embedded elements
│   ├── [Section].tsx          # Self-contained content sections
│   ├── [Form].tsx             # Forms with react-hook-form + zod
│   └── ui/                    # Shadcn components (Button, Card, Badge, etc.)
│
├── assets/                    # Images, SVGs
├── hooks/                     # Custom hooks (use-mobile, use-toast)
└── lib/utils.ts               # cn() helper (clsx + tailwind-merge)
```

---

## 1. Routing Pattern

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />          {/* Always visible */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </main>
      <SiteFooter />      {/* Always visible */}
    </BrowserRouter>
  );
}
```

### Cross-Page Anchor Navigation (Navbar)

```tsx
const scrollTo = (href: string) => {
  setIsMobileOpen(false);
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};
```

### Sticky Navbar with Scroll Detection

```tsx
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 20);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Toggle classes based on isScrolled
className={isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}
```

---

## 2. Animation Patterns

### A. Scroll Reveal (Framer Motion)

```tsx
// ScrollReveal.tsx
import { motion } from "framer-motion";

export function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Usage in a page:
<ScrollReveal><MySection /></ScrollReveal>
<ScrollReveal delay={0.1}><AnotherSection /></ScrollReveal>
```

### B. Staggered Children Animation

```tsx
// Parent container
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### C. Infinite Marquee (CSS)

```css
/* index.css */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

```tsx
// Component: duplicate items for seamless loop
const items = [...data, ...data];
<div className="overflow-hidden">
  <div className="flex animate-marquee whitespace-nowrap">
    {items.map((item, i) => (
      <div key={i} className="inline-flex items-center mx-8">{item.label}</div>
    ))}
  </div>
</div>
```

### D. Hero Image Slider (Crossfade)

```tsx
const [current, setCurrent] = useState(0);
const images = [img1, img2, img3];

useEffect(() => {
  const timer = setInterval(() => setCurrent(i => (i + 1) % images.length), 5000);
  return () => clearInterval(timer);
}, []);

// Render all images stacked, toggle opacity
{images.map((img, i) => (
  <div
    key={i}
    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
    style={{
      backgroundImage: `url(${img})`,
      opacity: i === current ? 1 : 0
    }}
  />
))}
```

### E. Hover Effects (CSS Utility)

```css
/* index.css */
.gentle-animation {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

```tsx
<div className="gentle-animation hover:shadow-lg hover:-translate-y-1">
  Card content
</div>
```

---

## 3. Theming System

### CSS Variables (index.css)

```css
:root {
  --background: #ffffff;
  --foreground: #1E3A5F;
  --primary: #0EA5E9;
  --primary-foreground: #ffffff;
  --secondary: #F0F9FF;
  --accent: #0D9488;
  --muted: #F0F9FF;
  --muted-foreground: #64748B;
  --border: #E2E8F0;
  --navy: #1E3A5F;
  --sky-blue: #0EA5E9;
  --teal: #0D9488;
  --radius: 0.75rem;
}
```

### Tailwind Config Mapping

```ts
// tailwind.config.ts
colors: {
  background: "var(--background)",
  foreground: "var(--foreground)",
  primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
  navy: "var(--navy)",
  // ...
}
```

### To Re-Theme: Change only the CSS variables in `:root`. All components update automatically.

---

## 4. Component Templates

### Section Template

```tsx
export function MySection() {
  return (
    <section id="my-section" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
            Section Label
          </span>
          <h2>Section Heading</h2>
          <p className="mt-4 max-w-2xl mx-auto">Description text here.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <Card key={item.id} className="gentle-animation hover:shadow-lg">
              <CardContent className="p-6">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Form Template

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Too short"),
});

export function MyForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast({ title: "Success!", description: "Form submitted." });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>
      {/* More fields... */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Glass Card (Bento Grid Cell)

```tsx
<div className="bg-navy/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                hover:border-primary/30 gentle-animation">
  <h3 className="text-white text-xl font-bold">{title}</h3>
  <p className="text-white/70 mt-2">{description}</p>
</div>
```

### CTA Banner

```tsx
<section className="bg-gradient-to-r from-navy to-navy/90 py-16">
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-white text-3xl font-bold">Call to Action Heading</h2>
    <p className="text-white/80 mt-4 text-lg">Supporting description text.</p>
    <div className="flex gap-3 justify-center mt-8">
      <Badge className="bg-primary/20 text-primary border-primary/30">Tag 1</Badge>
      <Badge className="bg-primary/20 text-primary border-primary/30">Tag 2</Badge>
    </div>
    <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
      <Link to="/target">Action Button</Link>
    </Button>
  </div>
</section>
```

---

## 5. Page Composition Pattern

```tsx
// pages/HomePage.tsx
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <SlidingBanner />
      <ScrollReveal><SectionOne /></ScrollReveal>
      <ScrollReveal><SectionTwo /></ScrollReveal>
      <ScrollReveal><CTABanner /></ScrollReveal>
      <ScrollReveal><ContactForm /></ScrollReveal>
    </>
  );
}
```

---

## 6. Responsive Patterns

```css
/* Mobile-first typography in index.css */
h1 { font-size: 2.5rem; }
@media (max-width: 768px) {
  h1 { font-size: 1.875rem; }
  h2 { font-size: 1.5rem; }
}
```

```tsx
{/* Responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Hide/show by breakpoint */}
<div className="hidden lg:flex">Desktop only</div>
<div className="lg:hidden">Mobile only</div>
```

---

## 7. Quick Start Checklist

1. **Clone project** or start fresh with Vite + React + TypeScript
2. **Install deps**: `tailwindcss`, `framer-motion`, `react-router-dom`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`
3. **Add Shadcn UI**: Install components you need (Button, Card, Badge, Input, Select, etc.)
4. **Set up index.css**: Define CSS variables for your color palette
5. **Set up tailwind.config.ts**: Map CSS variables to Tailwind colors
6. **Create App.tsx**: BrowserRouter → Navbar → Routes → Footer
7. **Create ScrollReveal.tsx**: Copy the framer-motion wrapper
8. **Create pages/**: HomePage composing sections with ScrollReveal
9. **Create sections**: Use the Section Template above
10. **Add animations**: Marquee in CSS, hover effects, hero slider
11. **Add forms**: react-hook-form + zod schema + toast feedback

---

## 8. Key Dependencies (package.json)

```json
{
  "react": "^18",
  "react-dom": "^18",
  "react-router-dom": "^6",
  "framer-motion": "^12",
  "react-hook-form": "^7",
  "@hookform/resolvers": "^3",
  "zod": "^3",
  "lucide-react": "^0.462",
  "tailwind-merge": "^2",
  "class-variance-authority": "^0.7",
  "clsx": "^2",
  "tailwindcss-animate": "^1",
  "@radix-ui/react-slot": "^1"
}
```
