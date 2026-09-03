import Link from 'next/link';
import type { CSSProperties } from 'react';
import { EventConfig } from '@/types/event';

interface InvitationCardProps {
  event: EventConfig;
  style?: CSSProperties;
  className?: string;
  interactive?: boolean;
}

/**
 * Miniatura de una invitación real, usada tanto en el mazo de la portada
 * (decorativa, con rotación) como en la grilla "Tipos de evento" (clickeable).
 */
export const InvitationCard = ({
  event,
  style,
  className = '',
  interactive = false,
}: InvitationCardProps) => {
  const card = (
    <div
      style={{
        backgroundColor: event.theme.paper,
        color: event.theme.ink,
        borderColor: event.theme.accent + '55',
        ...style,
      }}
      className={`flex h-64 w-48 shrink-0 flex-col justify-between rounded-[4px] border p-5 shadow-[0_18px_30px_-14px_rgba(32,43,33,0.35)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-medium"
          style={{ backgroundColor: event.theme.accent, color: event.theme.paper }}
        >
          {event.monogram}
        </span>
        <span className="font-body text-[10px] tracking-wide" style={{ color: event.theme.inkMuted }}>
          {event.typeLabel}
        </span>
      </div>

      <div>
        <p className="font-display text-sm italic" style={{ color: event.theme.inkMuted }}>
          {event.cardPreview.line1}
        </p>
        <p className="font-display text-2xl leading-snug">{event.cardPreview.line2}</p>
        <p
          className="mt-3 font-body text-xs tracking-wide"
          style={{ color: event.theme.accentDark }}
        >
          {event.cardPreview.line3}
        </p>
      </div>
    </div>
  );

  if (interactive) {
    return (
      <Link
        href={`/invitacion/${event.slug}`}
        className="block transition-transform duration-300 hover:-translate-y-1"
        aria-label={`Ver invitación de ejemplo: ${event.title}`}
      >
        {card}
      </Link>
    );
  }

  return card;
};
