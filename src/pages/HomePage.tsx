import { HeroSlider } from "@/components/HeroSlider";
import { SlidingBanner } from "@/components/SlidingBanner";
import { WhoWeServe } from "@/components/WhoWeServe";
import { BentoGrid } from "@/components/BentoGrid";
import { CareTeam } from "@/components/CareTeam";
import { Testimonials } from "@/components/Testimonials";
import { JoinOurTeam } from "@/components/JoinOurTeam";
import { OurServices } from "@/components/OurServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OurCommitment } from "@/components/OurCommitment";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
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
        <JoinOurTeam />
      </ScrollReveal>
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
    </>
  );
}
