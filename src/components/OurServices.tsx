import { Stethoscope, HandHelping, Baby, Users, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing Care",
    subtitle: "LPN & RN Services",
    items: [
      "Medication management and administration",
      "Wound care and dressing changes",
      "Post-hospital and post-surgical care",
      "Chronic disease management",
      "Vital signs monitoring",
      "IV therapy and injections",
      "Catheter and ostomy care",
      "Physician-coordinated care plans",
    ],
  },
  {
    icon: HandHelping,
    title: "Personal Care & Daily Living",
    subtitle: "CNA & HHA Services",
    items: [
      "Bathing, grooming, and personal hygiene",
      "Meal preparation and feeding assistance",
      "Mobility and transfer assistance",
      "Light housekeeping and laundry",
      "Grocery shopping and errands",
      "Toileting and incontinence care",
      "Transportation to appointments",
    ],
  },
  {
    icon: Baby,
    title: "Pediatric & Special Needs Support",
    subtitle: "Children's Care",
    items: [
      "Supervision and safety monitoring",
      "Daily routine support and structure",
      "Emotional and behavioral support",
      "Assistance with school-related activities",
      "Respite care for family caregivers",
      "Social skills development support",
      "Coordination with therapists and schools",
    ],
  },
  {
    icon: Users,
    title: "Senior Companion & Support Care",
    subtitle: "Elderly Care",
    items: [
      "Companionship and conversation",
      "Medication reminders",
      "Light exercise and mobility support",
      "Meal planning and preparation",
      "Appointment accompaniment",
      "Cognitive stimulation activities",
      "Fall prevention and safety monitoring",
    ],
  },
];

export function OurServices() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive home health care services tailored to each client's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border border-border rounded-xl bg-card overflow-hidden hover:shadow-md gentle-animation"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex-shrink-0 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.subtitle}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <ul className="space-y-2.5 border-t border-border pt-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
