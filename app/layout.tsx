import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

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
  themeColor: '#070b18',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
