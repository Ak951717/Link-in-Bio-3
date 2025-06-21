"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Coffee, Heart, DollarSign, CreditCard, Wallet, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
// import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

const donationOptions = [
  {
    icon: Coffee,
    title: "Buy Me a Coffee",
    description: "Support with a small coffee donation",
    amount: "$3",
    color: "from-amber-500 to-orange-500",
    href: "https://buymeacoffee.com/alexcreator"
  },
  {
    icon: Heart,
    title: "Show Some Love",
    description: "A bigger thank you for your support",
    amount: "$10",
    color: "from-pink-500 to-red-500",
    href: "#"
  },
  {
    icon: Star,
    title: "Super Supporter",
    description: "You're amazing! This helps so much",
    amount: "$25",
    color: "from-purple-500 to-indigo-500",
    href: "#"
  },
  {
    icon: Wallet,
    title: "Custom Amount",
    description: "Choose your own amount to donate",
    amount: "Any",
    color: "from-green-500 to-teal-500",
    href: "#"
  }
]

const paymentMethods = [
  {
    name: "PayPal",
    icon: CreditCard,
    href: "https://paypal.me/alexcreator"
  },
  {
    name: "Stripe",
    icon: DollarSign,
    href: "#"
  }
]

export default function DonatePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute top-6 left-6 right-6 z-50 flex items-center">
  <Link
    href="/"
    className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
  >
    <ArrowLeft className="h-5 w-5" />
  </Link>
</div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div 
          className="w-full max-w-4xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
              Support My Content
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your support helps me create better content and keeps the streams going! Every donation means the world to me ❤️
            </p>
          </motion.div>

          {/* Donation Options */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {donationOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                        <option.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{option.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {option.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">{option.amount}</span>
                      <Button 
                        asChild
                        className={`bg-gradient-to-r ${option.color} hover:opacity-90 text-white border-0`}
                      >
                        <a href={option.href} target="_blank" rel="noopener noreferrer">
                          Donate
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Payment Methods */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground">Payment Methods</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20"
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <method.icon className="mr-2 h-5 w-5" />
                      {method.name}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div 
            className="text-center space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-4xl mb-4"
              >
                🙏
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your support means everything to me and helps me continue creating content that we all love. 
                You're part of what makes this community amazing!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}