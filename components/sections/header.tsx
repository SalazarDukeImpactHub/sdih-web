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
  { label: "Sobre Jennifer", href: "#jennifer" },
  { label: "Servicios", href: "#servicios" },
  { label: "Asesorias", href: "#asesorias" },
  { label: "Recursos", href: "#recursos" },
  { label: "Proyectos", href: "#proyectos" },
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
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Salazar Duke Impact Hub"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group rounded-lg hover:bg-primary/5"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 transition-transform group-hover:scale-x-100 rounded-full" />
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
              <Link href="#asesorias">Agendar Asesoria</Link>
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
              className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
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
              <Link href="#asesorias" onClick={() => setIsMobileMenuOpen(false)}>
                Agendar Asesoria
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
