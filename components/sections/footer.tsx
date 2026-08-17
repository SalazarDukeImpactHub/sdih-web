"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail, Linkedin, Instagram, ArrowUp } from "lucide-react"

const navigation = {
  ecosystem: [
    { name: "Asesorías", href: "#asesorias" },
    { name: "GPTs", href: "#gpts" },
    { name: "Recursos", href: "#recursos" },
    { name: "Proyectos", href: "#proyectos" },
  ],
  resources: [
    { name: "eBook", href: "#recursos" },
    { name: "Templates", href: "#recursos" },
    { name: "Podcast", href: "#podcast" },
  ],
  connect: [
    { name: "Comunidad WhatsApp", href: "https://chat.whatsapp.com/JRMehCKsyNkL84iHJGro1r", external: true },
    { name: "Instagram", href: "https://www.instagram.com/salazardukeimpacthub/", external: true },
    { name: "TikTok", href: "https://www.tiktok.com/@salazardukeimpacthub?lang=en", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jennifer-salazar-duke-1194b2289", external: true },
  ],
}

const socialLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://api.whatsapp.com/send/?phone=573136139790&text&type=phone_number&app_absent=0" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/salazardukeimpacthub/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jennifer-salazar-duke-1194b2289" },
  { name: "Email", icon: Mail, href: "mailto:salazardukeimpacthub@gmail.com" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo.jpg"
                  alt="Salazar Duke Impact Hub"
                  width={56}
                  height={56}
                  className="rounded-lg"
                />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
                Ecosistema de innovacion social liderado por Jennifer Salazar Duke. Salud mental + tecnologia = doble impacto medible. Medellin, Colombia.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Ecosystem Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Ecosistema
              </h4>
              <ul className="space-y-3">
                {navigation.ecosystem.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Recursos
              </h4>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Conectar
              </h4>
              <ul className="space-y-3">
                {navigation.connect.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Salazar Duke Impact Hub. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacidad"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Términos
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
