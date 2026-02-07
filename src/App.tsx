import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { SlidingBanner } from "./components/SlidingBanner";
import { WhoWeServe } from "./components/WhoWeServe";
import { BentoGrid } from "./components/BentoGrid";
import { CareTeam } from "./components/CareTeam";
import { Testimonials } from "./components/Testimonials";
import { OurServices } from "./components/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { OurCommitment } from "./components/OurCommitment";
import { ContactForm } from "./components/ContactForm";
import { SiteFooter } from "./components/SiteFooter";
import { ScrollReveal } from "./components/ScrollReveal";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main">
        <HeroSlider />
        <SlidingBanner />
        <ScrollReveal>
          <WhoWeServe />
        </ScrollReveal>
        <BentoGrid />
        <ScrollReveal>
          <CareTeam />
        </ScrollReveal>
        <Testimonials />
        <ScrollReveal>
          <OurServices />
        </ScrollReveal>
        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>
        <ScrollReveal>
          <OurCommitment />
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
