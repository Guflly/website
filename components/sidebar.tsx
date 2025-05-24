"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Github, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const contactItems = [
  { icon: Mail, label: "Email", value: "john@example.com", href: "mailto:john@example.com" },
  { icon: MessageCircle, label: "Discord", value: "johndoe#1234", href: "#" },
  { icon: Github, label: "GitHub", value: "johndoe", href: "https://github.com/johndoe" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Calendar, label: "Available", value: "Open to work", href: "#" },
]

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[260px] h-screen sticky top-0 p-6"
    >
      <div className="glass glossy-card rounded-xl p-6 h-full flex flex-col">
        {/* Avatar and Info */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="John Doe"
              width={96}
              height={96}
              className="rounded-xl object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0b0b0b]"></div>
          </div>
          <h1 className="font-montserrat font-bold text-xl mb-2">John Doe</h1>
          <p className="text-gray-400 text-sm">Minecraft Developer</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 flex-1">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group glossy-card"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                <p className="text-sm truncate">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center">© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </motion.aside>
  )
}
