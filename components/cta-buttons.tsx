"use client"

import { motion } from "framer-motion"
import { Play, UserPlus, Heart, ShoppingBag, Video, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const ctaButtons = [
  {
    icon: Play,
    label: "Watch Live Stream",
    href: "#",
    variant: "default" as const,
    className: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0",
  },
  {
    icon: UserPlus,
    label: "Subscribe on YouTube",
    href: "#",
    variant: "secondary" as const,
    className: "bg-red-600 hover:bg-red-700 text-white border-0",
  },
]

const customLinks = [
  {
    icon: Video,
    label: "Latest Video",
    href: "#",
    description: "Check out my newest content!"
  },
  {
    icon: ShoppingBag,
    label: "Merch Store",
    href: "#",
    description: "Rep the brand with exclusive gear"
  },
  {
    icon: Coffee,
    label: "Buy Me a Coffee",
    href: "/donate",
    description: "Support the stream ☕"
  },
  {
    icon: Heart,
    label: "Join Discord",
    href: "#",
    description: "Connect with the community"
  },
]

export function CTAButtons() {
  return (
    <div className="space-y-8">
      {/* Primary CTA Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {ctaButtons.map((button, index) => (
          <motion.div
            key={button.label}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={button.variant}
              size="lg"
              asChild
              className={`h-12 px-8 font-semibold text-base transition-all duration-300 ${button.className}`}
            >
              <a href={button.href} target="_blank" rel="noopener noreferrer">
                <button.icon className="mr-2 h-5 w-5" />
                {button.label}
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom Link Buttons */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {customLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full h-auto p-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-left justify-start"
            >
              <a href={link.href} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <link.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground">{link.label}</div>
                  <div className="text-sm text-muted-foreground truncate">{link.description}</div>
                </div>
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}