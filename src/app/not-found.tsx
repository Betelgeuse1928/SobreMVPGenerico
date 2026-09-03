import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-3xl">Esta invitación no existe</h1>
      <p className="max-w-xs font-body text-sm text-ink-muted">
        Revisá el link o volvé a la página principal para ver los ejemplos disponibles.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-ink px-6 py-3 font-body text-sm text-paper-light"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
