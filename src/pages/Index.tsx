import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import profilePhoto from "@/assets/profile-photo.png";
import bearcatbotWorkflow from "@/assets/bearcatbot-workflow.png";
import safestreet from "@/assets/safestreet.jpg";
import moodDisorder from "@/assets/mood-disorder.jpg";
import airbnb from "@/assets/airbnb.jpg";
const resume = "/Yash_Bheke_Resume.docx";

const navItems = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

const experiences = [
  {
    company: "Parking Base",
    role: "Data Science Intern",
    period: "Feb 2026 — Apr 2026",
    tools: ["SQL", "Python", "Looker", "BigQuery", "LookML", "Gemini SDK", "Claude Code"],
    achievements: [
      "Diagnosed 8.3% profit-margin leakage across 450K+ transactions, identifying gateway optimization and vendor renegotiation opportunities.",
      "Deployed anomaly detection on biometric and manual clock-out discrepancies, flagging cases with more than 15% time variance.",
      "Built a multi-agent AI workflow that cut reporting time from more than one month to 15 minutes while improving validation and reducing hallucination.",
    ],
  },
  {
    company: "University of Cincinnati",
    role: "AI Engineer Intern",
    period: "Sep 2025 — Dec 2025",
    tools: ["Python", "TensorFlow", "Keras", "RAG", "Pinecone", "OpenAI", "n8n"],
    achievements: [
      "Improved an admissions chatbot’s intent-classification F1 score from 0.72 to 0.91 across 1,400+ labeled queries.",
      "Architected an n8n RAG pipeline that syncs FAQ updates from Google Drive to Pinecone without model retraining.",
    ],
  },
  {
    company: "University of Cincinnati",
    role: "Graduate Teaching Assistant",
    period: "Sep 2025 — Dec 2025",
    tools: ["Databricks", "PySpark", "SQL", "Python", "AWS S3", "AWS RDS", "Unity Catalog"],
    achievements: [
      "Optimized PySpark pipelines processing 15M+ records, reducing end-to-end runtime by 31%.",
      "Built analytics-ready datasets from AWS RDS and S3 with standardized schemas, automated validation, and engineered features.",
    ],
  },
  {
    company: "Accelya",
    role: "Data Scientist",
    period: "Sep 2022 — Jul 2024",
    tools: ["Python", "SQL", "Oracle", "XGBoost", "Random Forest", "FastAPI", "A/B Testing", "PCA"],
    achievements: [
      "Built a flight-delay ensemble serving 1,000+ daily inferences at 83% accuracy for 12 airlines, generating $370K+ in annual savings.",
      "Reduced inference latency by 87%, from more than 15 minutes to under two minutes, without additional infrastructure.",
      "Led Bayesian and frequentist experiments that lifted engagement by 18% and reduced reporting errors by 16%.",
      "Automated preprocessing for ticket and accounts data, eliminating 60+ hours of manual effort each month.",
    ],
  },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "TypeScript", "JavaScript"] },
  { title: "Machine Learning & Statistics", items: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "PCA", "NLP", "A/B Testing", "Hypothesis Testing"] },
  { title: "Big Data & Cloud", items: ["Oracle", "Databricks", "PySpark", "Apache Spark", "Snowflake", "AWS", "Google BigQuery"] },
  { title: "Visualization & BI", items: ["Tableau", "Power BI", "Looker", "LookML", "Matplotlib", "Streamlit"] },
  { title: "Deployment & MLOps", items: ["Docker", "FastAPI", "Git", "GitHub", "CI/CD", "MLflow", "LangChain", "LangGraph"] },
];

