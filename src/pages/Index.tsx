import ContactSection from '@/components/ContactSection';
import EducationLeadershipSection from '@/components/EducationLeadershipSection';
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection";
import AboutMeSection from "@/components/AboutMeSection";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <HeroSection />
      <AboutMeSection />
      <ProfessionalExperienceSection />
      <ProjectsSection />
      <TechnicalSkillsSection />
      <EducationLeadershipSection />
      <ContactSection />
    </div>
  );
};

export default Index;