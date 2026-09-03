import { Container } from '@/components/ui/Container';
import { InvitationCard } from './InvitationCard';
import { events } from '@/data/events';

export const EventTypes = () => {
  return (
    <section id="ejemplos" className="border-t border-ink/10 py-20">
      <Container>
        <h2 className="max-w-md font-display text-3xl leading-tight sm:text-4xl">
          Cada festejo, con su propia identidad
        </h2>
        <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink-muted">
          Algunas son trabajos reales y otras casos de muestra — así se ve el resultado.
          Tocá una para abrirla como la abriría un invitado.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:justify-start">
          {events.map((event) => (
            <InvitationCard key={event.slug} event={event} interactive />
          ))}
        </div>
      </Container>
    </section>
  );
};
