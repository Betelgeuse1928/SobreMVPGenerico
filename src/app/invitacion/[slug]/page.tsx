import type { CSSProperties } from 'react';
import { notFound, redirect } from 'next/navigation';
import { events, getEventBySlug } from '@/data/events';
import { InvHero } from '@/components/invitation/Hero';
import { InvCountdown } from '@/components/invitation/Countdown';
import { InvLocations } from '@/components/invitation/Locations';
import { InvDressCode } from '@/components/invitation/DressCode';
import { InvGallery } from '@/components/invitation/Gallery';
import { InvRSVP } from '@/components/invitation/RSVP';
import { InvExtras } from '@/components/invitation/Extras';
import { InvFooter } from '@/components/invitation/Footer';

export function generateStaticParams() {
  return events.filter((event) => !event.externalUrl).map((event) => ({ slug: event.slug }));
}

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();
  // Los eventos con externalUrl (ej. sitios ya publicados por un cliente) no tienen página propia acá.
  if (event.externalUrl) redirect(event.externalUrl);

  const themeStyle = {
    '--inv-paper': event.theme.paper,
    '--inv-paper-dark': event.theme.paperDark,
    '--inv-ink': event.theme.ink,
    '--inv-ink-muted': event.theme.inkMuted,
    '--inv-accent': event.theme.accent,
    '--inv-accent-light': event.theme.accentLight,
    '--inv-accent-dark': event.theme.accentDark,
  } as CSSProperties;

  return (
    <div className="invitation min-h-screen" style={themeStyle}>
      <InvHero event={event} />
      <InvCountdown event={event} />
      <InvLocations event={event} />
      <InvDressCode event={event} />
      <InvGallery event={event} />
      <InvExtras event={event} />
      <InvRSVP event={event} />
      <InvFooter />
    </div>
  );
}
