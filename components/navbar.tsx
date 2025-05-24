"use client"

import { motion } from "framer-motion"
import { Menu } from "lucide-react"

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: "About" | "Resume" | "Portfolio") => void
  onMobileMenuToggle: () => void
}

const tabs = ["About", "Resume", "Portfolio"] as const

export default function Navbar({ activeTab, setActiveTab, onMobileMenuToggle }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 glass-strong border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button onClick={onMobileMenuToggle} className="lg:hidden p-2 rounded-xl hover:bg-white/5 transition-colors">
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-6 py-3 rounded-xl font-medium transition-colors hover:text-white"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden">
            <h1 className="font-montserrat font-bold text-lg">{activeTab}</h1>
          </div>

          {/* Spacer for mobile */}
          <div className="lg:hidden w-10"></div>
        </div>
      </div>
    </nav>
  )
}
