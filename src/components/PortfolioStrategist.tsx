import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Target, 
  Award, 
  Briefcase, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

interface UserInfo {
  name: string;
  currentRole: string;
  experience: string;
  targetIndustry: string;
  targetRole: string;
  achievements: string;
  skills: string;
  portfolioStatus: string;
  goals: string;
}

const PortfolioStrategist = () => {
  const [step, setStep] = useState<'welcome' | 'questionnaire' | 'results'>('welcome');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    currentRole: '',
    experience: '',
    targetIndustry: '',
    targetRole: '',
    achievements: '',
    skills: '',
    portfolioStatus: '',
    goals: ''
  });

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const generateRecommendations = () => {
    setStep('results');
  };

  const renderWelcome = () => (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-primary"></div>
              <span className="text-xl font-semibold text-professional">Portfolio Pro</span>
            </div>
            <Badge variant="outline" className="text-primary">Expert Career Guidance</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  AI-Powered Career Strategy
                </Badge>
                <h1 className="text-5xl font-bold text-professional leading-tight">
                  Transform Your Career with a 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Strategic Portfolio</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get personalized recommendations from our expert Career Portfolio Strategist. 
                  Stand out in today's competitive job market with a compelling professional portfolio.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-professional">Personalized portfolio strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-professional">Industry-specific recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-professional">Step-by-step implementation plan</span>
                </div>
              </div>

              <Button 
                onClick={() => setStep('questionnaire')}
                className="bg-gradient-primary text-white px-8 py-6 text-lg font-semibold shadow-elegant hover:scale-105 transition-smooth"
              >
                Start Your Portfolio Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="lg:pl-8">
              <img 
                src={heroImage} 
                alt="Career portfolio development illustration" 
                className="w-full rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-professional">
              Comprehensive Portfolio Development
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strategic approach covers every aspect of your professional presentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: User,
                title: "Personal Brand Analysis",
                description: "Identify your unique value proposition and professional strengths"
              },
              {
                icon: Target,
                title: "Industry Mapping",
                description: "Align your skills with current market demands and opportunities"
              },
              {
                icon: Award,
                title: "Achievement Showcase",
                description: "Present your accomplishments with maximum impact and clarity"
              },
              {
                icon: Briefcase,
                title: "Portfolio Structure",
                description: "Organize your work samples for optimal viewer engagement"
              },
              {
                icon: TrendingUp,
                title: "Growth Strategy",
                description: "Plan your professional development and skill advancement"
              },
              {
                icon: Calendar,
                title: "Implementation Timeline",
                description: "Step-by-step roadmap with measurable milestones"
              }
            ].map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-gradient-subtle">
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-professional">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderQuestionnaire = () => (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-card border-0">
          <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <User className="mr-3 h-6 w-6" />
              Portfolio Development Assessment
            </CardTitle>
            <CardDescription className="text-white/90">
              Help us understand your professional background to create your personalized strategy
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input 
                  id="currentRole"
                  value={userInfo.currentRole}
                  onChange={(e) => handleInputChange('currentRole', e.target.value)}
                  placeholder="e.g., Senior Software Engineer"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Professional Experience</Label>
              <Textarea 
                id="experience"
                value={userInfo.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                placeholder="Describe your professional background, key roles, and years of experience..."
                className="min-h-[100px]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="targetIndustry">Target Industry</Label>
                <Input 
                  id="targetIndustry"
                  value={userInfo.targetIndustry}
                  onChange={(e) => handleInputChange('targetIndustry', e.target.value)}
                  placeholder="e.g., Technology, Healthcare, Finance"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="targetRole">Target Role</Label>
                <Input 
                  id="targetRole"
                  value={userInfo.targetRole}
                  onChange={(e) => handleInputChange('targetRole', e.target.value)}
                  placeholder="e.g., Engineering Manager, Product Director"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="achievements">Key Achievements</Label>
              <Textarea 
                id="achievements"
                value={userInfo.achievements}
                onChange={(e) => handleInputChange('achievements', e.target.value)}
                placeholder="List your most significant professional accomplishments, awards, or recognitions..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Core Skills & Expertise</Label>
              <Textarea 
                id="skills"
                value={userInfo.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="List your key technical and soft skills, certifications, and areas of expertise..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolioStatus">Current Portfolio Status</Label>
              <Textarea 
                id="portfolioStatus"
                value={userInfo.portfolioStatus}
                onChange={(e) => handleInputChange('portfolioStatus', e.target.value)}
                placeholder="Describe your current portfolio situation - do you have one? What platforms do you use? What needs improvement?"
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">Career Goals</Label>
              <Textarea 
                id="goals"
                value={userInfo.goals}
                onChange={(e) => handleInputChange('goals', e.target.value)}
                placeholder="What are your short-term and long-term career objectives? Where do you see yourself in 2-3 years?"
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={() => setStep('welcome')}>
                Back
              </Button>
              <Button 
                onClick={generateRecommendations}
                className="bg-gradient-primary text-white px-8"
                disabled={!userInfo.name || !userInfo.currentRole || !userInfo.targetRole}
              >
                Generate My Portfolio Strategy
                <Star className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-8">
          <Badge className="bg-success/10 text-success border-success/20">
            Strategy Complete
          </Badge>
          <h1 className="text-4xl font-bold text-professional">
            Your Personalized Portfolio Strategy
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here's your comprehensive career portfolio development plan
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Portfolio Strategy Overview */}
          <Card className="lg:col-span-2 shadow-card border-0">
            <CardHeader className="bg-gradient-professional text-white">
              <CardTitle className="flex items-center">
                <Target className="mr-3 h-5 w-5" />
                1. Portfolio Strategy Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-professional">Recommended Focus Areas:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <Badge variant="outline" className="justify-center py-2">Technical Expertise Showcase</Badge>
                  <Badge variant="outline" className="justify-center py-2">Leadership Experience</Badge>
                  <Badge variant="outline" className="justify-center py-2">Industry Recognition</Badge>
                  <Badge variant="outline" className="justify-center py-2">Problem-Solving Cases</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-professional">Key Value Propositions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    <span>Cross-functional expertise bridging technical and business domains</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    <span>Proven track record of delivering results in {userInfo.targetIndustry}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    <span>Leadership potential with strategic thinking capabilities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-lg">Portfolio Readiness</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">78%</div>
                <p className="text-sm text-muted-foreground">Ready to Launch</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Content Quality</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Platform Presence</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Personal Brand</span>
                  <span className="text-sm font-medium">70%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional sections would continue here... */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Platform Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <span className="font-medium">LinkedIn</span>
                <Badge>Essential</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                <span className="font-medium">Personal Website</span>
                <Badge variant="outline">Recommended</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">GitHub Portfolio</span>
                <Badge variant="outline">Industry-Specific</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Implementation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-2 border-primary pl-4 space-y-4">
                <div>
                  <div className="font-medium">Week 1-2</div>
                  <div className="text-sm text-muted-foreground">Audit current materials & content gathering</div>
                </div>
                <div>
                  <div className="font-medium">Week 3-4</div>
                  <div className="text-sm text-muted-foreground">Platform setup & profile optimization</div>
                </div>
                <div>
                  <div className="font-medium">Week 5-6</div>
                  <div className="text-sm text-muted-foreground">Content creation & portfolio development</div>
                </div>
                <div>
                  <div className="font-medium">Week 7-8</div>
                  <div className="text-sm text-muted-foreground">Launch & initial networking push</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => setStep('welcome')}
            variant="outline"
            className="mr-4"
          >
            Start Over
          </Button>
          <Button className="bg-gradient-primary text-white">
            Download Full Strategy Report
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {step === 'welcome' && renderWelcome()}
      {step === 'questionnaire' && renderQuestionnaire()}
      {step === 'results' && renderResults()}
    </>
  );
};

export default PortfolioStrategist;