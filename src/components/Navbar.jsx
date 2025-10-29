import { Download, Github, Linkedin, Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from './Hero'
import Tech from './Tech/'
import Expe from './Expe/'
import Contact from './Contact/'
import Footer from './Footer/'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub', delay: 0 },
    { Icon: Linkedin, href: '#', label: 'LinkedIn', delay: 0.2 },
    { Icon: Instagram, href: '#', label: 'Instagram', delay: 0.4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`mx-4 mt-4 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
            }`}
          style={{
            animation: isVisible ? 'slideDownBounce 1s ease-out' : 'none'
          }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="relative">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  RS
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {/* Download Resume Button */}
                <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2 text-white font-semibold">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </div>
                </button>

                {/* Social Media Links - Snake Animation */}
                <div className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-2 border border-white/10">
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
                      style={{
                        animation: `snakeMove 3s ease-in-out ${index * 0.3}s infinite`
                      }}
                    >
                      <Icon className="w-5 h-5 text-purple-300 group-hover:text-pink-400 transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-purple-300" />
                ) : (
                  <Menu className="w-6 h-6 text-purple-300" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="flex flex-col gap-4 pb-4">
                {/* Mobile Resume Button */}
                <button className="group w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  <div className="flex items-center justify-center gap-2 text-white font-semibold">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </div>
                </button>

                {/* Mobile Social Links */}
                <div className="flex justify-center gap-2 bg-white/5 rounded-xl p-4 border border-white/10">
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                      style={{
                        animation: `snakeMove 3s ease-in-out ${index * 0.3}s infinite`
                      }}
                    >
                      <Icon className="w-6 h-6 text-purple-300 group-hover:text-pink-400 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Hero />
      <Tech />
      <Expe />
      <Contact />
      <Footer />

      <style jsx>{`
        @keyframes slideDownBounce {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          60% {
            transform: translateY(20px);
            opacity: 1;
          }
          80% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes snakeMove {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-8px) translateX(4px) rotate(5deg);
          }
          50% {
            transform: translateY(0) translateX(8px);
          }
          75% {
            transform: translateY(8px) translateX(4px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}