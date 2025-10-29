import React, { useState, useEffect } from 'react';

export default function Tech() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'from-green-500 to-emerald-600',
      description: 'NoSQL Database'
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'from-gray-600 to-gray-800',
      description: 'Backend Framework'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-blue-600',
      description: 'Frontend Library'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-green-600 to-lime-600',
      description: 'Runtime Environment'
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'from-blue-500 to-blue-700',
      description: 'Relational Database'
    },
    {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      color: 'from-orange-500 to-yellow-600',
      description: 'Cloud Services'
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: 'from-blue-400 to-cyan-600',
      description: 'Containerization'
    },
    {
      name: 'Redis',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: 'from-red-500 to-rose-600',
      description: 'Caching & Storage'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-amber-600',
      description: 'Programming Language'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'from-blue-600 to-indigo-600',
      description: 'Typed JavaScript'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'from-orange-600 to-red-600',
      description: 'Version Control'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      color: 'from-teal-400 to-cyan-600',
      description: 'CSS Framework'
    }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative container mx-auto px-6">
        {/* Title Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Powering modern web applications with cutting-edge technologies
          </p>
        </div>

        {/* Snake Animation Container */}
        <div className="relative">
          {/* Connecting Lines - Snake Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              className="animate-draw-path"
              d="M 100 100 Q 300 50, 500 100 T 900 100 Q 1100 150, 1300 100"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 5"
            />
          </svg>

          {/* Tech Icons Grid with Snake Animation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
                style={{
                  animation: `snakeFloat 6s ease-in-out ${index * 0.4}s infinite`,
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/10 rounded-2xl p-4 flex items-center justify-center h-24">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-16 h-16 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{
                          animation: `iconPulse 2s ease-in-out ${index * 0.2}s infinite`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Tech Name */}
                  <h3 className="text-white font-bold text-lg text-center mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-purple-300 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.description}
                  </p>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tech.color} animate-spin-slow`} style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>
                  </div>

                  {/* Particle Effect on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full animate-ping`}></div>
                  </div>
                </div>

                {/* Orbiting Particle */}
                <div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{
                    animation: `orbit ${8 + index}s linear infinite`,
                  }}
                >
                  <div className={`absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full shadow-lg opacity-70`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes snakeFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(10px) rotate(2deg);
          }
          50% {
            transform: translateY(0) translateX(20px) rotate(0deg);
          }
          75% {
            transform: translateY(15px) translateX(10px) rotate(-2deg);
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.8));
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.2); }
          66% { transform: translate(-30px, 30px) scale(0.8); }
        }

        @keyframes draw-path {
          to {
            stroke-dashoffset: -100;
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        .animate-draw-path {
          animation: draw-path 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}