import { Briefcase, Calendar, TrendingUp, Zap, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experience = {
    title: "Software Developer (Data Analytics and Engineering)",
    company: "Accelya, Mumbai",
    period: "September 2022 – July 2024",
    location: "Mumbai, India",
    achievements: [
        "Built near real-time analytics dashboards reducing latency from 60+ minutes to under 2 minutes (97% improvement)",
        "Designed end-to-end data pipelines reducing SLA lag by 27% for 20+ business analysts across 13 teams",
        "Led 9 A/B testing experiments resulting in 22% increase in predictive accuracy",
        "Resolved 52 production issues across C-based modules, TypeScript microservices, and Python/SQL pipelines",
        "Automated analytics environment setup, cutting deployment time from 1 day to 30 minutes (95% faster)",
        "Engineered ETL workflows processing 500+ GB data with 99.95% uptime over 6 months"
    ],
    tech: ["Java", "Python", "TypeScript", "SQL", "REST APIs", "ETL", "A/B Testing"]
};

const iconForAchievement = (idx) => {
    if (idx < 2) return <TrendingUp className="h-5 w-5 text-success" />;
    if (idx < 4) return <Zap className="h-5 w-5 text-primary" />;
    return <Star className="h-5 w-5 text-accent" />;
};

const ProfessionalExperienceSection = () => (
    <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-14">
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
                                <p className="text-white/70 text-base">{experience.location}</p>
                            </div>
                            <Badge className="bg-white/20 text-white border-white/30">
                                <Calendar className="mr-2 h-4 w-4" />
                                {experience.period}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {experience.achievements.map((achievement, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-subtle hover:shadow-md transition-all"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        {iconForAchievement(idx)}
                                    </div>
                                    <p className="text-sm leading-relaxed text-professional/80">{achievement}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-8">
                            {experience.tech.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

export default ProfessionalExperienceSection;
