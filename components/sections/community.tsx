"use client"

import { MessageCircle, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Community() {
  return (
    <section id="comunidad" className="relative py-24 lg:py-32">
      {/* Background Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative text-center">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>

            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs text-muted-foreground tracking-wider">
                COMUNIDAD
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              Únete a la <span className="text-primary">Comunidad</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Conecta con otros innovadores, comparte experiencias y mantente al
              día con las últimas tendencias en tecnología y transformación
              digital.
            </p>

            {/* Visual Element — escena voxel */}
            <div className="my-10 flex justify-center">
              <div className="w-full max-w-xs rounded-xl overflow-hidden">
                <img
                  src="/images/voxel/imagenes.webp"
                  alt="Comunidad — escena voxel"
                  className="w-full h-auto"
                  style={{
                    maskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 80%)",
                  }}
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=573136139790&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted/50"
              >
                <a
                  href="https://chat.whatsapp.com/JRMehCKsyNkL84iHJGro1r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Unirse a la Comunidad
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Comunidad activa</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Acceso gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
