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
    <section id="why-choose-us" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Families across Florida trust Immaculate Home Care Services for quality, compassion, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border hover:shadow-md gentle-animation"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1.5 text-base">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
