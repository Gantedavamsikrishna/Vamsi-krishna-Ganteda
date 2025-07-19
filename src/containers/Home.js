import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  FileText,
  ExternalLink,
  ArrowUp,
  Mail,
} from "lucide-react";
import SkillBadge from "../components/SkillBadge";
import ProjectCard from "../components/ProjectCard";
import { projects as allProjects } from "./Projects";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroSection.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React.js' },
    { name: 'Angular' },
    { name: 'Node.js' },
    { name: 'Spring Boot' },
    { name: 'Java' },
    { name: 'TypeScript' },
    { name: 'DSA' },
    { name: 'GitHub' },
  ];

  const featuredProjects = allProjects.slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Flashlight Effect */}
      <section className="hero-section min-h-screen flex items-center justify-center relative pt-16">
        <div
          className="flashlight-effect"
          style={{
            "--mouse-x": `${mousePosition.x}%`,
            "--mouse-y": `${mousePosition.y}%`,
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Open to Work Badge */}
            <div className="open-to-work-badge">
              <div className="status-dot"></div>
              <span>Open to Work</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Vamsi Krishna
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              AI-Focused Full Stack Developer crafting the future of web
              applications
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://github.com/Gantedavamsikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vamsi-krishna-ganteda/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/YOUR_TWITTER_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:gantedavamsi2004@gmail.com"
                className="social-icon"
                title="Gmail"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/resume" className="glow-button">
                <FileText size={18} />
                Download Resume
              </Link>
              <Link to="/projects" className="glow-button-secondary">
                <ExternalLink size={18} />
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative flex justify-center items-center">
                {/* Neon background bubble as true background */}
                <div className="absolute inset-0 flex justify-center items-end z-0 pointer-events-none">
                  <div className="w-64 h-40 bg-green-400/20 blur-2xl rounded-full" style={{background: 'radial-gradient(circle at 50% 80%, rgba(34,197,94,0.10) 0%, rgba(59,130,246,0.08) 100%)'}} />
                </div>
                <img
                  src={"/assets/my24.png"}
                  alt="Profile"
                  className="w-full max-w-xs mx-auto rounded-2xl neon-shadow relative z-10"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    filter: 'contrast(1.15) sepia(0.18) hue-rotate(-18deg)'
                  }}
                />
              </div>

              <div className="text-left">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with hands-on experience in building modern, responsive web applications using the MERN stack. My journey started with core web technologies and evolved through real-world projects and an internship focused on full-stack JavaScript development.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">
                    Core Skills
                  </h3>
                  <div className="scale-90 origin-top-left">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {skills.map((skill, index) => (
                        <SkillBadge
                          key={skill.name}
                          name={skill.name}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/about" className="glow-button-secondary">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Here are some of my recent projects showcasing AI integration and
              modern web development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <Link to="/projects" className="glow-button">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to bring your ideas to life? Let's discuss your next
              project.
            </p>

            <Link to="/contact" className="glow-button">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Krish.. Built with React & AI Magic ✨
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Gantedavamsikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/vamsi-krishna-ganteda/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top">
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Home;
