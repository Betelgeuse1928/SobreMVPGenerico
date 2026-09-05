import { Container } from '@/components/ui/Container';
import { InvitationCard } from './InvitationCard';
import { events } from '@/data/events';

export const Hero = () => {
  const [boda, xv, cumple] = events;

  return (
    <section className="pt-8 pb-28 sm:pt-16">
      <Container className="grid items-start gap-20 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative">
          {/* Matasellos — el único elemento gráfico con acento fuerte de la página */}
          <div
            aria-hidden
            className="absolute -left-2 -top-6 flex h-24 w-24 -rotate-[14deg] items-center justify-center rounded-full border-[3px] sm:-left-4 sm:h-28 sm:w-28"
            style={{ borderColor: 'var(--color-postmark)' }}
          >
            <div
              className="flex h-[84%] w-[84%] flex-col items-center justify-center rounded-full border text-center leading-none"
              style={{ borderColor: 'var(--color-postmark)', color: 'var(--color-postmark)' }}
            >
              <span className="font-mono text-[9px] tracking-wide">ENTREGADO</span>
              <span className="font-display text-lg italic">a mano</span>
              <span className="font-mono text-[8px]">HOY</span>
            </div>
          </div>

          <p className="pl-32 font-mono text-xs text-ink-muted sm:pl-36">Para: vos y tus invitados</p>
          <h1 className="mt-3 max-w-lg font-display text-[2.75rem] italic leading-[1.05] sm:text-[3.4rem]">
            Invitaciones que llegan como si las hubieran escrito a mano.
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted">
            Armamos la invitación web de tu boda, tus XV, un cumpleaños o un baby shower: cuenta
            regresiva, ubicación, galería y confirmación de invitados, en un solo link para
            mandar por WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#ejemplos"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-body text-sm text-paper-light transition-colors hover:bg-brass"
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

        {/* Sobres apilados — cada evento con su propio color de lacre */}
        <div className="relative mx-auto h-80 w-full max-w-sm sm:h-[22rem]">
          <InvitationCard
            event={cumple}
            className="absolute left-1/2 top-6 z-10 translate-x-[calc(-50%-58px)] -rotate-[6deg] sm:translate-x-[calc(-50%-78px)]"
          />
          <InvitationCard
            event={xv}
            className="absolute left-1/2 top-6 z-20 translate-x-[calc(-50%+58px)] rotate-[8deg] sm:translate-x-[calc(-50%+78px)]"
          />
          <InvitationCard
            event={boda}
            className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rotate-[2deg]"
            elevated
          />
        </div>
      </Container>
    </section>
  );
};
