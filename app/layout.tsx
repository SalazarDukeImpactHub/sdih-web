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
  title: 'Salazar Duke Impact Hub | Ecosistema de Innovación y Tecnología',
  description: 'Ecosistema que integra IA, automatización, datos, blockchain y sistemas de conocimiento para transformar negocios, proyectos y comunidades. Liderado por Jennifer Salazar Duke.',
  keywords: ['IA', 'automatización', 'blockchain', 'innovación', 'transformación digital', 'consultoría', 'GPTs', 'Jennifer Salazar Duke'],
  authors: [{ name: 'Jennifer Salazar Duke' }],
  creator: 'Salazar Duke Impact Hub',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Salazar Duke Impact Hub',
    title: 'Salazar Duke Impact Hub | Ecosistema de Innovación',
    description: 'Ecosistema tecnológico para transformar negocios y comunidades',
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
  themeColor: '#0a0a0f',
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
