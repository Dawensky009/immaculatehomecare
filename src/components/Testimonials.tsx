import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    quote: "The care team has been incredibly attentive and compassionate with my mother. She looks forward to their visits every day.",
    name: "Maria S.",
    relation: "Daughter of Patient",
    rating: 5,
  },
  {
    quote: "Finding reliable home care for my son with special needs was stressful. Immaculate Home Care made it seamless and our family finally has peace of mind.",
    name: "James T.",
    relation: "Father of Patient",
    rating: 5,
  },
  {
    quote: "Professional, punctual, and genuinely caring. The nurses treat my father like family. I couldn't ask for a better team.",
    name: "Angela R.",
    relation: "Daughter of Patient",
    rating: 5,
  },
  {
    quote: "After my husband's surgery, Immaculate provided skilled nursing that exceeded our expectations. His recovery was smooth and well-managed.",
    name: "Patricia L.",
    relation: "Wife of Patient",
    rating: 5,
  },
  {
    quote: "I was hesitant about home health care, but the CNAs are so warm and skilled. My grandmother is thriving with their support.",
    name: "David K.",
    relation: "Grandson of Patient",
    rating: 5,
  },
  {
    quote: "The personalized care plan they created was exactly what our family needed. They listen and adapt to changing needs beautifully.",
    name: "Sandra M.",
    relation: "Daughter of Patient",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-beige-light to-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              What Families Are Saying
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrolling row */}
      <div className="flex animate-marquee-slow whitespace-nowrap">
        {items.map((t, i) => (
          <div
            key={i}
            className="inline-block w-[340px] sm:w-[380px] mx-3 flex-shrink-0 whitespace-normal"
          >
            <div className="bg-background rounded-2xl p-6 shadow-md border border-border h-full relative overflow-hidden">
              {/* Gradient top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-primary to-gold-light" />
              <StarRating rating={t.rating} />
              <p className="text-foreground/80 text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-navy font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
