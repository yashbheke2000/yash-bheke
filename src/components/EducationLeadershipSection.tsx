import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const degrees = [
  {
    title: "Master of Science in Information Systems",
    school: "University of Cincinnati",
    subtitle: "Carl H. Lindner College of Business",
    period: "August 2024 - May 2026",
    location: "Cincinnati, OH",
    coursework: [
      "Generative AI",
      "Statistical Computing",
      "Datamining for BI",
      "Data Analysis",
      "AI/ML",
      "Data Visualization",
      "Database Modeling",
    ],
  },
  {
    title: "Bachelor of Engineering",
    school: "University of Mumbai",
    subtitle: "Electronics and Telecommunications",
    period: "August 2018 - May 2022",
    location: "Mumbai, India",
    coursework: [],
  },
];

const leadership = [
  {
    title: "Student Ambassador",
    org: "MSIS, University of Cincinnati",
    period: "Sept 2024 - Aug 2025",
    desc: "Representing the MSIS program and guiding prospective students",
  },
  {
    title: "Project Lead",
    org: "Neo Initiative (Pro-bono Consulting)",
    period: "Sept 2025 - Dec 2025",
    desc: "Leading consulting projects at University of Cincinnati",
  },
  {
    title: "Technical Head",
    org: "SIES Graduate School of Technology",
    period: "May 2020 - Jan 2022",
    desc: "Organized ByteCamp, Hackathons, Dev Summit, and TEDxSIESGST",
  },
];

const EducationLeadershipSection = () => (
  <section id="education" className="py-32 bg-background relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Section header */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
          Education
        </p>
        <h2 className="editorial-heading text-5xl lg:text-6xl text-foreground max-w-3xl">
          Academic Foundation & Leadership
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Education Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>

          {degrees.map((deg, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-bold text-foreground mb-1">{deg.title}</h4>
              <p className="text-primary font-medium">{deg.school}</p>
              <p className="text-muted-foreground text-sm mb-4">{deg.subtitle}</p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {deg.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {deg.location}
                </span>
              </div>

              {deg.coursework.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {deg.coursework.map((cw) => (
                    <span
                      key={cw}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {cw}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Leadership Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Leadership</h3>
          </div>

          {leadership.map((lead, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-bold text-foreground mb-1">{lead.title}</h4>
              <p className="text-accent font-medium">{lead.org}</p>
              <p className="text-sm text-muted-foreground mb-4">{lead.period}</p>
              <p className="text-muted-foreground">{lead.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  </section>
);

export default EducationLeadershipSection;
