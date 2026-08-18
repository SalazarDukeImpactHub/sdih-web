import Image from "next/image"

export function AboutJennifer() {
  return (
    <section
      id="jennifer"
      className="relative py-16 lg:py-24 border-t border-border"
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
              Una marca personal,{" "}
              <span className="text-primary">un legado familiar</span>
            </h2>

            {/* Una sola frase que lo dice todo */}
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
              <span className="text-foreground">
                Salazar Duke Impact Hub es la marca personal de Jennifer
                Salazar Duke
              </span>
              : un ecosistema que educa y construye sistemas de IA al servicio
              del bienestar.
            </p>

            {/* Las 4 preguntas que el visitante trae — newspaper grid */}
            <div className="newspaper grid-cols-1 sm:grid-cols-2 mt-12">
              <div className="p-7">
                <span className="meta text-primary">¿Qué es?</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Un hub de innovación social. Mis apellidos convertidos en
                  marca: el legado familiar de lo que soy, hecho ecosistema.
                </p>
              </div>
              <div className="p-7">
                <span className="meta text-primary">¿Qué hace?</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Educa y construye. Talleres prácticos de IA, piezas
                  educativas abiertas, asesorías — y sistemas reales que nacen
                  aquí, como{" "}
                  <span className="text-foreground">
                    Musa, 1er lugar en el Marathon de IA de Ruta N
                  </span>
                  .
                </p>
              </div>
              <div className="p-7">
                <span className="meta text-primary">¿Quién está detrás?</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Jennifer Salazar Duke, arquitecta de sistemas digitales. En
                  febrero de 2023 perdí a mi hermano; ese dolor se convirtió en
                  misión: que la salud mental no sea un diagnóstico que limita,
                  sino conocimiento que se estructura, se mide y se escala.
                </p>
              </div>
              <div className="p-7">
                <span className="meta text-primary">¿Cómo son los sistemas?</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Convierten conocimiento en operación: 30 años de experiencia
                  clínica en TLP de la Dra. María Victoria Pérez vueltos
                  asistente de IA consultable, y mi propio sistema de
                  autocuidado con CBT. Doble impacto medible: valor para las
                  organizaciones, propósito real para las personas.
                </p>
              </div>
            </div>

            {/* El momento emocional — una sola cita */}
            <blockquote className="pull-quote mt-12 max-w-2xl">
              Diseño desde la experiencia — vivo con la condición que estoy
              sistematizando.
            </blockquote>
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
