import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-primary"></div>
              <span className="text-xl font-semibold text-professional">Professional Hub</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/portfolio">
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Choose Your Path
            </Badge>
            <h1 className="text-5xl font-bold text-professional leading-tight">
              Professional Services & 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Portfolio Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore career development resources and view professional portfolios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 group cursor-pointer">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Briefcase className="mr-3 h-6 w-6" />
                  Portfolio Strategist
                </CardTitle>
                <CardDescription className="text-white/90">
                  AI-powered career portfolio development and strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-professional/80 leading-relaxed">
                  Get personalized recommendations from our expert Career Portfolio Strategist. 
                  Transform your professional presentation with strategic guidance and actionable insights.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-success">
                    <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                    <span>Personalized portfolio strategy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-success">
                    <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                    <span>Industry-specific recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-success">
                    <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                    <span>Implementation timeline</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-primary text-white group-hover:scale-105 transition-transform">
                  Start Portfolio Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 group cursor-pointer">
              <CardHeader className="bg-gradient-professional text-white">
                <CardTitle className="text-2xl flex items-center">
                  <User className="mr-3 h-6 w-6" />
                  Yash's Portfolio
                </CardTitle>
                <CardDescription className="text-white/90">
                  Software Developer & Data Engineering Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-professional/80 leading-relaxed">
                  Explore the professional portfolio of Yash Krishna Bheke, featuring expertise in 
                  data analytics, machine learning, and scalable system architecture.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>2+ years at Accelya</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>AI & ML Projects</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Data Engineering Expertise</span>
                  </div>
                </div>
                <Link to="/portfolio" className="block">
                  <Button className="w-full bg-gradient-professional text-white group-hover:scale-105 transition-transform">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
