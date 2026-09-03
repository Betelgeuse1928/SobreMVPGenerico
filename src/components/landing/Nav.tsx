import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Nav = () => {
  return (
    <header className="py-6">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-[11px]"
          >
            ✦
          </span>
          <span className="font-display text-xl">Sobre</span>
        </Link>

        <nav className="hidden items-center gap-8 font-body text-sm text-ink-muted sm:flex">
          <a href="#incluye" className="hover:text-ink">
            Qué incluye
          </a>
          <a href="#ejemplos" className="hover:text-ink">
            Ejemplos
          </a>
          <a href="#como-funciona" className="hover:text-ink">
            Cómo funciona
          </a>
        </nav>

        <a
          href="#contacto"
          className="rounded-full bg-ink px-5 py-2 font-body text-sm text-paper-light transition-colors hover:bg-seal"
        >
          Contanos tu evento
        </a>
      </Container>
    </header>
  );
};
