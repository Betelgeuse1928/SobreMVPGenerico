import { Container } from '@/components/ui/Container';

const steps = [
  {
    title: 'Nos contás la historia',
    description: 'Fecha, lugares, fotos y esos detalles que hacen que sea su evento y no cualquiera.',
  },
  {
    title: 'Armamos el diseño',
    description: 'Elegimos paleta, tipografía y estructura pensadas para esa historia puntual.',
  },
  {
    title: 'Revisamos juntos',
    description: 'Vas viendo la invitación en vivo y ajustamos lo que haga falta hasta que cierre.',
  },
  {
    title: 'Publicamos el link',
    description: 'Queda lista para compartir por WhatsApp, con confirmación de invitados incluida.',
  },
];

export const Process = () => {
  return (
    <section id="como-funciona" className="border-t border-ink/10 py-20">
      <Container>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">Cómo trabajamos</h2>

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-display text-2xl text-seal">{i + 1}</span>
              <div>
                <h3 className="font-display text-lg">{step.title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
