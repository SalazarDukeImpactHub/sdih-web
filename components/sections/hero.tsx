import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "IA", label: "IA Aplicada a Salud Mental" },
  { value: "Care", label: "Sistemas de Autocuidado" },
  { value: "Know", label: "Gestion del Conocimiento Clinico" },
  { value: "Track", label: "Trazabilidad + Impacto" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Escena voxel — arte, no interfaz. Única pieza en movimiento. */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end pointer-events-none pr-4 xl:pr-10">
        <div className="w-[44%] max-w-2xl relative">
          {/* Luz morada que respira detrás de la escena */}
          <div
            className="absolute -inset-24 animate-breathe pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(139, 92, 246, 0.55) 0%, rgba(139, 92, 246, 0.18) 45%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          {/* Reflejo cyan bajo la escena — luz de piso */}
          <div
            className="absolute -inset-12 top-1/3 animate-breathe pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 80%, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
              filter: "blur(24px)",
              animationDelay: "1.6s",
              animationDuration: "9s",
            }}
          />
          {/* Recorte con transparencia real — la escena flota a plena calidad */}
          <img
            src="/images/voxel/laboratorio-harness-cut.webp"
            alt="Laboratorio del arnés — escena voxel"
            className="relative w-full h-auto animate-float-cube"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Línea de bienvenida */}
          <p className="eyebrow mb-6 animate-fade-in">
            Bienvenida, bienvenido al hub
          </p>

          {/* Bajada de posicionamiento — sin píldora, como pie de índice */}
          <p
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-10 animate-fade-in max-w-md leading-relaxed"
            style={{ animationDelay: "60ms" }}
          >
            Innovación social donde la salud mental es ventaja competitiva
          </p>

          {/* Titular */}
          <h1
            className="font-display italic text-foreground mb-8 animate-fade-in-up"
            style={{
              fontSize: "clamp(46px, 8vw, 104px)",
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
            }}
          >
            Salazar Duke
            <br />
            <span className="text-primary">Impact Hub</span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            Sistemas de IA, automatización y trazabilidad al servicio del
            bienestar integral.{" "}
            <span className="text-foreground">Doble impacto medible</span>:
            valor para empresas, propósito real para personas.
          </p>

          {/* Acciones */}
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 animate-fade-in-up"
            style={{ animationDelay: "160ms" }}
          >
            <Button asChild size="lg" className="h-12 px-7 text-[15px] group">
              <a
                href="https://wa.me/573136139790"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar asesoría
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Link
              href="#talleres"
              className="font-mono text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Ver talleres
            </Link>
          </div>

          {/* Ejes del hub.
              Estos valores son palabras, no cifras: por eso van en display
              italic y NO con el tratamiento visual de un número grande, que
              es lo que antes hacía leerlos como un dato faltante. */}
          <div
            className="mt-20 pt-8 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display italic text-xl text-primary leading-none">
                  {stat.value}
                </span>
                <p className="meta mt-2 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <Link
        href="#jennifer"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.22em] mb-2">
          SCROLL
        </span>
        <ChevronDown className="w-4 h-4" />
      </Link>
    </section>
  )
}
