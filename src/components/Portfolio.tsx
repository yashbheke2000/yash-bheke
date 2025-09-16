import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ContactSection from '@/components/ContactSection';
import EducationLeadershipSection from '@/components/EducationLeadershipSection';
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

      {/* Hero Section */}
      <section 
        id="about" 
        className="relative pt-20 pb-16 overflow-hidden"
        style={{ backgroundImage: `url(${techBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-professional/80"></div>
        <div className="relative container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <Badge className="bg-accent text-professional">Software Developer & Data Engineer</Badge>
                <h1 className="text-5xl font-bold leading-tight">
                  Transforming Data into 
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Intelligence</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Experienced Software Developer specializing in data analytics, machine learning, 
                  and scalable system architecture. Proven track record of building high-performance 
                  solutions that drive business impact.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Cincinnati, OH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>yash.bheke2000@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(513) 276-5130</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-accent text-professional hover:bg-accent/90">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-professional">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-float"></div>
                <img 
                  src={profilePhoto} 
                  alt="Yash Krishna Bheke" 
                  className="relative w-80 h-80 mx-auto rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <button onClick={() => scrollToSection('experience')}>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20">Professional Experience</Badge>
            <h2 className="text-4xl font-bold text-professional">Building Scalable Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              2+ years of experience in data engineering, analytics, and software development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card border-0 overflow-hidden">
              <CardHeader className="bg-gradient-primary text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center">
                      <Briefcase className="mr-3 h-6 w-6" />
                      {experience.title}
                    </CardTitle>
                    <p className="text-white/90 text-lg">{experience.company}</p>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Calendar className="mr-2 h-4 w-4" />
                    {experience.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-subtle hover:shadow-md transition-all">
                      <div className="flex-shrink-0 mt-1">
                        {index < 2 ? <TrendingUp className="h-5 w-5 text-success" /> : 
                         index < 4 ? <Zap className="h-5 w-5 text-primary" /> : 
                         <Star className="h-5 w-5 text-accent" />}
                      </div>
                      <p className="text-sm leading-relaxed text-professional/80">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20">Featured Projects</Badge>
            <h2 className="text-4xl font-bold text-professional">Innovation in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge projects showcasing AI, machine learning, and data engineering expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="bg-gradient-professional text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Code className="mr-3 h-5 w-5" />
                      {project.title}
                    </span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <p className="text-white/80 text-sm">{project.period}</p>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <p className="text-professional/80 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-professional">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <Star className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                          <span className="text-professional/70">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-success/10 text-success border-success/20">Technical Skills</Badge>
            <h2 className="text-4xl font-bold text-professional">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning data engineering, machine learning, and software development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="shadow-card border-0">
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    {index === 0 ? <Code className="h-6 w-6 text-white" /> :
                     index === 1 ? <Database className="h-6 w-6 text-white" /> :
                     <Brain className="h-6 w-6 text-white" />}
                  </div>
                  <CardTitle className="text-xl text-professional">{category}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {skillList.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-professional">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EducationLeadershipSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-professional text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Build Something Amazing Together</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to create impact through technology.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-accent text-professional hover:bg-accent/90">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-professional">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
            <p>&copy; 2025 Yash Krishna Bheke. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;