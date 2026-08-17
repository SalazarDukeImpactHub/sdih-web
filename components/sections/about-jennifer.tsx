import Image from "next/image"
import { Sparkles, Lightbulb, Network, Target } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Sistemas de IA para salud mental",
  },
  {
    icon: Network,
    title: "Metodología KAIA",
  },
  {
    icon: Lightbulb,
    title: "Conocimiento clinico consultable",
  },
  {
    icon: Target,
    title: "Doble impacto medible (SROI)",
  },
]

export function AboutJennifer() {
  return (
    <section
      id="jennifer"
      className="relative py-28 lg:py-40 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="eyebrow mb-14">Sobre Jennifer</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
          {/* Columna narrativa */}
          <div>
            <h2
              className="font-display italic text-foreground mb-10"
              style={{
                fontSize: "clamp(34px, 4.6vw, 60px)",
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
              }}
            >
              Diseñando el Futuro{" "}
              <span className="text-primary">Digital</span>
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
              En febrero de 2023 perdí a mi hermano. Ese dolor se convirtió en
              misión: crear sistemas donde la salud mental no sea un
              diagnóstico que limita, sino conocimiento que se estructura, se
              mide y se escala. Hoy convierto 30 años de conocimiento clínico
              en TLP de la Dra. María Victoria Pérez en un asistente de IA
              consultable, y construyo mi propio sistema de autocuidado con CBT
              e inteligencia artificial. Diseño desde la experiencia — vivo con
              la condición que estoy sistematizando.
            </p>

            {/* Capacidades — newspaper grid, sin bordes ni radios individuales */}
            <div className="newspaper grid-cols-1 sm:grid-cols-2 mt-14">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 flex items-start gap-4">
                  <feature.icon className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h4 className="text-sm font-medium text-foreground leading-snug">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Retrato sticky con pie de foto en mono */}
          <div className="relative lg:sticky lg:top-28 self-start order-first lg:order-last">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden border border-border">
              <Image
                src="/images/jennifer.png"
                alt="Jennifer Salazar Duke"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <p className="meta absolute bottom-4 left-4 right-4 text-foreground/80">
                Jennifer Salazar Duke · Medellín
              </p>
            </div>

            <p className="meta mt-5 max-w-sm mx-auto lg:mx-0 text-primary">
              CEO &amp; Fundadora
            </p>
            <p className="mt-2 max-w-sm mx-auto lg:mx-0 text-sm text-muted-foreground leading-relaxed">
              Arquitecta de sistemas digitales · Innovation Catalyst (GIM
              Institute) · Co-fundadora Trazzos Labs
            </p>
            <a
              href="/lab/quien-soy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-mono text-xs text-primary underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Conoce mi trayectoria completa →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
