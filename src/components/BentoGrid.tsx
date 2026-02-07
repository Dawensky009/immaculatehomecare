import { motion } from "framer-motion";
import { ShieldCheck, Heart, Clock, Users, TrendingUp } from "lucide-react";
import { FloridaMap } from "./FloridaMap";
import { SlidingBanner } from "./SlidingBanner";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-extrabold text-white">
      {count}
      {suffix}
    </span>
  );
}

export function BentoGrid() {
  return (
    <section className="bg-[#0F1C2E] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              At a Glance
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Families Trust Us
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Cell 1: Stats */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:col-span-1 flex flex-col justify-between min-h-[240px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">Trusted Provider</span>
                </div>
                <AnimatedCounter target={500} suffix="+" />
                <p className="text-white/50 text-sm mt-2">Families Served Across Florida</p>
              </div>
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-white/60 text-xs">AHCA Licensed Provider</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Cell 2: Trusted Partners */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between min-h-[240px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">Healthcare Partners</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Trusted by Leading Networks
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We partner with hospitals, rehabilitation centers, and insurance networks to
                  deliver seamless continuum-of-care for patients transitioning home.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">
                {["Medicaid", "Medicare", "Private Insurance"].map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/60"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Cell 3: 24/7 + Experience */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between min-h-[240px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">Always Available</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-4xl lg:text-5xl font-extrabold text-white">24/7</span>
                    <p className="text-white/50 text-sm mt-1">Care Available</p>
                  </div>
                  <div>
                    <AnimatedCounter target={15} suffix="+" />
                    <p className="text-white/50 text-sm mt-1">Years Combined Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Cell 4: Florida Map */}
          <ScrollReveal delay={0.4}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:col-span-1 lg:col-span-1 min-h-[280px] flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/60 text-sm font-medium">Service Coverage</span>
              </div>
              <div className="flex-1">
                <FloridaMap />
              </div>
              <p className="text-center text-white/40 text-xs mt-2">
                Proudly serving communities across Florida
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Cell 5: Embedded Marquee */}
          <ScrollReveal delay={0.5}>
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:col-span-1 lg:col-span-2 min-h-[180px] flex flex-col justify-center"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4 text-center">
                Our Credentials
              </p>
              <SlidingBanner variant="embedded" />
              <SlidingBanner variant="embedded" />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
