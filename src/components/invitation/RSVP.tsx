'use client';

import { useState } from 'react';
import { EventConfig } from '@/types/event';
import { InvSection } from './Section';

/**
 * En una invitación real este formulario guarda la confirmación en una base de datos.
 * Acá, al ser una demo sin backend, sólo simula el envío para mostrar la experiencia.
 */
export const InvRSVP = ({ event }: { event: EventConfig }) => {
  const [sent, setSent] = useState(false);

  return (
    <InvSection title="Confirmar asistencia">
      <p className="font-body text-sm" style={{ color: 'var(--inv-ink-muted)' }}>
        Esperamos tu confirmación hasta el {event.rsvpDeadline}.
      </p>

      {sent ? (
        <p
          className="mt-6 rounded-sm border p-4 font-body text-sm"
          style={{ borderColor: 'var(--inv-accent)', color: 'var(--inv-accent-dark)' }}
        >
          ¡Gracias por confirmar! (Esto es una demo — acá no se guarda ningún dato real).
        </p>
      ) : (
        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input
            required
            placeholder="Tu nombre"
            className="w-full rounded-sm border bg-transparent px-4 py-3 font-body text-sm outline-none"
            style={{ borderColor: 'var(--inv-accent)', color: 'var(--inv-ink)' }}
          />
          <button
            type="submit"
            className="w-full rounded-full py-3 font-body text-sm"
            style={{ backgroundColor: 'var(--inv-accent)', color: 'var(--inv-paper)' }}
          >
            Confirmar asistencia
          </button>
        </form>
      )}
    </InvSection>
  );
};
