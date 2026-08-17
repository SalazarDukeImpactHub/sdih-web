import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Salazar Duke Impact Hub',
  description:
    'Términos y condiciones de uso del sitio web y los servicios de Salazar Duke Impact Hub.',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="kicker mb-4">Legal</p>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Términos y Condiciones de Uso</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Última actualización: agosto de 2026 · Ley aplicable: República de Colombia
        </p>

        <div className="space-y-10 text-base leading-relaxed text-secondary-foreground">
          <section>
            <h2 className="mb-3 text-2xl font-bold">1. Aceptación</h2>
            <p>
              Al acceder y usar este sitio web, operado por <strong>Salazar Duke Impact Hub</strong>{' '}
              (Medellín, Colombia), aceptas estos términos y condiciones y nuestra{' '}
              <Link href="/privacidad" className="text-primary underline">
                Política de Privacidad
              </Link>
              . Si no estás de acuerdo, te pedimos no utilizar el sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">2. Objeto del sitio</h2>
            <p>
              Este sitio presenta el ecosistema de Salazar Duke Impact Hub: talleres de IA,
              asesorías estratégicas, proyectos de innovación, recursos digitales y comunidad. La
              información publicada tiene carácter informativo y puede actualizarse sin previo
              aviso.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">3. Servicios y productos de terceros</h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Los talleres se ofrecen y gestionan a través de la plataforma de talleres del hub.
                Las condiciones específicas (precio, fechas, modalidad) se informan en cada taller.
              </li>
              <li>
                Los productos digitales (como el eBook) se venden a través de plataformas de
                terceros como Hotmart, cuyas condiciones de compra, facturación y reembolso aplican
                a cada transacción.
              </li>
              <li>
                El sitio contiene enlaces a servicios externos (WhatsApp, Notion, GitHub, redes
                sociales). No somos responsables del contenido ni de las políticas de esos sitios.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">4. Propiedad intelectual</h2>
            <p>
              Los contenidos de este sitio — textos, marca, logotipos, metodologías, materiales de
              talleres y recursos — son propiedad de Salazar Duke Impact Hub o de sus licenciantes,
              y están protegidos por las normas de derechos de autor colombianas (Ley 23 de 1982 y
              concordantes). No está permitida su reproducción o distribución con fines comerciales
              sin autorización previa y escrita.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">5. Uso aceptable</h2>
            <p>
              Te comprometes a usar el sitio de manera lícita, sin intentar vulnerar su seguridad,
              suplantar identidades, extraer datos de forma masiva ni interferir con su
              funcionamiento.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">6. Limitación de responsabilidad</h2>
            <p>
              El sitio se ofrece &quot;tal cual&quot;. Hacemos esfuerzos razonables por mantener la
              información precisa y el servicio disponible, pero no garantizamos la ausencia de
              errores o interrupciones. Las asesorías y talleres entregan conocimiento y
              herramientas; los resultados dependen de la implementación de cada persona u
              organización.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">7. Protección de datos</h2>
            <p>
              El tratamiento de datos personales se rige por nuestra{' '}
              <Link href="/privacidad" className="text-primary underline">
                Política de Privacidad
              </Link>
              , conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">8. Ley aplicable y contacto</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier consulta
              puede dirigirse a{' '}
              <a href="mailto:salazardukeimpacthub@gmail.com" className="text-primary underline">
                salazardukeimpacthub@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <Link href="/" className="text-primary underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