const projects = [
  {
    eyebrow: "Conversational AI",
    title: "Bearcats Bot",
    description: "An admissions assistant pairing a tuned intent classifier with a maintainable n8n RAG pipeline for accurate, continuously updated answers.",
    metric: "0.91 F1 score",
    link: "https://github.com/yashbheke2000/BearcatBot",
    image: bearcatbotWorkflow,
  },
  {
    eyebrow: "Computer Vision",
    title: "SafeStreet",
    description: "A road-damage detection system that classifies street imagery and routes prioritized repair reports to municipal teams.",
    metric: "Automated triage",
    link: "https://github.com/yashbheke2000",
    image: safestreet,
  },
  {
    eyebrow: "Health Analytics",
    title: "Mood Disorder Analysis",
    description: "Exploratory and predictive analysis of clinical mood-disorder indicators, surfacing the features most tied to diagnosis.",
    metric: "Interpretable models",
    link: "https://github.com/yashbheke2000",
    image: moodDisorder,
  },
  {
    eyebrow: "Predictive Pricing",
    title: "Airbnb Optimum Pricing Tool",
    description: "A regression pricing system with an interactive Streamlit experience and SHAP explanations across 25 host-controlled parameters.",
    metric: "35.8% R² lift",
    link: "https://colab.research.google.com/drive/1Dsogjgziqw_XwNmJ7XL15Y0sefekQ4Gn?usp=sharing",
    image: airbnb,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#about" className="font-heading text-lg font-extrabold" aria-label="Yash Bheke, home">
            YB<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={resume} download><Download />Resume</a>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-card px-5 py-4 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-3 font-semibold text-muted-foreground">
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="about" className="scroll-mt-20 px-5 py-8 lg:px-8 lg:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-12">
            <motion.article variants={reveal} initial="hidden" animate="visible" transition={transition} className="bento-card flex flex-col gap-8 p-7 sm:p-10 lg:col-span-8 lg:flex-row lg:items-center">
              <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl border-4 border-secondary shadow-card">
                <img src={profilePhoto} alt="Yash Bheke" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase text-primary">Data Scientist & AI Engineer</p>
                <h1 className="font-heading text-5xl font-extrabold leading-none sm:text-6xl">Yash Bheke</h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Building predictive models and AI workflows that turn complex data into measurable business impact.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild size="lg"><a href={resume} download><Download />Download résumé</a></Button>
                  <Button asChild size="lg" variant="outline"><a href="#experience">Explore work<ArrowDown /></a></Button>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <motion.article variants={reveal} initial="hidden" animate="visible" transition={{ ...transition, delay: 0.08 }} className="metric-card bg-primary text-primary-foreground">
                <div className="flex items-center justify-between"><span>Savings delivered</span><TrendingUp className="h-5 w-5" /></div>
                <strong>$370K+</strong><p>Annual operational impact across 12 airlines</p>
              </motion.article>
              <motion.article variants={reveal} initial="hidden" animate="visible" transition={{ ...transition, delay: 0.16 }} className="metric-card bg-accent text-accent-foreground">
                <div className="flex items-center justify-between"><span>Reporting accelerated</span><Zap className="h-5 w-5" /></div>
                <strong>15 min</strong><p>Reduced from a process taking over one month</p>
              </motion.article>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Experience" title="Work built around outcomes" detail="3+ years across machine learning, analytics, data platforms, and applied AI." />
            <div className="mt-10 grid gap-5 lg:grid-cols-12">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...transition, delay: index * 0.06 }}
                  className={`bento-card p-7 sm:p-9 ${index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div><p className="text-sm font-extrabold text-primary">{experience.company}</p><h3 className="mt-1 font-heading text-2xl font-bold">{experience.role}</h3></div>
                    <span className="whitespace-nowrap rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-muted-foreground">{experience.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {experience.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{achievement}</li>)}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.tools.map((tool) => <span key={tool} className="skill-chip">{tool}</span>)}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 bg-secondary px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Selected projects" title="Models people can use" detail="Practical systems designed for maintainability, interpretability, and clear decisions." />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article key={project.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ ...transition, delay: index * 0.08 }} className="group bento-card flex flex-col overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                    <div><p className="text-xs font-extrabold uppercase text-accent">{project.eyebrow}</p><h3 className="mt-3 font-heading text-3xl font-extrabold">{project.title}</h3><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p></div>
                    <div className="mt-8 flex items-end justify-between gap-4"><strong className="font-heading text-2xl text-primary">{project.metric}</strong><Button asChild><a href={project.link} target="_blank" rel="noreferrer">View Code<ArrowUpRight /></a></Button></div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Technical expertise" title="A versatile modern toolkit" detail="Technologies and methods from the latest résumé." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
              {skillGroups.map((group, index) => (
                <motion.article key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ ...transition, delay: index * 0.05 }} className={`bento-card p-7 ${index < 2 ? "lg:col-span-6" : index === 2 ? "lg:col-span-5" : index === 3 ? "lg:col-span-3" : "lg:col-span-4"}`}>
                  <h3 className="font-heading text-lg font-bold">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="skill-chip">{item}</span>)}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-20 bg-professional px-5 py-16 text-professional-foreground lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-12">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={transition} className="lg:col-span-5">
              <p className="text-sm font-extrabold uppercase text-primary">Education & leadership</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">Learning, leading, and giving back.</h2>
            </motion.div>
            <div className="grid gap-5 lg:col-span-7">
              <InfoBlock icon={GraduationCap} title="MS, Information Systems" subtitle="University of Cincinnati · Aug 2024 — Apr 2026" detail="Gen AI, Statistical Computing, Data Mining for BI, AI & Machine Learning, Data Visualization, and Data Analysis." />
              <InfoBlock icon={BriefcaseBusiness} title="Neo Initiative · Project Lead" subtitle="Pro bono consulting · May 2025 — Aug 2025" detail="Built social trend intelligence and analyzed 10K+ monthly purchases, helping a local coffee shop save $4.7K in monthly costs." />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={transition} className="overflow-hidden rounded-lg bg-accent p-8 text-accent-foreground sm:p-10 lg:col-span-5">
              <p className="text-sm font-extrabold uppercase">Cincinnati, OH, USA</p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold sm:text-5xl">Let’s build something useful.</h2>
              <p className="mt-4 text-lg opacity-80">Open to conversations about data science, AI engineering, and analytics opportunities.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary"><a href="mailto:yash.bheke2000@gmail.com"><Mail />Email</a></Button>
                <Button asChild size="icon" variant="secondary" className="h-11 w-11" aria-label="LinkedIn"><a href="https://linkedin.com/in/yash-bheke" target="_blank" rel="noreferrer"><Linkedin /></a></Button>
                <Button asChild size="icon" variant="secondary" className="h-11 w-11" aria-label="GitHub"><a href="https://github.com/yashbheke2000" target="_blank" rel="noreferrer"><Github /></a></Button>
              </div>
            </motion.div>
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={transition} className="bento-card p-8 sm:p-10 lg:col-span-7">
              <h3 className="font-heading text-2xl font-bold">Send a message</h3>
              <div className="mt-7"><ContactForm /></div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 text-sm text-muted-foreground lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Yash Bheke</p><p className="flex items-center gap-2"><MapPin className="h-4 w-4" />Cincinnati, OH, USA</p></div></footer>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, detail }: { eyebrow: string; title: string; detail: string }) => (
  <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
    <p className="text-sm font-extrabold uppercase text-primary">{eyebrow}</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h2><p className="mt-4 text-lg text-muted-foreground">{detail}</p>
  </motion.div>
);

const InfoBlock = ({ icon: Icon, title, subtitle, detail }: { icon: typeof Sparkles; title: string; subtitle: string; detail: string }) => (
  <motion.article variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-lg border border-professional-foreground/10 bg-professional-foreground/5 p-7">
    <div className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></div><div><h3 className="font-heading text-xl font-bold">{title}</h3><p className="mt-1 text-sm text-professional-foreground/60">{subtitle}</p><p className="mt-4 leading-relaxed text-professional-foreground/75">{detail}</p></div></div>
  </motion.article>
);

export default Index;