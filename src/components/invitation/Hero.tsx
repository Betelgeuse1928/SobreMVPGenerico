import { EventConfig } from '@/types/event';

export const InvHero = ({ event }: { event: EventConfig }) => (
  <header
    className="flex min-h-[92vh] flex-col items-center justify-center gap-8 px-6 text-center"
    style={{ backgroundColor: 'var(--inv-paper)' }}
  >
    <span
      className="flex h-16 w-16 items-center justify-center rounded-full font-display text-lg"
      style={{ backgroundColor: 'var(--inv-accent)', color: 'var(--inv-paper)' }}
    >
      {event.monogram}
    </span>

    <div>
      <p className="font-body text-xs tracking-wide" style={{ color: 'var(--inv-accent-dark)' }}>
        {event.eyebrow}
      </p>
      <h1 className="mt-3 font-display text-5xl" style={{ color: 'var(--inv-ink)' }}>
        {event.title}
      </h1>
    </div>

    <p
      className="max-w-xs font-display text-lg italic leading-relaxed"
      style={{ color: 'var(--inv-ink-muted)' }}
    >
      {event.tagline}
    </p>

    <p className="font-body text-sm" style={{ color: 'var(--inv-accent-dark)' }}>
      {event.dateLabel}
    </p>
  </header>
);
