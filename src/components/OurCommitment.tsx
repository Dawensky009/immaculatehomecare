import { Award, Handshake, Clock, HeartPulse } from "lucide-react";

const values = [
  { icon: Handshake, label: "Respectful", gradient: "from-gold to-primary" },
  { icon: Award, label: "Professional", gradient: "from-primary to-teal" },
  { icon: Clock, label: "Reliable", gradient: "from-gold-light to-gold" },
  { icon: HeartPulse, label: "Compassionate", gradient: "from-primary to-gold-light" },
];

export function OurCommitment() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-blue via-primary to-teal text-white relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-background/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-gold/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="inline-block bg-background/15 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase backdrop-blur-sm border border-white/20">
          Our Values
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Our Commitment to You
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          At Immaculate Home Care Services, our mission is to deliver home health care that honors the individuality of every client. We are committed to improving quality of life through expert care rooted in empathy, professionalism, and trust.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background/15 backdrop-blur-md border border-white/20 hover:bg-background/20 hover:border-white/30 gentle-animation group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 gentle-animation`}>
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-white text-base">
                {value.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
