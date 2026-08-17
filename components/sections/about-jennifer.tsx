"use client"

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
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl border border-border overflow-hidden">
                {/* Jennifer Photo with fade effect */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/jennifer.png"
                    alt="Jennifer Salazar Duke"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlays for fade effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-20 h-20 border border-primary/30 rounded-full" />
                  <div className="absolute top-12 right-12 w-12 h-12 border border-primary/20 rounded-full" />

                  {/* Name Card */}
                  <div className="bg-background/90 backdrop-blur-md rounded-xl p-6 border border-border/50">
                    <div className="text-xs text-primary tracking-widest mb-2">
                      CEO & FUNDADORA
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      Jennifer Salazar Duke
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Arquitecta de sistemas digitales · Innovation Catalyst (GIM Institute) · Co-fundadora Trazzos Labs
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary/20">
                Impact Hub
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs text-muted-foreground tracking-wider">
                SOBRE JENNIFER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Diseñando el Futuro{" "}
              <span className="text-primary">Digital</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              En febrero de 2023 perdí a mi hermano. Ese dolor se convirtió en misión: crear sistemas donde la salud mental no sea un diagnóstico que limita, sino conocimiento que se estructura, se mide y se escala. Hoy convierto 30 años de conocimiento clínico en TLP de la Dra. María Victoria Pérez en un asistente de IA consultable, y construyo mi propio sistema de autocuidado con CBT e inteligencia artificial. Diseño desde la experiencia — vivo con la condición que estoy sistematizando.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors group flex items-center gap-3"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
