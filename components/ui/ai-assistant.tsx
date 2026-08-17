"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Sparkles, Cpu, Zap, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AIAssistantProps {
  gptUrl?: string
  whatsappUrl?: string
  assistantName?: string
  welcomeMessage?: string
}

export function AIAssistant({
  gptUrl = "https://chatgpt.com/g/g-69b36d312d5c8191bf0520f296509dfc-asesor-ia-salazar-duke-impact-hub",
  whatsappUrl = "https://api.whatsapp.com/send/?phone=573136139790&text&type=phone_number&app_absent=0",
  assistantName = "Asistente Salazar Duke",
  welcomeMessage = "Hola, soy el asistente de Salazar Duke Impact Hub. Estoy aquí para ayudarte a explorar nuestro ecosistema de innovación.",
}: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPulse(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  const handleClick = () => {
    setIsOpen(!isOpen)
    setHasInteracted(true)
    setShowPulse(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-80 sm:w-96 perspective-1000"
          >
            <div className="relative bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-2xl border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-50 blur-sm" />
              </div>
              
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-5 py-4 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Animated Avatar */}
                    <motion.div 
                      className="relative w-12 h-12"
                      animate={{ 
                        rotateY: [0, 5, 0, -5, 0],
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 blur-md" />
                      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center overflow-hidden">
                        <Cpu className="w-6 h-6 text-primary" />
                        {/* Scanning line effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                          animate={{ y: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      {/* Status dot */}
                      <motion.div
                        className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-card"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                        {assistantName}
                        <Zap className="w-3.5 h-3.5 text-primary" />
                      </h4>
                      <p className="text-xs text-primary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Conectado
                      </p>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-primary/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5 space-y-4">
                {/* Message Bubble */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="absolute -left-1 top-3 w-2 h-2 rotate-45 bg-muted/50 border-l border-t border-primary/20" />
                  <div className="bg-muted/40 backdrop-blur-sm rounded-xl rounded-tl-sm p-4 border border-primary/20">
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {welcomeMessage}
                    </p>
                  </div>
                </motion.div>

                {/* Interactive Features */}
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {["IA", "GPTs", "Innovacion"].map((tag, i) => (
                    <span 
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Button
                    asChild
                    className="w-full h-11 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground gap-2 font-medium shadow-lg shadow-primary/25 border border-primary/50"
                  >
                    <a href={gptUrl} target="_blank" rel="noopener noreferrer">
                      <Cpu className="w-4 h-4" />
                      Hablar con IA
                      <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-11 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 gap-2 font-medium"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      Escribir por WhatsApp
                      <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70" />
                    </a>
                  </Button>
                </motion.div>

                {/* Footer */}
                <motion.p 
                  className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Sparkles className="w-3 h-3" />
                  Powered by Salazar Duke Impact Hub
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Robot Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group outline-none"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Outer Ring Pulses */}
        {showPulse && !isOpen && (
          <>
            <motion.div
              className="absolute inset-[-8px] rounded-full border-2 border-primary/40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-[-4px] rounded-full border border-primary/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          </>
        )}

        {/* Glow Effect */}
        <motion.div 
          className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main Container */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-card via-muted to-card border-2 border-primary/50 shadow-xl shadow-primary/20 flex items-center justify-center overflow-hidden">
          {/* Rotating background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent via-50% to-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Robot Face SVG */}
          <svg
            viewBox="0 0 64 64"
            className="w-11 h-11 relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Face Plate */}
            <motion.rect
              x="14"
              y="16"
              width="36"
              height="32"
              rx="8"
              className="fill-muted/80"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "rgb(6, 182, 212)" }}
              animate={{
                strokeOpacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Antenna */}
            <motion.g
              animate={{
                y: isHovered ? [-1, 1, -1] : 0,
              }}
              transition={{
                duration: 0.5,
                repeat: isHovered ? Infinity : 0,
              }}
            >
              <line
                x1="32"
                y1="8"
                x2="32"
                y2="16"
                className="stroke-primary"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <motion.circle
                cx="32"
                cy="6"
                r="3"
                className="fill-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="32"
                cy="6"
                r="5"
                className="stroke-primary"
                fill="none"
                strokeWidth="0.5"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.g>

            {/* Eyes */}
            <motion.g
              animate={{
                y: isOpen ? 0 : isHovered ? [-0.5, 0.5, -0.5] : 0,
              }}
              transition={{
                duration: 1,
                repeat: isHovered && !isOpen ? Infinity : 0,
              }}
            >
              {/* Left Eye */}
              <motion.ellipse
                cx="24"
                cy="30"
                rx={isOpen ? "3.5" : "3"}
                ry={isOpen ? "4" : "3"}
                className="fill-primary"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <circle cx="25" cy="29" r="1" className="fill-white/70" />
              
              {/* Right Eye */}
              <motion.ellipse
                cx="40"
                cy="30"
                rx={isOpen ? "3.5" : "3"}
                ry={isOpen ? "4" : "3"}
                className="fill-primary"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <circle cx="41" cy="29" r="1" className="fill-white/70" />
            </motion.g>

            {/* Mouth */}
            <motion.path
              d={isOpen ? "M 24 40 Q 32 46 40 40" : "M 26 40 Q 32 44 38 40"}
              className="stroke-primary"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: isOpen 
                  ? ["M 24 40 Q 32 46 40 40", "M 24 40 Q 32 48 40 40", "M 24 40 Q 32 46 40 40"]
                  : "M 26 40 Q 32 44 38 40"
              }}
              transition={{
                duration: 1,
                repeat: isOpen ? Infinity : 0,
              }}
            />

            {/* Side Panels */}
            <rect x="8" y="26" width="4" height="12" rx="2" className="fill-primary/40" />
            <rect x="52" y="26" width="4" height="12" rx="2" className="fill-primary/40" />
            
            {/* Chin Detail */}
            <motion.rect
              x="28"
              y="48"
              width="8"
              height="3"
              rx="1.5"
              className="fill-accent/50"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </svg>

          {/* Scanning effect when hovered */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        {/* Status Indicator */}
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card shadow-lg"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles around robot */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0 
                }}
                animate={{
                  x: Math.cos((i * 120) * Math.PI / 180) * 30,
                  y: Math.sin((i * 120) * Math.PI / 180) * 30,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}
      </motion.button>
    </div>
  )
}
