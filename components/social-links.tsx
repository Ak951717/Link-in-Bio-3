"use client"

import { motion } from "framer-motion"
import { Youtube, Twitch, Instagram, MessageCircle, Twitter, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { 
    icon: Youtube, 
    href: "https://youtube.com/@yourhandle", 
    color: "hover:text-red-500",
    label: "YouTube"
  },
  { 
    icon: Twitch, 
    href: "https://twitch.tv/yourhandle", 
    color: "hover:text-purple-500",
    label: "Twitch"
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/yourhandle", 
    color: "hover:text-pink-500",
    label: "Instagram"
  },
  { 
    icon: MessageCircle, 
    href: "https://tiktok.com/@yourhandle", 
    color: "hover:text-gray-800 dark:hover:text-white",
    label: "TikTok"
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com/yourhandle", 
    color: "hover:text-blue-500",
    label: "Twitter"
  },
  { 
    icon: Music, 
    href: "https://spotify.com/yourhandle", 
    color: "hover:text-green-500",
    label: "Spotify"
  },
]

export function SocialLinks() {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className={`h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ${social.color}`}
          >
            <a 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}