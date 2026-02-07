import { Baby, UserRound, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: Baby,
    title: "Children With Special Needs",
    color: "text-primary",
    bgColor: "bg-secondary",
    description:
      "We provide compassionate, in-home support for children with ADHD, developmental delays, behavioral challenges, and other special needs. Our trained caregivers help with daily routines, emotional support, and supervision—giving families the relief they need while keeping children safe and nurtured.",
  },
  {
    icon: UserRound,
    title: "Adults Requiring Medical Care",
    color: "text-accent",
    bgColor: "bg-soft-teal",
    description:
      "Whether recovering from illness, managing chronic conditions, or needing skilled nursing support, our team delivers professional medical care in the comfort of your own home. Services include medication management, wound care, health monitoring, and assistance with daily living activities.",
  },
  {
    icon: Heart,
    title: "Elderly & Senior Care",
    color: "text-primary",
    bgColor: "bg-secondary",
    description:
      "Our senior care services are designed to help older adults maintain their independence, safety, and comfort at home. From companionship and mobility assistance to medication reminders and personal hygiene, we treat every client with the dignity and respect they deserve.",
  },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Who We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We bring professional, licensed care directly to the homes of those who need it most—children, adults, and seniors throughout Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item) => (
            <Card
              key={item.title}
              className="border border-border hover:shadow-lg gentle-animation group overflow-hidden"
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 gentle-animation`}
                >
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
