import Link from 'next/link';
import type { CSSProperties } from 'react';
import { EventConfig } from '@/types/event';

interface InvitationCardProps {
  event: EventConfig;
  style?: CSSProperties;
  className?: string;
  interactive?: boolean;
  elevated?: boolean;
}

/**
 * Miniatura de una invitación con forma de sobre: solapa triangular color del
 * evento + sello de lacre con el monograma. Se usa tanto apilada en la
 * portada (decorativa) como clickeable en la grilla "Tipos de evento".
 */
export const InvitationCard = ({
  event,
  style,
  className = '',
  interactive = false,
  elevated = false,
}: InvitationCardProps) => {
  const card = (
    <div className={`w-48 shrink-0 ${className}`} style={style}>
      {/* Solapa del sobre */}
      <div
        aria-hidden
        className="mx-auto h-0 w-0"
        style={{
          borderLeft: '96px solid transparent',
          borderRight: '96px solid transparent',
          borderTop: `46px solid ${event.theme.accentDark}`,
        }}
      />

      {/* Cuerpo del sobre */}
      <div
        style={{ backgroundColor: event.theme.paper, color: event.theme.ink }}
        className={`relative -mt-px flex h-52 flex-col justify-end rounded-b-[3px] rounded-t-none p-5 pt-9 ${
          elevated
            ? 'shadow-[0_26px_40px_-16px_rgba(28,43,58,0.45)]'
            : 'shadow-[0_16px_26px_-14px_rgba(28,43,58,0.35)]'
        }`}
      >
        {/* Sello de lacre, a caballo entre la solapa y el cuerpo */}
        <span
          className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-display text-xs italic"
          style={{ backgroundColor: event.theme.accent, color: event.theme.paper }}
        >
          {event.monogram}
        </span>

        <span className="font-mono text-[10px] tracking-wide" style={{ color: event.theme.inkMuted }}>
          {event.typeLabel.toUpperCase()}
        </span>
        <p className="mt-2 font-display text-2xl italic leading-snug">{event.cardPreview.line2}</p>
        <p className="mt-2 font-mono text-[11px]" style={{ color: event.theme.accentDark }}>
          {event.cardPreview.line3}
        </p>

        {event.externalUrl && (
          <span
            className="absolute right-3 top-3 flex items-center gap-1 font-mono text-[9px]"
            style={{ color: event.theme.accentDark }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
            sitio real
          </span>
        )}
      </div>
    </div>
  );

  if (interactive) {
    const hoverWrap = 'block transition-transform duration-300 hover:-translate-y-1';

    if (event.externalUrl) {
      return (
        <a
          href={event.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={hoverWrap}
          aria-label={`Ver invitación real: ${event.title} (se abre en otra pestaña)`}
        >
          {card}
        </a>
      );
    }

    return (
      <Link
        href={`/invitacion/${event.slug}`}
        className={hoverWrap}
        aria-label={`Ver invitación de ejemplo: ${event.title}`}
      >
        {card}
      </Link>
    );
  }

  return card;
};
