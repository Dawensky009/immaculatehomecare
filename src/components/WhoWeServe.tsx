import { Baby, UserRound, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: Baby,
    title: "Children With Special Needs",
    gradient: "from-gold to-primary",
    borderColor: "border-t-gold",
    description:
      "We provide compassionate, in-home support for children with ADHD, developmental delays, behavioral challenges, and other special needs. Our trained caregivers help with daily routines, emotional support, and supervision—giving families the relief they need while keeping children safe and nurtured.",
  },
  {
    icon: UserRound,
    title: "Adults Requiring Medical Care",
    gradient: "from-primary to-teal",
    borderColor: "border-t-primary",
    description:
      "Whether recovering from illness, managing chronic conditions, or needing skilled nursing support, our team delivers professional medical care in the comfort of your own home. Services include medication management, wound care, health monitoring, and assistance with daily living activities.",
  },
  {
    icon: Heart,
    title: "Elderly & Senior Care",
    gradient: "from-gold-light to-gold",
    borderColor: "border-t-gold-light",
    description:
      "Our senior care services are designed to help older adults maintain their independence, safety, and comfort at home. From companionship and mobility assistance to medication reminders and personal hygiene, we treat every client with the dignity and respect they deserve.",
  },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 bg-gradient-to-b from-cream to-beige-light relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Care for Every Stage of Life
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We bring professional, licensed care directly to the homes of those who need it most—children, adults, and seniors throughout Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item) => (
            <Card
              key={item.title}
              className={`border-t-4 ${item.borderColor} border hover:shadow-xl gentle-animation group overflow-hidden`}
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 gentle-animation shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
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
