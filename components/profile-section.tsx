"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileSection() {
  return (
    <motion.div 
      className="text-center space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative inline-block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-md opacity-70" />
        <Avatar className="relative w-32 h-32 border-4 border-white/20 backdrop-blur-sm">
          <AvatarImage 
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Profile picture"
            className="object-cover"
          />
          <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            AC
          </AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-2"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
          Alex Creator
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
          Gaming streamer, content creator & your friendly neighborhood entertainer ✨
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-lg mx-auto"
      >
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          Welcome to my corner of the internet! I stream games, create content, and love connecting with amazing people. 
          Join me on this incredible journey! 🎮🎬
        </p>
      </motion.div>
    </motion.div>
  )
}