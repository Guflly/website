"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const skills = [
  { name: "Java", level: 95 },
  { name: "Python", level: 85 },
  { name: "Node.js", level: 80 },
]

export default function Resume() {
  return (
    <div className="space-y-12">
      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass glossy-card rounded-xl p-8"
      >
        <h2 className="font-montserrat font-bold text-2xl mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-primary to-red-400 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <button className="inline-flex items-center gap-3 glossy-btn text-white font-semibold px-8 py-4 rounded-xl transition-all">
          <Download className="w-5 h-5" />
          Download CV
        </button>
      </motion.div>
    </div>
  )
}
