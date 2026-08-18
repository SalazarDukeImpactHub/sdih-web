import { SectionHead } from "@/components/ui/section-head"
import { Reveal } from "@/components/ui/reveal"

const bloques = [
  {
    n: "01",
    title: "El saber vive disperso",
    body: "Las empresas operan gracias al conocimiento y el criterio de sus personas. Pero ese saber vive disperso — en cabezas, correos y archivos sueltos —, nunca estructurado como un sistema.",
  },
  {
    n: "02",
    title: "La operación depende de quién sabe",
    body: "Cuando una persona clave se va, cuando el negocio crece o cuando hay que escalar, todo se traba o pierde calidad.",
  },
  {
    n: "03",
    title: "El problema de fondo",
    body: "No es falta de información. Es que las empresas no logran estructurar lo que saben — y sin esa estructura, no pueden crecer sin depender siempre de las mismas personas.",
  },
]

export function Problema() {
  return (
    <section
      id="problema"
      className="relative py-16 lg:py-24 border-t border-border"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHead
            eyebrow="El problema"
            title={
              <>
                Lo que sabes <span className="text-primary">no está</span> en
                un sistema
              </>
            }
            lead="Antes de hablar de IA, hablemos de lo que de verdad frena a las organizaciones."
          />
        </Reveal>

        <Reveal delay={160}>
          <div className="newspaper grid-cols-1 md:grid-cols-3">
            {bloques.map((b) => (
              <div key={b.n} className="p-8">
                <span className="meta text-primary">{b.n}</span>
                <h3 className="font-display italic text-2xl mt-3 mb-3 text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <blockquote className="pull-quote mt-12 max-w-3xl">
            Estructurar lo que sabes es lo que te deja crecer sin depender
            siempre de las mismas personas.
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
