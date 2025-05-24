"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, MessageCircle, Github, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const contactItems = [
  { icon: Mail, label: "Email", value: "john@example.com", href: "mailto:john@example.com" },
  { icon: MessageCircle, label: "Discord", value: "johndoe#1234", href: "#" },
  { icon: Github, label: "GitHub", value: "johndoe", href: "https://github.com/johndoe" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Calendar, label: "Available", value: "Open to work", href: "#" },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 glass-strong z-50 lg:hidden"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-montserrat font-bold text-xl">Menu</h2>
                <button onClick={onClose} className="p-2 rounded-xl hover:bg-white/5 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Avatar and Info */}
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="John Doe"
                    width={80}
                    height={80}
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0b0b0b]"></div>
                </div>
                <h1 className="font-montserrat font-bold text-lg mb-1">John Doe</h1>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 flex-1">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm truncate">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
