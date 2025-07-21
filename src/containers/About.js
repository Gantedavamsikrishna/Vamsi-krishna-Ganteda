import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Hash,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import SkillBadge from "../components/SkillBadge";

const About = () => {
  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Angular" },
    { name: "Node.js" },
    { name: "Spring Boot" },
    { name: "Java" },
    { name: "TypeScript" },
    { name: "DSA" },
    { name: "GitHub" },
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "T-Hub",
      period: "Mar 2025 - May 2025",
      location: "On-site",
      description:
        "Developed Etrack, a full-stack web application using the MERN stack with CRUD functionality and user authentication. Built RESTful APIs with Node.js/Express.js and designed responsive UI components using React.js. Implemented routing, form validation, tested APIs via Postman, and used Git for version control.",
      achievements: [
        "Developed Etrack, a full-stack web application using the MERN stack with CRUD functionality and user authentication.",
        "Built RESTful APIs with Node.js/Express.js and designed responsive UI components using React.js.",
        "Implemented routing, form validation, tested APIs via Postman, and used Git for version control.",
        "Tech Stack: React.js, Node.js, Websockets, MongoDB, Github, Render, Vercel",
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "Nexora Enterprises",
      period: "May 2025 - July 2025",
      location: "Remote",
      description:"During my internship at Nexora Enterprise, I worked as a backend developer on Locate, a MERN stack-based application focused on location tracking and secure access. I collaborated with a team to design and implement robust authentication systems and role-based access controls. The project emphasized security, scalability, and efficient API design using Node.js and TypeScript.",
      achievements: [
        "Developed secure JWT-based authentication and role-based authorization for multiple user types (admin, user, etc.).",
        "Implemented middleware-based route protection, ensuring access control across the application",
        "Worked with the team to integrate error handling, logging, and token expiration strategies for production-readiness",
        "Collaborated via Git/GitHub, participated in regular stand-ups, and contributed to code reviews and documentation",
         "Tech Stack:MERN Stack , Node.js with TypeScript"
      ],
    },
  ];

  const achievements = [
    // {
    //   title: 'AI Innovation Award',
    //   organization: 'TechConf 2024',
    //   date: 'Nov 2024',
    //   description: 'Recognized for outstanding contribution to AI-powered web development',
    //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    // },
    // {
    //   title: 'Open Source Contributor',
    //   organization: 'React Community',
    //   date: 'Ongoing',
    //   description: 'Active contributor to React ecosystem with 500+ GitHub stars',
    //   image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713'
    // },
    // {
    //   title: 'Tech Speaker',
    //   organization: 'DevConf 2024',
    //   date: 'Sep 2024',
    //   description: 'Speaker at major tech conference on "Future of AI in Web Development"',
    //   image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    // }
  ];

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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate developer crafting the future of web applications
              through AI integration and innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my24.png`}
                  alt="Profile"
                  className="w-full max-w-xs mx-auto rounded-2xl neon-shadow relative z-10"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 85%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 85%, transparent 100%)",
                    filter: "contrast(1.15) sepia(0.18) hue-rotate(-18deg)",
                  }}
                />
              </div>

              <div className="mt-8 text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Vamsi Krishna
                </h2>
                <p className="text-green-400 font-semibold mb-4">
                  AI-Focused Full Stack Developer
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} />
                    India
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} />
                    5+ Projects
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start gap-4">
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
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  About Me
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate full-stack developer with hands-on experience
                  in building modern, responsive web applications using the MERN
                  stack. My journey started with core web technologies and
                  evolved through real-world projects and an internship focused
                  on full-stack JavaScript development.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Over the past few years, I’ve developed and contributed to
                  various dynamic web applications — from admin dashboards and
                  product management systems to user-focused interfaces —
                  blending efficient backend APIs with intuitive front-end
                  design.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  While the MERN stack is my core strength, I also work
                  comfortably with Angular and Spring Boot, allowing me to adapt
                  to diverse tech environments and project needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  What Drives Me
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>
                      Creating clean, scalable, and real-world web solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>
                      Continuously learning and exploring new technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>Writing maintainable code that adds real value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>
                      Collaborating with teams and sharing knowledge with peers
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              A comprehensive toolkit for building modern, AI-powered
              applications
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.name} name={skill.name} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-green-400/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>

                <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-green-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-400 text-sm mt-2 md:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl overflow-hidden hover:border-green-400/30 transition-all"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                    <Award size={14} />
                    {achievement.date}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{achievement.organization}</p>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
