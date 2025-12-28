import { HeroSection } from "@/components/landing/HeroSection";
import { WhyAiSeoSection } from "@/components/landing/WhyAiSeoSection";
import { CoreModulesSection } from "@/components/landing/CoreModulesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyAiSeoSection />
      <CoreModulesSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
