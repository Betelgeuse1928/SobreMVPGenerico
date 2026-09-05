import { Container } from '@/components/ui/Container';

export const CTA = () => {
  return (
    <section id="contacto" className="border-t border-ink/10 py-20">
      <Container className="rounded-sm bg-ink px-8 py-14 text-paper-light sm:px-14">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Contanos tu evento</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-paper-light/75">
            Escribinos con la fecha y el tipo de festejo, y te mostramos cómo puede quedar tu
            invitación.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5493751479433?text=Hola%20estoy%20interesado%2Fa%20en%20una%20invitacion%20para%20mi%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 font-body text-sm text-paper-light transition-colors hover:bg-brass-light"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href="mailto:lfparg@hotmail.com"
              className="inline-flex items-center justify-center rounded-full border border-paper-light/30 px-6 py-3 font-body text-sm text-paper-light transition-colors hover:border-paper-light/60"
            >
              lfparg@hotmail.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
