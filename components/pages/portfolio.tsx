"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Discord Bot", "Minecraft Plugin", "Minecraft Mod"]

const projects = [
  {
    id: 1,
    title: "Music Bot",
    category: "Discord Bot",
    image: "/placeholder.svg?height=300&width=400",
    description: "Feature-rich Discord music bot with queue management",
    tags: ["Discord.js", "Node.js", "YouTube API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Economy Plugin",
    category: "Minecraft Plugin",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive economy system for Minecraft servers",
    tags: ["Java", "Spigot API", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Custom Dimensions Mod",
    category: "Minecraft Mod",
    image: "/placeholder.svg?height=300&width=400",
    description: "Adds new dimensions with unique biomes and structures",
    tags: ["Java", "Forge", "JSON"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Moderation Bot",
    category: "Discord Bot",
    image: "/placeholder.svg?height=300&width=400",
    description: "Advanced moderation bot with auto-moderation features",
    tags: ["Discord.js", "MongoDB", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "PvP Arena Plugin",
    category: "Minecraft Plugin",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete PvP arena system with matchmaking and rewards",
    tags: ["Java", "Paper API", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Magic System Mod",
    category: "Minecraft Mod",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive magic system with spells and enchantments",
    tags: ["Java", "Fabric", "Mixins"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeCategory === category
                ? "glossy-btn text-white shadow-lg"
                : "glass glossy-card hover:bg-white/10 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.1 }}
            className="glass glossy-card rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-montserrat font-semibold text-lg">{project.title}</h3>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-lg">{project.category}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-gray-400">No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  )
}
