"use client"

import { ArrowUpRight, Compass, Dna, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Proyecto Ikigai ML",
    category: "Desarrollo de Investigacion",
    description:
      "Conoce el ADN de habilidades por profesion. Es un desarrollo de investigacion que permite conocer el ADN de habilidades por profesion para tener una perspectiva distinta. Puedes interactuar con ella de manera gratuita y acceder a los documentos de desarrollo.",
    tags: ["ADN Profesional", "Analisis de Habilidades", "Perspectiva Unica", "Documentos Gratis"],
    icon: Compass,
    status: "En desarrollo",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    borderAccent: "group-hover:border-emerald-500/40",
    href: "https://humorous-polyester-33a.notion.site/Proyecto-Ikigai-Encuentra-tu-Prop-sito-Profesional-con-IA-25130d9b1a1180dcbb3dda82ffd7ac21",
  },
  {
    id: 2,
    title: "Clasificador Biomedico Multietiqueta",
    category: "De titulo + abstract a areas medicas en segundos",
    description:
      "IA que clasifica literatura cientifica automaticamente. Una herramienta de IA que lee el titulo y el resumen de un articulo cientifico y predice si pertenece a una o varias areas medicas. Ahorra tiempo en la clasificacion de literatura biomedica, ayudando a priorizar que leer primero con una interfaz simple y resultados claros.",
    tags: ["Cardiovascular", "Neurologico", "Hepatorrenal", "Oncologico"],
    icon: Dna,
    status: "Completado",
    accentColor: "from-primary/20 to-emerald-500/20",
    borderAccent: "group-hover:border-primary/40",
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wide">
              PROYECTOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Innovación en <span className="text-primary">Acción</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Proyectos que demuestran la aplicación práctica de tecnología
            emergente para resolver desafíos reales.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${project.borderAccent}`}
            >
              {/* Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-6 lg:p-8">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <span
                    className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                      project.status === "Completado"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category */}
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn"
                    >
                      <span>Explorar proyecto</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn"
                  >
                    <span>Ver mas</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
