import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const SERVICE_ID = "service_tauohhm";
const TEMPLATE_ID = "template_1ote96s";
const USER_ID = "q7430s3qsE9ENPbDk";

const contactInfo = [
  { icon: Mail, label: "Email", value: "yash.bheke2000@gmail.com", href: "mailto:yash.bheke2000@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 (513) 276-5130", href: "tel:+15132765130" },
  { icon: MapPin, label: "Location", value: "Cincinnati, OH", href: null },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/yash-bheke", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/yashbheke2000", label: "GitHub" },
];

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      () => {
        setSent(true);
        setLoading(false);
      },
      () => {
        alert("Send failed. Please try again later.");
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

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
            Contact
          </p>
          <h2 className="editorial-heading text-5xl lg:text-6xl text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or just
            having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href || undefined}
                  className={`flex items-center gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 ${
                    item.href ? "cursor-pointer hover-lift" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center p-8 rounded-3xl bg-background border border-border">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={handleSend}
                className="p-8 rounded-3xl bg-background border border-border space-y-6"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    required
                    className="col-span-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    required
                    className="col-span-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Yash Krishna Bheke. All rights reserved.</p>
          <p>Built with passion and precision</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
