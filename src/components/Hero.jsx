import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Zap, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Full Stack Developer', 'MERN Specialist', 'Cloud Engineer', 'API Architect'];
  const techStack = [
    { icon: Code, name: 'MERN Stack', color: 'from-green-400 to-emerald-600' },
    { icon: Database, name: 'MySQL', color: 'from-blue-400 to-cyan-600' },
    { icon: Cloud, name: 'AWS S3', color: 'from-orange-400 to-amber-600' },
    { icon: Zap, name: 'Redis', color: 'from-red-400 to-rose-600' },
    { icon: Terminal, name: 'Docker', color: 'from-blue-500 to-indigo-600' },
    { icon: Cpu, name: 'REST APIs', color: 'from-purple-400 to-violet-600' },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div className="LogoFont relative min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
        {/* Left Content */}
        <div
          className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
          }`}
        >
          {/* Name with Gradient */}
          <div className="space-y-4">
            <h1 className="LogoFont text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Ravi Singh
              </span>
            </h1>

            {/* Rotating Roles */}
            <div className="h-20 overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentRole * 5}rem)` }}
              >
                {roles.map((role, index) => (
                  <h2
                    key={index}
                    className="text-4xl md:text-5xl font-bold text-purple-300 h-20 flex items-center"
                  >
                    {role}
                  </h2>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-purple-200 leading-relaxed max-w-2xl">
            Building secure and scalable web applications using the{' '}
            <span className="text-green-400 font-semibold">MERN Stack</span>,{' '}
            <span className="text-blue-400 font-semibold">MySQL</span>,{' '}
            <span className="text-orange-400 font-semibold">AWS S3</span>,{' '}
            <span className="text-pink-400 font-semibold">Cloudinary</span>,{' '}
            <span className="text-red-400 font-semibold">Redis</span>,{' '}
            <span className="text-cyan-400 font-semibold">Docker</span>, and{' '}
            <span className="text-purple-400 font-semibold">RESTful APIs</span>.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-4 pt-6">
            {techStack.map(({ icon: Icon, name, color }, index) => (
              <div
                key={name}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${color} bg-opacity-10 backdrop-blur-sm border border-white/10 hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-xs text-purple-300 font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white font-bold text-lg">View Projects</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-purple-400 rounded-2xl text-purple-300 font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`w-full lg:w-1/2 flex justify-center items-center transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
          }`}
        >
          <div className="relative group">
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 animate-spin-slow blur-2xl opacity-50"></div>
            
            {/* Image Container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600 to-pink-600 animate-pulse"></div>
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://res.cloudinary.com/dnpn8ljki/image/upload/w_2000,h_2000,c_fill,f_auto,q_auto/v1761640507/Ravi_Pic_iyc9mv.png"
                  alt="Ravi Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute top-0 left-0 w-full h-full animate-orbit">
              <div className="absolute top-10 left-10 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full animate-orbit-reverse">
              <div className="absolute bottom-10 right-10 w-4 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-orbit {
          animation: orbit 10s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}