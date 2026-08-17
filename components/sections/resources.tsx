"use client"

import {
  BookOpen,
  FileText,
  Music,
  Sparkles,
  Download,
  ExternalLink,
  Bot,
  Clock,
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
  disabled?: boolean
}

const resources: Resource[] = [
  {
    icon: BookOpen,
    title: "De Cero a Experto",
    type: "eBook",
    description:
      "Guía completa para revolucionar tu negocio con inteligencia artificial. Un e-book práctico con herramientas y aplicaciones reales para implementar IA.",
    action: "Comprar e-book",
    actionIcon: ExternalLink,
    featured: true,
    href: "https://pay.hotmart.com/D101421926A?bid=1756677646366",
  },
  {
    icon: Bot,
    title: "Galería de GPTs",
    type: "Interactivo",
    description:
      "Sala de experimentación con GPTs personalizados. Interactúa con herramientas de IA especializadas para diferentes casos de uso.",
    action: "Explorar GPTs",
    actionIcon: ExternalLink,
    href: "https://humorous-polyester-33a.notion.site/Sala-de-Experimentaci-n-GPTs-Interact-a-y-Descubre-el-Poder-de-la-IA-25330d9b1a1180ddba0dc3d2da96ff7d",
  },
  {
    icon: FileText,
    title: "Templates Notion",
    type: "Plantillas",
    description:
      "Colección de templates de Notion optimizados para gestión de proyectos, productividad y organización.",
    action: "Ver Templates",
    actionIcon: ExternalLink,
    href: "https://www.notion.com/en-gb/@jennifersalazarduke",
  },
  {
    icon: Sparkles,
    title: "Notion AI",
    type: "Promoción",
    description:
      "Potencia tu productividad con Notion AI integrada. Accede a través de nuestro enlace de afiliado.",
    action: "Obtener Notion AI",
    actionIcon: ExternalLink,
    href: "https://affiliate.notion.so/yetpzpcwupr5",
  },
  {
    icon: Music,
    title: "Podcast",
    type: "Próximamente",
    description:
      "Entre Café, IA y Blockchain — Conversaciones sobre innovación, tecnología y el futuro. Historias reales de emprendimiento y transformación digital.",
    action: "Próximamente",
    actionIcon: Clock,
    disabled: true,
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Herramientas para tu{" "}
            <span className="text-primary">Crecimiento</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Recursos, guías y promociones exclusivas para acelerar tu
            desarrollo profesional y tecnológico.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className={`relative group p-6 rounded-xl border transition-all duration-300 ${
                resource.disabled
                  ? "bg-card/30 border-border/30 opacity-60"
                  : resource.featured
                  ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Type Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    resource.disabled
                      ? "bg-muted text-muted-foreground"
                      : resource.featured
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
                  resource.disabled
                    ? "bg-muted/20"
                    : resource.featured
                    ? "bg-primary/20"
                    : "bg-muted"
                }`}
              >
                <resource.icon
                  className={`w-5 h-5 ${
                    resource.disabled
                      ? "text-muted-foreground/50"
                      : resource.featured
                      ? "text-primary"
                      : "text-muted-foreground"
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
              {resource.disabled ? (
                <Button
                  variant={resource.featured ? "default" : "outline"}
                  size="sm"
                  disabled
                  className={`w-full ${
                    resource.featured
                      ? "bg-primary/50 text-primary-foreground/50"
                      : "border-border/50 text-muted-foreground/50 hover:bg-transparent"
                  }`}
                >
                  <resource.actionIcon className="w-4 h-4 mr-2" />
                  {resource.action}
                </Button>
              ) : resource.href ? (
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

        {/* Visual Element — escena voxel */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm rounded-xl overflow-hidden">
            <img
              src="/images/voxel/host.webp"
              alt="Recursos — escena voxel"
              className="w-full h-auto"
              style={{
                maskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
