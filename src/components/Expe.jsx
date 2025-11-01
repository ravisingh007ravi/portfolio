import React from 'react';
import { motion } from 'framer-motion';

export default function Expe() {
  const data = [
    {
      logo: 'https://instagram.fixc16-1.fna.fbcdn.net/v/t51.2885-19/462373605_1095361545343636_4436382592189364403_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xOTcuYzIifQ&_nc_ht=instagram.fixc16-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFtawTUYBLLnnniCp2afXhAri4_QzH1cE2LwzkWYWo22krFmKaEuxvFNCY5WNnB5WA&_nc_ohc=ADmrQk6DwwkQ7kNvwErqwlG&_nc_gid=FetHQTK-06KFrl6GZi0b8w&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfewTSgNHOZg9nZNG-VU-PvvjIWZ-Gr-PF_JnvWNnNRBoA&oe=690A5758&_nc_sid=7a9f4b',
      companyName: 'Sqilco',
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
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    initial: { 
      scale: 1,
      y: 0 
    },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Work Experience
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
          
          {data.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>
              
              {/* Content Card */}
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                  {/* Company Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={exp.logo}
                      alt={`${exp.companyName} logo`}
                      className="w-16 h-16 rounded-xl object-cover border border-gray-200"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.companyName}
                      </h3>
                      <p className="text-blue-600 font-semibold mt-1">
                        {exp.posti}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {exp.des}
                  </motion.p>

                  {/* Date Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {exp.startDate} - {exp.endDate}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
         
        </motion.div>
      </div>
    </div>
  );
}