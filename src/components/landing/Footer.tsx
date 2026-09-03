import { Container } from '@/components/ui/Container';

export const Footer = () => {
  return (
    <footer className="py-10">
      <Container className="flex flex-col items-center justify-between gap-4 font-body text-xs text-ink-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Sobre — invitaciones digitales</span>
        <span>Hecho a medida, evento por evento.</span>
      </Container>
    </footer>
  );
};
