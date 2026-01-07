import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePDF from "@/assets/Yash_Bheke_Resume.pdf";

const HeroSection = () => {
  const scrollToWork = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/15 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left content - takes 7 cols */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-2">
              <motion.p
                className="text-primary font-medium tracking-wide uppercase text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Data Scientist & Data Analyst
              </motion.p>
              <h1 className="editorial-heading text-6xl sm:text-7xl lg:text-8xl text-foreground">
                <span className="block">Yash</span>
                <span className="block text-gradient">Krishna</span>
                <span className="block">Bheke</span>
              </h1>
            </div>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Specializing in{" "}
              <span className="text-foreground font-medium">machine learning</span>,{" "}
              <span className="text-foreground font-medium">data analytics</span>, and{" "}
              <span className="text-foreground font-medium">cloud automation</span>.
              Building production-ready solutions that drive measurable business impact.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href={resumePDF} download>
                <motion.button
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full flex items-center gap-3 hover:bg-primary/90 transition-all glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </a>
              <motion.button
                onClick={scrollToWork}
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full flex items-center gap-3 hover:bg-secondary transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-sm text-muted-foreground">Follow</span>
              <div className="h-px w-12 bg-border" />
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/yashbheke2000" },
                  { icon: Linkedin, href: "https://linkedin.com/in/yash-bheke" },
                  { icon: Mail, href: "#contact" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Image container */}
              <motion.div
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profilePhoto}
                  alt="Yash Krishna Bheke"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs text-muted-foreground">Currently pursuing</p>
                <p className="text-sm font-semibold text-foreground">MS in Information Systems</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
