"use client"

import {
  BookOpen,
  FileText,
  Music,
  Sparkles,
  Download,
  ExternalLink,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Resource {
  icon: LucideIcon
  title: string
  type: string
  description: string
  action: string
  actionIcon: LucideIcon
  featured?: boolean
  note?: string
  href?: string
}

const resources: Resource[] = [
  {
    icon: BookOpen,
    title: "De Cero a Experto",
    type: "eBook",
    description:
      "Guia completa para revolucionar tu negocio con inteligencia artificial. Un e-book practico con herramientas y aplicaciones reales para implementar IA.",
    action: "Comprar e-book",
    actionIcon: ExternalLink,
    featured: true,
    href: "https://pay.hotmart.com/D101421926A?bid=1756677646366",
  },
  {
    icon: FileText,
    title: "Templates Notion",
    type: "Plantillas",
    description:
      "Coleccion de templates de Notion optimizados para gestion de proyectos, productividad y organizacion.",
    action: "Ver Templates",
    actionIcon: ExternalLink,
    href: "https://www.notion.com/en-gb/@jennifersalazarduke",
  },
  {
    icon: Sparkles,
    title: "Notion AI",
    type: "Promocion",
    description:
      "Potencia tu productividad con Notion AI integrada. Accede a traves de nuestro enlace de afiliado.",
    action: "Obtener Notion AI",
    actionIcon: ExternalLink,
    href: "https://affiliate.notion.so/yetpzpcwupr5",
  },
]

export function Resources() {
  return (
    <section id="recursos" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-muted-foreground tracking-wider">
              RECURSOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Herramientas para tu{" "}
            <span className="text-primary">Crecimiento</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Recursos, guías y promociones exclusivas para acelerar tu
            desarrollo profesional y tecnológico.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className={`relative group p-6 rounded-xl border transition-all duration-300 ${
                resource.featured
                  ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Type Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    resource.featured
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {resource.type}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-lg mb-4 ${
                  resource.featured ? "bg-primary/20" : "bg-muted"
                }`}
              >
                <resource.icon
                  className={`w-5 h-5 ${
                    resource.featured ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[60px]">
                {resource.description}
              </p>

              {/* Note */}
              {resource.note && (
                <p className="text-xs text-primary/70 mb-3">{resource.note}</p>
              )}

              {/* Action */}
              {resource.href ? (
                <a href={resource.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant={resource.featured ? "default" : "outline"}
                    size="sm"
                    className={`w-full ${
                      resource.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <resource.actionIcon className="w-4 h-4 mr-2" />
                    {resource.action}
                  </Button>
                </a>
              ) : (
                <Button
                  variant={resource.featured ? "default" : "outline"}
                  size="sm"
                  className={`w-full ${
                    resource.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <resource.actionIcon className="w-4 h-4 mr-2" />
                  {resource.action}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
