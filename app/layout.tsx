import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Cuerpo — neutro, legible, se sale del camino
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Display — serif con cursiva real. Es la voz del hub.
// Ojo: variable font, weight debe ser "variable" (un array rompe el build)
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

// Mono — eyebrows, metadatos, pies de foto
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Salazar Duke Impact Hub | IA con alma: tecnología, salud mental e impacto',
  description: 'Ecosistema de innovación social que integra IA, automatización y sistemas de conocimiento al servicio del bienestar. Talleres, asesorías y proyectos con doble impacto medible. Liderado por Jennifer Salazar Duke desde Medellín.',
  keywords: ['IA', 'inteligencia artificial', 'salud mental', 'talleres de IA', 'automatización', 'innovación social', 'consultoría', 'GPTs', 'Jennifer Salazar Duke', 'Medellín'],
  authors: [{ name: 'Jennifer Salazar Duke' }],
  creator: 'Salazar Duke Impact Hub',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Salazar Duke Impact Hub',
    title: 'Salazar Duke Impact Hub | IA con alma',
    description: 'Tecnología, salud mental e impacto social con resultados medibles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salazar Duke Impact Hub',
    description: 'Ecosistema de Innovación y Tecnología',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080c16',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
