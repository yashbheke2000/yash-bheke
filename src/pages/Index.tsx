import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import EducationLeadershipSection from '@/components/EducationLeadershipSection';
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection";
import AboutMeSection from "@/components/AboutMeSection";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-professional">Yash Krishna Bheke</div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/yash-bheke" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/yashbheke2000" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

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