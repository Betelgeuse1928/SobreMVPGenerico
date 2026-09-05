import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});

const plexSans = IBM_Plex_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Sobre — Invitaciones digitales a medida',
  description:
    'Diseñamos la invitación digital de tu evento: bodas, XV, cumpleaños y baby showers, con cuenta regresiva, mapa y confirmación de invitados en un solo link.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
