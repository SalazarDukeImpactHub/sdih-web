// Salazar Duke Impact Hub - Main Page
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { AboutJennifer } from "@/components/sections/about-jennifer"
import { Problema } from "@/components/sections/problema"
import { Talleres } from "@/components/sections/talleres"
import { Laboratorio } from "@/components/sections/laboratorio"
import { Projects } from "@/components/sections/projects"
import { Advisory } from "@/components/sections/advisory"
import { Resources } from "@/components/sections/resources"
import { Community } from "@/components/sections/community"
import { Social } from "@/components/sections/social"
import { Footer } from "@/components/sections/footer"
import { AIAssistant } from "@/components/ui/ai-assistant"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Sin red de partículas: competía con el contenido y aportaba
          un cyan que ya no existe en la paleta. El fondo lo hace
          una sola luz tenue definida en globals.css. */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutJennifer />
        <Problema />
        <Talleres />
        <Laboratorio />
        <Projects />
        <Advisory />
        <Resources />
        <Community />
        <Social />
        <Footer />
      </div>

      {/* AI Assistant Robot */}
      <AIAssistant assistantName="Asistente Salazar Duke" />
    </main>
  )
}
