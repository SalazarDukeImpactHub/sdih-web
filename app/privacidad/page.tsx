import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos | Salazar Duke Impact Hub',
  description:
    'Política de tratamiento de datos personales de Salazar Duke Impact Hub conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia).',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="kicker mb-4">Legal</p>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          Política de Privacidad y Tratamiento de Datos Personales
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Última actualización: agosto de 2026 · Conforme a la Ley 1581 de 2012 y el Decreto 1377
          de 2013 de la República de Colombia
        </p>

        <div className="space-y-10 text-base leading-relaxed text-secondary-foreground">
          <section>
            <h2 className="mb-3 text-2xl font-bold">1. Responsable del tratamiento</h2>
            <p>
              <strong>Salazar Duke Impact Hub</strong>, representado por Jennifer Salazar Duke, con
              domicilio en Medellín, Colombia, es el responsable del tratamiento de los datos
              personales recolectados a través de este sitio web y sus canales asociados.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                Correo de contacto:{' '}
                <a href="mailto:salazardukeimpacthub@gmail.com" className="text-primary underline">
                  salazardukeimpacthub@gmail.com
                </a>
              </li>
              <li>Canal de atención: WhatsApp +57 313 613 9790</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">2. Datos que recolectamos</h2>
            <p>Podemos recolectar los siguientes datos personales:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                Datos de contacto que nos compartes voluntariamente por WhatsApp, correo o
                formularios: nombre, correo electrónico, teléfono.
              </li>
              <li>
                Datos de navegación anónimos y agregados recolectados por herramientas de analítica
                (Vercel Analytics), que no identifican a la persona.
              </li>
              <li>
                Datos necesarios para la prestación de servicios contratados: asesorías, talleres y
                productos digitales.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">3. Finalidades del tratamiento</h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Responder solicitudes de información sobre servicios, talleres y recursos.</li>
              <li>Gestionar la inscripción y prestación de talleres y asesorías.</li>
              <li>Enviar información sobre novedades del ecosistema, previa autorización.</li>
              <li>Mejorar el sitio web y la oferta de servicios mediante analítica agregada.</li>
              <li>Cumplir obligaciones legales, contables y tributarias.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">4. Derechos del titular</h2>
            <p>
              De acuerdo con la Ley 1581 de 2012, como titular de datos personales tienes derecho
              a:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Conocer, actualizar y rectificar tus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informado sobre el uso que se ha dado a tus datos.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
              <li>Revocar la autorización y/o solicitar la supresión de tus datos.</li>
              <li>Acceder de forma gratuita a tus datos personales.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">5. Cómo ejercer tus derechos</h2>
            <p>
              Puedes ejercer tus derechos enviando una solicitud al correo{' '}
              <a href="mailto:salazardukeimpacthub@gmail.com" className="text-primary underline">
                salazardukeimpacthub@gmail.com
              </a>{' '}
              indicando: tu nombre completo, el derecho que deseas ejercer, la descripción de la
              solicitud y un medio de contacto. Responderemos las consultas en un término máximo de
              diez (10) días hábiles y los reclamos en quince (15) días hábiles, conforme a los
              artículos 14 y 15 de la Ley 1581 de 2012.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">6. Transferencia y encargados</h2>
            <p>
              Utilizamos proveedores tecnológicos que pueden procesar datos en servidores fuera de
              Colombia (por ejemplo, Vercel para el alojamiento del sitio, Meta para WhatsApp,
              Hotmart para la venta de productos digitales). Estos proveedores actúan como
              encargados del tratamiento bajo sus propias políticas de protección de datos, que te
              recomendamos consultar.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">7. Seguridad y conservación</h2>
            <p>
              Adoptamos medidas técnicas, humanas y administrativas razonables para proteger la
              información y evitar su adulteración, pérdida, consulta o acceso no autorizado. Los
              datos se conservan mientras exista una relación con el titular o mientras sea
              necesario para las finalidades descritas, y luego se suprimen de forma segura.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">8. Cambios a esta política</h2>
            <p>
              Cualquier cambio sustancial a esta política será publicado en esta página con su
              fecha de actualización. El uso continuado del sitio después de un cambio constituye
              aceptación de la política vigente.
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
