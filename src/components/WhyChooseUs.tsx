import { ShieldCheck, Users, ClipboardList, Home, Heart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "AHCA Licensed in Florida",
    description:
      "We are a fully licensed home health care provider regulated by the Agency for Health Care Administration, ensuring compliance with the highest industry standards.",
  },
  {
    icon: Users,
    title: "Qualified, Compassionate Professionals",
    description:
      "Every caregiver on our team is thoroughly vetted, credentialed, and trained to deliver exceptional care with genuine compassion.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Care Plans",
    description:
      "We develop individualized care plans tailored to each client's medical needs, personal preferences, and goals for wellness and comfort.",
  },
  {
    icon: Home,
    title: "Care in the Comfort of Home",
    description:
      "There's no place like home. We bring professional-grade care directly to you, eliminating the need for facility stays whenever possible.",
  },
  {
    icon: Heart,
    title: "Families-First Approach",
    description:
      "We treat every client like family. Open communication, reliability, and transparency are at the core of everything we do.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-navy via-[#0c2d4a] to-accent text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Families Trust Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Families across Florida trust Immaculate Home Care Services for quality, compassion, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 hover:border-white/20 gentle-animation group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center shadow-lg">
                <reason.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1.5 text-base">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
