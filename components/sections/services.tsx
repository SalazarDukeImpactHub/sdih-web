"use client"

import {
  Calendar,
  Bot,
  FileText,
  FolderOpen,
  Rocket,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Calendar,
    title: "Asesorias",
    description:
      "Acompanamiento estrategico para integrar IA, automatizacion y sistemas de conocimiento en tu proyecto u organizacion. Enfoque practico, adaptado a tu contexto real.",
    href: "#asesorias",
    highlight: true,
  },
  {
    icon: Bot,
    title: "Galería de GPTs",
    description:
      "Entra a la sala de experimentacion y descubre herramientas de IA personalizadas.",
    href: "https://humorous-polyester-33a.notion.site/Sala-de-Experimentaci-n-GPTs-Interact-a-y-Descubre-el-Poder-de-la-IA-25330d9b1a1180ddba0dc3d2da96ff7d",
    external: true,
  },
  {
    icon: FileText,
    title: "Templates",
    description:
      "Plantillas de Notion y recursos organizacionales listos para implementar.",
    href: "https://www.notion.com/en-gb/@jennifersalazarduke",
    external: true,
  },
  {
    icon: FolderOpen,
    title: "Recursos",
    description:
      "eBooks, guías y materiales de aprendizaje para tu desarrollo profesional.",
    href: "#recursos",
  },
  {
    icon: Rocket,
    title: "Proyectos",
    description:
      "Casos reales de innovacion aplicada: asistente IA clinico-educativo, clasificador biomedico, sistema de autocuidado con CBT. Investigacion que se convierte en producto.",
    href: "#proyectos",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Espacio de conexion para personas que trabajan en la interseccion de tecnologia, salud mental e impacto social.",
    href: "#comunidad",
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground tracking-wider">
              ECOSISTEMA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo que estamos <span className="text-primary">construyendo</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Un ecosistema completo de servicios, recursos y herramientas
            diseñados para acelerar tu transformación digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {services.map((service) => {
            const isExternal = 'external' in service && service.external
            const LinkComponent = isExternal ? 'a' : Link
            const linkProps = isExternal 
              ? { href: service.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: service.href }
            
            return (
              <LinkComponent
                key={service.title}
                {...linkProps}
                className={`group relative p-6 rounded-xl border transition-all duration-300 ${
                  service.highlight
                    ? "bg-primary/10 border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${
                    service.highlight
                      ? "bg-primary/20"
                      : "bg-muted"
                  }`}
                >
                  <service.icon
                    className={`w-5 h-5 ${
                      service.highlight ? "text-primary" : "text-muted-foreground"
                    } group-hover:text-primary transition-colors`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {service.title}
                  {isExternal && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-2">{isExternal ? "Abrir" : "Explorar"}</span>
                  {isExternal ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>

                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </LinkComponent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
