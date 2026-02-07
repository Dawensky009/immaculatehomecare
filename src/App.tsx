import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { WhoWeServe } from "./components/WhoWeServe";
import { CareTeam } from "./components/CareTeam";
import { OurServices } from "./components/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { OurCommitment } from "./components/OurCommitment";
import { ContactForm } from "./components/ContactForm";
import { SiteFooter } from "./components/SiteFooter";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main">
        <HeroSlider />
        <WhoWeServe />
        <CareTeam />
        <OurServices />
        <WhyChooseUs />
        <OurCommitment />
        <ContactForm />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
