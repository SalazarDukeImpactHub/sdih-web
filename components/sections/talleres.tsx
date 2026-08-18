import { ArrowRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/ui/section-head"
import { Reveal } from "@/components/ui/reveal"

const promesas = [
  {
    icon: Code,
    title: "Práctico",
    body: "Prompts y plantillas listos para implementar desde día uno.",
  },
  {
    icon: Code,
    title: "Sin jerga",
    body: "Explicaciones claras. Nada de tecnicismos innecesarios.",
  },
  {
    icon: Code,
    title: "Con recursos",
    body: "Descarga ejercicios, templates y referencias después.",
  },
]

export function Talleres() {
  return (
    <section
      id="talleres"
      className="relative py-16 lg:py-24 border-t border-border"
    >
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

        {/* Promesas — newspaper grid */}
        <Reveal delay={160}>
          <div className="newspaper grid-cols-1 sm:grid-cols-3">
            {promesas.map((p) => (
              <div key={p.title} className="p-8 lift">
              <p.icon className="w-4 h-4 text-primary mb-4" />
              <h3 className="font-display italic text-2xl mb-3 text-foreground">
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
        <div className="mt-16 border-l-2 border-primary pl-6 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            <span className="text-foreground">
              Solo publicamos talleres cuando están 100% listos.
            </span>{" "}
            Nada a medias. Los disponibles viven en la vitrina — entra y elige
            el que más te hable.
          </p>
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="h-12 px-7 text-[15px] group">
            <a
              href="https://talleres.salazardukeimpacthubteam.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver los talleres disponibles
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
