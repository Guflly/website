"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, MapPin, Code, Zap, Gamepad2, ChevronDown, Star, Play, MessageCircle } from "lucide-react"

const tabs = ["About", "Skills", "Projects", "Testimonials", "Video", "Contact"] as const
type Tab = (typeof tabs)[number]

const skills = [
  { name: "Java", level: 95, color: "from-orange-500 to-red-500" },
  { name: "Python", level: 85, color: "from-blue-500 to-green-500" },
  { name: "Node.js", level: 80, color: "from-green-500 to-yellow-500" },
]

const projects = [
  {
    title: "Shard Bound SMP",
    type: "Minecraft Plugin",
    description: "Special abilities system based on mob types for enhanced SMP gameplay",
    tech: ["Java", "Spigot API", "Custom Abilities"],
    status: "Private",
  },
  {
    title: "Private Event Core",
    type: "Minecraft Plugin",
    description: "Custom event system with multiple interactive events for private servers",
    tech: ["Java", "Paper API", "Event System"],
    status: "Private",
  },
  {
    title: "Moveable Action Bar Mod",
    type: "Minecraft Mod",
    description: "Allows players to customize and move the action bar position on screen",
    tech: ["Java", "Forge", "GUI System"],
    status: "Private",
  },
]

const testimonials = [
  {
    name: "Talpanite",
    role: "Client",
    server: "Discord User",
    avatar: "https://cdn.discordapp.com/avatars/339339349801828352/a_e10e591fefc19205e71fcbecfbd3361b.gif?size=4096",
    rating: 5,
    quote:
      "Provided a wonderful result and offered great suggestions for the plugin. There was amazing communication all throughout the process and he delivered on time. Would order through him again.",
  },
  {
    name: "StarFX",
    role: "Client",
    server: "Discord User",
    avatar: "https://cdn.discordapp.com/avatars/1270886963582337069/501068ecbf38dda18ef94e7e4af9b661.png?size=4096",
    rating: 5,
    quote:
      "Working incredibly fast on a mod that would have costed me around $20 from anyone else he did for $5, I suggest buying from him if you want goated plugins & mods!",
  },
  {
    name: "Starzzy",
    role: "Client",
    server: "Discord User",
    avatar: "https://cdn.discordapp.com/avatars/749103625552396300/a_22adc61a05411387921e890a883e41c1.gif?size=4096",
    rating: 5,
    quote:
      "Made my plugin in literally a day it's actually insane. Added a TON of configurable assets that I asked for as well. I HIGHLY recommend you go and order from him, seriously.",
  },
]

