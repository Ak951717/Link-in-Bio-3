"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}