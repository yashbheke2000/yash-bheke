import { motion } from "framer-motion";
import { Code, Database, Brain, TrendingUp } from "lucide-react";

const specialties = [
  {
    label: "Full-Stack Development",
    icon: Code,
    desc: "Building scalable applications with modern technologies",
    color: "text-primary",
  },
  {
    label: "Data Engineering",
    icon: Database,
    desc: "Designing robust ETL pipelines and real-time analytics",
    color: "text-success",
  },
  {
    label: "Machine Learning",
    icon: Brain,
    desc: "Implementing AI solutions with LLMs and predictive modeling",
    color: "text-purple-400",
  },
  {
    label: "Performance Optimization",
    icon: TrendingUp,
    desc: "Reducing latency and improving system efficiency",
    color: "text-accent",
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
  { value: "87%", label: "Model Efficiency Gain" },
];

const AboutMeSection = () => (
  <section id="about" className="py-32 bg-background relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
          About
        </p>
        <h2 className="editorial-heading text-5xl lg:text-6xl text-foreground max-w-3xl">
          Passionate about leveraging technology to solve complex problems
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left - Text content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated Data Scientist with expertise in Data Analytics and Machine Learning,
            currently pursuing my Master's in Information Systems at the University of Cincinnati.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Accelya, I built real-time predictive models, analytics dashboards and engineered
            scalable data pipelines, optimizing system performance and directly driving key business
            outcomes for major airline clients.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm passionate about leveraging cutting-edge technologies including Generative AI,
            modern ML frameworks and cloud platforms to deliver innovative, production-ready solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-border">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <span className="block text-4xl font-bold text-gradient">{stat.value}</span>
                <span className="block text-sm text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Specialty cards */}
        <div className="space-y-4">
          {specialties.map((s, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-default"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-secondary ${s.color}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
