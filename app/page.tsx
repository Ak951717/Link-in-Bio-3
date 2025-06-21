"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { ProfileSection } from "@/components/profile-section"
import { SocialLinks } from "@/components/social-links"
import { CTAButtons } from "@/components/cta-buttons"
// import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingElements } from "@/components/floating-elements"
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      
      <AnimatedBackground />
      <FloatingElements />
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        {/* <ThemeToggle /> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 space-y-12">
        <motion.div 
          className="w-full max-w-4xl mx-auto space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProfileSection />
          <SocialLinks />
          <CTAButtons />
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="text-center text-sm text-muted-foreground mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; 2025 Alex Creator. Made with ❤️ for the community.</p>
        </motion.footer>
      </div>
    </main>
  )
}