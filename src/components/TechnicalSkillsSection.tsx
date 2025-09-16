import { useState } from "react";
import {
    Code, Brain, Database, Server, BarChart, Cloud
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SKILL_CATEGORIES = [
    {
        key: "programming",
        label: "Programming Languages",
        icon: <Code className="h-5 w-5 mr-2" />,
        skills: [
            { name: "Python" },
            { name: "TypeScript" },
            { name: "Java" },
            { name: "JavaScript" },
            { name: "C" },
            { name: "C++" },
            { name: "C#" },
            { name: "Bash" },
        ]
    },
    {
        key: "datascience",
        label: "Data Science & ML",
        icon: <Brain className="h-5 w-5 mr-2" />,
        skills: [
            { name: "Machine Learning" },
            { name: "TensorFlow" },
            { name: "PyTorch" },
            { name: "NLP" },
            { name: "Statistical Analysis" },
            { name: "RAG" },
            { name: "LLMs" },
        ]
    },
    {
        key: "databases",
        label: "Databases & Big Data",
        icon: <Database className="h-5 w-5 mr-2" />,
        skills: [
            { name: "Oracle" },
            { name: "MySQL" },
            { name: "Snowflake" },
            { name: "BigQuery" },
            { name: "SQL" },
            { name: "NoSQL" },
        ]
    },
    {
        key: "engineering",
        label: "Data Engineering",
        icon: <Server className="h-5 w-5 mr-2" />,
        skills: [
            { name: "ETL Pipelines" },
            { name: "Airflow" },
            { name: "Kafka" },
            { name: "REST APIs" },
            { name: "Data Packaging" },
        ]
    },
    {
        key: "viz",
        label: "Visualization & Analysis",
        icon: <BarChart className="h-5 w-5 mr-2" />,
        skills: [
            { name: "Power BI" },
            { name: "Tableau" },
            { name: "Matplotlib" },
            { name: "Seaborn" },
            { name: "Pandas" },
        ]
    },
    {
        key: "devops",
        label: "DevOps & Infrastructure",
        icon: <Cloud className="h-5 w-5 mr-2" />,
        skills: [
            { name: "Docker" },
            { name: "Linux" },
            { name: "Git" },
            { name: "CI/CD" },
            { name: "Cloud Architecture" },
        ]
    }
];

const TechnicalSkillsSection = () => {
    const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].key);

    const activeCategory = SKILL_CATEGORIES.find(cat => cat.key === activeTab);

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <Badge className="bg-success/10 text-success border-success/20">Technical Skills</Badge>
                    <h2 className="text-4xl font-bold text-professional">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive expertise across the full technology stack
                    </p>
                </div>
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {SKILL_CATEGORIES.map(cat => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveTab(cat.key)}
                            className={`flex items-center px-4 py-2 rounded-full border transition-all
                ${activeTab === cat.key
                                    ? "bg-primary text-white border-primary"
                                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"}`}
                            style={{ minWidth: 180, fontWeight: 500 }}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>
                {/* Skills List */}
                <div className="bg-gradient-subtle rounded-xl p-8 shadow-card max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold text-professional mb-5 text-center">{activeCategory.label}</h3>
                    <ul className="divide-y divide-gray-200">
                        {activeCategory.skills.map(sk => (
                            <li key={sk.name} className="flex items-center py-3 text-lg justify-between">
                                <span className="font-medium">{sk.name}</span>
                                {/* Visual "dots" for rating proficiency, if needed */}
                                {/* <span className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i}
                      className={`inline-block h-2 w-2 rounded-full ${i < (sk.level || 4) ? 'bg-primary' : 'bg-gray-300'}`}
                    />
                  ))}
                </span> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkillsSection;
