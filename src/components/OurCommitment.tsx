import { Award, Handshake, Clock, HeartPulse } from "lucide-react";

const values = [
  { icon: Handshake, label: "Respectful" },
  { icon: Award, label: "Professional" },
  { icon: Clock, label: "Reliable" },
  { icon: HeartPulse, label: "Compassionate" },
];

export function OurCommitment() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0c2340] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Our Commitment to You
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          At Immaculate Home Care Services, our mission is to deliver home health care that honors the individuality of every client. We are committed to improving quality of life through expert care rooted in empathy, professionalism, and trust.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 gentle-animation"
            >
              <value.icon className="w-8 h-8 text-sky-300" />
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
