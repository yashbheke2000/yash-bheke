import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ContactSection from '@/components/ContactSection';
import EducationLeadershipSection from '@/components/EducationLeadershipSection';
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection";
import AboutMeSection from "@/components/AboutMeSection";
import HeroSection from "@/components/HeroSection";

import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Calendar,
    ExternalLink,
    Code,
    Database,
    Brain,
    Award,
    GraduationCap,
    Briefcase,
    ChevronDown,
    Star,
    TrendingUp,
    Zap
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import techBackground from '@/assets/tech-background.jpg';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects', 'skills', 'education','contact'];
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

    const skills = {
        'Programming Languages': [
            { name: 'Python', level: 95 },
            { name: 'Java', level: 90 },
            { name: 'TypeScript/JavaScript', level: 88 },
            { name: 'SQL', level: 95 },
            { name: 'C#', level: 80 }
        ],
        'Data & Analytics': [
            { name: 'Machine Learning', level: 92 },
            { name: 'Data Engineering', level: 95 },
            { name: 'ETL Pipelines', level: 90 },
            { name: 'Big Data', level: 85 },
            { name: 'Statistical Analysis', level: 88 }
        ],
        'Technologies & Tools': [
            { name: 'Docker', level: 85 },
            { name: 'Oracle Database', level: 90 },
            { name: 'REST APIs', level: 92 },
            { name: 'Git', level: 90 },
            { name: 'Linux/RedHat', level: 85 }
        ]
    };

    const projects = [
        {
            title: 'SafeStreet Chatbot',
            period: 'January 2025 – February 2025',
            description: 'Multimodal real-time safety chatbot utilizing Gemini-1.5 Pro with Google News and Brave Search APIs',
            highlights: [
                'Implemented retrieval-augmented generation (RAG) pipelines for live crime statistics',
                'Integrated Vision-LLM pipelines with YOLOv8 + Gemini Vision for scene understanding',
                'Achieved sub 2 seconds response time on standard 500-token queries',
                'Extended NLU stack to support 20+ languages'
            ],
            tech: ['Gemini-1.5 Pro', 'YOLOv8', 'RAG', 'Python', 'API Integration']
        },
        {
            title: 'Airbnb Pricing Tool',
            period: 'October 2024 – December 2024',
            description: 'ML-powered pricing optimization tool for Airbnb hosts with 93% prediction accuracy',
            highlights: [
                'Processed 7k+ listings across 106 columns with advanced feature engineering',
                'Optimized 600-tree Random Forest achieving R² 0.83, MAE $23.9, RMSE $65.6',
                '40% error reduction versus regularized linear model',
                'Built self-serving pricing tool via shareable Google Colab'
            ],
            tech: ['Random Forest', 'SHAP', 'Python', 'Scikit-learn', 'Feature Engineering']
        }
    ];

    const experience = {
        title: 'Software Developer (Data Analytics and Engineering)',
        company: 'Accelya, Mumbai',
        period: 'September 2022 – July 2024',
        achievements: [
            'Built near real-time analytics dashboards reducing latency from 60+ minutes to under 2 minutes (97% improvement)',
            'Designed end-to-end data pipelines reducing SLA lag by 27% for 20+ business analysts across 13 teams',
            'Led 9 A/B testing experiments resulting in 22% increase in predictive accuracy',
            'Resolved 52 production issues across C-based modules, TypeScript microservices, and Python/SQL pipelines',
            'Automated analytics environment setup, cutting deployment time from 1 day to 30 minutes (95% faster)',
            'Engineered ETL workflows processing 500+ GB data with 99.95% uptime over 6 months'
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-subtle">
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
                                    className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
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

            {/* Hero Section */}
            <HeroSection />

            {/* About Me Section */}
            <AboutMeSection />


            {/* Experience Section */}
            <ProfessionalExperienceSection />


            {/* Projects Section */}
            <ProjectsSection />

            {/* Skills Section */}
            <TechnicalSkillsSection />


            <EducationLeadershipSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <footer className="bg-professional text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
                        <p>&copy; 2025 Yash Krishna Bheke. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;