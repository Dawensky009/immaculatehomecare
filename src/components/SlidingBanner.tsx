import { ShieldCheck, Award, Users, MapPin, Stethoscope } from "lucide-react";

const bannerItems = [
  { icon: ShieldCheck, label: "CNA Certified" },
  { icon: Award, label: "AHCA Licensed" },
  { icon: Stethoscope, label: "LPN & RN Staffed" },
  { icon: ShieldCheck, label: "Background Checked" },
  { icon: Users, label: "Compassionate Professionals" },
  { icon: MapPin, label: "Serving All of Florida" },
];

interface SlidingBannerProps {
  variant?: "standalone" | "embedded";
}

export function SlidingBanner({ variant = "standalone" }: SlidingBannerProps) {
  const items = [...bannerItems, ...bannerItems];

  if (variant === "embedded") {
    return (
      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 mx-6 text-white/70 text-sm font-medium"
            >
              <item.icon className="w-4 h-4 text-gold-lighter flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-beige via-beige-light to-beige py-4 overflow-hidden border-y border-beige-dark/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 mx-8 text-navy/80 text-sm font-semibold tracking-wide uppercase"
          >
            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{item.label}</span>
            <span className="text-gold/40 ml-4">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
