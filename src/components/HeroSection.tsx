import { MapPin, Linkedin, Github, Mail, FileDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg"; // path as per your project
import resumePDF from "@/assets/Yash_Bheke_Resume.pdf";

const HeroSection = () => (
    <section
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#152045] to-[#2545B0] px-4"
        style={{
            overflow: "hidden"
        }}
    >
        {/* Content Grid */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center z-10">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3">
                    Hi, I'm <span className="text-[#5C6DFF]">Yash</span>
                </h1>
                <div className="text-2xl md:text-3xl text-white/90 font-medium mb-5">
                    Software Developer & Data Scientist
                </div>
                <div className="flex items-center text-blue-200 mb-6">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span className="font-medium">United States</span>
                </div>
                <p className="max-w-xl mb-10 text-white/90 text-lg">
                    Experienced Software Developer specializing in Data Analytics and Engineering with a strong foundation in machine learning, real-time systems, and full-stack development.<br />
                    Currently pursuing MS in Information Systems while building innovative solutions using cutting-edge technologies.
                </p>
                <div className="flex space-x-5 mb-8 w-full md:w-auto justify-center md:justify-start">
                    <a href={resumePDF} download>
                        <button className="px-6 py-2 bg-[#5C6DFF] hover:bg-[#4560e2] text-white font-semibold rounded-lg text-lg flex items-center transition">
                            <FileDown className="mr-2 h-5 w-5" /> Download Resume
                        </button>
                    </a>
                    <button
                        className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-[#152045] font-semibold rounded-lg text-lg flex items-center transition"
                        onClick={() => {
                            const el = document.getElementById('experience');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        View My Work
                    </button>

                </div>
                <div className="flex space-x-7 justify-center md:justify-start mt-2 pt-3 text-white text-2xl">
                    <a href="https://github.com/yashbheke2000" target="_blank" rel="noopener noreferrer">
                        <Github className="hover:text-[#5C6DFF] transition" />
                    </a>
                    <a href="https://linkedin.com/in/yash-bheke" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="hover:text-[#5C6DFF] transition" />
                    </a>
                    <button
                        onClick={() => {
                            const el = document.getElementById('contact');
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-transparent border-0 p-0 m-0"
                        aria-label="Scroll to Contact Section"
                    >
                        <Mail className="hover:text-[#5C6DFF] transition" />
                    </button>

                </div>
            </div>
            {/* Right Column: Profile Photo */}
            <div className="flex justify-center md:justify-end w-full">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#5c6dff66] to-[#2545B07e] rounded-full blur-2xl opacity-80 scale-110" />
                    <img
                        src={profilePhoto}
                        alt="Yash Krishna Bheke"
                        className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                    />
                </div>
            </div>
        </div>
        {/* You can add a future canvas or animated SVG background here */}
    </section>
);

export default HeroSection;
