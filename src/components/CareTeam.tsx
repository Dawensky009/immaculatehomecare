import { Stethoscope, HeartHandshake, Pill, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    icon: HeartHandshake,
    abbr: "CNA",
    title: "Certified Nursing Assistants",
    description:
      "Provide essential daily care including bathing, grooming, feeding, mobility assistance, and vital sign monitoring under the supervision of licensed nurses.",
  },
  {
    icon: Activity,
    abbr: "HHA",
    title: "Home Health Aides",
    description:
      "Support clients with personal care, light housekeeping, meal preparation, and companionship—helping maintain independence and comfort at home.",
  },
  {
    icon: Pill,
    abbr: "LPN",
    title: "Licensed Practical Nurses",
    description:
      "Deliver skilled nursing care including medication administration, wound care, catheter management, and health monitoring as directed by physicians.",
  },
  {
    icon: Stethoscope,
    abbr: "RN",
    title: "Registered Nurses",
    description:
      "Provide advanced clinical care, develop individualized care plans, coordinate with physicians, and oversee the full care team to ensure optimal health outcomes.",
  },
];

export function CareTeam() {
  return (
    <section id="care-team" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
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
              className="border border-border bg-background hover:shadow-lg gentle-animation text-center group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 gentle-animation">
                  <role.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary tracking-wider uppercase mb-1">
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
          <p className="text-muted-foreground max-w-2xl mx-auto bg-background/60 rounded-xl px-6 py-4 border border-border">
            Every member of our care team undergoes thorough background checks, credential verification, and ongoing training to ensure the highest standard of care.
          </p>
        </div>
      </div>
    </section>
  );
}
