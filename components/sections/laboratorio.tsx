import { FlaskConical, ArrowUpRight } from "lucide-react"

interface PiezaLab {
  titulo: string
  descripcion: string
  etiqueta: string
  href: string
  color: string
}

const piezas: PiezaLab[] = [
  {
    titulo: "El laboratorio del arnés",
    descripcion:
      "Un modelo solo responde; un arnés lo convierte en un sistema. Los cinco componentes del harness engineering, explicados sobre una escena voxel interactiva con revelado progresivo.",
    etiqueta: "Interactivo · ES/EN",
    href: "/lab/harness-lab",
    color: "#8b5cf6",
  },
  {
    titulo: "Landing con IA",
    descripcion:
      "El material del taller estrella: convierte una idea en una página web real usando IA, sin programar. Copywriting, diseño y construcción guiada.",
    etiqueta: "Material de taller",
    href: "/lab/landing-con-ia",
    color: "#22d3ee",
  },
  {
    titulo: "Las tres pirámides",
    descripcion:
      "Un modelo visual para entender cómo se relacionan datos, conocimiento y decisiones cuando trabajas con IA.",
    etiqueta: "Material de taller",
    href: "/lab/piramides",
    color: "#a78bfa",
  },
  {
    titulo: "ISO/IEC 42001",
    descripcion:
      "Gobernanza de IA para tu organización: qué exige el primer estándar internacional de gestión de IA y cómo empezar a cumplirlo.",
    etiqueta: "Material de taller",
    href: "/lab/iso-42001",
    color: "#34d399",
  },
]

export function Laboratorio() {
  return (
    <section id="laboratorio" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Separadores sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8">
          <FlaskConical className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium tracking-wide">LABORATORIO</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Aprende <span className="text-accent">explorando</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
          Piezas educativas interactivas creadas en el hub: escenas voxel, modelos visuales y
          material real de talleres. Abiertas para todos — porque el conocimiento que no circula no
          genera impacto.
        </p>

        {/* Grid de piezas */}
        <div className="grid sm:grid-cols-2 gap-6">
          {piezas.map((pieza) => (
            <a
              key={pieza.href}
              href={pieza.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group voxel-card p-6 lg:p-8 transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{ borderLeft: `4px solid ${pieza.color}` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-foreground leading-snug">{pieza.titulo}</h3>
                <ArrowUpRight
                  className="w-5 h-5 flex-shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {pieza.descripcion}
              </p>
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider"
                style={{ color: pieza.color }}
              >
                {pieza.etiqueta}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
