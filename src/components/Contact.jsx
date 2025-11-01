import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MessageCircle, User, Send, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [data, setData] = useState({ name: '', email: '', mobile: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ContactData = [
    { 
      Name: 'Name', 
      placeHolder: "Enter your name", 
      type: 'text', 
      icon: User, 
      keyName: 'name' 
    },
    { 
      Name: 'Email Id', 
      placeHolder: "Enter your email", 
      type: 'email', 
      icon: Mail, 
      keyName: 'email' 
    },
    { 
      Name: 'Mobile No', 
      placeHolder: "Enter your mobile number", 
      type: 'tel', 
      icon: Phone, 
      keyName: 'mobile' 
    },
    { 
      Name: 'Message', 
      placeHolder: "Enter your message...", 
      type: 'textarea', 
      icon: MessageCircle, 
      keyName: 'message' 
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setData({ name: '', email: '', mobile: '', message: '' })
    }, 3000)
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
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const formVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  }

  const successVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 flex items-center justify-center'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full'>
        
        {/* Left Side - Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='space-y-8'
        >
          <motion.div variants={itemVariants}>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4'>
              Let's Talk
            </h1>
            <p className='text-xl text-gray-300'>
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className='space-y-6'>
            <div className='flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300'>
              <div className='p-3 bg-purple-600/20 rounded-xl'>
                <Mail className='w-6 h-6 text-purple-400' />
              </div>
              <div>
                <h3 className='text-white font-semibold'>Email</h3>
                <p className='text-gray-400'>manoj@example.com</p>
              </div>
            </div>

            <div className='flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'>
              <div className='p-3 bg-blue-600/20 rounded-xl'>
                <Phone className='w-6 h-6 text-blue-400' />
              </div>
              <div>
                <h3 className='text-white font-semibold'>Phone</h3>
                <p className='text-gray-400'>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className='flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300'>
              <div className='p-3 bg-green-600/20 rounded-xl'>
                <MapPin className='w-6 h-6 text-green-400' />
              </div>
              <div>
                <h3 className='text-white font-semibold'>Location</h3>
                <p className='text-gray-400'>San Francisco, CA</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className='flex gap-4'>
            {[
              { icon: Github, href: '#', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
              { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 text-gray-400 ${social.color} transition-all duration-300`}
              >
                <social.icon className='w-6 h-6' />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className='relative'
        >
          <AnimatePresence mode='wait'>
            {isSubmitted ? (
              <motion.div
                key="success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 text-center'
              >
                <div className='w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Send className='w-10 h-10 text-green-400' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-2'>Message Sent!</h3>
                <p className='text-gray-300'>Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className='bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 space-y-6'
              >
                {ContactData.map((item, index) => (
                  <motion.div
                    key={item.keyName}
                    variants={itemVariants}
                    className='space-y-2'
                  >
                    <label htmlFor={item.keyName} className='text-white font-medium flex items-center gap-2'>
                      <item.icon className='w-4 h-4 text-purple-400' />
                      {item.Name}
                    </label>
                    {item.type === 'textarea' ? (
                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        name={item.keyName}
                        value={data[item.keyName]}
                        onChange={handleChange}
                        placeholder={item.placeHolder}
                        rows="4"
                        required
                        className='w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none'
                      />
                    ) : (
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type={item.type}
                        name={item.keyName}
                        value={data[item.keyName]}
                        onChange={handleChange}
                        placeholder={item.placeHolder}
                        required
                        className='w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300'
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25'
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className='w-5 h-5' />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}