import { useEffect } from "react";
import {
  DollarSign,
  Clock,
  Users,
  GraduationCap,
  Heart,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationForm } from "@/components/ApplicationForm";
import { ScrollReveal } from "@/components/ScrollReveal";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Industry-leading compensation with regular raises and bonuses.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Choose full-time, part-time, or per diem to fit your life.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description: "Work alongside experienced professionals who have your back.",
  },
  {
    icon: GraduationCap,
    title: "Career Growth",
    description: "Continuing education, certifications, and advancement paths.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every single day.",
  },
  {
    icon: ShieldCheck,
    title: "Full Benefits",
    description: "Health insurance, PTO, and retirement plan options available.",
  },
];

const openPositions = [
  {
    title: "Certified Nursing Assistant (CNA)",
    type: "Full-Time / Part-Time",
    description:
      "Provide hands-on personal care including bathing, dressing, and mobility assistance under nurse supervision.",
  },
  {
    title: "Home Health Aide (HHA)",
    type: "Full-Time / Part-Time / Per Diem",
    description:
      "Deliver compassionate in-home support with daily living activities, meal preparation, and companionship.",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    type: "Full-Time / Part-Time",
    description:
      "Administer medications, monitor vitals, and coordinate care plans for patients in their homes.",
  },
  {
    title: "Registered Nurse (RN)",
    type: "Full-Time",
    description:
      "Lead patient assessments, develop care plans, and supervise clinical teams for complex home health cases.",
  },
];

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-blue rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-sky-blue/20 text-sky-300 border-sky-blue/30 hover:bg-sky-blue/30">
            We're Hiring
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Build a Career in{" "}
            <span className="text-sky-300">Compassionate Care</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Join Immaculate Home Care Services and help us deliver exceptional, patient-centered home health care across Florida.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <ScrollReveal>
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3 border-primary/20 text-primary">
                Why Work With Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Benefits That Matter
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="border-border/50 bg-background hover:shadow-lg gentle-animation"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Open Positions */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-3 border-primary/20 text-primary">
                Open Positions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Current Opportunities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {openPositions.map(({ title, type, description }) => (
                <Card
                  key={title}
                  className="border-border/50 hover:border-primary/30 hover:shadow-lg gentle-animation group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy/10 flex items-center justify-center group-hover:bg-primary/10 gentle-animation">
                        <Briefcase className="w-5 h-5 text-navy group-hover:text-primary gentle-animation" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {title}
                        </h3>
                        <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-2">
                          {type}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="#apply"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Application Form */}
      <ScrollReveal>
        <section id="apply" className="py-20 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-3 border-primary/20 text-primary">
                Apply Today
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Start Your Application
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Fill out the form below and our hiring team will be in touch within 48 hours.
              </p>
            </div>
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <ApplicationForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
