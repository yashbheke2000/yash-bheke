import { GraduationCap, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const degrees = [
    {
        title: "Master of Science in Information Systems",
        school: "University of Cincinnati, Carl H. Lindner College of Business",
        period: "August 2024 - May 2026",
        location: "Cincinnati, OH",
        coursework: [
            "Generative AI", "Statistical Computing", "Datamining for BI", "Data Analysis", "Web Development", "XML", "Database Modeling & Design"
        ]
    },
    {
        title: "Bachelor of Engineering in Electronics and Telecommunications",
        school: "University of Mumbai",
        period: "August 2018 - May 2022",
        location: "Mumbai, India",
        coursework: []
    }
];

const leadership = [
    {
        title: "Technical Head",
        org: "SIES Graduate School of Technology",
        period: "May 2020 - January 2022",
        desc: "Upskilled team through workshops and directed production of tech events"
    }
];

const highlights = [
    { color: "bg-blue-500", text: "Pursuing advanced graduate coursework in Generative AI, Statistical Computing, and Data Analytics to build deep expertise in modern machine learning approaches." },
    { color: "bg-purple-500", text: "Recognized for quickly mastering new technical concepts and applying them in real-world academic and project settings." },
    { color: "bg-green-500", text: "Proactively engaged in technical community leadership, organizing workshops and sharing knowledge to foster collaborative learning and innovation." },
];

const EducationLeadershipSection = () => (
    <section id="education" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="inline-block mb-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20">Education & Leadership</Badge>
                </span>
                <h2 className="text-4xl font-bold text-professional">Academic Foundation & Leadership</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">Academic foundation and leadership experience</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Education Column */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold flex items-center mb-2">
                        <GraduationCap className="mr-3 h-7 w-7 text-primary" />
                        Education
                    </h3>
                    {degrees.map((deg, idx) => (
                        <Card className="shadow-card border-0" key={deg.title}>
                            <CardHeader>
                                <CardTitle className="text-lg">{deg.title}</CardTitle>
                                <p className="text-muted-foreground font-semibold">{deg.school}</p>
                                <p className="text-sm text-muted-foreground">{deg.period} &nbsp;|&nbsp; {deg.location}</p>
                            </CardHeader>
                            {deg.coursework.length > 0 && (
                                <CardContent>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {deg.coursework.map(cw => (
                                            <Badge key={cw} variant="secondary" className="text-xs">{cw}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
                {/* Leadership / Activities Column */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold flex items-center mb-2">
                        <Award className="mr-3 h-7 w-7 text-accent" />
                        Leadership & Activities
                    </h3>
                    {leadership.map((lead) => (
                        <Card className="shadow-card border-0" key={lead.title}>
                            <CardHeader>
                                <CardTitle className="text-lg">{lead.title}</CardTitle>
                                <p className="text-muted-foreground font-semibold">{lead.org}</p>
                                <p className="text-sm text-muted-foreground">{lead.period}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-professional/80 text-sm">{lead.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                    <div className="bg-white rounded-xl p-6 shadow-card mt-6 space-y-2">
                        <div className="font-semibold mb-1">Academic Highlights</div>
                        <ul className="space-y-2">
                            {highlights.map((h, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <span className={`mt-2 inline-block h-3 w-3 rounded-full ${h.color}`} />
                                    <span className="text-professional/80 text-sm">{h.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default EducationLeadershipSection;
