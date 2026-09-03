import { EventConfig } from '@/types/event';
import { InvSection } from './Section';

export const InvExtras = ({ event }: { event: EventConfig }) => {
  if (!event.giftsMessage && !event.musicNote) return null;
  return (
    <>
      {event.giftsMessage && (
        <InvSection title="Regalos">
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--inv-ink-muted)' }}>
            {event.giftsMessage}
          </p>
        </InvSection>
      )}
      {event.musicNote && (
        <InvSection title="Música">
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--inv-ink-muted)' }}>
            {event.musicNote}
          </p>
        </InvSection>
      )}
    </>
  );
};
