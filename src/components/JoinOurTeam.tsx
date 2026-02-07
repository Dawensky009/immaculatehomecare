import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Stethoscope, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = [
  { label: "CNA", icon: Heart },
  { label: "HHA", icon: Users },
  { label: "LPN", icon: Stethoscope },
  { label: "RN", icon: Star },
];

export function JoinOurTeam() {
  return (
    <section className="relative py-20 overflow-hidden bg-navy">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top label */}
        <Badge className="mb-6 bg-sky-blue/20 text-sky-300 border-sky-blue/30 hover:bg-sky-blue/30">
          Now Hiring
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Join Our Team of{" "}
          <span className="text-sky-300">Compassionate Caregivers</span>
        </h2>

        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          We're looking for dedicated healthcare professionals who share our mission of delivering exceptional, patient-centered care throughout Florida.
        </p>

        {/* Role badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {roles.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3 text-white gentle-animation hover:bg-white/15 hover:border-white/25"
            >
              <Icon className="w-5 h-5 text-sky-300" />
              <span className="font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="bg-sky-blue hover:bg-sky-blue/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-sky-blue/25"
        >
          <Link to="/careers">
            Apply Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
