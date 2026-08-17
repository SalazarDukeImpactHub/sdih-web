'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

/**
 * Componente de revelación con fade-up al hacer scroll.
 * Usa IntersectionObserver para disparar la animación una sola vez
 * cuando el elemento es visible en el viewport.
 *
 * Respeta prefers-reduced-motion automáticamente.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Detectar preferencia de reducir movimiento
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      // Sin animación si está activo prefers-reduced-motion
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Observador se ejecuta una sola vez
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.15,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
