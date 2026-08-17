"use client"

import { Sparkles, ArrowRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Talleres() {
  return (
    <section id="talleres" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Decorative Voxel Cubes */}
      <div className="absolute top-20 right-10 w-16 h-16 opacity-20 pointer-events-none animate-float-cube">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2" style={{borderColor: "var(--accent-lt)", transform: "rotateX(20deg) rotateY(25deg)"}} />
        </div>
      </div>
      <div className="absolute bottom-32 left-8 w-12 h-12 opacity-15 pointer-events-none animate-float-cube" style={{animationDelay: "2s"}}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2" style={{borderColor: "var(--accent)", transform: "rotateX(30deg) rotateY(40deg)"}} />
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium tracking-wide">
            TALLERES
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
          IA que <span className="text-primary">usas</span>, no solo entiendes
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
          Talleres prácticos diseñados para que salgas con herramientas reales que implementar.
          Cada sesión te entrega prompts listos para usar, plantillas de Notion, y recursos que aplicas el mismo día.
        </p>

        {/* Value Proposition */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
            <Code className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Práctico</h3>
              <p className="text-sm text-muted-foreground">Prompts y plantillas listos para implementar desde día uno.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
            <Code className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Sin jerga</h3>
              <p className="text-sm text-muted-foreground">Explicaciones claras. Nada de tecnicismos innecesarios.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
            <Code className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Con recursos</h3>
              <p className="text-sm text-muted-foreground">Descarga ejercicios, templates y referencias después.</p>
            </div>
          </div>
        </div>

        {/* Availability Notice — sobrio, premium */}
        <div className="voxel-card border-l-4 border-l-primary p-6 mb-12">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">
              Solo publicamos talleres cuando están 100% listos.
            </span>{" "}
            Nada a medias. Los disponibles viven en la vitrina — entra y elige el que más te
            hable.
          </p>
        </div>

        {/* Visual Element — escena voxel */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-sm rounded-xl overflow-hidden">
            <img
              src="/images/voxel/memoria.webp"
              alt="Talleres — escena voxel"
              className="w-full h-auto"
              style={{
                maskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base group"
          >
            <a href="https://talleres.salazardukeimpacthubteam.com/" target="_blank" rel="noopener noreferrer">
              Ver los talleres disponibles
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
