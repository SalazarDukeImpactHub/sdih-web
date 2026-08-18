import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/ui/section-head"
import { Reveal } from "@/components/ui/reveal"

const VITRINA = "https://talleres.salazardukeimpacthubteam.com/"

/* Portadas voxel reales de los talleres — el catálogo se muestra, no se cuenta */
const portadas = [
  { src: "/images/voxel/landing.webp", alt: "Taller Landing con IA" },
  { src: "/images/voxel/imagenes.webp", alt: "Taller Imágenes con IA" },
  { src: "/images/voxel/marca.webp", alt: "Taller Marca Personal con IA" },
  { src: "/images/voxel/riesgos.webp", alt: "Taller Riesgos de la IA" },
  { src: "/images/voxel/layers.webp", alt: "Taller Layers de IA" },
  { src: "/images/voxel/memoria.webp", alt: "Taller Memoria Persistente" },
  { src: "/images/voxel/basico.webp", alt: "Taller Claude Básico" },
  { src: "/images/voxel/code.webp", alt: "Taller Claude Code" },
]

const promesas = [
  {
    n: "01",
    title: "Práctico",
    body: "Prompts y plantillas listos para implementar desde día uno.",
  },
  {
    n: "02",
    title: "Sin jerga",
    body: "Explicaciones claras. Nada de tecnicismos innecesarios.",
  },
  {
    n: "03",
    title: "Con recursos",
    body: "Descarga ejercicios, templates y referencias después.",
  },
]

export function Talleres() {
  return (
    <section
      id="talleres"
      className="relative py-16 lg:py-24 border-t border-border overflow-hidden"
    >
      {/* Fondo elevado con luz propia — esta sección ES el escaparate */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139, 92, 246, 0.13), transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHead
            eyebrow="Talleres"
            title={
              <>
                IA que <span className="text-primary">usas</span>, no solo
                entiendes
              </>
            }
            lead="Talleres prácticos diseñados para que salgas con herramientas reales que implementar. Cada sesión te entrega prompts listos para usar, plantillas de Notion, y recursos que aplicas el mismo día."
          />
        </Reveal>
      </div>

      {/* Cinta de portadas — full-bleed, clic en cualquiera lleva a la vitrina */}
      <Reveal delay={120}>
        <a
          href={VITRINA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver los talleres disponibles en la vitrina"
          className="marquee group block mt-2 mb-12"
        >
          <div className="marquee-track">
            {[...portadas, ...portadas].map((portada, i) => (
              <img
                key={`${portada.src}-${i}`}
                src={portada.src}
                alt={i < portadas.length ? portada.alt : ""}
                aria-hidden={i >= portadas.length}
                className="h-36 lg:h-48 w-auto border border-border transition-all duration-300 group-hover:opacity-100 opacity-90 hover:!opacity-100 hover:border-primary/60"
              />
            ))}
          </div>
        </a>
      </Reveal>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Promesas — newspaper grid */}
        <Reveal delay={200}>
          <div className="newspaper grid-cols-1 sm:grid-cols-3">
            {promesas.map((p) => (
              <div key={p.title} className="p-8 lift">
                <span className="meta text-primary">{p.n}</span>
                <h3 className="font-display italic text-2xl mt-3 mb-3 text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Nota editorial — regla lateral, sin caja ni radio */}
        <div className="mt-12 border-l-2 border-primary pl-6 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            <span className="text-foreground">
              Solo publicamos talleres cuando están 100% listos.
            </span>{" "}
            Nada a medias. Los disponibles viven en la vitrina — entra y elige
            el que más te hable.
          </p>
        </div>

        {/* CTA protagonista — el clic más importante de la página */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
          <Button
            asChild
            size="lg"
            className="h-14 px-10 text-base group shadow-[0_0_44px_rgba(139,92,246,0.35)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-shadow"
          >
            <a href={VITRINA} target="_blank" rel="noopener noreferrer">
              Ver los talleres disponibles
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="meta">Entra a la vitrina · elige el tuyo</p>
        </div>
      </div>
    </section>
  )
}