const services = [
  {
    icon: Code,
    title: "Plugin Development",
    description: "Custom Minecraft plugins for Spigot, Paper, and Bukkit servers",
  },
  {
    icon: Gamepad2,
    title: "Mod Creation",
    description: "Minecraft mods using Forge and Fabric frameworks",
  },
  {
    icon: Zap,
    title: "Bot Development",
    description: "Discord bots with advanced features and integrations",
  },
]

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("About")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Enhanced smooth scroll on tab change
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    smoothScrollTo("content-section")
  }

  return (
    <div className="min-h-screen animated-bg relative overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center z-10 px-8 w-full max-w-6xl mx-auto"
        >
          <motion.div
            className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl mx-auto mb-12 float glow"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
              <Code className="w-20 h-20 text-white" />
            </div>
          </motion.div>

          <motion.h1
            className="text-8xl md:text-9xl lg:text-[12rem] font-space font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Gufl
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-12 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Minecraft Developer & Bot Creator
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-gray-500 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.a
              href="mailto:guflly80@gmail.com"
              className="flex items-center gap-3 hover:text-white transition-all duration-500 cursor-pointer text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <Mail className="w-6 h-6" />
              <span>guflly80@gmail.com</span>
            </motion.a>
            <motion.a
              href="https://discord.com/users/657691121023057941"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-all duration-500 cursor-pointer text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Discord</span>
            </motion.a>
            <motion.a
              href="https://github.com/guflly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-all duration-500 cursor-pointer text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <Github className="w-6 h-6" />
              <span>@guflly</span>
            </motion.a>
            <motion.div
              className="flex items-center gap-3 hover:text-white transition-all duration-500 cursor-pointer text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <MapPin className="w-6 h-6" />
              <span>Los Angeles, CA</span>
            </motion.div>
          </motion.div>

          <motion.button
            onClick={() => smoothScrollTo("navigation")}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="text-gray-600 hover:text-white transition-colors duration-500"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <ChevronDown className="w-10 h-10 mx-auto" />
          </motion.button>
        </motion.div>
      </section>

      {/* Navigation */}
      <motion.nav
        id="navigation"
        className="sticky top-8 z-40 flex justify-center mb-16 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10 shadow-2xl max-w-full overflow-x-auto">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 md:px-6 py-3 rounded-xl text-sm font-medium transition-all duration-500 relative whitespace-nowrap ${
                  activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 400 }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <main id="content-section" className="max-w-7xl mx-auto px-4 md:px-8 pb-20 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {activeTab === "About" && (
              <div className="space-y-16">
                <motion.div
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 glow"
                >
                  <h2 className="text-4xl font-space font-bold mb-8 text-center">About Me</h2>
                  <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                    Hey there, I'm Gufl! I'm a 16 year old American java developer that has around 3 - 4 years of
                    experience in Minecraft development and I'm here to deliver quality Minecraft Mods/Plugins, I also
                    work with discord bots and can interlink discord bots into any Minecraft plugin or mod making your
                    server easier to manage.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-700 glow group"
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    >
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Skills" && (
              <div className="max-w-4xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 glow"
                >
                  <h2 className="text-4xl font-space font-bold mb-12 text-center">Technical Skills</h2>
                  <div className="space-y-8">
                    {skills.map((skill, index) => (
                      <motion.div key={skill.name} variants={itemVariants} transition={{ delay: index * 0.2 }}>
                        <div className="flex justify-between mb-4">
                          <span className="text-2xl font-semibold">{skill.name}</span>
                          <span className="text-xl text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                          <motion.div
                            className={`h-4 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.5 + index * 0.3, duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === "Projects" && (
              <div>
                <motion.h2 variants={itemVariants} className="text-4xl font-space font-bold mb-12 text-center">
                  Featured Projects
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-700 glow group"
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            project.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : project.status === "Beta"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : project.status === "Private"
                                  ? "bg-red-500/20 text-red-400"
                                  : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{project.type}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Testimonials" && (
              <div className="max-w-5xl mx-auto">
                <motion.h2 variants={itemVariants} className="text-4xl font-space font-bold mb-12 text-center">
                  Client Testimonials
                </motion.h2>

                {/* Featured Testimonial */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 glow mb-12"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="text-center"
                    >
                      <div className="w-20 h-20 rounded-2xl mx-auto mb-6 overflow-hidden bg-gray-700">
                        <img
                          src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed max-w-3xl mx-auto">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>

                      <div>
                        <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                        <p className="text-sm text-gray-500">{testimonials[currentTestimonial].server}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Testimonial indicators */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          index === currentTestimonial ? "bg-white" : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* All Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-700 glow"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-700 flex-shrink-0">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                          <p className="text-xs text-gray-500">{testimonial.server}</p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.quote}"</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Video" && (
              <div className="max-w-4xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 glow"
                >
                  <h2 className="text-4xl font-space font-bold mb-8 text-center">Promotional Video</h2>
                  <p className="text-xl text-gray-300 mb-8 text-center">
                    Watch my latest work and see what I can create for your project
                  </p>

                  {/* Video Container */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 group">
                    {/* Placeholder for video - replace with your actual video */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      >
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-colors duration-500">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p className="text-2xl font-semibold text-white mb-2">Coming Soon</p>
                        <p className="text-gray-400">Promotional video in development</p>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-400 mb-4">
                      My promotional video showcasing recent projects and development process is currently in
                      production.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                      <span>• Will feature live coding sessions</span>
                      <span>• Project demonstrations</span>
                      <span>• Client testimonials</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === "Contact" && (
              <div className="max-w-2xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 glow text-center"
                >
                  <h2 className="text-4xl font-space font-bold mb-8">Let's Work Together</h2>
                  <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                    Looking for custom Minecraft development or Discord bot creation? I'm available for freelance
                    projects and collaborations.
                  </p>

                  <div className="space-y-6">
                    <motion.a
                      href="mailto:guflly80@gmail.com"
                      className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-all duration-500 group"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    >
                      <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-lg">guflly80@gmail.com</span>
                    </motion.a>

                    <motion.a
                      href="https://discord.com/users/657691121023057941"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-all duration-500 group"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    >
                      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-lg">Discord Profile</span>
                    </motion.a>

                    <motion.a
                      href="https://github.com/guflly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-all duration-500 group"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    >
                      <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-lg">@guflly</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
