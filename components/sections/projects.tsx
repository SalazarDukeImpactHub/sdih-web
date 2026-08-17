import { ArrowUpRight } from "lucide-react"
import { SectionHead } from "@/components/ui/section-head"
import { Reveal } from "@/components/ui/reveal"

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  href: string
  badge?: string
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
    description:
      "Solución desarrollada en hackathon para optimizar procesos de talento humano.",
    tags: ["RR.HH.", "Hackathon", "Gestión"],
    href: "https://github.com/SalazarDukeImpactHub",
  },
  {
    id: 8,
    title: "Clasificador Biomédico Multietiqueta",
    category: "Clasificación de literatura científica",
    description:
      "IA que clasifica artículos científicos automáticamente por área médica (F1 ≈ 0.905).",
    tags: ["ML", "Biomedicina", "Clasificación"],
    href: "https://huggingface.co/spaces/jennifersalazarduke/clasificador-biomedicoTECH_SPHERE",
  },
]

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-28 lg:py-40 border-t border-border"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHead
            eyebrow="Proyectos"
            title={
              <>
                Innovación en <em className="not-italic text-primary">acción</em>
              </>
            }
            lead="Proyectos que demuestran la aplicación práctica de tecnología emergente para resolver desafíos reales. Desde hackathones ganadores hasta investigación que se convierte en producto."
          />
        </Reveal>

        {/* Destacados — newspaper grid */}
        <Reveal delay={160}>
          <div className="newspaper grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 flex flex-col lift"
              >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="meta text-primary">{project.category}</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="font-display italic text-2xl leading-tight text-foreground mb-2">
                {project.title}
              </h3>

              {project.badge && (
                <span className="font-mono text-xs text-foreground/70 mb-4">
                  {project.badge}
                </span>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span key={tag} className="meta">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
            ))}
          </div>
        </Reveal>

        {/* Divisor editorial */}
        <Reveal delay={320}>
          <p className="eyebrow mt-20 mb-8">Otros proyectos</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="newspaper grid-cols-1 md:grid-cols-3">
            {secondaryProjects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-7 lift"
              >
              <span className="meta text-primary">{project.category}</span>
              <h3 className="font-display italic text-lg leading-snug text-foreground mt-3 mb-2 flex items-start gap-2">
                {project.title}
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 mt-1.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">
            Descubre más proyectos y detalles técnicos en nuestro GitHub
          </p>
          <a
            href="https://github.com/SalazarDukeImpactHub"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-primary underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Ver todo en GitHub →
          </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
