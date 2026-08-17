"use client"

import { Instagram, Linkedin } from "lucide-react"

const socials = [
  {
    name: "Instagram",
    handle: "@salazardukeimpacthub",
    description: "Contenido visual, tips y behind the scenes del ecosistema tech.",
    icon: Instagram,
    href: "https://www.instagram.com/salazardukeimpacthub/",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "TikTok",
    handle: "@salazardukeimpacthub",
    description: "Videos cortos sobre IA, automatizacion y tendencias digitales.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    href: "https://www.tiktok.com/@salazardukeimpacthub?lang=en",
    color: "from-gray-800 to-gray-900",
  },
  {
    name: "LinkedIn",
    handle: "Jennifer Salazar Duke",
    description: "Networking profesional, articulos y oportunidades de colaboracion.",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jennifer-salazar-duke-1194b2289",
    color: "from-blue-600 to-blue-700",
  },
]

export function Social() {
  return (
    <section id="social" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground tracking-wider">
              CONECTA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Síguenos en <span className="text-primary">Redes</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Únete a la conversación y mantente al día con las últimas tendencias
            en tecnología, innovación y transformación digital.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className="relative inline-flex p-4 rounded-xl bg-muted border border-border mb-5 group-hover:border-primary/30 transition-colors">
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-primary mb-3">
                  {social.handle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {social.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
