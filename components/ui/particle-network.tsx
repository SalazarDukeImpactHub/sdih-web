"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulsePhase: number
  pulseSpeed: number
  type: "normal" | "node"
}

interface Sparkle {
  x: number
  y: number
  life: number
  maxLife: number
  size: number
  speed: number
  angle: number
  color: string
}

interface DataStream {
  startX: number
  startY: number
  endX: number
  endY: number
  progress: number
  speed: number
  opacity: number
}

interface ParticleNetworkProps {
  className?: string
  particleCount?: number
  connectionDistance?: number
  particleColor?: string
  lineColor?: string
}

export function ParticleNetwork({
  className = "",
  particleCount = 60,
  connectionDistance = 150,
  particleColor = "6, 182, 212",
  lineColor = "6, 182, 212",
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const sparklesRef = useRef<Sparkle[]>([])
  const dataStreamsRef = useRef<DataStream[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const frameCountRef = useRef(0)

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const count = Math.min(particleCount, Math.floor((width * height) / 12000))
    
    for (let i = 0; i < count; i++) {
      const isNode = Math.random() < 0.15
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isNode ? Math.random() * 2 + 2 : Math.random() * 1.5 + 0.5,
        opacity: isNode ? Math.random() * 0.3 + 0.5 : Math.random() * 0.4 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        type: isNode ? "node" : "normal",
      })
    }
    return particles
  }, [particleCount])

  const createSparkle = useCallback((x: number, y: number, color: string = "6, 182, 212") => {
    const sparkle: Sparkle = {
      x,
      y,
      life: 0,
      maxLife: Math.random() * 40 + 20,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      angle: Math.random() * Math.PI * 2,
      color,
    }
    sparklesRef.current.push(sparkle)
  }, [])

  const createDataStream = useCallback((startX: number, startY: number, endX: number, endY: number) => {
    const stream: DataStream = {
      startX,
      startY,
      endX,
      endY,
      progress: 0,
      speed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.5 + 0.3,
    }
    dataStreamsRef.current.push(stream)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      particlesRef.current = initParticles(rect.width, rect.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      frameCountRef.current++

      const particles = particlesRef.current
      const sparkles = sparklesRef.current
      const dataStreams = dataStreamsRef.current
      const mouse = mouseRef.current

      // Randomly spawn sparkles
      if (frameCountRef.current % 8 === 0 && Math.random() < 0.4) {
        const colors = ["6, 182, 212", "139, 92, 246", "236, 72, 153"]
        createSparkle(
          Math.random() * rect.width,
          Math.random() * rect.height,
          colors[Math.floor(Math.random() * colors.length)]
        )
      }

      // Update and draw sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sparkle = sparkles[i]
        sparkle.life++
        sparkle.x += Math.cos(sparkle.angle) * sparkle.speed * 0.5
        sparkle.y += Math.sin(sparkle.angle) * sparkle.speed * 0.5
        
        const lifeRatio = sparkle.life / sparkle.maxLife
        const fadeOut = lifeRatio < 0.5 ? lifeRatio * 2 : 2 - lifeRatio * 2
        
        // Draw sparkle with glow
        ctx.save()
        ctx.globalAlpha = fadeOut * 0.8
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          sparkle.x, sparkle.y, 0,
          sparkle.x, sparkle.y, sparkle.size * 3
        )
        gradient.addColorStop(0, `rgba(${sparkle.color}, 0.8)`)
        gradient.addColorStop(0.5, `rgba(${sparkle.color}, 0.3)`)
        gradient.addColorStop(1, `rgba(${sparkle.color}, 0)`)
        
        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Core sparkle with cross shape
        ctx.strokeStyle = `rgba(${sparkle.color}, ${fadeOut})`
        ctx.lineWidth = 1
        const crossSize = sparkle.size * 2 * fadeOut
        ctx.beginPath()
        ctx.moveTo(sparkle.x - crossSize, sparkle.y)
        ctx.lineTo(sparkle.x + crossSize, sparkle.y)
        ctx.moveTo(sparkle.x, sparkle.y - crossSize)
        ctx.lineTo(sparkle.x, sparkle.y + crossSize)
        ctx.stroke()
        
        ctx.restore()
        
        if (sparkle.life >= sparkle.maxLife) {
          sparkles.splice(i, 1)
        }
      }

      // Create data streams between nearby nodes occasionally
      if (frameCountRef.current % 60 === 0) {
        const nodes = particles.filter(p => p.type === "node")
        if (nodes.length >= 2) {
          const node1 = nodes[Math.floor(Math.random() * nodes.length)]
          const node2 = nodes[Math.floor(Math.random() * nodes.length)]
          if (node1 !== node2) {
            const dist = Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2))
            if (dist < connectionDistance * 2) {
              createDataStream(node1.x, node1.y, node2.x, node2.y)
            }
          }
        }
      }

      // Update and draw data streams
      for (let i = dataStreams.length - 1; i >= 0; i--) {
        const stream = dataStreams[i]
        stream.progress += stream.speed
        
        if (stream.progress <= 1) {
          const currentX = stream.startX + (stream.endX - stream.startX) * stream.progress
          const currentY = stream.startY + (stream.endY - stream.startY) * stream.progress
          
          // Draw data packet
          ctx.beginPath()
          ctx.arc(currentX, currentY, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${stream.opacity})`
          ctx.fill()
          
          // Trail
          const trailLength = 0.1
          const trailStart = Math.max(0, stream.progress - trailLength)
          const gradient = ctx.createLinearGradient(
            stream.startX + (stream.endX - stream.startX) * trailStart,
            stream.startY + (stream.endY - stream.startY) * trailStart,
            currentX,
            currentY
          )
          gradient.addColorStop(0, `rgba(139, 92, 246, 0)`)
          gradient.addColorStop(1, `rgba(139, 92, 246, ${stream.opacity * 0.5})`)
          
          ctx.beginPath()
          ctx.moveTo(
            stream.startX + (stream.endX - stream.startX) * trailStart,
            stream.startY + (stream.endY - stream.startY) * trailStart
          )
          ctx.lineTo(currentX, currentY)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.5
          ctx.stroke()
        } else {
          dataStreams.splice(i, 1)
        }
      }

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.pulsePhase += particle.pulseSpeed
        const pulseFactor = Math.sin(particle.pulsePhase) * 0.3 + 0.7

        // Mouse interaction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        
        if (distToMouse < 200 && distToMouse > 0) {
          const force = (200 - distToMouse) / 200 * 0.025
          particle.vx += (dx / distToMouse) * force
          particle.vy += (dy / distToMouse) * force
          
          // Create sparkles near mouse
          if (Math.random() < 0.02) {
            createSparkle(particle.x, particle.y)
          }
        }

        particle.vx *= 0.99
        particle.vy *= 0.99
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary wrapping
        if (particle.x < 0) particle.x = rect.width
        if (particle.x > rect.width) particle.x = 0
        if (particle.y < 0) particle.y = rect.height
        if (particle.y > rect.height) particle.y = 0

        // Draw particle
        if (particle.type === "node") {
          // Node particles with glow
          ctx.save()
          const nodeGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * 3
          )
          nodeGradient.addColorStop(0, `rgba(${particleColor}, ${particle.opacity * pulseFactor})`)
          nodeGradient.addColorStop(0.5, `rgba(${particleColor}, ${particle.opacity * pulseFactor * 0.3})`)
          nodeGradient.addColorStop(1, `rgba(${particleColor}, 0)`)
          
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
          ctx.fillStyle = nodeGradient
          ctx.fill()
          
          // Core
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * pulseFactor, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity * pulseFactor})`
          ctx.fill()
          
          // Ring around node
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 2 * pulseFactor, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${particleColor}, ${particle.opacity * pulseFactor * 0.3})`
          ctx.lineWidth = 0.5
          ctx.stroke()
          ctx.restore()
        } else {
          // Normal particles
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * pulseFactor, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity * pulseFactor})`
          ctx.fill()
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const cdx = particle.x - other.x
          const cdy = particle.y - other.y
          const dist = Math.sqrt(cdx * cdx + cdy * cdy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.2
            
            // Gradient line for node connections
            if (particle.type === "node" || other.type === "node") {
              const lineGradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y)
              lineGradient.addColorStop(0, `rgba(${lineColor}, ${opacity * 1.5})`)
              lineGradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.8})`)
              lineGradient.addColorStop(1, `rgba(${lineColor}, ${opacity * 1.5})`)
              ctx.strokeStyle = lineGradient
              ctx.lineWidth = 0.8
            } else {
              ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
              ctx.lineWidth = 0.5
            }
            
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }

        // Mouse connection
        if (distToMouse < connectionDistance * 1.5) {
          const opacity = (1 - distToMouse / (connectionDistance * 1.5)) * 0.4
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${particleColor}, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles, connectionDistance, particleColor, lineColor, createSparkle, createDataStream])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}
