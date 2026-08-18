import { ArrowUpRight } from "lucide-react"
import { SectionHead } from "@/components/ui/section-head"
import { Reveal } from "@/components/ui/reveal"

interface PiezaLab {
  titulo: string
  descripcion: string
  etiqueta: string
  href: string
  imagen?: string
}

const piezas: PiezaLab[] = [
  {
    titulo: "El laboratorio del arnés",
    descripcion:
      "Un modelo solo responde; un arnés lo convierte en un sistema. Los cinco componentes del harness engineering, explicados sobre una escena voxel interactiva con revelado progresivo.",
    etiqueta: "Interactivo · ES/EN",
    href: "/lab/harness-lab",
    imagen: "/images/voxel/laboratorio-harness.webp",
  },
  {
    titulo: "Las tres pirámides",
    descripcion:
      "La entrada a la metodología del hub: un modelo visual para entender cómo se relacionan datos, conocimiento y decisiones cuando trabajas con IA. Empieza por aquí.",
    etiqueta: "Conoce la metodología · Abierto",
    href: "/lab/piramides",
    imagen: "/images/voxel/layers.webp",
  },
]

export function Laboratorio() {
  return (
    <section
      id="laboratorio"
      className="relative py-28 lg:py-40 border-t border-border"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHead
            eyebrow="Laboratorio"
            title={
              <>
                Aprende <span className="text-primary">explorando</span>
              </>
            }
            lead="Piezas educativas interactivas creadas en el hub, abiertas para todos — porque el conocimiento que no circula no genera impacto. El material completo de cada taller vive en la vitrina, para quienes se inscriben."
          />
        </Reveal>

        {/* Piezas — newspaper grid de 2 */}
        <Reveal delay={160}>
          <div className="newspaper grid-cols-1 lg:grid-cols-2">
            {piezas.map((pieza) => (
              <a
                key={pieza.href}
                href={pieza.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block lift"
              >
              {pieza.imagen && (
                {/* object-contain: la escena completa siempre, nunca recortada */}
                <div className="w-full aspect-[2/1] overflow-hidden border-b border-border bg-surface">
                  <img
                    src={pieza.imagen}
                    alt={pieza.titulo}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="p-8">
                <span className="meta text-primary">{pieza.etiqueta}</span>
                <div className="flex items-start justify-between gap-4 mt-3 mb-3">
                  <h3 className="font-display italic text-2xl leading-snug text-foreground">
                    {pieza.titulo}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 flex-shrink-0 mt-1 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  {pieza.descripcion}
                </p>
              </div>
            </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
