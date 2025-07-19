import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Github, Linkedin, Twitter, Hash, Mail, Phone, MapPin } from 'lucide-react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './ResumePdfNoScroll.css';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-300 max-w-xl mx-auto mb-8">
              Download or view my latest resume below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="./assets/GantedaVamsiKrishna.pdf"
                download="GantedaVamsiKrishna.pdf"
                className="glow-button"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="glow-button-secondary"
              >
                <Eye size={20} />
                {showPreview ? 'Hide Preview' : 'View Resume'}
              </button>
            </div>
            {/* Embedded PDF Resume (only show on preview) */}
            {showPreview && (
              <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white no-scrollbar" style={{height: 'auto', maxHeight: 'none'}}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                  <Viewer
                    fileUrl="./assets/GantedaVamsiKrishna.pdf"
                    defaultScale="PageWidth"
                    theme="light"
                    renderToolbar={null}
                    renderLoader={() => <div className="text-center py-8">Loading resume...</div>}
                    style={{width: '100%', border: 'none', overflow: 'hidden'}}
                  />
                </Worker>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 mb-8">
              I'm currently open to new opportunities and exciting projects. Let's discuss how I can contribute to your team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glow-button"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-secondary"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;