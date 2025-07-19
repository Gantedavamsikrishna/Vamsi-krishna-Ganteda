import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, Code } from 'lucide-react';

const Snippets = () => {
  const codeSnippets = [
    {
      id: 1,
      title: 'React Custom Hook for API Calls',
      description: 'A reusable custom hook for handling API requests with loading states and error handling.',
      language: 'JavaScript',
      category: 'React',
      stars: 45,
      code: `import { useState, useEffect } from 'react';

const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(\`Error: \${response.status}\`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApi;`
    },
    {
      id: 2,
      title: 'Debounced Search Hook',
      description: 'Custom React hook for implementing debounced search functionality to optimize API calls.',
      language: 'JavaScript',
      category: 'React',
      stars: 32,
      code: `import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Usage Example
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Make API call here
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};`
    },
    {
      id: 3,
      title: 'Node.js JWT Authentication Middleware',
      description: 'Express middleware for JWT token validation with proper error handling.',
      language: 'JavaScript',
      category: 'Node.js',
      stars: 67,
      code: `const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      error: 'Access token required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        error: 'Invalid or expired token' 
      });
    }
    
    req.user = user;
    next();
  });
};

// Usage in routes
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Access granted', 
    user: req.user 
  });
});

module.exports = authenticateToken;`
    },
    {
      id: 4,
      title: 'Python Data Validation Decorator',
      description: 'A Python decorator for validating function arguments with type checking.',
      language: 'Python',
      category: 'Python',
      stars: 28,
      code: `from functools import wraps
from typing import get_type_hints

def validate_types(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        hints = get_type_hints(func)
        
        # Get all arguments
        all_args = {}
        arg_names = func.__code__.co_varnames[:func.__code__.co_argcount]
        
        # Map positional arguments
        for i, arg in enumerate(args):
            if i < len(arg_names):
                all_args[arg_names[i]] = arg
        
        # Add keyword arguments
        all_args.update(kwargs)
        
        # Validate types
        for arg_name, expected_type in hints.items():
            if arg_name in all_args:
                if not isinstance(all_args[arg_name], expected_type):
                    raise TypeError(
                        f"Argument '{arg_name}' must be of type "
                        f"{expected_type.__name__}, got {type(all_args[arg_name]).__name__}"
                    )
        
        return func(*args, **kwargs)
    return wrapper

# Usage Example
@validate_types
def calculate_area(length: float, width: float) -> float:
    return length * width

# This will work
result = calculate_area(5.0, 3.0)

# This will raise TypeError
# result = calculate_area("5", 3.0)`
    },
    {
      id: 5,
      title: 'CSS Glassmorphism Effect',
      description: 'Modern glassmorphism effect using CSS backdrop-filter and gradients.',
      language: 'CSS',
      category: 'CSS',
      stars: 89,
      code: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(31, 38, 135, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Dark theme variant */
.glass-card-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

/* Usage in HTML */
/*
<div class="glass-card">
  <h3>Glassmorphism Card</h3>
  <p>Beautiful translucent effect</p>
</div>
*/`
    },
    {
      id: 6,
      title: 'MongoDB Aggregation Helper',
      description: 'Utility functions for common MongoDB aggregation operations.',
      language: 'JavaScript',
      category: 'Database',
      stars: 41,
      code: `// MongoDB Aggregation Helpers
class AggregationBuilder {
  constructor(collection) {
    this.collection = collection;
    this.pipeline = [];
  }

  match(conditions) {
    this.pipeline.push({ $match: conditions });
    return this;
  }

  group(groupBy, operations = {}) {
    const groupStage = { $group: { _id: groupBy, ...operations } };
    this.pipeline.push(groupStage);
    return this;
  }

  sort(sortFields) {
    this.pipeline.push({ $sort: sortFields });
    return this;
  }

  limit(count) {
    this.pipeline.push({ $limit: count });
    return this;
  }

  project(fields) {
    this.pipeline.push({ $project: fields });
    return this;
  }

  lookup(from, localField, foreignField, as) {
    this.pipeline.push({
      $lookup: { from, localField, foreignField, as }
    });
    return this;
  }

  async execute() {
    return await this.collection.aggregate(this.pipeline).toArray();
  }

  getPipeline() {
    return this.pipeline;
  }
}

// Usage Example
const userStats = await new AggregationBuilder(db.users)
  .match({ status: 'active' })
  .group('$department', {
    count: { $sum: 1 },
    avgSalary: { $avg: '$salary' }
  })
  .sort({ count: -1 })
  .limit(10)
  .execute();

module.exports = AggregationBuilder;`
    }
  ];

  const categories = ['All', 'React', 'Node.js', 'Python', 'CSS', 'Database'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSnippets = activeCategory === 'All' 
    ? codeSnippets 
    : codeSnippets.filter(snippet => snippet.category === activeCategory);

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

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
              Code Snippets
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Reusable code snippets and utilities for modern web development
            </p>
            
            <div className="flex justify-center gap-4 text-sm text-gray-400 mb-8">
              <span>{codeSnippets.length} Snippets</span>
              <span>•</span>
              <span>Multiple Languages</span>
              <span>•</span>
              <span>Production Ready</span>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Snippets Grid */}
          <div className="space-y-8">
            {filteredSnippets.map((snippet, index) => (
              <motion.div
                key={snippet.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-8"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{snippet.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{snippet.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm mb-6">
                      <span className="flex items-center gap-2 text-green-400">
                        <Code size={14} />
                        {snippet.language}
                      </span>
                      <span className="flex items-center gap-2 text-yellow-400">
                        <Star size={14} />
                        {snippet.stars} stars
                      </span>
                      <span className="px-3 py-1 bg-blue-400/10 text-blue-400 border border-blue-400/20 rounded-full text-xs font-medium">
                        {snippet.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6">
                      View the complete implementation and usage examples on GitHub. This snippet includes 
                      detailed documentation, test cases, and real-world usage examples.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 glow-button text-sm"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSnippets.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No snippets found for the selected category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* GitHub Link Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-2xl p-12"
          >
            <Github className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              View Complete Collection
            </h2>
            <p className="text-gray-300 mb-8">
              Find more code snippets, complete projects, and contribute to the growing collection on GitHub.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button"
              >
                <Github size={20} />
                View on GitHub
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-secondary"
              >
                <Star size={20} />
                Star Repository
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Snippets;