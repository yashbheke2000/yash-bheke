import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import projectImg1 from "@/assets/safestreet.jpg";
import projectImg2 from "@/assets/bearcatbot-workflow.png";
import projectImg3 from "@/assets/mood-disorder.jpg";
import projectImg4 from "@/assets/airbnb.jpg";

const projects = [
  {
    title: "Bearcats Bot",
    period: "2025",
    description:
      "AI-powered MSIS Admissions Chatbot providing 24/7 instant, multilingual support for prospective students using dual-approach architecture.",
    highlights: [
      "n8n RAG workflow with Pinecone vector store for semantic retrieval",
      "95% validation accuracy on 30-intent TensorFlow/Keras classifier",
      "Real-time document updates without retraining",
      "Multilingual support via Google Translate API",
    ],
    tech: ["n8n", "OpenAI", "Pinecone", "TensorFlow", "Keras", "RAG"],
    img: projectImg2,
    code: "https://github.com/yashbheke2000/BearcatBot",
    featured: true,
  },
  {
    title: "SafeStreet",
    period: "2025",
    description:
      "Architected a multimodal, real-time safety chatbot for homebuyers and urban commuters, combining LLMs, live search APIs, and image analysis.",
    highlights: [
      "Live crime stats and safest housing recommendations",
      "Vision-LLM pipelines for crime-scene image analysis",
      "20+ language support for diverse communities",
      "<2 seconds response time on typical queries",
    ],
    tech: ["Gemini-1.5 Pro", "YOLOv8", "RAG", "Vision-LLM", "Python"],
    img: projectImg1,
    code: "https://github.com/harshitaaa006/GenAIProject",
    featured: true,
  },
  {
    title: "Mood Disorder Analysis",
    period: "2024",
    description:
      "Predictive analytics pipeline for mood disorders, leveraging clinical and behavioral data for early intervention.",
    highlights: [
      "40,000+ patient records processed",
      "ROC-AUC 1.00 with perfect recall",
      "SHAP analysis for biomarker identification",
    ],
    tech: ["Python", "Scikit-learn", "Random Forest", "SHAP"],
    img: projectImg3,
    code: "https://colab.research.google.com/drive/14dIrMxjuBprbVqeoWUFgm2OfL2fFLDkz?usp=sharing",
  },
  {
    title: "Airbnb Pricing Tool",
    period: "2024",
    description:
      "Robust pricing optimization application for short-term rental hosts with ML-backed recommendations.",
    highlights: [
      "R²=0.83 with 600-tree Random Forest",
      "40% error reduction over linear models",
      "93% pricing band coverage",
    ],
    tech: ["Python", "Random Forest", "SHAP", "Pandas"],
    img: projectImg4,
    code: "https://colab.research.google.com/drive/1Dsogjgziqw_XwNmJ7XL15Y0sefekQ4Gn?usp=sharing",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 bg-background relative overflow-hidden">
    {/* Glow effect */}
    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Section header */}
      <motion.div
        className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Projects
          </p>
          <h2 className="editorial-heading text-5xl lg:text-6xl text-foreground">
            Featured Work
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-md">
          Innovative solutions built with cutting-edge technologies
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div
              className={`grid ${
                project.featured ? "lg:grid-cols-2" : "lg:grid-cols-5"
              } gap-8 p-6 lg:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500`}
            >
              {/* Image */}
              <div
                className={`${
                  project.featured ? "lg:col-span-1" : "lg:col-span-2"
                } relative overflow-hidden rounded-2xl`}
              >
                <motion.div
                  className="aspect-video lg:aspect-square overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`${
                  project.featured ? "lg:col-span-1" : "lg:col-span-3"
                } flex flex-col justify-center space-y-6`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
