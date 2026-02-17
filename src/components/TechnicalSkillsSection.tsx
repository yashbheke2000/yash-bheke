import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, BarChart, Database, Server, Cpu, Cloud } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    key: "programming",
    label: "Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "SQL", "R", "Bash", "C++", "TypeScript"],
  },
  {
    key: "ml",
    label: "Data Science & ML",
    icon: BarChart,
    color: "from-purple-500 to-pink-500",
    skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NLP", "LLMs", "RAG", "A/B Testing"],
  },
  {
    key: "cloud",
    label: "Cloud & Big Data",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    skills: ["Databricks", "PySpark", "Snowflake", "AWS S3", "AWS RDS", "BigQuery", "Oracle", "MySQL", "PostgreSQL"],
  },
  {
    key: "eng",
    label: "Data Engineering",
    icon: Server,
    color: "from-orange-500 to-amber-500",
    skills: ["ETL (Batch & Real-Time)", "Feature Engineering", "PCA", "Operational Data Store", "Data Warehousing"],
  },
  {
    key: "viz",
    label: "Visualization & Analysis",
    icon: Database,
    color: "from-pink-500 to-rose-500",
    skills: ["Tableau", "Power BI", "Looker", "Excel", "Zoho", "Matplotlib", "Seaborn"],
  },
  {
    key: "devops",
    label: "DevOps & Deployment",
    icon: Cpu,
    color: "from-indigo-500 to-violet-500",
    skills: ["Docker", "FastAPI", "Flask", "Git", "GitHub", "CI/CD"],
  },
];

const TechnicalSkillsSection = () => {
  const [active, setActive] = useState(0);
  const activeCat = SKILL_CATEGORIES[active];

  return (
    <section id="skills" className="py-32 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Skills
          </p>
          <h2 className="editorial-heading text-5xl lg:text-6xl text-foreground">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Category tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.button
                key={cat.key}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                  active === idx
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <cat.icon className="w-4 h-4" />
                <span className="font-medium text-sm">{cat.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.key}
              className="relative p-8 lg:p-12 rounded-3xl bg-background border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeCat.color}`}
              />

              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${activeCat.color} text-white`}
                >
                  <activeCat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{activeCat.label}</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {activeCat.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 text-center transition-all duration-300 hover-lift"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="font-semibold text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
