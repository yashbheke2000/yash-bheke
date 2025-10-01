import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import projectImg1 from "@/assets/safestreet.jpg";
import projectImg2 from "@/assets/mood-disorder.jpg";
import projectImg3 from "@/assets/airbnb.jpg";

const projects = [
    {
        title: "SafeStreet",
        period: "2025",
        description: "Architected a multimodal, real-time safety chatbot for homebuyers and urban commuters, combining LLMs, live search APIs, and image analysis for proactive risk guidance.",
        highlights: [
            "Enabled live crime stats, risk indices, and safest housing recommendations",
            "Integrated Vision-LLM pipelines to parse crime-scene images and provide actionable mitigation steps",
            "Expanded support to 20+ languages, scaling safety resources for diverse communities",
            "Achieved <2 seconds response time on typical 500-token queries)"
        ],
        tech: ["Gemini-1.5 Pro", "YOLOv8", "NLU", "Vision-LLM", "RAG", "Dify", "Google News API", "Dify", "Python"],
        img: projectImg1,
        code: "https://github.com/harshitaaa006/GenAIProject"
    },
    {
        title: "Mood Disorder Analysis",
        period: "2024",
        description: "Developed a predictive analytics pipeline for mood disorders, leveraging clinical and behavioral data to support early, targeted intervention.",
        highlights: [
            "Processed 40,000+ patient records for comprehensive psychosocial modeling",
            "Benchmarked various models with nested cross-validation, achieving ROC-AUC 1.00 and perfect recall on minority class",
            "Applied SHAP and permutation importance to pinpoint top predictive biomarkers",
            "Visualized key risk indicators, empowering personalized diagnosis and follow-up strategies"
        ],
        tech: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Extra Trees", "SHAP", "ETL", "Data Visualization"],
        img: projectImg2,
        code: "https://colab.research.google.com/drive/14dIrMxjuBprbVqeoWUFgm2OfL2fFLDkz?usp=sharing"
    },
    {
        title: "Airbnb Pricing Tool",
        period: "2024",
        description: "Developed a robust pricing optimization application for short-term rental hosts",
        highlights: [
            "Automated cleaning/feature engineering for property, guest ratio and dynamic stay attributes",
            "Optimized a 600-tree Random Forest (R²=0.83, MAE $23.9), reducing errors by 40% over linear models",
            "Identified top 5 price-driving features using SHAP and permutation importance",
            "Delivered a pricing tool for hosts to tweak listing details and get instant, model-backed pricing (93% band coverage)"
        ],
        tech: ["Python", "Random Forest", "sklearn", "Pandas", "SHAP", "Google Colab"],
        img: projectImg3,
        code: "https://colab.research.google.com/drive/1Dsogjgziqw_XwNmJ7XL15Y0sefekQ4Gn?usp=sharing"
    }
];
const ProjectsSection = () => {
    // Track carousel starting index
    const [startIdx, setStartIdx] = useState(0);
    const projectsToShow = 2;
    const maxIdx = projects.length - projectsToShow;

    const handlePrev = () => setStartIdx((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setStartIdx((prev) => Math.min(prev + 1, maxIdx));

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-5xl font-bold">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground">
                        Innovative solutions built with cutting-edge technologies
                    </p>
                </div>
                <div className="relative flex items-center max-w-4xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        className={`absolute left-0 z-20 bg-white rounded-full shadow-lg p-3 hover:bg-blue-50 transition ${startIdx === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                        onClick={handlePrev}
                        disabled={startIdx === 0}
                    >
                        <ChevronLeft className="h-7 w-7 text-blue-600" />
                    </button>
                    {/* Project Cards */}
                    <div className="flex gap-8 w-full justify-center">
                        {projects.slice(startIdx, startIdx + projectsToShow).map((p, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-[32rem]">
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={`${p.title} cover`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col px-10 py-8">
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
                    {/* Right Arrow */}
                    <button
                        className={`absolute right-0 z-20 bg-white rounded-full shadow-lg p-3 hover:bg-blue-50 transition ${startIdx === maxIdx ? "opacity-40 cursor-not-allowed" : ""}`}
                        onClick={handleNext}
                        disabled={startIdx === maxIdx}
                    >
                        <ChevronRight className="h-7 w-7 text-blue-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
