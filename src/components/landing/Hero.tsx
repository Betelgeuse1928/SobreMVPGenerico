import { Container } from '@/components/ui/Container';
import { InvitationCard } from './InvitationCard';
import { events } from '@/data/events';

export const Hero = () => {
  const [boda, xv, cumple] = events;

  return (
    <section className="pt-8 pb-24 sm:pt-16">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-body text-sm text-ink-muted">Invitaciones digitales a medida</p>
          <h1 className="mt-4 max-w-lg font-display text-[2.75rem] leading-[1.08] sm:text-5xl">
            Invitaciones que se sienten hechas a mano.
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted">
            Diseñamos la invitación web de tu boda, tus XV, un cumpleaños o un baby shower: cuenta
            regresiva, ubicación, galería y confirmación de invitados, todo en un link que se
            comparte por WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#ejemplos"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-body text-sm text-paper-light transition-colors hover:bg-seal"
            >
              Ver invitaciones de ejemplo
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-ink/25 px-6 py-3 font-body text-sm text-ink transition-colors hover:border-ink/50"
            >
              Escribinos
            </a>
          </div>
        </div>

        {/* Mazo de tarjetas — cada evento con su propia identidad visual */}
        <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
          <InvitationCard
            event={cumple}
            className="absolute left-1/2 top-4 z-10 translate-x-[calc(-50%-58px)] -rotate-[7deg] sm:translate-x-[calc(-50%-78px)]"
          />
          <InvitationCard
            event={xv}
            className="absolute left-1/2 top-4 z-20 translate-x-[calc(-50%+58px)] rotate-[8deg] sm:translate-x-[calc(-50%+78px)]"
          />
          <InvitationCard
            event={boda}
            className="absolute left-1/2 top-0 z-30 -translate-x-1/2 -rotate-[2deg] shadow-[0_24px_40px_-16px_rgba(32,43,33,0.45)]"
          />
        </div>
      </Container>
    </section>
  );
};
