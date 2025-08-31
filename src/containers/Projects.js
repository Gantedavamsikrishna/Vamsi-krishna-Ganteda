import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Axios } from "axios";

export const projects = [
 
  {
    title: "CodeEditor",
    description:
      "Online Code Editor – A browser-based IDE built with React and Vite, featuring AI-powered coding assistance, syntax highlighting, multi-language support, authentication.",
    image: `${process.env.PUBLIC_URL}/assets/image.png`,
    skills: [
      "React",
      "Node.js",
      "Python",
      "GeminiAPI",
      "MongoDB",
      "JWT",
      "Redis",
    ],
    category: "AI",
    github: "https://github.com/Gantedavamsikrishna/CodeAI",
    demo: "https://code-ai-gilt.vercel.app/",
  },
  {
    title: "Movix",
    description:
      "Movix is a modern movie discovery web application built with React and Vite. It allows users to browse trending, popular, and top-rated movies, view details, watch trailers, and search for movies using The Movie Database (TMDB) API.",
    image: `${process.env.PUBLIC_URL}/assets/Movix.png`,
    skills: ["React", "TmdbAPI", "Redux", "Axios", "git"],
    category: "Web",
    github: "https://github.com/Gantedavamsikrishna/Movixx",
    demo: "https://movixx-rho.vercel.app/",
  },
 
   {
    title: "Bus Reservation System RestAPIs",
    description:
      "A comprehensive bus reservation system built with Spring Boot, featuring RESTful APIs, route management, user auth, and reservation tracking.",
    image: `${process.env.PUBLIC_URL}/assets/BusReservationimage.avif`,
    skills: [
      "Spring Boot",
      "Java",
      "Microservices",
      "MySQL",
      "REST APIs",
      "JPA/Hibernate",
      "Maven",
      "Postman"
    ],
    category: "Backend",
    github: "https://github.com/Gantedavamsikrishna/Bus_Reservation",
    demo: "https://github.com/Gantedavamsikrishna/Bus_Reservation",
  },
   {
    title: "Etrack",
    description:
      "Electric device tracking platform with real-time status monitoring, device countability, interactive dashboards, and complaint management.",
    image: `${process.env.PUBLIC_URL}/assets/Etrack.png`,
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT", "Socket.io"],
    category: "Web",
    github: "https://github.com/Gantedavamsikrishna/Etrack_Management",
    demo: "https://etrack-student-ui.vercel.app/",
  },
   {
    title: "GlowGroove",
    description:
      "Beauty Care - A modern web platform providing personalized beauty products and expert advice, built with Angular, Bootstrap, Spring Boot, and MongoDB for a seamless user experience.",
    image: `${process.env.PUBLIC_URL}/assets/glowgroov.png`,
    skills: [
      "Spring Boot",
      "Java",
      "Microservices",
      "Angular",
      "Bootstrap",
      "MongoDB",
      "REST APIs",
    ],
    category: "Web",
    github: "https://github.com/Gantedavamsikrishna/Beauty-care",
    demo: "https://beauty-care-psi.vercel.app/home",
  },
  {
    title: "Security Attendance System",
    description:
      "A security attendance system that uses Thumb recognition to mark attendance of sucrity guards and staff.",
    image: `${process.env.PUBLIC_URL}/assets/Security.png`,
    skills: ["ReactJS", "Node.js", "Express", "Socket.io", "MongoDB"],
     category: "Backend",
    github: "https://github.com/Gantedavamsikrishna/Security-Attendance-System",
    demo: "https://security-attendance-system.vercel.app/",
  },
  {
    title: "Groomax",
    description:
      "A petgrooming web Application for pet services and grooming advance bookings , full of glasse transparent modals.",
    image: `${process.env.PUBLIC_URL}/assets/groomax.png`,
    skills: ["HTML", "CSS", "javaScript", "bootstrap", "git", "vercel"],
    category: "Web",
    github: "https://github.com/Gantedavamsikrishna/Pet-GrooMing",
    demo: "https://pet-groo-ming.vercel.app/",
  },

];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              A showcase of my work spanning web development, AI/ML, mobile
              apps, and hardware projects
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-button ${
                    activeFilter === filter ? "active" : ""
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No projects found for the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Interested in Collaborating?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always open to discussing new projects and opportunities.
              Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="glow-button">
                Get In Touch
              </a>
              <a
                href="https://github.com/Gantedavamsikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-secondary"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
