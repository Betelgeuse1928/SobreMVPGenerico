'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { EventConfig } from '@/types/event';
import { InvSection } from './Section';

export const InvCountdown = ({ event }: { event: EventConfig }) => {
  const { days, hours, minutes, seconds, isCompleted, ready } = useCountdown(event.dateISO);

  const items = isCompleted
    ? []
    : [
        { value: days, label: 'días' },
        { value: hours, label: 'hs' },
        { value: minutes, label: 'min' },
        { value: seconds, label: 'seg' },
      ];

  return (
    <InvSection title={isCompleted ? '¡Llegó el día!' : 'Falta poco'}>
      {isCompleted ? (
        <p className="font-body text-sm" style={{ color: 'var(--inv-ink-muted)' }}>
          Gracias por acompañarnos.
        </p>
      ) : (
        <div className="flex gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex h-20 flex-1 flex-col items-center justify-center rounded-sm"
              style={{ backgroundColor: 'var(--inv-paper-dark)' }}
            >
              <span className="font-display text-2xl" style={{ color: 'var(--inv-ink)' }}>
                {ready ? String(item.value).padStart(2, '0') : '--'}
              </span>
              <span className="font-body text-[10px]" style={{ color: 'var(--inv-ink-muted)' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </InvSection>
  );
};
