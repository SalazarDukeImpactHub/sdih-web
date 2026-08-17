"use client"

import { ArrowUpRight, Sparkles, Trophy, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  href: string
  badge?: string
  icon?: React.ReactNode
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Musa Harness",
    category: "Fábrica de contenido con voz de marca",
    description:
      "Sistema de generación de contenido multi-canal que mantiene consistencia de voz de marca mientras escala producción. Arquitectura de agentes de IA especializados.",
    tags: ["Agentes IA", "Contenido", "Automatización", "Voz de marca"],
    href: "https://github.com/SalazarDukeImpactHub/musa-harness",
    badge: "🏆 1er lugar",
  },
  {
    id: 2,
    title: "CavalTech",
    category: "Auditoría automatizada de LRPD (Ley 1581)",
    description:
      "Autodiagnóstico impulsado por IA para cumplimiento de la Ley 1581 (protección de datos en Colombia). Next.js + Supabase + Claude. Detecta brechas de privacidad en minutos.",
    tags: ["Compliance", "IA Legal", "Protección datos", "Colombia"],
    href: "https://github.com/SalazarDukeImpactHub/cavaltechackathon",
    badge: "🥈 2do lugar",
  },
  {
    id: 3,
    title: "Centinela",
    category: "Agente de voz para seguimiento posoperatorio",
    description:
      "Sistema RAG de inteligencia artificial que realiza seguimiento post-operatorio mediante entrevistas conversacionales. Recall 12/12 en identificación de casos críticos. Participante Tech Sphere Challenge 2026.",
    tags: ["RAG", "Voz", "Salud", "Crítico"],
    href: "https://github.com/SalazarDukeImpactHub/centinela",
    badge: "🎯 Tech Sphere 2026",
  },
  {
    id: 4,
    title: "Ikigai IA",
    category: "Orientador vocacional con ML y NLP",
    description:
      "Sistema de inteligencia artificial que cruza datos de O*NET y DANE para orientación vocacional personalizada. Ayuda a personas a encontrar su propósito profesional con base científica.",
    tags: ["ML", "Vocacional", "NLP", "Datos públicos"],
    href: "https://github.com/SalazarDukeImpactHub/Ikigai-IA-ML",
  },
  {
    id: 5,
    title: "Asesor Virtual SDIH",
    category: "Bot de Telegram para recomendaciones",
    description:
      "Asistente inteligente en Telegram que recomienda talleres y asesorías según el perfil del usuario. Personalización en tiempo real basada en preferencias y objetivos.",
    tags: ["Telegram", "Bot", "Recomendaciones", "Perfilación"],
    href: "https://github.com/SalazarDukeImpactHub/asesor-sdih-bootcamp",
  },
]

const secondaryProjects: Project[] = [
  {
    id: 6,
    title: "Chatbot INGE LEAN",
    category: "Asistente especializado en metodología LEAN",
    description: "Bot interactivo para enseñanza y consulta de prácticas LEAN.",
    tags: ["Chatbot", "LEAN", "Educación"],
    href: "https://github.com/SalazarDukeImpactHub",
  },
  {
    id: 7,
    title: "Sistema de Talento Humano Comfachocó",
    category: "Plataforma integral de gestión de RR.HH.",
    description: "Solución desarrollada en hackathon para optimizar procesos de talento humano.",
    tags: ["RR.HH.", "Hackathon", "Gestión"],
    href: "https://github.com/SalazarDukeImpactHub",
  },
  {
    id: 8,
    title: "Clasificador Biomédico Multietiqueta",
    category: "Clasificación de literatura científica",
    description: "IA que clasifica artículos científicos automáticamente por área médica (F1 ≈ 0.905).",
    tags: ["ML", "Biomedicina", "Clasificación"],
    href: "https://huggingface.co/spaces/jennifersalazarduke/clasificador-biomedicoTECH_SPHERE",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wide">
              PROYECTOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Innovación en <span className="text-primary">acción</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Proyectos que demuestran la aplicación práctica de tecnología emergente para resolver desafíos reales.
            Desde hackathones ganadores hasta investigación que se convierte en producto.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 ${
                index < 2 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-6 lg:p-8">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {/* Badge if exists */}
                    {project.badge && (
                      <div className="mb-3 inline-block">
                        <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-primary/20 text-primary">
                          {project.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* External Icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Category */}
                <div className="text-xs text-primary/80 font-semibold tracking-wide mb-2">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Secondary Projects Divider */}
        <div className="my-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-xs text-muted-foreground tracking-widest uppercase">
              Otros proyectos
            </span>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {secondaryProjects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              {/* Content */}
              <div className="relative">
                {/* Category */}
                <div className="text-xs text-primary/70 font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.category}
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted/30 text-muted-foreground/80 border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Visual Element — escena voxel */}
        <div className="my-16 flex justify-center">
          <div className="w-full max-w-sm h-40 rounded-xl overflow-hidden">
            <img
              src="/images/voxel/code.webp"
              alt="Proyectos — escena voxel"
              className="w-full h-full object-cover"
              style={{
                maskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
              }}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Descubre más proyectos y detalles técnicos en nuestro GitHub
          </p>
          <a
            href="https://github.com/SalazarDukeImpactHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-soft"
          >
            Ver todo en GitHub
            <ArrowUpRight className="w-4 h-4 ml-2 inline" />
          </a>
        </div>
      </div>
    </section>
  )
}
