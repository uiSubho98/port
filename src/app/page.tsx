import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import SkillsSection from "@/components/landing/skills-section";
import ExperienceSection from "@/components/landing/experience-section";
import ContactSection from "@/components/landing/contact-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
