import { EventConfig } from '@/types/event';
import { InvSection } from './Section';

/**
 * Placeholder de galería: como esta es una invitación de ejemplo (no un evento real),
 * usamos bloques con la leyenda de la foto en vez de fotos de personas reales.
 * En una invitación real, acá van las fotos que nos manda cada cliente.
 */
export const InvGallery = ({ event }: { event: EventConfig }) => {
  if (!event.gallery || event.gallery.length === 0) return null;

  return (
    <InvSection title="Momentos">
      <div className="grid grid-cols-2 gap-3">
        {event.gallery.map((item) => (
          <div
            key={item.caption}
            className="flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-sm px-3 text-center"
            style={{ backgroundColor: 'var(--inv-paper-dark)' }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full font-display text-xs"
              style={{ backgroundColor: 'var(--inv-accent)', color: 'var(--inv-paper)' }}
            >
              {event.monogram}
            </span>
            <span className="font-body text-[11px]" style={{ color: 'var(--inv-ink-muted)' }}>
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    </InvSection>
  );
};
