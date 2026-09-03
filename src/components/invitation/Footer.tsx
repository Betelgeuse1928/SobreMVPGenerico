import Link from 'next/link';

export const InvFooter = () => (
  <footer className="border-t px-6 py-8 text-center" style={{ borderColor: 'var(--inv-paper-dark)' }}>
    <p className="font-body text-xs" style={{ color: 'var(--inv-ink-muted)' }}>
      Invitación de ejemplo hecha con{' '}
      <Link href="/" className="underline underline-offset-2">
        Sobre
      </Link>
    </p>
  </footer>
);
