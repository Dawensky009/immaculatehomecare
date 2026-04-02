import { Stethoscope, HeartHandshake, Pill, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    icon: HeartHandshake,
    abbr: "CNA",
    title: "Certified Nursing Assistants",
    color: "from-gold to-primary",
    description:
      "Provide essential daily care including bathing, grooming, feeding, mobility assistance, and vital sign monitoring under the supervision of licensed nurses.",
  },
  {
    icon: Activity,
    abbr: "HHA",
    title: "Home Health Aides",
    color: "from-primary to-teal",
    description:
      "Support clients with personal care, light housekeeping, meal preparation, and companionship—helping maintain independence and comfort at home.",
  },
  {
    icon: Pill,
    abbr: "LPN",
    title: "Licensed Practical Nurses",
    color: "from-gold-light to-gold",
    description:
      "Deliver skilled nursing care including medication administration, wound care, catheter management, and health monitoring as directed by physicians.",
  },
  {
    icon: Stethoscope,
    abbr: "RN",
    title: "Registered Nurses",
    color: "from-teal to-primary",
    description:
      "Provide advanced clinical care, develop individualized care plans, coordinate with physicians, and oversee the full care team to ensure optimal health outcomes.",
  },
];

export function CareTeam() {
  return (
    <section id="care-team" className="py-20 bg-gradient-to-br from-primary/14 via-light-blue to-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Our Care Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team of licensed, vetted professionals brings expertise and compassion to every home visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <Card
              key={role.abbr}
              className="border border-border bg-background/95 hover:shadow-xl gentle-animation text-center group overflow-hidden relative"
            >
              {/* Top gradient accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${role.color}`} />
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 gentle-animation shadow-lg`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-gold tracking-wider uppercase mb-1">
                  {role.abbr}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto bg-background/85 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary/10 shadow-sm">
            Every member of our care team undergoes thorough background checks, credential verification, and ongoing training to ensure the highest standard of care.
          </p>
        </div>
      </div>
    </section>
  );
}
