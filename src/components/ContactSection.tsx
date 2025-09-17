import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SERVICE_ID = "service_tauohhm";
const TEMPLATE_ID = "template_1ote96s"; // Replace with EmailJS template ID
const USER_ID = "q7430s3qsE9ENPbDk";

const ContactSection = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then(() => {
                setSent(true);
                setLoading(false);
            }, (error) => {
                alert("Send failed. Please try again later.");
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground mx-auto max-w-xl">
                        I'm always interested in discussing new opportunities, innovative projects, or just
                        having a chat about technology. Let's connect!
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {/* Left: Contact Details */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                        <p className="mb-6 text-muted-foreground">
                            Whether you're looking to collaborate on a project, discuss opportunities or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.
                        </p>
                        <div className="space-y-4">
                            <Card className="flex items-center p-4 space-x-3">
                                <Mail className="h-6 w-6 text-primary" />
                                <div>
                                    <div className="font-semibold text-professional">Email</div>
                                    <div className="text-sm text-muted-foreground">yash.bheke2000@gmail.com</div>
                                </div>
                            </Card>
                            <Card className="flex items-center p-4 space-x-3">
                                <Phone className="h-6 w-6 text-green-600" />
                                <div>
                                    <div className="font-semibold text-professional">Phone</div>
                                    <div className="text-sm text-muted-foreground">+1 (513) 276-5130</div>
                                </div>
                            </Card>
                            <Card className="flex items-center p-4 space-x-3">
                                <MapPin className="h-6 w-6 text-purple-500" />
                                <div>
                                    <div className="font-semibold text-professional">Location</div>
                                    <div className="text-sm text-muted-foreground">Cincinnati, OH</div>
                                </div>
                            </Card>
                        </div>
                        <div className="mt-6">
                            <div className="mb-2 font-semibold">Follow Me</div>
                            <div className="flex space-x-3">
                                <a href="https://linkedin.com/in/yash-bheke" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon"><Linkedin className="h-5 w-5" /></Button>
                                </a>
                                <a href="https://github.com/yashbheke2000" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="icon"><Github className="h-5 w-5" /></Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right: Contact Form */}
                    <div>
                        {sent ? (
                            <div className="text-xl text-green-600 font-semibold p-8 text-center">
                                Thank you! Your message was sent successfully.
                            </div>
                        ) : (
                            <form ref={form} onSubmit={handleSend} className="bg-white p-8 rounded-xl shadow-card space-y-5">
                                <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Your full name"
                                        required
                                        className="col-span-1 border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <input
                                        type="email"
                                        name="from_email"
                                        placeholder="your.email@example.com"
                                        required
                                        className="col-span-1 border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="What's this about?"
                                    required
                                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project or just say hello..."
                                    required
                                    rows={5}
                                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-white font-semibold py-2 text-lg rounded-md mt-2"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
