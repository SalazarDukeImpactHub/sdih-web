"use client"

import { useState } from "react"
import {
  Sparkles,
  Brain,
  Workflow,
  Blocks,
  FolderKanban,
  Lightbulb,
  Target,
  Users,
  ChevronDown,
  MessageCircle,
  Rocket,
  Zap,
  LineChart,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "573136139790"

const capabilities = [
  {
    icon: Brain,
    title: "Sistemas de IA para conocimiento clínico",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos con impacto",
  },
  {
    icon: FolderKanban,
    title: "Gestión del conocimiento organizacional",
  },
  {
    icon: Lightbulb,
    title: "Estrategia de transformación digital",
  },
  {
    icon: Blocks,
    title: "Diseño de productos de IA",
  },
  {
    icon: Target,
    title: "Doble impacto medible (SROI)",
  },
]

const benefits = [
  {
    icon: Rocket,
    title: "Enfoque Práctico",
    description: "Cada sesión está diseñada para que salgas con acciones concretas que puedas implementar de inmediato.",
  },
  {
    icon: Zap,
    title: "Personalizado",
    description: "Trabajamos directamente sobre tu caso, proyecto o negocio específico, no con contenido genérico.",
  },
  {
    icon: LineChart,
    title: "Resultados Medibles",
    description: "Definimos juntos métricas claras para evaluar el impacto de las soluciones implementadas.",
  },
  {
    icon: Shield,
    title: "Acompañamiento",
    description: "No solo te doy herramientas, te acompaño en el proceso de implementación y resolución de dudas.",
  },
]

const faqs = [
  {
    question: "¿Qué es Salazar Duke Impact Hub?",
    answer: "Un ecosistema de innovación social donde la neurodiversidad es ventaja competitiva. Usamos IA, automatización y trazabilidad para convertir conocimiento clínico y experiencia de vida en sistemas medibles. La fundadora vive con TLP y es el primer caso de uso del sistema que construye.",
  },
  {
    question: "¿Cómo es el proceso para trabajar juntos?",
    answer: "Primero conversamos por WhatsApp para entender tu situación y objetivos. Luego definimos el alcance del acompañamiento según tus necesidades específicas y acordamos los términos. Finalmente, comenzamos a trabajar en sesiones personalizadas.",
  },
  {
    question: "¿Qué tipo de proyectos puedo traer?",
    answer: "Puedes traer cualquier proyecto relacionado con transformación digital, implementación de IA, automatización de procesos, estructuración de negocios digitales, o cualquier iniciativa donde la tecnología pueda generar impacto.",
  },
  {
    question: "¿Necesito conocimientos técnicos previos?",
    answer: "No es necesario tener conocimientos técnicos previos. Las sesiones se adaptan a tu nivel actual y objetivos específicos. Mi rol es traducir lo complejo en acciones simples y entendibles.",
  },
  {
    question: "¿Trabajas con empresas o solo con personas?",
    answer: "Trabajo tanto con emprendedores individuales como con equipos y empresas. El enfoque se adapta según el contexto, pero siempre manteniendo un acompañamiento cercano y personalizado.",
  },
  {
    question: "¿Qué tan rápido puedo ver resultados?",
    answer: "Depende del proyecto, pero mi enfoque es que desde la primera sesión tengas claridad y acciones concretas. Algunos resultados son inmediatos, otros requieren implementación gradual.",
  },
]

export function Advisory() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const whatsappMessage = "Hola, me interesa conocer más sobre las asesorías de Salazar Duke Impact Hub. Me gustaría saber cómo podemos trabajar juntos."
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="asesorias" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      {/* Escena voxel de fondo */}
      <img
        src="/images/voxel/marca.webp"
        alt=""
        aria-hidden
        className="absolute right-0 top-24 w-[420px] max-w-[45%] h-auto opacity-15 pointer-events-none select-none"
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 75%)",
          filter: "blur(1.5px)",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== SECTION 1: HEADER ===== */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wide">
              CONSTRUYAMOS JUNTOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Te ayudo a construir{" "}
            <span className="text-primary">a tu medida</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
            Diseño sistemas que convierten conocimiento en operación medible. Si trabajas en salud mental, educación, deep tech o impacto social y necesitas estructurar tu información, tus procesos o tu conocimiento con tecnología — hablemos.
          </p>

          <p className="max-w-2xl mx-auto text-base text-foreground/70 leading-relaxed">
            No se trata de herramientas. Se trata de construir infraestructura que haga tu conocimiento consultable, trazable y escalable.
          </p>
        </div>

        {/* ===== SECTION 2: CAPABILITIES ===== */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            ¿En qué puedo ayudarte?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all group flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground">
                  {capability.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SECTION 3: BENEFITS ===== */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            ¿Cómo trabajo?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SECTION 4: CTA ===== */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hablemos sobre tu proyecto
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Cuéntame qué estás construyendo o qué desafío enfrentas. Juntos podemos definir cómo la tecnología puede ayudarte a alcanzar tus objetivos.
            </p>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversemos por WhatsApp
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mt-4">
              Sin compromiso - Solo una conversación para conocer tu caso
            </p>
          </div>
        </div>

        {/* ===== SECTION 5: FAQ ===== */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Preguntas frecuentes
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index
              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl border overflow-hidden transition-all duration-300",
                    isOpen 
                      ? "bg-card border-primary/30 shadow-lg shadow-primary/5" 
                      : "bg-card/50 border-border hover:border-primary/20"
                  )}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className={cn(
                      "font-medium pr-4 transition-colors",
                      isOpen ? "text-primary" : "text-foreground"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      isOpen 
                        ? "bg-primary/20 rotate-180" 
                        : "bg-muted"
                    )}>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-colors",
                        isOpen ? "text-primary" : "text-muted-foreground"
                      )} />
                    </div>
                  </button>
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-border mb-4" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
