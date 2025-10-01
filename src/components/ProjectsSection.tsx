import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import projectImg1 from "@/assets/safestreet.jpg";
import projectImg2 from "@/assets/mood-disorder.jpg"
import projectImg3 from "@/assets/airbnb.jpg";     

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
        img: projectImg1
    },
    {
        title: "Mood Disorder Prediction",
        period: "November 2024 – December 2024",
        description:
            "Developed a predictive analytics solution for mood disorder diagnosis using advanced machine learning, feature engineering, and model interpretability techniques.",
        highlights: [
            "Cleaned, transformed, and engineered features from complex psychological and behavioral survey data",
            "Benchmarked and optimized multiple models (Random Forest, KNN, Decision Tree, Logistic Regression), delivering top accuracy and F1 gains",
            "Applied hyperparameter tuning and cross-validation for robust performance metrics and real-world reliability",
            "Leveraged SHAP for interpretable AI, visualizing most influential mental health drivers and model reasoning",
            "Automated preprocessing, data scaling, and validation using scikit-learn Pipelines for reproducible results",
            "Delivered comprehensive reporting and actionable insights for potential early mental health intervention"
        ],
        tech: ["Python", "Pandas", "Scikit-learn", "SHAP", "Seaborn", "Random Forest", "ETL", "Feature Engineering", "Statistical Analysis"],
        code: "https://colab.research.google.com/drive/14dIrMxjuBprbVqeoWUFgm2OfL2fFLDkz?usp=sharing",
        demo: "https://demo.safestreet.com",
        img: projectImg2
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
        code: "https://colab.research.google.com/drive/1Dsogjgziqw_XwNmJ7XL15Y0sefekQ4Gn?usp=sharing",
        demo: "https://demo.airbnbpricing.com",
        img: projectImg3
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
                                <div className="font-semibold mb-1 mt-2">Technologies:</div>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs py-1 px-3">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto pt-2">
                                <a href={p.code} target="_blank" rel="noopener noreferrer" className="block">
                                    <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
                                        <span className="mr-2">🡥</span> View Code
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
