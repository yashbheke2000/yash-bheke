import { Code, Database, Brain, TrendingUp } from "lucide-react";

const specialties = [
    {
        label: "Full-Stack Development",
        icon: <Code className="h-6 w-6 text-primary" />,
        desc: "Expert in building scalable applications with modern technologies"
    },
    {
        label: "Data Engineering",
        icon: <Database className="h-6 w-6 text-success" />,
        desc: "Designing robust ETL pipelines and real-time analytics systems"
    },
    {
        label: "Machine Learning",
        icon: <Brain className="h-6 w-6 text-purple-500" />,
        desc: "Implementing AI solutions with LLMs, NLP, and predictive modeling"
    },
    {
        label: "Performance Optimization",
        icon: <TrendingUp className="h-6 w-6 text-accent" />,
        desc: "Proven track record of reducing latency and improving system efficiency"
    }
];

const AboutMeSection = () => (
    <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-3">About Me</h2>
            <p className="text-xl text-center text-muted-foreground mb-10">
                Passionate about leveraging technology to solve complex problems and drive business value
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Left: Text Block */}
                <div>
                    <p className="text-lg text-professional mb-6">
                        I'm a dedicated Software Developer with expertise in Data Analytics and Engineering, currently pursuing my Master's in Information Systems at the University of Cincinnati. My journey began with a Bachelor's in Electronics and Telecommunications, which provided a strong foundation in technical problem-solving and critical thinking.
                    </p>
                    <p className="text-lg text-professional mb-6">
                        At Accelya, I developed real-time analytics dashboards and engineered data pipelines that significantly improved system performance and business outcomes. I'm passionate about building scalable solutions using cutting-edge technologies like GenAI, machine learning and cloud platforms.
                    </p>
                    <p className="text-lg text-professional mb-6">
                        I take pride in my ability to break down complex problems and to collaborate with and lead various cross-functional teams. When I'm not coding, I enjoy exploring new technologies, learning new industry trends and sharing knowledge through technical workshops and community events.
                    </p>
                    <div className="flex space-x-24 mt-12">
                        <div className="text-center">
                            <span className="block text-4xl font-bold text-blue-600">2+</span>
                            <span className="block text-sm text-muted-foreground font-medium mt-1">Years Experience</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-4xl font-bold text-green-600">15+</span>
                            <span className="block text-sm text-muted-foreground font-medium mt-1">Technologies</span>
                        </div>
                    </div>
                </div>
                {/* Right: Feature Cards */}
                <div className="space-y-6">
                    {specialties.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-xl shadow-sm px-7 py-6 flex space-x-5 items-center"
                        >
                            <div>{s.icon}</div>
                            <div>
                                <div className="font-bold text-lg text-professional">{s.label}</div>
                                <div className="text-muted-foreground text-sm">{s.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default AboutMeSection;
