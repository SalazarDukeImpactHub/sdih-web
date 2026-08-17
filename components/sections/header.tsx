"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Historia", href: "#jennifer" },
  { label: "Talleres", href: "#talleres" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Asesorías", href: "#asesorias" },
  { label: "Recursos", href: "#recursos" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "h-14 bg-background/80 backdrop-blur-md border-b border-border"
          : "h-16 lg:h-20 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo + wordmark */}
          <Link href="/" className="group">
            <Image
              src="/images/logo.jpg"
              alt="Salazar Duke Impact Hub"
              width={44}
              height={44}
              className="rounded-none transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Navegación — mono en versalitas, como índice de publicación */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTA Button + Language Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="https://wa.me/573136139790" target="_blank" rel="noopener noreferrer">
                Agendar asesoría
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground hover:bg-surface transition-colors border-b border-border last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-4">
            <LanguageToggle />
            <Button
              asChild
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="https://wa.me/573136139790" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                Agendar asesoría
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
