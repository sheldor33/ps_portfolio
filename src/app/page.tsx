import { HeroSection } from "@/components/sections/hero-section";
import { ImpactMarquee } from "@/components/sections/impact-marquee";
import { RoleTracksSection } from "@/components/sections/role-tracks";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillScrollSection } from "@/components/sections/skill-scroll";
import {
  CredentialsSection,
  RecruiterCTA,
} from "@/components/sections/credentials-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactMarquee />
      <RoleTracksSection />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <SkillScrollSection />
      <CredentialsSection />
      <RecruiterCTA />
    </>
  );
}
