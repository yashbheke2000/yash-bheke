import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, Star } from "lucide-react";

const projects = [
    {
        title: "SafeStreet Chatbot",
        period: "Jan 2025 – Feb 2025",
        description: "Architected a multimodal safety chatbot using Gemini-1.5 Pro with advanced Vision-LLM pipelines and RAG implementation.",
        highlights: [
            "Integrated Vision-LLM pipelines for image analysis",
            "Implemented RAG pipelines for accurate information retrieval",
            "Provided crime statistics and risk indices",
            "Generated housing recommendations based on safety data"
        ],
        tech: ["Gemini-1.5 Pro", "Vision-LLM", "RAG", "Python", "NLP"],
        code: "https://github.com/example/safestreet", // Replace
        demo: "https://demo.safestreet.com"            // Replace
    },
    {
        title: "Airbnb Pricing Tool",
        period: "Oct 2024 – Dec 2024",
        description: "Built a comprehensive pricing optimization tool for Airbnb listings using machine learning and advanced feature engineering.",
        highlights: [
            "Cleansed and shaped large-scale Airbnb listing data",
            "Engineered revenue-signals for better predictions",
            "Optimized Random Forest model for pricing accuracy",
            "Designed self-serving pricing tool interface"
        ],
        tech: ["Python", "Random Forest", "Feature Engineering", "Data Analysis", "Machine Learning"],
        code: "https://github.com/example/airbnb-pricing", // Replace
        demo: "https://demo.airbnbpricing.com"             // Replace
    }
    // Add more projects as desired...
];

const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-14">
                <Badge className="bg-accent/10 text-accent border-accent/20">Featured Projects</Badge>
                <h2 className="text-4xl font-bold text-professional">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Innovative solutions built with cutting-edge technologies
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {projects.map((p, index) => (
                    <Card key={p.title} className="shadow-card border-0 hover:shadow-lg transition-all group">
                        <CardHeader className="bg-gradient-professional text-white">
                            <CardTitle className="flex items-center justify-between">
                                <span className="flex items-center">
                                    <Code className="mr-3 h-5 w-5" />
                                    {p.title}
                                </span>
                                <span className="text-xs">{p.period}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <p className="font-medium text-professional/90">{p.description}</p>
                            <div>
                                <h4 className="font-semibold mb-2 text-professional">Key Features:</h4>
                                <ul className="space-y-2">
                                    {p.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start space-x-2 text-sm">
                                            <Star className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                                            <span className="text-professional/80">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {p.tech.map(tech => (
                                    <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                                ))}
                            </div>
                            <div className="flex space-x-3 mt-6">
                                <a href={p.code} target="_blank" rel="noopener noreferrer">
                                    <button className="px-4 py-2 bg-muted hover:bg-accent text-professional flex items-center rounded font-semibold">
                                        <Code className="mr-1 h-4 w-4" /> View Code
                                    </button>
                                </a>
                                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                                    <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 flex items-center rounded font-semibold">
                                        <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                                    </button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default ProjectsSection;
