import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Code, 
  Coffee, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  ArrowUp,
  Copyright
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Manoj-Dev",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/manoj-dev",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/manoj_dev",
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    {
      icon: Mail,
      href: "mailto:manoj@example.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      text: "manoj@example.com",
      href: "mailto:manoj@example.com"
    },
    {
      icon: MapPin,
      text: "San Francisco, CA",
      href: "#"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Code className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Manoj Dev
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional, 
              and user-centered digital experiences. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 text-gray-500 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              Get In Touch
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.li 
                  key={contact.text}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <contact.icon className="w-4 h-4 flex-shrink-0" />
                  <a href={contact.href} className="text-sm">
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Made With Love */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-400" />
              Built With
            </h3>
            <div className="space-y-2">
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-sm">Passion & Dedication</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Modern Technologies</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-4 h-4 text-amber-500" />
                <span className="text-sm">Lots of Coffee</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Copyright className="w-4 h-4" />
            <span>{currentYear} Manoj Dev. All rights reserved.</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(139, 92, 246, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 text-gray-400 hover:text-white transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"
        />
      </div>
    </motion.footer>
  )
}