import { EventConfig } from '@/types/event';
import { InvSection } from './Section';

export const InvLocations = ({ event }: { event: EventConfig }) => (
  <InvSection title="Cuándo y dónde">
    <div className="space-y-5">
      {event.locations.map((loc) => (
        <div
          key={loc.label}
          className="rounded-sm border p-5"
          style={{ borderColor: 'var(--inv-accent)' }}
        >
          <span className="font-body text-xs tracking-wide" style={{ color: 'var(--inv-accent-dark)' }}>
            {loc.label}
          </span>
          <p className="mt-1 font-display text-lg" style={{ color: 'var(--inv-ink)' }}>
            {loc.name}
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--inv-ink-muted)' }}>
            {loc.address}
          </p>
          <p className="mt-1 font-body text-sm" style={{ color: 'var(--inv-accent-dark)' }}>
            {loc.time}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full border px-4 py-2 font-body text-xs"
            style={{ borderColor: 'var(--inv-accent)', color: 'var(--inv-accent-dark)' }}
          >
            Cómo llegar
          </a>
        </div>
      ))}
    </div>
  </InvSection>
);
