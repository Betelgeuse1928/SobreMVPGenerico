import { Container } from '@/components/ui/Container';

const items = [
  'Cuenta regresiva al evento',
  'Ubicación con mapa y cómo llegar',
  'Código de vestimenta',
  'Galería de fotos',
  'Confirmación de invitados (RSVP)',
  'Sugerencias de música',
  'Datos para regalos',
  'Un link para compartir por WhatsApp',
];

export const Features = () => {
  return (
    <section id="incluye" className="border-t border-ink/10 py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Qué incluye cada invitación</h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ink-muted">
            Partimos de esta base y ajustamos el diseño, los colores y el contenido a la historia
            de cada evento.
          </p>
        </div>

        <ul className="divide-y divide-ink/10 border-t border-ink/10 sm:border-t-0">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-4 py-4">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
              />
              <span className="font-body text-base text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
