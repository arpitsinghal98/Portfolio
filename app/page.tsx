import { SiteNavigation } from "@/components/layout/site-navigation";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <SiteNavigation />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
      </main>
    </>
  );
}
