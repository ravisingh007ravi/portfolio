import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, ChevronRight, Filter } from 'lucide-react';

export default function Project() {
  const [filter, setFilter] = useState('All');
  
  const ProjectData = [
    {
      projectName: 'Portfolio',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      des: 'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and clean design.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
      startDate: '02-Oct-2025',
      endDate: '31-Oct-2025',
      info: "Frontend Project",
      category: "Frontend",
      githubLink: 'https://github.com/Manoj-Dev/Portfolio',
      deploymentLink: 'https://manoj-dev.github.io/Portfolio/'
    },
    {
      projectName: 'E-Book Platform',
      des: 'A full-stack e-book platform with user authentication, book uploads, and digital reading capabilities.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'NodeJs', 'ExpressJs', 'MongoDB', 'Mongoose', 'Cloudinary'],
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      startDate: '05-Nov-2025',
      endDate: '07-April-2026',
      deploymentLink: 'https://manoj-dev.github.io/Portfolio/',
      info: "Full Stack Project",
      category: "Full Stack",
      githubLink: 'https://github.com/Manoj-Dev/Portfolio',
    },
    {
      projectName: 'Messenger App',
      img: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
      deploymentLink: 'https://manoj-dev.github.io/Portfolio/',
      des: 'Real-time messaging application with modern UI/UX, file sharing, and group chat functionality.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'NodeJs', 'ExpressJs', 'MongoDB', 'Mongoose', 'Cloudinary'],
      startDate: '02-May-2026',
      info: "Full Stack Project",
      category: "Full Stack",
      githubLink: 'https://github.com/Manoj-Dev/Portfolio',
      endDate: '19-Sep-2026'
    },
    {
      img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      projectName: 'Task Management',
      deploymentLink: 'https://manoj-dev.github.io/Portfolio/',
      des: 'Productivity app with drag-and-drop functionality, team collaboration, and progress tracking.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'NodeJs', 'ExpressJs', 'MongoDB', 'Mongoose'],
      startDate: '02-May-2026',
      info: "Full Stack Project",
      category: "Full Stack",
      githubLink: 'https://github.com/Manoj-Dev/Portfolio',
      endDate: '19-Sep-2026'
    },
  ];

  const categories = ['All', 'Frontend', 'Full Stack'];
  const filteredProjects = filter === 'All' 
    ? ProjectData 
    : ProjectData.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work showcasing modern web development technologies and best practices
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 flex gap-2 border border-slate-700">
            <Filter className="w-5 h-5 text-purple-400 mt-1" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.projectName}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
                layout
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={project.img}
                      alt={project.projectName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tech Stack Overlay */}
                    <motion.div 
                      className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                    >
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          variants={techVariants}
                          className="px-2 py-1 bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <motion.span
                          custom={3}
                          variants={techVariants}
                          className="px-2 py-1 bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-purple-300 rounded-full border border-purple-500/30"
                        >
                          +{project.tech.length - 3}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <motion.h3 
                          className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {project.projectName}
                        </motion.h3>
                        <ChevronRight className="w-5 h-5 text-purple-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      
                      <motion.p 
                        className="text-gray-400 text-sm mb-4 line-clamp-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.des}
                      </motion.p>

                      {/* Project Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>{project.startDate} - {project.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Code className="w-4 h-4 text-blue-400" />
                          <span>{project.info}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex gap-3 pt-4 border-t border-slate-700/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-600 hover:border-slate-500"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.deploymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}