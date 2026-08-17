// Encabezado de sección editorial.
// Un solo patrón para todo el sitio: eyebrow mono → titular display
// italic con clamp → bajada. Reemplaza las píldoras rounded-full con
// icono que cada sección repetía a su manera.

export function SectionHead({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mb-14 ${className}`}>
      <p className="eyebrow mb-8">{eyebrow}</p>
      <h2 className="h-section text-foreground max-w-3xl">{title}</h2>
      {lead && (
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl">
          {lead}
        </p>
      )}
    </div>
  )
}
