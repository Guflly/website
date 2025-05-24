"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const services = [
  {
    icon: Code,
    title: "Minecraft Mod Development",
    description:
      "Creating custom Minecraft mods using Forge and Fabric frameworks, bringing unique gameplay experiences to life.",
  },
  {
    icon: Zap,
    title: "Plugin Development",
    description:
      "Developing high-performance Spigot and Paper plugins for Minecraft servers with advanced features and optimization.",
  },
  {
    icon: Palette,
    title: "Performance Optimization",
    description:
      "Optimizing server performance and mod compatibility, ensuring smooth gameplay for large player bases.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Server Owner at MinecraftHub",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "John's plugins transformed our server experience. His custom economy system increased player engagement by 300%.",
  },
  {
    name: "Mike Chen",
    role: "Developer at ModPack Studios",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Working with John on our modpack was amazing. His mods are well-optimized and perfectly balanced for gameplay.",
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager at CraftWorld",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "John's attention to detail in plugin development is remarkable. Every feature works flawlessly and enhances our server.",
  },
]

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="space-y-12">
      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass glossy-card rounded-xl p-8"
      >
        <h2 className="font-montserrat font-bold text-2xl mb-6">About Me</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm a passionate Minecraft developer with over 5 years of experience creating custom mods and plugins that
            enhance gameplay experiences. My journey started with simple Bukkit plugins and has evolved into complex mod
            development using modern frameworks like Forge and Fabric.
          </p>
          <p>
            I specialize in server-side optimization, custom game mechanics, and creating seamless multiplayer
            experiences. When I'm not coding, you can find me exploring new Minecraft updates, contributing to
            open-source projects, or helping other developers in the community.
          </p>
        </div>
      </motion.section>

      {/* What I'm Doing Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="font-montserrat font-bold text-2xl mb-8">What I'm Doing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass glossy-card rounded-xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h2 className="font-montserrat font-bold text-2xl mb-8">Testimonials</h2>
        <div className="glass glossy-card rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevTestimonial} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-xl mx-auto mb-4 overflow-hidden">
              <Image
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-lg text-gray-300 mb-4 italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-400">{testimonials[currentTestimonial].role}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
