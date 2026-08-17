// Salazar Duke Impact Hub - Main Page
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { AboutJennifer } from "@/components/sections/about-jennifer"
import { Talleres } from "@/components/sections/talleres"
import { Projects } from "@/components/sections/projects"
import { Advisory } from "@/components/sections/advisory"
import { Resources } from "@/components/sections/resources"
import { Community } from "@/components/sections/community"
import { Social } from "@/components/sections/social"
import { Footer } from "@/components/sections/footer"
import { ParticleNetwork } from "@/components/ui/particle-network"
import { AIAssistant } from "@/components/ui/ai-assistant"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated Particle Network Background */}
      <ParticleNetwork
        particleCount={50}
        connectionDistance={120}
        particleColor="6, 182, 212"
        lineColor="6, 182, 212"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutJennifer />
        <Talleres />
        <Projects />
        <Advisory />
        <Resources />
        <Community />
        <Social />
        <Footer />
      </div>

      {/* AI Assistant Robot */}
      <AIAssistant
        gptUrl="https://chatgpt.com/g/g-69b36d312d5c8191bf0520f296509dfc-asesor-ia-salazar-duke-impact-hub"
        assistantName="Asistente Salazar Duke"
        welcomeMessage="Hola, soy el asistente de Salazar Duke Impact Hub. Estoy aquí para ayudarte a explorar nuestro ecosistema de innovación: servicios, GPTs personalizados y recursos tecnológicos. ¿Quieres que te guíe?"
      />
    </main>
  )
}
