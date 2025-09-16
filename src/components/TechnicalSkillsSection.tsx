import { useState } from "react";
import { Code, BarChart, Database, Server, Cpu, Cloud } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        key: "programming",
        label: "Programming Languages",
        icon: <Code className="h-5 w-5 mr-2" />,
        color: "text-blue-700",
        bgPanel: "bg-blue-50",
        dot: "bg-blue-500",
        skills: [
            { name: "Python", level: 4 },
            { name: "JavaScript", level: 4 },
            { name: "TypeScript", level: 4 },
            { name: "Java", level: 4 },
            { name: "C", level: 3 },
            { name: "C++", level: 3 }
        ]
    },
    {
        key: "ml",
        label: "Data Science & ML",
        icon: <BarChart className="h-5 w-5 mr-2" />,
        color: "text-purple-700",
        bgPanel: "bg-purple-50",
        dot: "bg-purple-500",
        skills: [
            { name: "GenAI", level: 4 },
            { name: "NLP", level: 4 },
            { name: "LLMs", level: 4 },
            { name: "PyTorch", level: 4 },
            { name: "TensorFlow", level: 4 }
        ]
    },
    {
        key: "db",
        label: "Databases & Big Data",
        icon: <Database className="h-5 w-5 mr-2" />,
        color: "text-green-700",
        bgPanel: "bg-green-50",
        dot: "bg-green-500",
        skills: [
            { name: "Oracle", level: 4 },
            { name: "Snowflake", level: 4 },
            { name: "BigQuery", level: 3 },
            { name: "NoSQL", level: 3 },
            { name: "SQL", level: 5 }
        ]
    },
    {
        key: "eng",
        label: "Data Engineering",
        icon: <Server className="h-5 w-5 mr-2" />,
        color: "text-orange-700",
        bgPanel: "bg-orange-50",
        dot: "bg-orange-500",
        skills: [
            { name: "ETL Pipelines", level: 5 },
            { name: "Airflow", level: 4 },
            { name: "Kafka", level: 3 },
            { name: "REST APIs", level: 4 }
        ]
    },
    {
        key: "viz",
        label: "Visualization & Analysis",
        icon: <Cpu className="h-5 w-5 mr-2" />,
        color: "text-pink-700",
        bgPanel: "bg-pink-50",
        dot: "bg-pink-500",
        skills: [
            { name: "Power BI", level: 4 },
            { name: "Tableau", level: 4 },
            { name: "Matplotlib", level: 4 },
            { name: "Seaborn", level: 3 }
        ]
    },
    {
        key: "devops",
        label: "DevOps & Infrastructure",
        icon: <Cloud className="h-5 w-5 mr-2" />,
        color: "text-indigo-700",
        bgPanel: "bg-indigo-50",
        dot: "bg-indigo-500",
        skills: [
            { name: "Docker", level: 4 },
            { name: "Linux", level: 5 },
            { name: "Git", level: 5 },
            { name: "Cloud Architecture", level: 3 }
        ]
    }
];

const TechnicalSkillsSection = () => {
    const [active, setActive] = useState(1);
    const activeCat = SKILL_CATEGORIES[active];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-2">Technical Skills</h2>
                <p className="text-lg text-center text-muted-foreground mb-10">
                    Comprehensive expertise across the full technology stack
                </p>
                {/* Tab bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {SKILL_CATEGORIES.map((cat, idx) => (
                        <button
                            key={cat.key}
                            className={`
                flex flex-col items-center justify-center px-7 py-3 rounded-xl border
                min-w-[160px] transition-all
                ${active === idx
                                    ? "border-blue-500 shadow bg-white"
                                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                                }
              `}
                            style={{
                                borderColor: active === idx ? "#5C6DFF" : undefined
                            }}
                            onClick={() => setActive(idx)}
                        >
                            <span className={`mb-1 ${cat.color}`}>{cat.icon}</span>
                            <span className="font-medium text-[15px]">{cat.label}</span>
                        </button>
                    ))}
                </div>
                {/* Category Panel */}
                <div
                    className={`rounded-2xl ${activeCat.bgPanel} p-8 max-w-3xl mx-auto shadow-md`}
                >
                    <div className="flex items-center mb-6">
                        <span className={`${activeCat.color} mr-2`}>{activeCat.icon}</span>
                        <span className="font-bold text-xl">{activeCat.label}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        {activeCat.skills.map(({ name, level }) => (
                            <div
                                key={name}
                                className="flex items-center justify-between px-6 py-3 rounded-lg bg-white shadow-sm"
                            >
                                <span className="text-professional font-semibold bg-gray-50 px-3 py-1 rounded">{name}</span>
                                <span className="flex items-center space-x-1">
                                    {[0, 1, 2, 3, 4].map((dot, dIdx) => (
                                        <span
                                            key={dIdx}
                                            className={`inline-block h-2.5 w-2.5 rounded-full 
                        ${dIdx < level ? activeCat.dot : "bg-gray-300"}
                      `}
                                        />
                                    ))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkillsSection;
