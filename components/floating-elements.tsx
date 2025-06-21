"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart, Star, Zap, Sparkles } from "lucide-react"

const floatingElements = [
  { icon: Heart, color: "text-pink-500", delay: 0 },
  { icon: Star, color: "text-yellow-500", delay: 2 },
  { icon: Zap, color: "text-purple-500", delay: 4 },
  { icon: Sparkles, color: "text-orange-500", delay: 6 },
]

export function FloatingElements() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  if (windowWidth === 0) return null // Optional: render nothing until client is ready

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} opacity-20`}
          initial={{ y: "100vh", x: Math.random() * windowWidth }}
          animate={{
            y: "-20vh",
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          <element.icon className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  )
}
