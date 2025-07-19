import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Calendar, Users, Award } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Integrating Machine Learning Models in Modern Web Applications: A Comprehensive Study',
      authors: ['Alex Chen', 'Dr. Sarah Johnson', 'Prof. Michael Brown'],
      journal: 'International Journal of Web Technologies',
      year: '2024',
      pages: '45-67',
      doi: '10.1234/ijwt.2024.001',
      abstract: 'This paper presents a comprehensive study on integrating machine learning models into modern web applications. We explore various approaches including client-side inference, serverless deployments, and edge computing solutions. The study includes performance benchmarks, user experience considerations, and security implications.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      downloadUrl: '/publications/ml-web-integration-2024.pdf',
      type: 'Journal Article',
      status: 'Published'
    },
    {
      title: 'Real-time Data Processing Architectures for AI-Powered Web Applications',
      authors: ['Alex Chen', 'Dr. Emily Rodriguez'],
      conference: 'International Conference on Web Engineering (ICWE 2024)',
      year: '2024',
      pages: '120-135',
      abstract: 'We present novel architectures for real-time data processing in AI-powered web applications. Our approach combines streaming data processing with machine learning inference to provide low-latency responses while maintaining high accuracy. The paper includes case studies from production deployments.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      downloadUrl: '/publications/realtime-ai-architectures-2024.pdf',
      type: 'Conference Paper',
      status: 'Published'
    },
    {
      title: 'Security Considerations in AI-Enhanced Web Development: Best Practices and Common Pitfalls',
      authors: ['Alex Chen', 'Dr. David Park', 'Lisa Wang'],
      journal: 'IEEE Security & Privacy',
      year: '2024',
      pages: '78-92',
      abstract: 'This research addresses security vulnerabilities specific to AI-enhanced web applications. We identify common attack vectors, propose mitigation strategies, and present a security framework for developers building AI-powered web services.',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1',
      downloadUrl: '/publications/ai-web-security-2024.pdf',
      type: 'Journal Article',
      status: 'Published'
    },
    {
      title: 'Performance Optimization Techniques for Large-Scale React Applications',
      authors: ['Alex Chen', 'Maria Garcia'],
      conference: 'React Conference 2023',
      year: '2023',
      pages: '89-103',
      abstract: 'A deep dive into performance optimization techniques for large-scale React applications. We cover code splitting, lazy loading, memoization strategies, and bundle optimization techniques with real-world performance improvements.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      downloadUrl: '/publications/react-performance-optimization-2023.pdf',
      type: 'Conference Paper',
      status: 'Published'
    },
    {
      title: 'Ethical AI Implementation in Consumer Web Applications: A Framework for Responsible Development',
      authors: ['Alex Chen', 'Dr. Jennifer Liu', 'Prof. Robert Kim'],
      journal: 'Journal of Responsible Technology',
      year: '2025',
      abstract: 'This upcoming publication proposes a comprehensive framework for implementing ethical AI in consumer-facing web applications. We address bias detection, fairness metrics, transparency requirements, and user consent mechanisms.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      downloadUrl: null,
      type: 'Journal Article',
      status: 'Under Review'
    }
  ];

  const stats = [
    { label: 'Publications', value: '5' },
    { label: 'Citations', value: '127' },
    { label: 'H-Index', value: '4' },
    { label: 'Conferences', value: '8' }
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
              Publications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Research contributions to the field of AI-enhanced web development and modern software engineering
            </p>

            {/* Publication Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Publication Image */}
                  <div className="md:col-span-1">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Publication Details */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        publication.status === 'Published' 
                          ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                          : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
                      }`}>
                        {publication.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-400/10 text-blue-400 border border-blue-400/20 rounded-full text-xs font-medium">
                        {publication.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {publication.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        {publication.authors.join(', ')}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {publication.year}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {publication.abstract}
                    </p>

                    <div className="text-sm text-gray-400 mb-6">
                      {publication.journal && (
                        <p><strong>Journal:</strong> {publication.journal}</p>
                      )}
                      {publication.conference && (
                        <p><strong>Conference:</strong> {publication.conference}</p>
                      )}
                      {publication.pages && (
                        <p><strong>Pages:</strong> {publication.pages}</p>
                      )}
                      {publication.doi && (
                        <p><strong>DOI:</strong> {publication.doi}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {publication.downloadUrl ? (
                        <a
                          href={publication.downloadUrl}
                          download
                          className="flex items-center gap-2 px-4 py-2 glow-button text-sm"
                        >
                          <Download size={16} />
                          Download PDF
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 bg-gray-600/20 text-gray-400 rounded-lg text-sm cursor-not-allowed">
                          <Download size={16} />
                          PDF Not Available
                        </span>
                      )}
                      
                      {publication.doi && (
                        <a
                          href={`https://doi.org/${publication.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 glow-button-secondary text-sm"
                        >
                          <ExternalLink size={16} />
                          View DOI
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Research Interests
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Enhanced Web Development</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Exploring the integration of artificial intelligence and machine learning 
                  technologies into modern web applications, focusing on performance, 
                  user experience, and scalability.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Researching advanced techniques for optimizing web application performance, 
                  including bundle optimization, lazy loading strategies, and real-time 
                  data processing architectures.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security & Privacy</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Investigating security vulnerabilities and privacy considerations 
                  specific to AI-powered web applications, developing frameworks 
                  for secure implementation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ethical AI Implementation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Developing frameworks and best practices for responsible AI 
                  implementation in consumer-facing applications, addressing 
                  bias, fairness, and transparency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Interested in Collaboration?
            </h2>
            <p className="text-gray-300 mb-8">
              I'm always open to research collaborations, peer reviews, and academic partnerships. 
              Let's advance the field of web development together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glow-button"
              >
                Get In Touch
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-secondary"
              >
                Google Scholar Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publications;