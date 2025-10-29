import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Shield, Code2, Database } from 'lucide-react';

export default function Experience() {
  const data = [
    {
      logo: 'https://instagram.fixc8-2.fna.fbcdn.net/v/t51.2885-19/462373605_1095361545343636_4436382592189364403_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xOTcuYzIifQ&_nc_ht=instagram.fixc8-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGk1qy_vs4qnjZ2dxkVUURTvVe7LJiQMbodccTd25i1wivHQKfGXMOHWXJnMHEG9ZCj72t2ToudoMNI24NttS8f&_nc_ohc=6NB6BuqBmjMQ7kNvwHqPJhB&_nc_gid=bntulpWBNteFZx53vjoFhQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfcCDU5Tk0vHD5LmVoe_4u5G0ieSvt6w8UUC2kRmSZ6_ew&oe=6907B458&_nc_sid=7d3ac5',
      companyName: 'Squilco',
      startDate: '12-March-2024',
      endDate: '27-Feb-2025',
      posti: 'Internship — MERN Stack Developer',
      des: 'Worked on full-stack web development using MongoDB, Express, React, and Node.js. Contributed to projects involving authentication, RESTful APIs, and front-end UI using Tailwind CSS. Gained hands-on experience with deployment, state management, and API integration.'
    },
    {
      logo: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1750770016/Hartron_Logo1_ryz9yl.png',
      companyName: 'Hartron Advance Skill Centre',
      startDate: '04-June-2025',
      endDate: 'Present',
      posti: 'Cyber Secured Web Development Associate',
      des: 'Responsible for developing and maintaining secure web applications with a focus on cybersecurity best practices. Involved in implementing secure authentication, encryption, and server-side validation. Also contributed to training modules and development of learning platforms using modern web technologies.'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
        damping: 15,
        duration: 0.8
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const getTechIcons = (companyName) => {
    if (companyName === 'Squilco') {
      return [
        { icon: Code2, label: 'React', color: 'text-blue-500' },
        { icon: Database, label: 'MongoDB', color: 'text-green-500' },
      ];
    } else {
      return [
        { icon: Shield, label: 'Security', color: 'text-red-500' },
        { icon: Code2, label: 'Web Dev', color: 'text-purple-500' },
      ];
    }
  };

  const handleViewResume = () => {
    // Add your resume viewing logic here
    console.log('View resume clicked');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            My journey through innovative companies and challenging projects
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {data.map((exp, index) => {
              const TechIcon = getTechIcons(exp.companyName);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block"
                    variants={iconVariants}
                  />

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-105"
                      whileHover={{ y: -5 }}
                    >
                      {/* Header with Logo */}
                      <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <img 
                              src={exp.logo} 
                              alt={`${exp.companyName} logo`}
                              className="w-16 h-16 rounded-2xl object-cover border-2 border-gray-200 dark:border-gray-600 shadow-md"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3 
                              className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {exp.companyName}
                            </motion.h3>
                            <motion.p 
                              className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {exp.posti}
                            </motion.p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Date Info */}
                        <motion.div 
                          className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{exp.startDate}</span>
                          </div>
                          <span className="text-gray-400">→</span>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{exp.endDate}</span>
                          </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {exp.des}
                        </motion.p>

                        {/* Tech Icons */}
                        <motion.div 
                          className="flex items-center space-x-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {getTechIcons(exp.companyName).map((tech, techIndex) => {
                            const IconComponent = tech.icon;
                            return (
                              <motion.div
                                key={techIndex}
                                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <IconComponent size={18} className={tech.color} />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {tech.label}
                                </span>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </div>

                      {/* Gradient Border Effect */}
                      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute -z-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-colors duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewResume}
          >
            <span className="font-semibold text-lg">View Full Resume</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}