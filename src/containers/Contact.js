import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Hash,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1394293096316928000/digmCJLaimCOypT9rtbY_sIA_MtYosD-vwM164AracbpaFkUXtCiIct8fzAWjEcEVITK";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const discordMessage = {
      content: `**New Contact Form Submission**\n\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:** ${formData.message}`,
    };

    try {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordMessage),
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vamsiganteda@gmail.com",
      href: "mailto:gantedavamsi2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7036582951",
      href: 7036582951,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Gantedavamsikrishna",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vamsi-krishna-ganteda/",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/YOUR_TWITTER_HANDLE",
      color: "hover:text-blue-400",
    },
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send me a message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-400/10 border border-green-400/20 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="krishna"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="krishna@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <ul className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <li
                      key={info.label}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <info.icon size={20} className="text-green-400" />
                      {info.href ? (
                        <a
                          href={info.href}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Social Links
                </h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-green-400/10 text-white font-semibold transition-colors duration-200 ${link.color}`}
                    >
                      <link.icon size={20} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Current Availability
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6">
                <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3"></div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Open for Projects
                </h3>
                <p className="text-gray-400 text-sm">
                  Available for freelance and contract work
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-3"></div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-gray-400 text-sm">Usually within 24 hours</p>
              </div>

              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6">
                <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Time Zone
                </h3>
                <p className="text-gray-400 text-sm">PST (UTC-8)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
