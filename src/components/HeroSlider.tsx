import { useState, useEffect, useCallback } from "react";
import { Phone, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Images with Fade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === current ? 1 : 0 }}
        >
          <img
            src={slide}
            alt=""
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/85 via-[#2C3E50]/65 to-[#2C3E50]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm">
            <MapPin className="w-4 h-4" />
            Proudly Serving Florida
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Compassionate, Licensed Home Health Care—
            <span className="text-gold-lighter">Right Where It Matters Most</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
            Expert in-home care for children with special needs, adults requiring medical support, and seniors who deserve comfort and dignity.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-lighter" />
              AHCA Licensed
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-lighter" />
              Professional
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-lighter" />
              Patient-Centered Care
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-white text-base px-6 shadow-lg shadow-gold/25"
              onClick={() => window.location.href = "tel:+1234567890"}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Today
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white hover:text-white text-base px-6"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Care
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-gold-lighter w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
