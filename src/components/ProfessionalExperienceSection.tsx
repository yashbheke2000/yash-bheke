import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    subtitle: "Analytics & BI",
    company: "Parking Base",
    period: "Feb 2026 - Apr 2026",
    location: "Cincinnati, Ohio",
    achievements: [
      "Developed a vendor-level profitability matrix leveraging BigQuery to analyze 450K+ transactions to quantify key margin drivers across booking channels, identifying commission misalignments contributing to 8.3% leakage in profit margins",
      "Reduced reconciliation review time by conducting anomaly detection analysis on payroll discrepancies (biometric vs. manual clock-outs), detecting outlier cases with >15% time variance and improving payroll review controls",
      "Raised payment gateway approval rate to 98.7% (+5.7% relative) by building a statistical segmentation of payment failure patterns that surfaced declines by card type, reason and channel, flagging high failure rate methods for review",
    ],
    tech: ["Looker", "BigQuery", "Gemini SDK", "Python", "LookML"],
  },
  {
    title: "AI Engineer Intern",
    subtitle: "RAG & NLP Development",
    company: "University of Cincinnati",
    period: "Sept 2025 - Dec 2025",
    location: "Cincinnati, Ohio",
    achievements: [
      "Developed a 30-intent text classification model for University admissions chatbot using TensorFlow/Keras on 1.4K+ labeled queries; improved weighted F1-score from 0.82 to 0.91 through hyperparameter tuning and class rebalancing",
      "Automated ingestion and embedding updates for new FAQ documents, eliminating the need for full model retraining",
    ],
    tech: ["Python", "TensorFlow", "Keras", "n8n", "RAG", "Vector Store", "LLM"],
  },
  {
    title: "Graduate Assistant",
    subtitle: "IS 8034: Big Data Integration",
    company: "University of Cincinnati",
    period: "Sept 2025 - Dec 2025",
    location: "Cincinnati, Ohio",
    achievements: [
      "Optimized large-scale data transformation workflows in Databricks (PySpark/SQL) processing 15M+ records, reducing end-to-end runtime by 31% and improving data availability for faster downstream analysis",
      "Built analytics-ready datasets by integrating AWS RDS and S3 sources; standardized schemas, implemented data validation checks and engineered derived features to support statistical modeling and ML experiments",
    ],
    tech: ["Databricks", "DBeaver", "ETL", "Python", "PySpark", "SQL", "AWS", "S3", "RDS"],
  },
  {
    title: "Data Scientist",
    subtitle: "Predictive Analytics & ML",
    company: "Accelya",
    period: "Sept 2022 - Jul 2024",
    location: "Mumbai, India",
    achievements: [
      "Accelerated model inference time by 87% (from 15+ minutes to under 2 minutes) for the predictive analytics pipeline with PCA-based dimensionality reduction and XGBoost hyperparameter tuning across 20+ clients",
      "Saved $370K+ annually by developing and deploying ensemble classification models (Random Forest, Gradient Boosting) via FastAPI, achieving 83% accuracy in flight delay predictions for 12 clients with 1k+ daily inferences",
      "Improved user engagement by 18% and reduced reporting errors by 16% by designing A/B testing frameworks that combined Bayesian inference and hypothesis testing; identified 9 statistically significant improvements in financial workflows and UI/UX",
      "Automated data pre-processing, eliminating 60+ hours of monthly manual effort by streamlining cleaning, validation, and EDA",
    ],
    tech: ["Oracle", "Python", "SQL", "ETL", "A/B Testing", "FastAPI", "Process Automation"],
  },
];

const ProfessionalExperienceSection = () => (
  <section id="experience" className="py-32 bg-card relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Section header */}
      <motion.div
        className="mb-20 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
          Experience
        </p>
        <h2 className="editorial-heading text-5xl lg:text-6xl text-foreground">
          Building Scalable Solutions
        </h2>
        <p className="text-muted-foreground text-lg mt-6">
          3 years of experience in data engineering, analytics, and software development
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all duration-500">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground font-medium">{exp.company}</p>
                </div>

                <div className="flex flex-col lg:items-end gap-2 text-muted-foreground">
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid lg:grid-cols-2 gap-4 mb-8">
                {exp.achievements.map((achievement, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 group-hover:bg-secondary transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProfessionalExperienceSection;
