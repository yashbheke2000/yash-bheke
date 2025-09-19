import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import projectImg1 from "@/assets/safestreet.jpg"; // Example import for SafeStreet Chatbot image
import projectImg2 from "@/assets/airbnb.jpg";     // Example import for Airbnb Pricing Tool image

const projects = [
    {
        title: "SafeStreet Chatbot",
        period: "January 2025 – February 2025",
        description:
            "Architected a multimodal safety chatbot using Gemini-1.5 Pro with advanced Vision-LLM pipelines and RAG implementation.",
        highlights: [
            "Integrated Vision-LLM pipelines for image analysis",
            "Implemented RAG pipelines for accurate information retrieval",
            "Provided crime statistics and risk indices",
            "Generated housing recommendations based on safety data"
        ],
        tech: ["Gemini-1.5 Pro", "Vision-LLM", "RAG", "Python", "NLP"],
        code: "https://github.com/example/safestreet",
        demo: "https://demo.safestreet.com",
        img: projectImg1 // Use your actual import path
    },
    {
        title: "Airbnb Pricing Tool",
        period: "October 2024 – December 2024",
        description:
            "Built a comprehensive pricing optimization tool for Airbnb listings using machine learning and advanced feature engineering.",
        highlights: [
            "Cleansed and shaped large-scale Airbnb listing data",
            "Engineered revenue-signal features for better predictions",
            "Optimized Random Forest model for pricing accuracy",
            "Uncovered key price drivers through data analysis",
            "Designed self-serving pricing tool interface"
        ],
        tech: ["Python", "Random Forest", "Feature Engineering", "Data Analysis", "Machine Learning"],
        code: "https://github.com/example/airbnb-pricing",
        demo: "https://demo.airbnbpricing.com",
        img: projectImg2 // Use your actual import path
    }
];

const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-5xl font-bold">Featured Projects</h2>
                <p className="text-lg text-muted-foreground">
                    Innovative solutions built with cutting-edge technologies
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                        {/* Project Image */}
                        <div className="w-full h-48 overflow-hidden">
                            <img
                                src={p.img}
                                alt={`${p.title} cover`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Project Content */}
                        <div className="flex-1 flex flex-col px-8 py-7">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-xl">{p.title}</span>
                                <span className="flex items-center text-muted-foreground text-sm">
                                    <Calendar className="mr-1 h-4 w-4" />
                                    {p.period}
                                </span>
                            </div>
                            <p className="mb-4 text-professional/90">{p.description}</p>
                            <div className="mb-4">
                                <div className="font-semibold mb-2">Key Features:</div>
                                <ul className="space-y-2 text-base">
                                    {p.highlights.map((h, idx) => (
                                        <li key={idx} className="flex items-center text-muted-foreground/90">
                                            <span className="mr-2 text-blue-500 font-bold">&rarr;</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-5">
                                <div className="font-semibold mb-1 mt-2">Skills and Technologies:</div>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs py-1 px-3">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto flex space-x-3 pt-2">
                                <a href={p.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <button className="w-full flex items-center justify-center border border-neutral-300 hover:bg-neutral-100 text-professional font-medium py-2 rounded-lg transition">
                                        <span className="mr-2">🡥</span> View Code
                                    </button>
                                </a>
                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
                                        <span className="mr-2">🡥</span> Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ProjectsSection;
