import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export const projects = [
  {
    title: "Etrack",
    description:
      "Electric device tracking platform with real-time status monitoring, device countability, interactive dashboards, and complaint management.",
    image: `${process.env.PUBLIC_URL}/assets/Etrack.jpg`,
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT", "Socket.io"],
    category: "Web",
    github: "https://github.com/Gantedavamsikrishna/Etrack_Management",
    demo: "https://etrack-student-ui.vercel.app/",
  },
  {
    title: "Security Attendance System",
    description:
      "A security attendance system that uses Thumb recognition to mark attendance of sucrity guards and staff.",
    image: `${process.env.PUBLIC_URL}/assets/Security.png`,
    skills: ["ReactJS", "Node.js", "Express", "Socket.io", "MongoDB"],
    category: "Web",
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
    github: "https://github.com",
    demo: "https://demo.com",
  },
  // {
  //   title: 'Computer Vision Dashboard',
  //   description: 'Real-time object detection and analysis dashboard using machine learning models for security and monitoring applications.',
  //   image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  //   skills: ['Python', 'OpenCV', 'PyTorch', 'Flask', 'WebRTC'],
  //   category: 'AI/ML',
  //   github: 'https://github.com',
  //   demo: null
  // },
  // {
  //   title: 'Task Management Mobile App',
  //   description: 'Cross-platform mobile app for task management with AI-powered priority suggestions and team collaboration features.',
  //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  //   skills: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
  //   category: 'Mobile',
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // },
  // {
  //   title: 'IoT Weather Station',
  //   description: 'Smart weather monitoring system with sensors, data visualization dashboard, and predictive analytics for weather forecasting.',
  //   image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  //   skills: ['Arduino', 'Python', 'InfluxDB', 'Grafana', 'MQTT'],
  //   category: 'Hardware',
  //   github: 'https://github.com',
  //   demo: null
  // },
  // {
  //   title: 'Social Media Analytics',
  //   description: 'Comprehensive analytics platform for social media monitoring with sentiment analysis and trend detection using NLP.',
  //   image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1',
  //   skills: ['Vue.js', 'Python', 'NLTK', 'D3.js', 'Redis'],
  //   category: 'AI/ML',
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // },
  // {
  //   title: 'Portfolio Website Builder',
  //   description: 'Drag-and-drop website builder specifically designed for developers and creatives with modern templates and hosting.',
  //   image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
  //   skills: ['React', 'Node.js', 'AWS S3', 'Stripe', 'MongoDB'],
  //   category: 'Web',
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // },
  // {
  //   title: 'Fitness Tracking App',
  //   description: 'Mobile fitness application with workout planning, progress tracking, and AI-powered form analysis using camera.',
  //   image: 'https://images.pexels.com/photos/6804605/pexels-photo-6804605.jpeg',
  //   skills: ['Flutter', 'TensorFlow Lite', 'Firebase', 'Dart'],
  //   category: 'Mobile',
  //   github: 'https://github.com',
  //   demo: null
  // },
  // {
  //   title: 'Smart Home Controller',
  //   description: 'Centralized smart home automation system with voice control, scheduling, and energy optimization features.',
  //   image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be',
  //   skills: ['Raspberry Pi', 'Python', 'MQTT', 'React', 'SQLite'],
  //   category: 'Hardware',
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "AI/ML", "Mobile", "Hardware"];

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
                href="https://github.com"
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
