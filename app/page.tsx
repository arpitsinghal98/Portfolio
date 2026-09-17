import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <MetricsSection />
      <SelectedWorkSection />
      <ExperienceSection />
    </main>
  );
}
