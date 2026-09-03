import { EventConfig } from '@/types/event';
import { InvSection } from './Section';

export const InvDressCode = ({ event }: { event: EventConfig }) => {
  if (!event.dressCode) return null;
  return (
    <InvSection title="Código de vestimenta">
      <p className="font-display text-xl" style={{ color: 'var(--inv-ink)' }}>
        {event.dressCode.title}
      </p>
      <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: 'var(--inv-ink-muted)' }}>
        {event.dressCode.description}
      </p>
    </InvSection>
  );
};
